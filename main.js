// The carousel's scroll position is the single source of truth: the dial, wheel, keys and
// drag all just scroll the track, and update() derives everything else from scrollLeft.
const STEP_DEG = 30; // dial rotation per project. ponytail: ticks overlap past 12 projects, shrink this if you get there
const N = PROJECTS.length;
const $ = id => document.getElementById(id);
const track = $('track'), dial = $('dial'), face = $('dialFace');
const desktop = matchMedia('(min-width: 768px)');
const calm = matchMedia('(prefers-reduced-motion: reduce)');
const pad = n => String(n).padStart(2, '0');
const clamp = i => Math.max(0, Math.min(N - 1, i));

const TAG = ' <i class="tag">Live demo</i>'; // projects with a working demo on their page

track.innerHTML = PROJECTS.map((p, i) => `
  <div class="slot">
    <a class="card" href="work/${p.slug}.html" draggable="false">
      <span class="bar"><span>${p.name}${p.demo ? TAG : ''}</span><span>${p.demo ? 'Try it' : 'View project'} →</span></span>
      <span class="art">${p.image ? `<img${p.demo ? ' class="ph"' : ''} src="${p.image}" alt="" draggable="false">` : `<b>${pad(i + 1)}</b>`}</span>
    </a>
  </div>`).join('');
face.innerHTML = PROJECTS.map((_, i) => `<i style="transform:rotate(${i * STEP_DEG}deg)"></i>`).join('');
$('list').innerHTML = PROJECTS.map((p, i) => `
  <li><a href="work/${p.slug}.html"><span>${pad(i + 1)}</span><span>${p.name}${p.demo ? TAG : ''}</span><span>${p.stack}</span><span>${p.year} →</span></a></li>`).join('');
$('dialAll').textContent = '/' + pad(N);
dial.setAttribute('aria-valuemax', N);

const slots = [...track.children], ticks = [...face.children];
const step = () => (slots[1] ? slots[1].offsetLeft - slots[0].offsetLeft : slots[0].offsetWidth);
const pos = () => track.scrollLeft / step();
let active = -1, freeTimer;

function setActive(i) {
  // Android only; iOS ignores it. Chrome blocks (and logs) vibration before the first tap
  if (active >= 0 && navigator.userActivation?.hasBeenActive) navigator.vibrate?.(8);
  active = i;
  slots.forEach((el, k) => el.classList.toggle('active', k === i));
  ticks.forEach((el, k) => el.classList.toggle('on', k === i));
  $('counter').textContent = `${pad(i + 1)} / ${pad(N)}`;
  $('dialNow').textContent = pad(i + 1);
  const p = PROJECTS[i];
  $('open').href = `work/${p.slug}.html`;
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
  const i = clamp(Math.round(p));
  if (i !== active) setActive(i);
}

// Snapping is switched off while the dial or mouse drives the track, and back on once it rests.
function settleSoon() {
  clearTimeout(freeTimer);
  freeTimer = setTimeout(() => { if (dialLast === null && !down) track.classList.remove('free'); }, 150);
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

// vertical wheel steps one project at a time; at either end it falls through to normal page scroll
let wheelLock = 0;
track.addEventListener('wheel', e => {
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  const next = active + Math.sign(e.deltaY);
  if (next < 0 || next >= N) return;
  e.preventDefault();
  if (e.timeStamp < wheelLock) return;
  wheelLock = e.timeStamp + 450;
  go(next);
}, { passive: false });

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
  go(Math.round(pos()));
};
dial.addEventListener('pointerup', dialEnd);
dial.addEventListener('pointercancel', dialEnd);

// index.html#nomi opens on that project (case pages link back this way)
const start = PROJECTS.findIndex(p => '#' + p.slug === location.hash);
if (start > 0) { track.classList.add('free'); track.scrollLeft = start * step(); settleSoon(); }
update();
