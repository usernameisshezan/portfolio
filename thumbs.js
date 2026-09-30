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

  // one page of the morning brief, over the wordmark
  brief: svg(`
    <rect x="28" y="12" width="44" height="56" rx="2.5" fill="#f2efe8" opacity=".22" transform="rotate(8 50 40)"/>
    <g transform="rotate(-3 50 40)">
      <rect x="28" y="12" width="44" height="56" rx="2.5" fill="#f2efe8"/>
      <text ${MONO} x="32" y="18.6" font-size="1.8" letter-spacing=".25" fill="#5e5a51">WED 30 SEP</text>
      <circle cx="66.2" cy="17.9" r="2.3" fill="#151411"/>
      <text ${SERIF} x="66.2" y="18.8" text-anchor="middle" font-size="2.6" fill="#f2efe8">S</text>
      <text ${SERIF} font-size="7.6" letter-spacing="-.15" fill="#151411"><tspan x="32" y="29">Good morning,</tspan><tspan x="32" y="35.8" font-style="italic">Shezan.</tspan></text>
      <rect x="32" y="40" width="6.6" height=".7" rx=".35" fill="#e8441c"/>
      <rect x="39.35" y="40" width="6.6" height=".7" rx=".35" fill="#d9d4c7"/>
      <rect x="46.7" y="40" width="6.6" height=".7" rx=".35" fill="#d9d4c7"/>
      <rect x="54.05" y="40" width="6.6" height=".7" rx=".35" fill="#d9d4c7"/>
      <rect x="61.4" y="40" width="6.6" height=".7" rx=".35" fill="#d9d4c7"/>
      <text ${MONO} x="32" y="46.2" font-size="1.7" letter-spacing=".2" fill="#b8330d">01 — AI</text>
      <text ${SERIF} font-size="4.5" fill="#151411"><tspan x="32" y="51.4">Five things worth</tspan><tspan x="32" y="56">your time.</tspan></text>
      <path d="M32 59.300H68" stroke="#d9d4c7" stroke-width=".3"/>
      <text ${MONO} x="32" y="63.700" font-size="1.7" fill="#5e5a51">02</text>
      <text ${SERIF} x="36.5" y="64" font-size="3.3" fill="#151411">Why it matters</text>
    </g>
    <text ${SERIF} x="33.5" y="93" font-size="19" letter-spacing="-.4" fill="#f2efe8">Brief</text>
    <circle cx="64.6" cy="90.6" r="2.3" fill="#ff5a2e"/>`),

  // a stack of memo cards with the app's promise on the top one, over the wordmark
  'miu-miu': svg(`
    <rect x="22" y="14" width="56" height="60" rx="6.5" fill="#2b2a28" transform="rotate(-8 50 44)"/>
    <rect x="22" y="14" width="56" height="60" rx="6.5" fill="#ecd0ca" transform="rotate(6 50 44)"/>
    <g transform="rotate(-1.5 50 44)">
      <rect x="22.6" y="15.4" width="56" height="60" rx="6.5" fill="#2b2a28" opacity=".16"/>
      <rect x="22" y="14" width="56" height="60" rx="6.5" fill="#f8f6f4"/>
      <rect x="26.5" y="18.5" width="12.5" height="6.2" rx="2" fill="#f0e0db"/>
      <text ${ROUND} x="32.75" y="22.7" text-anchor="middle" font-size="2.9" fill="#2b2a28">Miu</text>
      <text ${ROUND} font-size="5.3" letter-spacing="-.15" fill="#2b2a28"><tspan x="26.5" y="39">Leave notes,</tspan><tspan x="26.5" y="46.2">share moments,</tspan><tspan x="26.5" y="53.4">stay connected.</tspan></text>
      <text ${ROUND} x="26.5" y="68.6" font-weight="400" font-size="2.4" fill="#2b2a28" fill-opacity=".5">Tue 9:30 AM</text>
      <path transform="translate(4 -2)" d="M66.3 67.2c-1.1-1.5-3.6-.8-3.6 1.2 0 1.6 1.9 2.8 3.6 4.3 1.700-1.500 3.600-2.700 3.600-4.300 0-2-2.500-2.700-3.600-1.200z" fill="#c4847c"/>
    </g>
    <circle cx="36.5" cy="89.5" r="3.4" fill="#2b2a28"/>
    <circle cx="41.3" cy="89.5" r="3.4" fill="#fdfaf6"/>
    <text ${ROUND} x="48" y="91.2" font-size="4.6" fill="#fff">miu miu</text>`),

  // a paper carry bag with rope handles, which is what the company makes
  'avon-industries': svg(`
    <text ${MONO} x="8" y="13" font-size="2.4" letter-spacing=".5" fill="#fff" fill-opacity=".65">THINK IT. WE CREATE IT.</text>
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
    <text ${SANS} x="50" y="93.500" text-anchor="middle" font-weight="800" font-size="8.500" letter-spacing="-.3" fill="#fff">Avon Industries</text>`),
};

if (typeof module !== 'undefined') module.exports = THUMBS;
