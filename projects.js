// The only file to edit when adding a project: add one entry, then run `node build.js`.
// image / shots are paths from the site root (e.g. 'img/nomi.jpg'); leave image '' for the dotted placeholder.
// A project with a demo shows its image as a phone screen (a 393x852 screenshot of the demo's first screen).
const PROJECTS = [
  {
    slug: 'nomi',
    name: 'Nomi',
    year: '2026',
    role: 'Design & development',
    stack: 'Flutter · Next.js · Supabase',
    tagline: "Don't search for a restaurant. Discover somewhere you want to go.",
    body: [
      'Nomi shows one restaurant at a time as a printed postcard. You swipe to build a shortlist of places you actually want to visit in Delhi NCR.',
      'It is not a delivery, reservation or review app. It runs on iOS and Android from one Flutter codebase.',
    ],
    image: '',
    shots: [],
    links: [],
  },
  {
    slug: 'brief',
    name: 'Brief',
    year: '2026',
    role: 'Design & development',
    stack: 'SwiftUI · Python · LLMs',
    tagline: 'A personal AI daily briefing.',
    body: [
      'A pipeline gathers several sources covering the same event and merges them into one short story, written like a friend who gets tech: what happened, why it matters, how it works, what you can build and what to watch.',
      'The iOS app ranks the stories by how much you care about each topic, and learns from what you read, save and skip.',
    ],
    demo: {
      src: 'demo/brief.html',
      // The callouts scroll past the pinned phone in this order, alternating left and right.
      // `show` names the screen the demo jumps to (the `tour` object in the demo file).
      details: [
        { big: '5', show: 'today', text: 'things worth your time each morning. Or 3, or 8: you set the length.' },
        { big: 'Listen', show: 'listen', text: 'The brief reads itself aloud, one story after another.' },
        { big: 'Swipe', show: 'swipe', text: 'right to keep a story, left to skip it for today.' },
        { big: 'Why', show: 'why', text: 'Every story can explain why it was picked, using only what you did on this phone.' },
        { big: '8', show: 'interests', text: 'topics. Drag a line to say how much you care about each one.' },
        { big: '3', show: 'faces', text: 'typefaces, from a serif editorial look to two clean sans.' },
      ],
      steps: [
        'Tap a story to read it, then tap "Why am I seeing this?"',
        'Swipe a story right to save it, or left to skip it',
        'Tap the S to change the typeface, length and appearance',
        'Open Interests and drag a topic line',
      ],
    },
    image: 'img/brief.jpg',
    shots: [],
    links: [],
  },
  {
    slug: 'miu-miu',
    name: 'Miu Miu',
    year: '2026',
    role: 'Design & development',
    stack: 'Swift · Android · Firebase',
    tagline: 'A private room for two, passing memos as a stack of cards.',
    body: [
      'Two people join a room by dragging one circle into the other. Memos arrive as a stack of cards: swipe one away to clear it, double-tap to heart it, swipe up to write back.',
      'New memos also land on the home-screen widget. Native on iOS and Android, sharing one Firestore backend.',
    ],
    // optional: a web replica of the app, shown in a phone frame on the case page
    demo: {
      src: 'demo/miu-miu.html',
      details: [
        { big: '0', show: 'join', text: 'buttons to join. Drag one circle into the other.' },
        { big: '2', show: 'room', text: 'people per room. Once both have joined, it is closed to everyone else.' },
        { big: 'Swipe', show: 'swipe', text: 'a memo away to clear it. The next one is already waiting.' },
        { big: '3', show: 'mood', text: 'card moods to set the tone: Calm, Warm and Deep.' },
        { big: 'Shake', show: 'nudge', text: 'the phone to send a nudge that says you are thinking of them.' },
        { big: '2', show: 'stream', text: 'native apps, iOS and Android, with home-screen widgets on both.' },
      ],
      steps: [
        'Drag one circle into the other to join the room',
        'Swipe a card sideways to clear it',
        'Double-tap a card to heart it',
        'Swipe a card up to write back, then send',
      ],
    },
    image: 'img/miu-miu.jpg',
    shots: [],
    links: [],
  },
  {
    slug: 'avon-industries',
    name: 'Avon Industries',
    year: '2026',
    role: 'Design & development',
    stack: 'Static site · SEO',
    tagline: 'Website for a packaging manufacturer in Delhi.',
    body: [
      'A fast static site that presents the company, its products and how to get in touch.',
    ],
    image: 'img/avon-industries.jpg',
    shots: [],
    links: [],
  },
];

if (typeof module !== 'undefined') module.exports = PROJECTS;
