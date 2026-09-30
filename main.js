// A radio tuner: each project is a station. The track's scroll position is the single source of
// truth: the dial, the scale, the keys and drag all just scroll the track, and update() derives
// everything else from scrollLeft, including the blur and static between two stations.
const STEP_DEG = 30; // dial rotation per project. ponytail: ticks overlap past 12 projects, shrink this if you get there
const N = PROJECTS.length;
const $ = id => document.getElementById(id);
const track = $('track'), dial = $('dial'), face = $('dialFace'), scale = $('scale'), noise = $('static');
const desktop = matchMedia('(min-width: 768px)');
const calm = matchMedia('(prefers-reduced-motion: reduce)');
const pad = n => String(n).padStart(2, '0');
const clamp = i => Math.max(0, Math.min(N - 1, i));
const freq = p => (88.1 + p * 5.4).toFixed(1); // the FM frequency shown for a position on the band

const TAG = ' <i class="tag">Live demo</i>'; // projects with a working demo on their page

track.innerHTML = PROJECTS.map((p, i) => `
  <div class="slot">
    <a class="card" href="work/${p.slug}.html" draggable="false">
      <span class="bar"><span>${p.name}${p.demo ? TAG : ''}</span><span>${p.demo ? 'Try it' : 'View project'} →</span></span>
      ${THUMBS[p.slug] ? `<span class="art thumb" style="background:${p.color}">${THUMBS[p.slug]}</span>`
        : `<span class="art">${p.image ? `<img src="${p.image}" alt="" draggable="false">` : `<b>${pad(i + 1)}</b>`}</span>`}
    </a>
  </div>`).join('');
face.innerHTML = PROJECTS.map((_, i) => `<i style="transform:rotate(${i * STEP_DEG}deg)"></i>`).join('');
$('list').innerHTML = PROJECTS.map((p, i) => `
  <li><a href="work/${p.slug}.html"><span>${pad(i + 1)}</span><span>${p.name}${p.demo ? TAG : ''}</span><span>${p.stack}</span><span>${p.year} →</span></a></li>`).join('');
scale.innerHTML = '<i></i>' + PROJECTS.map((p, i) => `<button style="--x:${N > 1 ? i / (N - 1) : 0}">${freq(i)} ${p.name}</button>`).join('');
const stations = [...scale.querySelectorAll('button')];
scale.onclick = e => { const k = stations.indexOf(e.target); if (k >= 0) go(k); };
dial.setAttribute('aria-valuemax', N);

const slots = [...track.children], ticks = [...face.children];
const step = () => (slots[1] ? slots[1].offsetLeft - slots[0].offsetLeft : slots[0].offsetWidth);
const pos = () => track.scrollLeft / step();
let active = -1, freeTimer;

function setActive(i) {
  if (active >= 0) haptic(); // a tick for every station you pass (haptic.js)
  active = i;
  slots.forEach((el, k) => el.classList.toggle('active', k === i));
  ticks.forEach((el, k) => el.classList.toggle('on', k === i));
  $('counter').textContent = `${pad(i + 1)} / ${pad(N)}`;
  stations.forEach((el, k) => el.classList.toggle('on', k === i));
  $('hint').textContent = `${PROJECTS[i].name} · ${pad(i + 1)}/${pad(N)}`;
  const p = PROJECTS[i];
  $('open').href = `work/${p.slug}.html`;
  $('work').style.setProperty('--tint', p.tint || 'transparent');
  $('dName').textContent = p.name;
  $('dTag').textContent = p.tagline;
  $('dStack').textContent = p.stack;
  $('dYear').textContent = p.year;
  dial.setAttribute('aria-valuenow', i + 1);
  dial.setAttribute('aria-valuetext', p.name);
}

function update() {
  const s = step(), p = pos();
  slots.forEach((el, k) => {
    const d = k - p, a = Math.abs(d), card = el.firstElementChild;
    if (!desktop.matches) { card.style.transform = ''; el.style.zIndex = ''; return; }
    // centre card full size; neighbours shrink and tuck in towards it
    const scale = a <= 1 ? 1 - .68 * a : Math.max(.12, .32 - .1 * (a - 1));
    const pull = a > 1 ? -Math.sign(d) * (a - 1) * s * .56 : 0;
    card.style.transform = `translateX(${pull}px) scale(${scale})`;
    el.style.zIndex = 100 - Math.round(a * 10);
  });
  face.style.transform = `rotate(${-p * STEP_DEG}deg)`;
  // between two stations the picture blurs and fills with static, then snaps sharp on the next one
  const on = Math.max(0, Math.min(N - 1, p)), off = Math.abs(on - Math.round(on)); // off: 0 on a station, .5 halfway
  $('dialNow').textContent = freq(on);
  scale.style.setProperty('--t', N > 1 ? on / (N - 1) : 0);
  track.style.filter = off > .02 && !calm.matches ? `blur(${off * 28}px)` : '';
  noise.style.opacity = Math.min(.8, off * 2);
  noise.classList.toggle('on', off > .02);
  const i = clamp(Math.round(p));
  if (i !== active) setActive(i);
}

// Snapping is switched off while the dial or mouse drives the track, and back on once it rests.
function settleSoon() {
  clearTimeout(freeTimer);
  freeTimer = setTimeout(() => { if (dialLast === null && !down && !scrub) track.classList.remove('free'); }, 150);
}
function go(i) {
  track.scrollTo({ left: clamp(i) * step(), behavior: calm.matches ? 'auto' : 'smooth' });
  settleSoon();
}

track.addEventListener('scroll', () => { requestAnimationFrame(update); settleSoon(); });
addEventListener('resize', () => { track.scrollLeft = active * step(); update(); });
addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(active + 1);
  if (e.key === 'ArrowLeft') go(active - 1);
});

// The mouse wheel is left alone, so the page scrolls normally over the tuner.

// mouse drag (touch already scrolls the track natively)
let down = null, dragged = false;
track.addEventListener('pointerdown', e => {
  if (e.pointerType !== 'mouse' || e.button) return;
  down = { x: e.clientX, left: track.scrollLeft };
  dragged = false;
});
addEventListener('pointermove', e => {
  if (!down) return;
  const dx = e.clientX - down.x;
  if (Math.abs(dx) > 4) { dragged = true; track.classList.add('free'); }
  if (dragged) track.scrollLeft = down.left - dx;
});
addEventListener('pointerup', () => {
  if (!down) return;
  down = null;
  if (dragged) go(Math.round(pos()));
});
// only the centre card opens its case; a side card just comes to the centre
track.addEventListener('click', e => {
  const slot = e.target.closest('.slot');
  if (!slot) return;
  const k = slots.indexOf(slot), wasDrag = dragged;
  dragged = false;
  if (wasDrag || k !== active) e.preventDefault();
  if (!wasDrag && k !== active) go(k);
});

// dial: the cards follow the top of the dial, like a gear (top pushed left = cards slide left)
let dialLast = null;
const angle = e => {
  const r = dial.getBoundingClientRect();
  return Math.atan2(e.clientY - r.top - r.height / 2, e.clientX - r.left - r.width / 2) * 180 / Math.PI;
};
dial.addEventListener('pointerdown', e => {
  dial.setPointerCapture(e.pointerId);
  dialLast = angle(e);
  track.classList.add('free');
});
dial.addEventListener('pointermove', e => {
  if (dialLast === null) return;
  const a = angle(e), d = ((a - dialLast + 540) % 360) - 180; // shortest way round
  dialLast = a;
  track.scrollLeft -= d / STEP_DEG * step();
});
const dialEnd = () => {
  if (dialLast === null) return;
  dialLast = null;
  haptic(18); // a firmer tick as the dial settles
  go(Math.round(pos()));
};
dial.addEventListener('pointerup', dialEnd);
dial.addEventListener('pointercancel', dialEnd);

// The band is a control too: drag along it to tune. (A click on a label is a drag that does not
// move; the label buttons keep their own click for the keyboard.) It ignores the wheel and trackpad.
let scrub = false, scrubTimer;
function tuneTo(x) {
  const r = scale.getBoundingClientRect(), t = (x - r.left - r.width * .08) / (r.width * .84); // the band runs from 8% to 92%
  track.classList.add('free');
  track.scrollLeft = Math.max(0, Math.min(1, t)) * (N - 1) * step();
}
scale.addEventListener('pointerdown', e => { scale.setPointerCapture(e.pointerId); scrub = true; tuneTo(e.clientX); });
scale.addEventListener('pointermove', e => { if (scrub) tuneTo(e.clientX); });
const scrubEnd = () => { if (!scrub) return; scrub = false; go(Math.round(pos())); };
scale.addEventListener('pointerup', scrubEnd);
scale.addEventListener('pointercancel', scrubEnd);
// With the pointer over the dial, a trackpad or wheel scroll turns it. Everywhere else the page scrolls.
dial.addEventListener('wheel', e => {
  e.preventDefault();
  track.classList.add('free');
  track.scrollLeft += (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * .5;
  clearTimeout(scrubTimer);
  scrubTimer = setTimeout(() => go(Math.round(pos())), 180);
}, { passive: false });

// buttons and links tick when tapped
addEventListener('click', e => { if (e.target.closest('a, button')) haptic(8); });

// index.html#nomi opens on that project (case pages link back this way)
const start = PROJECTS.findIndex(p => '#' + p.slug === location.hash);
if (start > 0) { track.classList.add('free'); track.scrollLeft = start * step(); settleSoon(); }
update();
