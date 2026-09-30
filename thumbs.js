// One drawn thumbnail per project, keyed by slug. Each is a 100x100 SVG that is scaled to fit its
// card and centred on the project's `color` (projects.js), so it works in square, tall and wide cards.
// Used by main.js (home page cards) and build.js (the picture on a project page that has no demo).
const SANS = 'font-family="Helvetica Neue, Helvetica, Arial, sans-serif"';
const MONO = 'font-family="ui-monospace, SF Mono, Menlo, Consolas, monospace"';
const SERIF = 'font-family="Instrument Serif, Georgia, serif"';
const ROUND = 'font-family="Manrope, Helvetica Neue, Helvetica, sans-serif" font-weight="600"';
const svg = body => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;

const THUMBS = {
  // a fan of restaurant postcards with a postmark, over the wordmark
  nomi: svg(`
    <defs><linearGradient id="nomi-photo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9a7b"/><stop offset="1" stop-color="#d6a8ff"/></linearGradient></defs>
    <rect x="28" y="13" width="44" height="54" fill="#fbf8f2" opacity=".45" transform="rotate(-13 50 40)"/>
    <rect x="28" y="13" width="44" height="54" fill="#fbf8f2" opacity=".7" transform="rotate(8 50 40)"/>
    <g transform="rotate(-3 50 40)">
      <rect x="28.8" y="14.2" width="44" height="54" fill="#161412" opacity=".14"/>
      <rect x="28" y="13" width="44" height="54" fill="#fbf8f2"/>
      <rect x="31.5" y="16.5" width="37" height="29" fill="url(#nomi-photo)"/>
      <text ${SANS} font-weight="700" font-size="4.7" letter-spacing="-.14" fill="#161412"><tspan x="31.5" y="53">Somewhere you</tspan><tspan x="31.5" y="58.4">want to go.</tspan></text>
      <text ${MONO} x="31.5" y="63.6" font-size="2.1" fill="#5f5a52">DELHI NCR · NO. 01</text>
    </g>
    <g transform="rotate(14 72 17)">
      <circle cx="72" cy="17" r="8.2" fill="#fbf8f2" fill-opacity=".9" stroke="#d8391b" stroke-width="1.1"/>
      <circle cx="72" cy="17" r="6.2" fill="none" stroke="#d8391b" stroke-width=".35" stroke-dasharray=".8 .8"/>
      <text ${MONO} x="72" y="18.3" text-anchor="middle" font-weight="700" font-size="3.4" fill="#d8391b">NOMI</text>
    </g>
    <text ${SANS} x="29" y="93" font-weight="800" font-size="17" letter-spacing="-.8" fill="#161412">nomi</text>
    <circle cx="70.5" cy="90.6" r="2.3" fill="#d8391b"/>`),

  // the evening edition: the greeting, today's five, and the shape of a story
  brief: svg(`
    <text ${MONO} x="9" y="15" font-size="2.5" letter-spacing=".35" fill="#a39d90">WED 30 SEP</text>
    <circle cx="86.5" cy="13.8" r="4.6" fill="#f2efe8"/>
    <text ${SERIF} x="86.5" y="15.5" text-anchor="middle" font-size="5" fill="#151411">S</text>
    <text ${SERIF} font-size="15.5" letter-spacing="-.3" fill="#f2efe8"><tspan x="9" y="33">Good morning,</tspan><tspan x="9" y="46.5" font-style="italic">Shezan.</tspan></text>
    <rect x="9" y="54" width="15.2" height="1" rx=".5" fill="#ff5a2e"/>
    <rect x="25.7" y="54" width="15.2" height="1" rx=".5" fill="#36322b"/>
    <rect x="42.4" y="54" width="15.2" height="1" rx=".5" fill="#36322b"/>
    <rect x="59.1" y="54" width="15.2" height="1" rx=".5" fill="#36322b"/>
    <rect x="75.8" y="54" width="15.2" height="1" rx=".5" fill="#36322b"/>
    <g ${MONO} font-size="2.4" fill="#ff8a66"><text x="9" y="65.6">01</text><text x="9" y="75.6" fill="#a39d90">02</text><text x="9" y="85.6" fill="#a39d90">03</text></g>
    <g ${SERIF} font-size="5.6" fill="#f2efe8"><text x="17" y="66">What happened</text><text x="17" y="76">Why it matters</text><text x="17" y="86">What you can build</text></g>
    <path d="M9 69.5H91M9 79.5H91M9 89.5H91" stroke="#36322b" stroke-width=".3"/>
    <circle cx="88.6" cy="64.2" r="1.7" fill="#ff5a2e"/>`),

  // a stack of memo cards, the top one read and loved
  'miu-miu': svg(`
    <rect x="26" y="14" width="48" height="62" rx="6.5" fill="#2b2a28" transform="rotate(-9 50 45)"/>
    <rect x="26" y="14" width="48" height="62" rx="6.5" fill="#ecd0ca" transform="rotate(7 50 45)"/>
    <g transform="rotate(-1.5 50 45)">
      <rect x="26.6" y="15.4" width="48" height="62" rx="6.5" fill="#2b2a28" opacity=".16"/>
      <rect x="26" y="14" width="48" height="62" rx="6.5" fill="#f8f6f4"/>
      <rect x="30.5" y="18.5" width="12.5" height="6.2" rx="2" fill="#f0e0db"/>
      <text ${ROUND} x="36.75" y="22.7" text-anchor="middle" font-size="2.9" fill="#2b2a28">Miu</text>
      <text ${ROUND} font-size="7.4" letter-spacing="-.2" fill="#2b2a28"><tspan x="30.5" y="40">Saved you</tspan><tspan x="30.5" y="48.6">the last</tspan><tspan x="30.5" y="57.2">slice.</tspan></text>
      <text ${ROUND} x="30.5" y="70.6" font-weight="400" font-size="2.4" fill="#2b2a28" fill-opacity=".5">Tue 9:30 AM</text>
      <path d="M66.3 67.2c-1.1-1.5-3.6-.8-3.6 1.2 0 1.6 1.9 2.8 3.6 4.3 1.700-1.500 3.600-2.700 3.600-4.300 0-2-2.500-2.700-3.600-1.200z" fill="#c4847c"/>
    </g>
    <circle cx="36.5" cy="89.5" r="3.4" fill="#2b2a28"/>
    <circle cx="41.3" cy="89.5" r="3.4" fill="#fdfaf6"/>
    <text ${ROUND} x="48" y="91.2" font-size="4.6" fill="#fff">miu miu</text>`),

  // a paper carry bag with rope handles, which is what the company makes
  'avon-industries': svg(`
    <text ${MONO} x="8" y="13" font-size="2.4" letter-spacing=".5" fill="#fff" fill-opacity=".65">SINCE 1990 · DELHI</text>
    <ellipse cx="53" cy="80.5" rx="24" ry="2.2" fill="#000" opacity=".28"/>
    <path d="M45 32C45 18 65 18 65 32" fill="none" stroke="#c9b68a" stroke-width="1.2" opacity=".55"/>
    <path d="M70 31l6 4.500V80l-6-1.500z" fill="#d6d6cb"/>
    <rect x="30" y="31" width="40" height="47.5" fill="#f5f5f0"/>
    <path d="M30 31h40l6 4.500H36z" fill="#e6e6dc" opacity="0"/>
    <path d="M30 36.500H70" stroke="#004225" stroke-opacity=".12" stroke-width=".3"/>
    <path d="M39 32C39 17 61 17 61 32" fill="none" stroke="#c9b68a" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="39" cy="33" r="1" fill="#004225"/><circle cx="61" cy="33" r="1" fill="#004225"/>
    <text ${SANS} x="50" y="58" text-anchor="middle" font-weight="800" font-size="10" letter-spacing="-.3" fill="#004225">AVON</text>
    <text ${SANS} x="50" y="63.2" text-anchor="middle" font-size="2.3" letter-spacing="1.35" fill="#004225">INDUSTRIES</text>
    <text ${SANS} x="50" y="93" text-anchor="middle" font-style="italic" font-size="4.3" fill="#fff" fill-opacity=".9">Think it. We create it.</text>`),
};

if (typeof module !== 'undefined') module.exports = THUMBS;
