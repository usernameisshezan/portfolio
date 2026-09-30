// The page's broadcast style, carried from the opening screen through every section:
//  - live signal lines (the opening's big one, and a <canvas class="sig"> in each section's channel
//    strip) that swell under the cursor or finger and only animate while on screen,
//  - headlines that lock on letter by letter like a station coming in ([data-lock], once each),
//  - the opening screen: its signal flattens and sinks as you scroll, the black fades into the tuned
//    project's colour, and the swipe/scroll cue leaves for good once you have scrolled.
{
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  const hi = document.getElementById('hi');
  let px = -1, py = -1, tilt = 0, s = 0; // pointer (viewport coordinates), phone tilt, opening-screen scroll 0..1
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { px = -1; });
  addEventListener('deviceorientation', e => { tilt = Math.max(-1, Math.min(1, (e.gamma || 0) / 45)); }); // iPhones ask permission first, so they skip this

  // ---- signal lines ----
  function signal(canvas, big) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, color = '#e10600', visible = false, scheduled = false;
    function size() {
      const dpr = Math.min(2, devicePixelRatio || 1);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      color = getComputedStyle(canvas).color; // red, or white on the red section
    }
    function frame(now) {
      scheduled = false;
      const t = now / 1000, r = canvas.getBoundingClientRect(), mx = px - r.left, my = py - r.top;
      const flat = big ? s : 0, base = big ? H * (.78 + s * .2) : H / 2;
      ctx.clearRect(0, 0, W, H);
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const u = x / W;
        let a = big ? 5 + 9 * Math.sin(u * 3 + t * .8) ** 2 + Math.abs(tilt) * 26 : 1 + 2 * Math.sin(u * 5 + t) ** 2;
        if (px >= 0) a += (big ? 64 : 15) * Math.exp(-((x - mx) ** 2) / (big ? 16000 : 5000)) * Math.max(0, 1 - Math.abs(my - base) / (big ? H : 140));
        const y = base + (1 - flat) * a * Math.sin(u * (big ? 46 : 70) + t * 6 + tilt * 3) * Math.sin(u * 7 - t * 1.3);
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = big ? 2 : 1.5;
      ctx.stroke();
      if (visible && !still.matches) kick();
    }
    function kick() { if (!scheduled) { scheduled = true; requestAnimationFrame(frame); } }
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }).observe(canvas);
    size();
    addEventListener('resize', () => { size(); kick(); });
    return kick;
  }
  const heroSignal = signal(document.getElementById('wave'), true);
  document.querySelectorAll('.sig').forEach(c => signal(c, false));

  // ---- the opening screen hands over to the tuner as it scrolls away ----
  function onScroll() {
    s = Math.max(0, Math.min(1, scrollY / hi.offsetHeight));
    hi.style.setProperty('--s', s);
    if (s > .1) hi.classList.add('scrolled'); // the swipe cue leaves and does not come back
    heroSignal();
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Nobody has scrolled after four seconds: lift the page a little to show there is more below.
  if (!still.matches) setTimeout(() => {
    if (hi.classList.contains('scrolled')) return;
    const main = document.querySelector('main');
    main.classList.add('peek');
    main.addEventListener('animationend', () => main.classList.remove('peek'), { once: true });
  }, 4000);

  // ---- headlines lock on like a station coming in ----
  const pick = set => set[Math.random() * set.length | 0];
  const noisy = ch => /[A-Z]/.test(ch) ? pick('ABCDEFGHJKLMNPQRSTUVWXYZ') : /[a-z]/.test(ch) ? pick('abcdefghijkmnopqrstuvwxyz') : /[0-9]/.test(ch) ? pick('0123456789') : ch;
  function lockOn(el, done) {
    if (el.dataset.locking || still.matches) return;
    el.dataset.locking = '1';
    const nodes = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walk.nextNode()) nodes.push([walk.currentNode, walk.currentNode.data]);
    const total = nodes.reduce((n, [, d]) => n + d.length, 0), speed = Math.max(.4, total / 36); // about a second, whatever the length
    el.style.minHeight = el.offsetHeight + 'px'; // scrambled letters must not push the page around
    let k = 0;
    const id = setInterval(() => {
      k += speed;
      let i = 0;
      for (const [node, d] of nodes) node.data = [...d].map(ch => i++ < k ? ch : noisy(ch)).join('');
      if (k < total) return;
      clearInterval(id);
      nodes.forEach(([node, d]) => { node.data = d; });
      el.style.minHeight = '';
      delete el.dataset.locking;
      done?.();
    }, 30);
  }

  // words in the About text turn red under the cursor, like the opening line
  document.querySelectorAll('.prose p').forEach(p => {
    p.innerHTML = p.textContent.split(/(\s+)/).map(w => !w.trim() ? w : `<span class="w">${w.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span>`).join('');
  });

  // the name tunes in on arrival, and again when hovered or tapped (with a tick on phones)
  const name = document.querySelector('#hiName span');
  const tuneName = () => lockOn(name, () => haptic(14));
  tuneName();
  name.parentElement.addEventListener('pointerenter', tuneName);
  name.parentElement.addEventListener('click', tuneName);

  // every other headline tunes in once, the first time it scrolls into view
  const seen = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    seen.unobserve(e.target);
    lockOn(e.target);
  }), { threshold: .6 });
  document.querySelectorAll('[data-lock]').forEach(el => seen.observe(el));
}
