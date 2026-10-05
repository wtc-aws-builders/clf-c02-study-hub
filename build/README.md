# The Study Hub (build)

The Study Hub is a small website that turns everyone's cards in `study-guide/` into a searchable study guide
and a self-marking quiz. Each week adds one AWS service to it, so by week 9 it touches most of the exam's
core services, and every practical improves something the whole group revises from.

| Week | Version | What gets added | Folder |
| --- | --- | --- | --- |
| 2 | Design | Your plan for the Hub against the six Well-Architected pillars | your build log |
| 3 | v1 | Static website on **Amazon S3** | `site/` |
| 4 | | Least-privilege **IAM** policy for publishing | `iam/` |
| 5 | | Security check: encryption, **CloudTrail**, **Trusted Advisor** | your build log |
| 6 | v2 | Question of the day on **AWS Lambda** (function URL) | `lambda/hub_api/` |
| 7 | v3 | Answer stats in **Amazon DynamoDB** | `lambda/hub_api/`, `iam/` |
| 8 | | **CloudWatch** alarm and **SNS** email, architecture diagram | `docs/architecture.md` |
| 9 | | **Pricing Calculator** estimate, Well-Architected review, teardown | `docs/` |

Shared code (the Lambda, the policies, the docs) arrives as a "weekly drop" PR from the build crew and
Technical Lead at the start of each week. You deploy it in your own account (or sandbox) and log what you did.

## Folders

- `site/`: the web page (`index.html`, `app.js`, `style.css`). `cards.json` and `config.js` are generated or
  personal, so they are never committed.
- `tools/hub.py`: checks cards and logs, and builds `cards.json`.
- `log/week-XX/<username>.md`: everyone's weekly evidence.
- `iam/`, `lambda/`, `docs/`: filled in by the weekly drops.

## Always online

On every merge to `main`, GitHub Actions builds the Hub and publishes it to GitHub Pages for free.
Your S3 copy is for learning and gets deleted in week 9. The Pages copy stays up through the exam window.
