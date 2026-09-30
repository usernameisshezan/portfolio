// Generates work/<slug>.html from projects.js, so every project has its own address with
// its own title and link preview (chat apps don't run JS, so these tags must be in the HTML).
// Usage: SITE_URL=https://your-domain node build.js
const fs = require('fs'), path = require('path'), assert = require('assert');
const PROJECTS = require('./projects.js');
const THUMBS = require('./thumbs.js');

const SITE = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
const NAME = 'Shezan';
// Browsers keep style.css and the scripts for a while. A new ?v= on every build makes them fetch the
// new files together with the new pages, so nobody sees a new page with last week's styles.
const V = Date.now().toString(36);
const out = path.join(__dirname, 'work');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = n => String(n).padStart(2, '0');

assert.strictEqual(new Set(PROJECTS.map(p => p.slug)).size, PROJECTS.length, 'duplicate slug in projects.js');
for (const p of PROJECTS) assert.match(p.slug, /^[a-z0-9-]+$/, `bad slug "${p.slug}": use a-z, 0-9 and -`);

fs.mkdirSync(out, { recursive: true });
PROJECTS.forEach((p, i) => {
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const title = `${p.name} — ${NAME}`;
  // demo hero: a pinned phone with one callout per row (tour.js drives it), the how-to steps underneath
  const hero = p.demo ? `<div class="hero demo" style="--n:${p.demo.details.length}">
    <a class="skip" href="#try">Skip the tour ↓</a>
    <ul class="details">
      ${p.demo.details.map((x, k) => `<li${k ? '' : ' class="on"'} data-show="${esc(x.show)}" style="--r:${k + 1}"><div><b>${esc(x.big)}</b>${esc(x.text)}</div></li>`).join('\n      ')}
    </ul>
    <div class="phone"><iframe src="../${esc(p.demo.src)}?v=${V}" title="${esc(p.name)} live demo"></iframe></div>
  </div>
  <div class="try" id="try">
    <div class="try-head">
      <span>Try it · live demo with sample data, nothing is sent</span>
      <button type="button" onclick="const f = document.querySelector('.phone iframe'); f.src = f.src">Restart</button>
    </div>
    <ol>
      ${p.demo.steps.map((s, k) => `<li><span>${pad(k + 1)}</span>${esc(s)}</li>`).join('\n      ')}
    </ol>
  </div>` : p.image ? `<div class="art hero"><img src="../${esc(p.image)}" alt="${esc(p.name)}"></div>`
    : THUMBS[p.slug] ? `<div class="art hero thumb" style="background:${p.color}">${THUMBS[p.slug]}</div>`
    : `<div class="art hero"><b>${pad(i + 1)}</b></div>`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.tagline)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.tagline)}">
<meta property="og:url" content="${SITE}/work/${p.slug}.html">
${p.image ? `<meta property="og:image" content="${SITE}/${esc(p.image)}">
<meta name="twitter:card" content="summary_large_image">` : '<meta name="twitter:card" content="summary">'}
<link rel="stylesheet" href="../style.css?v=${V}">
</head>
<body class="has-pager">

<header class="nav">
  <a class="brand" href="../#${p.slug}">← ${NAME}</a>
  <nav class="nav-mid"><span>${pad(i + 1)} / ${pad(PROJECTS.length)}</span></nav>
  <nav class="nav-end">
    <a href="${prev.slug}.html">Prev</a>
    <a href="${next.slug}.html">Next</a>
  </nav>
</header>

<main class="case">
  <h1>${esc(p.name)}</h1>
  <p class="lede">${esc(p.tagline)}</p>
  <dl class="meta">
    <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
    <div><dt>Stack</dt><dd>${esc(p.stack)}</dd></div>
    <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
  </dl>
  ${hero}
  <div class="body">
    ${p.body.map(t => `<p>${esc(t)}</p>`).join('\n    ')}
  </div>
  <div class="shots">
    ${p.shots.map(s => `<img src="../${esc(s)}" alt="${esc(p.name)} screenshot" loading="lazy">`).join('\n    ')}
  </div>
  <div class="links">
    ${p.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)} ↗</a>`).join('\n    ')}
  </div>
</main>

<nav class="pager" aria-label="Projects">
  <a href="../#${p.slug}">← All work</a>
  <span>${pad(i + 1)} / ${pad(PROJECTS.length)}</span>
  <a href="${next.slug}.html">Next<b>: ${esc(next.name)}</b> →</a>
</nav>

<footer class="foot">© ${new Date().getFullYear()} ${NAME}</footer>
${p.demo ? `<script src="../tour.js?v=${V}"></script>\n` : ''}</body>
</html>
`;
  fs.writeFileSync(path.join(out, `${p.slug}.html`), html);
});
// the hand-written home page gets the same stamp on its stylesheet and scripts
const home = path.join(__dirname, 'index.html');
fs.writeFileSync(home, fs.readFileSync(home, 'utf8').replace(/(style\.css|haptic\.js|projects\.js|thumbs\.js|main\.js|signal\.js)(\?v=\w+)?"/g, `$1?v=${V}"`));
console.log(`Built ${PROJECTS.length} case pages in work/ for ${SITE}`);
