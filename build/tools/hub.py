#!/usr/bin/env python3
"""Study Hub helper. Standard library only, so it runs anywhere Python 3.9+ does.

    python build/tools/hub.py check            check every card and build log
    python build/tools/hub.py check --author siphod --added <files...>
                                                also check new files belong to the PR author
    python build/tools/hub.py build            write build/site/cards.json and the Lambda's questions.json

CI runs `check` on every pull request and `build` before publishing to GitHub Pages.
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
GUIDE = ROOT / "study-guide"
LOGS = ROOT / "build" / "log"
SITE_JSON = ROOT / "build" / "site" / "cards.json"
LAMBDA_JSON = ROOT / "build" / "lambda" / "hub_api" / "questions.json"

DOMAINS = {
    "d1-cloud-concepts": ("D1", "Cloud Concepts"),
    "d2-security-compliance": ("D2", "Security and Compliance"),
    "d3-technology-services": ("D3", "Cloud Technology and Services"),
    "d4-billing-pricing-support": ("D4", "Billing, Pricing, and Support"),
}
SECTIONS = ["What it is", "When to use it", "Pricing model", "Easily confused with",
            "Exam-style question", "Source"]
SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
USERNAME = re.compile(r"^[A-Za-z0-9](-?[A-Za-z0-9])*$")
OPTION = re.compile(r"^[-*]\s*([A-E])\)\s+(.+)$")
AWS_LINK = re.compile(r"https://[^\s)]*(aws\.amazon\.com|amazonaws\.com|aws\.dev|skillbuilder\.aws|repost\.aws|calculator\.aws)")

# Things that must never land in a public repo.
SECRET_PATTERNS = [
    (re.compile(r"\b(AKIA|ASIA)[0-9A-Z]{16}\b"), "looks like an AWS access key ID"),
    (re.compile(r"aws_secret_access_key", re.I), "mentions aws_secret_access_key"),
    (re.compile(r"(?<![\d.])\d{12}(?![\d.])"), "contains a 12 digit number (AWS account ID?). Use a placeholder"),
]


# Lines from the templates. If one is still there, the card or log has not been filled in yet.
TEMPLATE_PHRASES = [
    "No copy and paste from AWS pages", "One or two real situations", "- A) First option",
    "the-page-you-checked-this-against", "The steps from this week's issue", "your-github-username",
]


def check_template_left(path, text, problems):
    for phrase in TEMPLATE_PHRASES:
        if phrase in text:
            problems.append(f"{rel(path)}: still has template text ('{phrase}'). Replace it with your own")
            return


def split_sections(text):
    """Returns (title, metadata lines, {section: body}) for a card or log."""
    title, meta, sections, current = None, [], {}, None
    for line in text.splitlines():
        if line.startswith("# ") and title is None:
            title = line[2:].strip()
        elif line.startswith("## "):
            current = line[3:].strip()
            sections[current] = []
        elif current is None:
            if line.strip():
                meta.append(line.strip())
        else:
            sections[current].append(line)
    return title, meta, {k: "\n".join(v).strip() for k, v in sections.items()}


def meta_value(meta, key):
    for line in meta:
        m = re.match(rf"^[-*]?\s*{re.escape(key)}:\s*(.+)$", line, re.I)
        if m:
            return m.group(1).strip()
    return None


def parse_question(body):
    lines = [l.strip() for l in body.splitlines()]
    stem, options, answer, why = [], {}, [], ""
    for line in lines:
        opt = OPTION.match(line)
        if opt:
            options[opt.group(1)] = opt.group(2).strip()
        elif line.lower().startswith("answer:"):
            answer = re.findall(r"[A-E]", line.split(":", 1)[1].upper())
        elif line.lower().startswith("why:"):
            why = line.split(":", 1)[1].strip()
        elif line and not options and not answer:
            stem.append(line)
        elif line and why:
            why += " " + line
    return " ".join(stem).strip(), options, answer, why


def check_secrets(path, text, problems):
    for pattern, message in SECRET_PATTERNS:
        if pattern.search(text):
            problems.append(f"{rel(path)}: {message}")


def rel(path):
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def read_card(path, problems):
    """Parses one card, adding a message to problems for anything wrong. Returns a dict or None."""
    parts = path.relative_to(GUIDE).parts
    if len(parts) != 3:
        problems.append(f"{rel(path)}: cards go in study-guide/<domain>/<topic>/<username>.md")
        return None
    domain_dir, topic, filename = parts
    if domain_dir not in DOMAINS:
        problems.append(f"{rel(path)}: '{domain_dir}' is not a domain folder ({', '.join(DOMAINS)})")
        return None
    if not SLUG.match(topic):
        problems.append(f"{rel(path)}: topic folder '{topic}' should be lowercase words joined by hyphens")
    username = filename[:-3]
    if not USERNAME.match(username):
        problems.append(f"{rel(path)}: file name should be your GitHub username")

    text = path.read_text(encoding="utf-8")
    start = len(problems)
    check_secrets(path, text, problems)
    check_template_left(path, text, problems)
    title, meta, sections = split_sections(text)

    if not title or title.lower().startswith("service or concept name"):
        problems.append(f"{rel(path)}: the first line should be '# <service or concept name>'")
    code, name = DOMAINS[domain_dir]
    if (meta_value(meta, "Domain") or "").upper()[:2] != code:
        problems.append(f"{rel(path)}: '- Domain: {code}' should match the folder it is in")
    author = (meta_value(meta, "Author") or "").lstrip("@")
    if author.lower() != username.lower():
        problems.append(f"{rel(path)}: '- Author: @{username}' should match the file name")
    for section in SECTIONS:
        if not sections.get(section):
            problems.append(f"{rel(path)}: section '## {section}' is missing or empty")

    stem, options, answer, why = parse_question(sections.get("Exam-style question", ""))
    if sections.get("Exam-style question"):
        letters = "".join(sorted(options))
        if letters not in ("ABCD", "ABCDE"):
            problems.append(f"{rel(path)}: the question needs options A) to D) (or A) to E) for choose two)")
        if not answer or any(a not in options for a in answer):
            problems.append(f"{rel(path)}: add 'Answer: <letter>' using one of the options")
        if len(answer) > 1 and "choose" not in stem.lower():
            problems.append(f"{rel(path)}: two answers means the question should say (Choose two.)")
        if not why:
            problems.append(f"{rel(path)}: add 'Why: ...' explaining the answer")
    sources = AWS_LINK.findall(sections.get("Source", ""))
    links = re.findall(r"https?://\S+", sections.get("Source", ""))
    if not sources:
        problems.append(f"{rel(path)}: link at least one AWS page under '## Source'")

    if len(problems) > start:
        return None
    return {
        "id": f"{code}/{topic}/{username}",
        "domain": code,
        "domainName": name,
        "task": meta_value(meta, "Task statement") or "",
        "topic": topic,
        "title": title,
        "author": username,
        "what": sections["What it is"],
        "when": sections["When to use it"],
        "pricing": sections["Pricing model"],
        "confused": sections["Easily confused with"],
        "question": {"stem": stem, "options": options, "answer": answer, "why": why},
        "sources": links,
        "path": rel(path),
    }


def read_log(path, problems):
    parts = path.relative_to(LOGS).parts
    if len(parts) != 2 or not re.match(r"^week-(0[1-9]|1[0-2])$", parts[0]):
        problems.append(f"{rel(path)}: logs go in build/log/week-XX/<username>.md (week-01 to week-12)")
        return
    text = path.read_text(encoding="utf-8")
    check_secrets(path, text, problems)
    check_template_left(path, text, problems)
    _, _, sections = split_sections(text)
    for section in ("What I did", "Evidence", "Cleanup"):
        if not sections.get(section):
            problems.append(f"{rel(path)}: section '## {section}' is missing or empty")


def card_files():
    return sorted(p for p in GUIDE.glob("*/*/*.md") if not p.name.startswith("_"))


def log_files():
    return sorted(p for p in LOGS.glob("week-*/*.md") if not p.name.startswith("_"))


def other_text_files():
    skip = {".git", "node_modules"}
    for p in ROOT.rglob("*"):
        if p.is_file() and not skip.intersection(p.parts) and p.suffix in {".md", ".json", ".js", ".py", ".yml", ".txt"}:
            if p.name not in {"cards.json", "questions.json"}:
                yield p


def cmd_check(args):
    problems = []
    cards = [c for c in (read_card(p, problems) for p in card_files()) if c]
    for p in log_files():
        read_log(p, problems)
    checked = set(card_files()) | set(log_files())
    for p in other_text_files():
        if p not in checked and p != Path(__file__).resolve():
            check_secrets(p, p.read_text(encoding="utf-8", errors="ignore"), problems)

    if args.author and args.added:
        for name in args.added:
            path = (ROOT / name).resolve()
            if path.suffix == ".md" and not path.name.startswith("_") and (
                    GUIDE in path.parents or LOGS in path.parents):
                if path.stem.lower() != args.author.lower():
                    problems.append(f"{name}: new cards and logs are named after the PR author (@{args.author})")

    if problems:
        print(f"Found {len(problems)} thing(s) to fix:\n")
        for p in problems:
            print(f"  - {p}")
        print("\nThe card template is study-guide/_template.md and the log template is build/log/_template.md.")
        return 1
    print(f"All good: {len(cards)} card(s) and {len(log_files())} build log(s) checked.")
    return 0


def cmd_build(_args):
    problems = []
    cards = [c for c in (read_card(p, problems) for p in card_files()) if c]
    for p in problems:
        print(f"  skipped: {p}", file=sys.stderr)
    SITE_JSON.write_text(json.dumps({"cards": cards}, indent=1), encoding="utf-8")
    print(f"Wrote {len(cards)} card(s) to {rel(SITE_JSON)}")
    if LAMBDA_JSON.parent.exists():
        questions = [{"id": c["id"], "title": c["title"], "domain": c["domain"], **c["question"]} for c in cards]
        LAMBDA_JSON.write_text(json.dumps(questions), encoding="utf-8")
        print(f"Wrote {len(questions)} question(s) to {rel(LAMBDA_JSON)}")
    return 0


def main():
    parser = argparse.ArgumentParser(description="Study Hub cards: check and build")
    sub = parser.add_subparsers(dest="command", required=True)
    check = sub.add_parser("check", help="check every card and build log")
    check.add_argument("--author", help="GitHub username of the PR author")
    check.add_argument("--added", nargs="*", default=[], help="files added in the PR")
    sub.add_parser("build", help="write cards.json for the site")
    args = parser.parse_args()
    return {"check": cmd_check, "build": cmd_build}[args.command](args)


if __name__ == "__main__":
    sys.exit(main())
