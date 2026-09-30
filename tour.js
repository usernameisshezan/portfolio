// Project pages with a live demo.
// Desktop: a guided tour. The callout crossing the middle of the screen lights up, and the demo in
// the phone is told which screen to show (it listens for {show}).
// Phones: no tour. The phone shows a still, and a button opens the demo full screen.
const frame = document.querySelector('.phone iframe');

if (matchMedia('(min-width: 768px)').matches) {
  frame.src = frame.dataset.src; // the demo is only downloaded where it is shown
  const steps = [...document.querySelectorAll('.details li')];
  let current = steps[0];
  const send = () => frame.contentWindow.postMessage({ show: current.dataset.show }, '*');
  const watch = new IntersectionObserver(entries => {
    const hit = entries.find(e => e.isIntersecting);
    if (!hit || hit.target === current) return;
    current = hit.target;
    steps.forEach(s => s.classList.toggle('on', s === current));
    send();
  }, { rootMargin: '-50% 0px -50% 0px' }); // a zero-height line across the middle of the screen
  steps.forEach(s => watch.observe(s));
  // a page reloaded part-way down starts on a later step, before the demo has loaded
  frame.addEventListener('load', () => { if (current !== steps[0]) send(); }, { once: true });
} else {
  document.querySelector('.open-demo').addEventListener('click', () => {
    const fs = document.createElement('div');
    fs.className = 'fs';
    fs.innerHTML = `<iframe src="${frame.dataset.src}" title="${frame.title}"></iframe><button class="fs-close" aria-label="Close demo">✕</button>`;
    // the demo is a 393x852 screen; scale it to the largest size that fits this phone
    const fit = () => fs.style.setProperty('--k', Math.min(innerWidth / 393, innerHeight / 852));
    fit();
    addEventListener('resize', fit);
    fs.querySelector('button').onclick = () => {
      fs.remove();
      removeEventListener('resize', fit);
      document.documentElement.style.overflow = '';
    };
    document.documentElement.style.overflow = 'hidden'; // the page behind must not scroll
    document.body.append(fs);
  });
}
