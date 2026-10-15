// Renders the portfolio from data/projects.js. Content edits belong in that file, not here.

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const SECTIONS = [
  ["overview", "Overview"],
  ["problem", "The problem"],
  ["role", "My role"],
  ["approach", "Approach"],
  ["results", "Results"],
  ["learned", "What I learned"],
];

// Prose field: the user's text, a writing prompt, or nothing (when prompts are off).
function prose(text, prompt) {
  if (text && text.trim()) return text.split(/\n\s*\n/).map((p) => `<p>${p}</p>`).join("");
  return window.SHOW_PROMPTS ? `<div class="prompt">${esc(prompt)}</div>` : "";
}

function contactButtons(P) {
  return [
    P.resume && `<a class="btn primary" id="resume-btn" href="${P.resume}" target="_blank" rel="noopener">Résumé ↗</a>`,
    P.email && `<a class="btn" href="mailto:${P.email}">Email</a>`,
    P.linkedin && `<a class="btn" href="${P.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`,
    P.github && `<a class="btn" href="${P.github}" target="_blank" rel="noopener">GitHub</a>`,
  ].filter(Boolean).join("");
}

// Hide the resume button if the PDF hasn't been added yet.
function checkResume() {
  const btn = $("#resume-btn");
  if (!btn || location.protocol === "file:") return;
  fetch(btn.getAttribute("href"), { method: "HEAD" }).then((r) => { if (!r.ok) btn.remove(); }).catch(() => btn.remove());
}

// Remove links whose file isn't published yet (e.g. a report still being prepared).
function hideMissing(selector) {
  if (location.protocol === "file:") return;
  document.querySelectorAll(selector).forEach((el) => {
    fetch(el.dataset.file, { method: "HEAD" }).then((r) => { if (!r.ok) el.remove(); }).catch(() => el.remove());
  });
}

function reportItem(r) {
  const proj = r.project ? ` · <a href="project.html?id=${r.project}">Project page</a>` : "";
  return `<div class="report" data-file="${r.file}">
    <div class="report-meta">${esc(r.course)} · ${esc(r.date)} · ${r.pages} pages</div>
    <h3><a href="${r.file}" target="_blank" rel="noopener">${esc(r.title)}</a></h3>
    <p>${esc(r.blurb)}</p>
    <div class="report-foot">${esc(r.authors)} · <a href="${r.file}" target="_blank" rel="noopener">PDF ↗</a>${proj}</div>
  </div>`;
}

function footer(P) {
  $("#footer").innerHTML = `© ${new Date().getFullYear()} ${esc(P.name)} · <a href="mailto:${P.email}">${esc(P.email)}</a> · <a href="${P.linkedin}">LinkedIn</a> · <a href="${P.github}">GitHub</a>`;
}

function card(p) {
  const cover = p.figures && p.figures[0];
  const contain = cover && cover.src.endsWith(".png") && p.coverFit !== "cover";
  const thumb = cover
    ? `<div class="thumb${contain ? " contain" : ""}"><img src="${cover.src}" alt="" loading="lazy"></div>`
    : `<div class="thumb placeholder">${esc(p.title)}</div>`;
  const needs = window.SHOW_PROMPTS && p.mediaNeeded ? `<span class="badge">Needs media</span>` : "";
  return `<a class="card" href="project.html?id=${p.id}" data-cats="${p.categories.join(" ")}">
    ${thumb}
    <div class="card-body">
      <div class="meta">${esc(p.date)} · ${esc(p.course.split("·")[0].trim())}</div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.subtitle)}</p>
      ${needs}
      <div class="tags">${p.tools.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div></a>`;
}

function renderHome() {
  const P = window.PROFILE;
  $("#brand").textContent = P.name;
  $("#name").textContent = P.name;
  $("#headline").textContent = P.headline;
  $("#intro").innerHTML = P.intro
    ? `<p class="intro">${P.intro}</p>`
    : window.SHOW_PROMPTS ? `<div class="prompt" style="max-width:62ch;margin-bottom:24px">Your 2–3 sentence intro: who you are, what you build, and the kind of role you're looking for.</div>` : "";
  $("#contact-btns").innerHTML = contactButtons(P);
  checkResume();

  const projects = [...window.PROJECTS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  $("#grid").innerHTML = projects.map(card).join("");

  const cats = [["all", "All"], ...Object.entries(window.CATEGORIES)];
  $("#filters").innerHTML = cats.map(([k, v], i) => `<button class="filter" data-cat="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    document.querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
    document.querySelectorAll(".card").forEach((c) => {
      c.style.display = b.dataset.cat === "all" || c.dataset.cats.split(" ").includes(b.dataset.cat) ? "" : "none";
    });
  });

  $("#report-list").innerHTML = (window.REPORTS || []).map(reportItem).join("");
  hideMissing(".report");

  $("#exp").innerHTML = window.EXPERIENCE.map((x) => `<div class="exp-item"><h3>${esc(x.title)}</h3><div class="date">${esc(x.date)}</div>${x.text ? `<p>${x.text}</p>` : ""}</div>`).join("");
  footer(P);
}

function renderProject() {
  const P = window.PROFILE;
  $("#brand").textContent = P.name;
  footer(P);
  const list = window.PROJECTS;
  const id = new URLSearchParams(location.search).get("id");
  const i = list.findIndex((p) => p.id === id);
  const p = list[i];
  if (!p) { $("#project").innerHTML = `<p style="padding:48px 0">Project not found. <a href="index.html">Back to all projects</a></p>`; return; }
  document.title = `${p.title} · ${P.name}`;

  const figs = p.figures || [];
  const heroMedia = p.video
    ? `<div class="hero-media"><video src="${p.video}" controls playsinline preload="metadata"${figs[0] ? ` poster="${figs[0].src}"` : ""}></video></div>`
    : figs[0] ? `<div class="hero-media"><img src="${figs[0].src}" alt="${esc(figs[0].caption)}"></div>` : "";

  const metrics = p.metrics && p.metrics.length
    ? `<div class="metrics">${p.metrics.map((m) => `<div class="metric"><div class="v">${esc(m.value)}</div><div class="l">${esc(m.label)}</div></div>`).join("")}</div>` : "";

  const table = p.table
    ? `<div class="table-scroll"><table><caption>${esc(p.table.caption)}</caption><thead><tr>${p.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${p.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";

  const blocks = SECTIONS.map(([k, label]) => {
    const body = prose(p.write[k], window.PROMPTS[k]);
    if (!body) return "";
    // Metrics and the table sit directly under the Results heading.
    const extra = k === "results" ? metrics + table : "";
    return `<section class="block"><h2>${label}</h2>${extra}${body}</section>`;
  }).join("");
  // If Results prose is hidden (prompts off and empty), still show the numbers.
  const orphanNumbers = !prose(p.write.results, "") && !window.SHOW_PROMPTS && (metrics || table)
    ? `<section class="block"><h2>Results</h2>${metrics}${table}</section>` : "";

  const gallery = figs.length
    ? `<section class="block"><h2>Figures</h2><div class="gallery">${figs.map((f) => `<figure data-src="${f.src}" data-cap="${esc(f.caption)}"><div class="img"><img src="${f.src}" alt="${esc(f.caption)}" loading="lazy"></div><figcaption>${esc(f.caption)}</figcaption></figure>`).join("")}</div></section>`
    : "";
  const mediaNote = window.SHOW_PROMPTS && p.mediaNeeded ? `<section class="block"><div class="media-needed"><b>Media to add:</b> ${esc(p.mediaNeeded)}</div></section>` : "";

  const report = (window.REPORTS || []).find((r) => r.project === p.id);
  const allLinks = [
    ...(report ? [{ label: "Read the full report", href: report.file, file: report.file }] : []),
    ...(p.links || []),
  ];
  const links = allLinks.length
    ? `<div><h4>Links</h4><div class="btns">${allLinks.map((l) => `<a class="btn" href="${l.href}" target="_blank" rel="noopener"${l.file ? ` data-file="${l.file}"` : ""}>${esc(l.label)} ↗</a>`).join("")}</div></div>` : "";

  const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];

  $("#project").innerHTML = `
    <div class="p-hero">
      <a class="back" href="index.html#projects">← All projects</a>
      <h1>${esc(p.title)}</h1>
      <p class="sub">${esc(p.subtitle)}</p>
      <div class="facts"><span><b>${esc(p.course)}</b></span><span>${esc(p.date)}</span>${p.team ? `<span>${esc(p.team)}</span>` : ""}</div>
    </div>
    ${heroMedia}
    <div class="layout">
      <div>${blocks}${orphanNumbers}${gallery}${mediaNote}</div>
      <aside class="aside">
        <div><h4>Tools &amp; methods</h4><div class="tags">${p.tools.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>
        <div><h4>Area</h4><div class="tags">${p.categories.map((c) => `<span class="tag">${esc(window.CATEGORIES[c])}</span>`).join("")}</div></div>
        ${links}
      </aside>
    </div>
    <nav class="pager"><a href="project.html?id=${prev.id}">← ${esc(prev.title)}</a><a href="project.html?id=${next.id}" style="text-align:right">${esc(next.title)} →</a></nav>`;

  hideMissing(".aside a[data-file]");

  const lb = $("#lightbox");
  document.querySelectorAll(".gallery figure").forEach((f) => f.addEventListener("click", () => {
    lb.querySelector("img").src = f.dataset.src;
    lb.querySelector("p").textContent = f.dataset.cap;
    lb.classList.add("open");
  }));
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
}
