// A small tick you can feel on a phone. Used by the home page and by both app demos.
// Android: the vibration API. iPhone: Apple gives websites no vibration API, but iOS 18+ plays a
// tick when a switch-style checkbox is toggled, so we toggle a throwaway one.
// ponytail: the iPhone path is a known trick, not an official API. It does nothing on older
// iPhones, and nothing on computers.
function haptic(ms = 12) {
  if (!matchMedia('(pointer: coarse)').matches) return;  // touch screens only
  if (!navigator.userActivation?.hasBeenActive) return;  // browsers block (and log) it before the first tap
  if (navigator.vibrate) { navigator.vibrate(ms); return; }
  const label = document.createElement('label');
  label.ariaHidden = 'true';
  label.style.display = 'none';
  label.innerHTML = '<input type="checkbox" switch>';
  document.head.append(label);
  label.click();
  label.remove();
}
