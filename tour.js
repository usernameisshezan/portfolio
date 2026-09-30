// Guided tour on a project page with a live demo: the callout crossing the middle of the screen
// lights up, and the demo in the phone is told which screen to show (it listens for {show}).
// Phones skip this and show every callout at once.
if (matchMedia('(min-width: 768px)').matches) {
  const frame = document.querySelector('.phone iframe');
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
}
