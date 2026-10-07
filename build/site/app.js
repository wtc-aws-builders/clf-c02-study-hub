// Study Hub front end. Plain JavaScript, no build step, so it runs straight from S3 or GitHub Pages.

const DOMAINS = {
  D1: { name: "Cloud Concepts", weight: 24 },
  D2: { name: "Security and Compliance", weight: 30 },
  D3: { name: "Cloud Technology and Services", weight: 34 },
  D4: { name: "Billing, Pricing, and Support", weight: 12 },
};
const API = ((window.HUB_CONFIG || {}).apiUrl || "").replace(/\/$/, "");

let cards = [];      // student cards
let questions = [];  // every quiz question: cards plus the leads' seed bank
let activeDomain = "all";

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const para = (s) => esc(s).split(/\n{2,}/).map((p) => `<p>${p.replace(/\n/g, " ")}</p>`).join("");

// ---------- tabs ----------
document.querySelectorAll(".tabs button").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

function showView(name) {
  document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.view === name));
  document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== name));
  if (name === "qotd") loadQuestionOfTheDay();
}

// ---------- study view ----------
function renderChips() {
  const counts = { all: cards.length };
  cards.forEach((c) => (counts[c.domain] = (counts[c.domain] || 0) + 1));
  const chip = (key, label) =>
    `<button class="chip" data-domain="${key}" aria-pressed="${activeDomain === key}">${label} <span>${counts[key] || 0}</span></button>`;
  $("#domain-chips").innerHTML = chip("all", "All") +
    Object.entries(DOMAINS).map(([k, d]) => chip(k, `${k} ${d.name}`)).join("");
  document.querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
    activeDomain = b.dataset.domain;
    renderChips();
    renderCards();
  }));
}

function renderCards() {
  const term = $("#search").value.trim().toLowerCase();
  const shown = cards.filter((c) =>
    (activeDomain === "all" || c.domain === activeDomain) &&
    (!term || [c.title, c.what, c.when, c.confused].join(" ").toLowerCase().includes(term)));

  if (!shown.length) {
    $("#cards").innerHTML = `<p class="muted empty">${cards.length ? "Nothing matches that search." :
      "No cards yet. The first ones arrive with week 1's pull requests."}</p>`;
    return;
  }
  // One heading per topic, with every member's card on that topic under it.
  const byTopic = new Map();
  shown.forEach((c) => {
    const key = `${c.domain}/${c.topic}`;
    if (!byTopic.has(key)) byTopic.set(key, []);
    byTopic.get(key).push(c);
  });
  $("#cards").innerHTML = [...byTopic.values()]
    .sort((a, b) => a[0].domain.localeCompare(b[0].domain) || a[0].title.localeCompare(b[0].title))
    .map((group) => `
      <article class="topic">
        <h2><span class="dom dom-${group[0].domain}">${group[0].domain}</span>${esc(group[0].title)}</h2>
        ${group.map(cardHtml).join("")}
      </article>`).join("");
  document.querySelectorAll(".reveal").forEach((b) => b.addEventListener("click", () => {
    b.nextElementSibling.hidden = false;
    b.remove();
  }));
}

function cardHtml(c) {
  const q = c.question;
  return `
    <div class="card">
      <p class="by">by @${esc(c.author)}${c.task ? ` · task ${esc(c.task)}` : ""}</p>
      <dl>
        <dt>What it is</dt><dd>${para(c.what)}</dd>
        <dt>When to use it</dt><dd>${para(c.when)}</dd>
        <dt>Pricing model</dt><dd>${para(c.pricing)}</dd>
        <dt>Easily confused with</dt><dd>${para(c.confused)}</dd>
      </dl>
      <div class="q">
        <p><strong>${esc(q.stem)}</strong></p>
        <ul>${Object.entries(q.options).map(([k, v]) => `<li><b>${k})</b> ${esc(v)}</li>`).join("")}</ul>
        <button class="reveal">Show answer</button>
        <p class="answer" hidden><b>${q.answer.join(", ")}.</b> ${esc(q.why)}</p>
      </div>
      <p class="src">${c.sources.map((s) => `<a href="${esc(s)}" target="_blank" rel="noopener">Source</a>`).join(" · ")}</p>
    </div>`;
}

// ---------- quiz ----------
let quiz = null;

function pickQuestions(domain, length) {
  const shuffle = (arr) => arr.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  if (domain !== "mix") return shuffle(questions.filter((c) => c.domain === domain)).slice(0, length);

  // Exam mix: take questions from each domain in proportion to its exam weight.
  const picked = [];
  Object.entries(DOMAINS).forEach(([key, d]) => {
    const want = Math.round((length * d.weight) / 100);
    picked.push(...shuffle(questions.filter((c) => c.domain === key)).slice(0, want));
  });
  // Top up from anything left if a domain is short of questions.
  const rest = shuffle(questions.filter((c) => !picked.includes(c)));
  return shuffle(picked.concat(rest.slice(0, Math.max(0, length - picked.length))));
}

$("#quiz-start").addEventListener("click", () => {
  const domain = $("#quiz-domain").value;
  const length = Number($("#quiz-length").value);
  const questions = pickQuestions(domain, length);
  if (!questions.length) {
    $("#quiz-note").textContent = "No questions in that domain yet.";
    return;
  }
  $("#quiz-note").textContent = questions.length < length ?
    `Only ${questions.length} question(s) available so far, so this quiz is shorter.` : "";
  quiz = { questions, index: 0, results: [], ends: length === 65 ? Date.now() + 90 * 60 * 1000 : null };
  $("#quiz-setup").hidden = true;
  $("#quiz-run").hidden = false;
  showQuestion();
});

function timerText() {
  if (!quiz.ends) return "";
  const left = Math.max(0, quiz.ends - Date.now());
  const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
  return `<span class="timer">${m}:${String(s).padStart(2, "0")} left</span>`;
}

function showQuestion() {
  if (quiz.ends && Date.now() > quiz.ends) return finishQuiz();
  const c = quiz.questions[quiz.index];
  const q = c.question;
  const multi = q.answer.length > 1;
  $("#quiz-run").innerHTML = `
    <p class="muted">Question ${quiz.index + 1} of ${quiz.questions.length} · ${c.domain} · ${c.kind === "bank" ? "leads' bank" : "by @" + esc(c.author)} ${timerText()}</p>
    <p class="stem">${esc(q.stem)}</p>
    <form id="answer-form">
      ${Object.entries(q.options).map(([k, v]) => `
        <label class="opt"><input type="${multi ? "checkbox" : "radio"}" name="a" value="${k}"> <b>${k})</b> ${esc(v)}</label>`).join("")}
      <button class="primary" type="submit">Check</button>
    </form>
    <div id="feedback"></div>`;
  $("#answer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const chosen = [...document.querySelectorAll("#answer-form input:checked")].map((i) => i.value).sort();
    if (!chosen.length) return;
    const correct = chosen.join() === [...q.answer].sort().join();
    quiz.results.push({ domain: c.domain, correct });
    document.querySelectorAll("#answer-form input, #answer-form button").forEach((el) => (el.disabled = true));
    $("#feedback").innerHTML = `
      <p class="${correct ? "good" : "bad"}"><b>${correct ? "Correct." : `Not quite. The answer is ${q.answer.join(", ")}.`}</b> ${esc(q.why)}</p>
      <p class="muted">${c.sources.map((u) => `<a href="${esc(u)}" target="_blank" rel="noopener">AWS source</a>`).join(" · ")}</p>
      <p class="muted" id="stat"></p>
      <button class="primary" id="next">${quiz.index + 1 < quiz.questions.length ? "Next" : "See my score"}</button>`;
    $("#next").addEventListener("click", () => {
      quiz.index += 1;
      quiz.index < quiz.questions.length ? showQuestion() : finishQuiz();
    });
    recordAnswer(c.id, correct);
  });
}

function finishQuiz() {
  const total = quiz.results.length;
  const right = quiz.results.filter((r) => r.correct).length;
  const pct = total ? Math.round((100 * right) / total) : 0;
  const rows = Object.keys(DOMAINS).map((d) => {
    const rs = quiz.results.filter((r) => r.domain === d);
    if (!rs.length) return "";
    const p = Math.round((100 * rs.filter((r) => r.correct).length) / rs.length);
    return `<tr><td>${d} ${DOMAINS[d].name}</td><td>${rs.filter((r) => r.correct).length} / ${rs.length}</td><td>${p}%</td></tr>`;
  }).join("");
  $("#quiz-run").innerHTML = `
    <h2>Your score: ${pct}%</h2>
    <p class="muted">${right} of ${total} correct. Put ${pct} in this week's check-in form.</p>
    <table class="scores"><thead><tr><th>Domain</th><th>Correct</th><th>Score</th></tr></thead><tbody>${rows}</tbody></table>
    <button class="primary" id="again">New quiz</button>`;
  $("#again").addEventListener("click", () => {
    $("#quiz-run").hidden = true;
    $("#quiz-setup").hidden = false;
  });
}

// ---------- API (week 6 onward) ----------
async function recordAnswer(questionId, correct) {
  if (!API) return;
  try {
    const res = await fetch(`${API}/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId, correct }),
    });
    if (!res.ok) return;
    const s = await res.json();
    const el = $("#stat");
    if (el && s.attempts) el.textContent = `${Math.round((100 * s.correct) / s.attempts)}% of ${s.attempts} attempt(s) got this right.`;
  } catch (e) {
    // Stats are a bonus. The quiz works without them.
  }
}

async function loadQuestionOfTheDay() {
  const box = $("#qotd-body");
  box.innerHTML = `<p class="muted">Loading...</p>`;
  try {
    const res = await fetch(`${API}/question`);
    const q = await res.json();
    box.innerHTML = `
      <h2>Question of the day</h2>
      <p class="muted">${esc(q.domain)} · ${esc(q.title)}</p>
      <p class="stem">${esc(q.stem)}</p>
      <ul>${Object.entries(q.options).map(([k, v]) => `<li><b>${k})</b> ${esc(v)}</li>`).join("")}</ul>
      <button class="reveal" id="qotd-reveal">Show answer</button>
      <p class="answer" hidden><b>${q.answer.join(", ")}.</b> ${esc(q.why)}</p>`;
    $("#qotd-reveal").addEventListener("click", (e) => {
      e.target.nextElementSibling.hidden = false;
      e.target.remove();
    });
  } catch (e) {
    box.innerHTML = `<p class="bad">Could not reach the Hub API. Check the function URL in config.js and its CORS settings.</p>`;
  }
}

// ---------- start ----------
async function start() {
  if (API) document.querySelector('[data-view="qotd"]').hidden = false;
  try {
    const res = await fetch("cards.json", { cache: "no-store" });
    const all = (await res.json()).cards || [];
    cards = all.filter((c) => c.kind !== "bank");
    questions = all;
  } catch (e) {
    $("#cards").innerHTML = `<p class="bad">cards.json not found. Run <code>python build/tools/hub.py build</code> first.</p>`;
  }
  const bank = questions.length - cards.length;
  $("#count").textContent = `${cards.length} card(s) and ${questions.length} practice question(s) so far` +
    (bank ? ` (${bank} from the leads' seed bank).` : ".");
  renderChips();
  renderCards();
  $("#search").addEventListener("input", renderCards);
}
start();
