// Generated from brief/app/Brief/briefing.json (the briefing bundled in the app): same stories, source links dropped.
const STORIES = [
 {
  "id": "21b8cb542559",
  "topic": "business",
  "headline": "Trump backs temporary US diesel export ban",
  "summary": "President Trump says he would support a 90‑day halt on diesel exports to try to lower domestic pump prices, amid record‑high diesel costs and political pressure ahead of the mid‑terms.",
  "what_happened": "Trump told UN delegates he would back a proposal to stop US diesel exports for about three months. Treasury officials are studying a full or partial ban. Republicans are pushing the move as diesel hits $6.50 a gallon.",
  "why_it_matters": "A short‑term export ban could ease fuel prices for American drivers, but it also risks higher diesel costs for allies that rely on US supplies and could strain global markets.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch whether the White House formalizes the 90‑day ban and how it shifts diesel prices at home and abroad.",
  "tags": [
   "diesel",
   "export",
   "trump"
  ],
  "importance": 4.97,
  "sources": [
   "BBC",
   "Financial Times",
   "Bloomberg",
   "Yahoo Finance"
  ]
 },
 {
  "id": "5ba9101326d9",
  "topic": "technology",
  "headline": "Discord adds automatic age group estimation",
  "summary": "Discord now auto‑assigns users to teen or adult groups using account signals, with optional verification methods that avoid ID selfies.",
  "what_happened": "Discord rolled out a global age assurance system that automatically estimates your age group from signals like account age and server membership. Over 90% of users won’t be asked to prove their age. Those in the teen group get extra safety blocks, while adults can confirm manually if mis‑assigned.",
  "why_it_matters": "If you build bots or community tools on Discord, you’ll need to respect the new teen safety filters. Knowing a user’s age group lets you tailor content, avoid blocked features, and stay compliant with emerging age‑verification laws.",
  "how_it_works": [
   {
    "step": "Collect signals",
    "detail": "Discord looks at non‑content data such as how long the account has existed and the kinds of servers the user is part of."
   },
   {
    "step": "Estimate age group",
    "detail": "Multiple signals are combined to assign the user to either the teen (13‑17) or adult (18+) bucket with accuracy matching what’s possible with biometrics."
   },
   {
    "step": "User confirmation",
    "detail": "If the estimate is wrong, adults can manually confirm via User Settings > Account Status using options like credit cards that don’t require a selfie."
   }
  ],
  "what_to_build": [],
  "what_to_watch": "Watch for more regions adopting similar privacy‑preserving age checks and for Discord’s API to expose age‑group data for developers.",
  "tags": [
   "discord",
   "age verification",
   "privacy"
  ],
  "importance": 4.05,
  "sources": [
   "Hacker News",
   "The Verge"
  ]
 },
 {
  "id": "f5ca62dec5bf",
  "topic": "ai",
  "headline": "Adobe finishes buy of Topaz Labs",
  "summary": "Adobe has closed its acquisition of Topaz Labs, keeping the brand separate while the AI upscaling tech already lives in Photoshop and Firefly.",
  "what_happened": "Adobe completed the purchase of Topaz Labs. Topaz will stay as its own brand and apps, and its CEO joins Adobe’s Digital Video and Audio team. The models are already embedded in Photoshop and Firefly.",
  "why_it_matters": "You can keep using Topaz Photo AI or Video AI as before, but now Adobe may roll those AI upscaling tools into Photoshop and other cloud services. That could mean tighter workflow integration and cheaper access for Creative Cloud subscribers.",
  "how_it_works": [
   {
    "step": "Model integration",
    "detail": "Topaz’s AI models for detail recovery and temporal consistency are already accessible inside Photoshop and Firefly."
   },
   {
    "step": "Future optimization",
    "detail": "Adobe plans to speed up the models and push them to more enterprise customers, especially for bulk restoration of old footage."
   }
  ],
  "what_to_build": [],
  "what_to_watch": "Watch for Adobe to integrate Topaz AI features more tightly into Photoshop, Firefly, and its enterprise offerings.",
  "tags": [
   "adobe",
   "topaz",
   "upscaling"
  ],
  "importance": 2.88,
  "sources": [
   "Fstoppers",
   "PetaPixel"
  ]
 },
 {
  "id": "5ef7b4daed87",
  "topic": "ai",
  "headline": "YouTube adds AI agents to auto‑tune thumbnails and titles",
  "summary": "YouTube Studio now bundles AI that can rewrite thumbnails, test video variants, and even pitch brands for you. It aims to shave hours off a creator’s workflow.",
  "what_happened": "YouTube launched an AI “agent” in Studio that scans a creator’s back catalog, suggests new thumbnails and titles, and can generate brand pitches. It also adds dynamic thumbnail A/B testing (up to three images) and video‑variant testing for small audience segments.",
  "why_it_matters": "The tools promise big time savings and potentially higher watch time by automatically surfacing the best visuals and hooks. For you, that means less manual tweaking and more focus on actual content creation or building tools that leverage these signals.",
  "how_it_works": [
   {
    "step": "Catalog scan",
    "detail": "The AI agent reviews older videos, flags ones gaining traction, and proposes updated thumbnails or titles."
   },
   {
    "step": "Dynamic thumbnail test",
    "detail": "Upload up to three thumbnail images; YouTube serves each to different viewer groups and picks the best performer."
   },
   {
    "step": "Video variant test",
    "detail": "Create up to three short video edits (e.g., different intro); each is shown to a small segment, and the highest‑watch‑time version becomes the default after seven days."
   }
  ],
  "what_to_build": [],
  "what_to_watch": "",
  "tags": [
   "youtube",
   "creator-tools",
   "ai"
  ],
  "importance": 2.86,
  "sources": [
   "The Verge",
   "TechCrunch"
  ]
 },
 {
  "id": "7e97d9567822",
  "topic": "ai",
  "headline": "AI-native security startups see massive funding surge",
  "summary": "Investors are pouring nine‑figure checks into cyber firms built for an AI‑driven world, and human‑in‑the‑loop defenses are being left behind.",
  "what_happened": "Index Ventures partner Shardul Shah says AI safety concerns are driving huge capital into AI‑native security startups. Companies like Instinct and Simile are getting nine‑figure rounds, and the old model of periodic human checks can’t keep up with AI‑powered attacks.",
  "why_it_matters": "If you’re building security tools or AI agents, the market is betting on fully automated, machine‑to‑machine defenses. That means more demand for APIs, data pipelines, and models that can detect threats in real time.",
  "how_it_works": [
   {
    "step": "Shift from periodic checks",
    "detail": "Human‑in‑the‑loop security is too slow for attacks that can launch thousands of ransomware agents at once."
   },
   {
    "step": "Adopt machine‑to‑machine defenses",
    "detail": "Systems continuously monitor, analyze, and respond to threats without waiting for human input."
   },
   {
    "step": "Leverage AI‑native platforms",
    "detail": "Startups build security that understands the behavior of AI models and can block rogue agents before they spread."
   }
  ],
  "what_to_build": [
   "An API that scores incoming network traffic for AI‑generated attack patterns in real time.",
   "A lightweight agent that runs on edge devices, using a pre‑trained threat‑detection model to auto‑mitigate ransomware swarms."
  ],
  "what_to_watch": "Watch if cyber insurers start mandating AI‑native defenses as a prerequisite for coverage.",
  "tags": [
   "cybersecurity",
   "ai",
   "venture"
  ],
  "importance": 1.99,
  "sources": [
   "TechCrunch"
  ]
 },
 {
  "id": "adfbff1f3e02",
  "topic": "programming",
  "headline": "Redis hash slots can kill your batch cache",
  "summary": "A delivery service hit latency spikes because their Redis cluster scattered cache keys across all 16,384 slots, breaking multi‑key commands. They fixed it with hash tags and slot‑aware batching.",
  "what_happened": "The team cached routing estimates in a Redis cluster using keys like <origin hex>:<dest hex>:<resolution>. Because each key landed in a different hash slot, MGET/MSET commands could not batch and latency rose. They discovered Redis hash tags and rewrote the key format to force groups of keys into the same slot, then batched per node.",
  "why_it_matters": "If you build any high‑throughput service that shares a Redis cluster, scattering keys will trash your latency. Using hash tags lets you keep batch operations fast and reduces load on the routing engine you’re trying to cache.",
  "how_it_works": [
   {
    "step": "Slot calculation",
    "detail": "Redis computes CRC16(key) mod 16384 to pick one of 16,384 slots."
   },
   {
    "step": "Hash tag usage",
    "detail": "Anything inside { } is the only part hashed, so you can craft a tag like {routing:v1:42} to force many keys into the same slot."
   },
   {
    "step": "Slot‑aware batching",
    "detail": "Group keys by their slot, then send one MGET/MSET per node instead of thousands of separate calls."
   }
  ],
  "what_to_build": [
   "A tiny helper library that takes a list of keys and returns a hash‑tagged version plus slot groups for any Redis cluster."
  ],
  "what_to_watch": "Redis client libraries may add automatic hash‑tag generation for common patterns, making this trick easier.",
  "tags": [
   "redis",
   "caching",
   "hash-slots"
  ],
  "importance": 1.97,
  "sources": [
   "Lobsters"
  ]
 },
 {
  "id": "92f9e40689a8",
  "topic": "ai",
  "headline": "YouTube launches AI‑powered Custom Feeds",
  "summary": "YouTube now lets US users type a description of the videos they want and Gemini builds a personalized home‑page feed that can be saved and tweaked.",
  "what_happened": "At the Made on YouTube event, YouTube announced Custom Feeds, an LLM‑driven feature that creates and stores tailored video streams. Users write a natural‑language prompt, Gemini generates a feed, and the feed appears on the homepage. The rollout is limited to the United States for now.",
  "why_it_matters": "You get direct control over the algorithm instead of passive recommendations. It’s a quick way to surface niche content, test audience reactions, or build a brand‑specific channel without manual curation. For developers, it shows how generative AI can be plugged into large‑scale recommendation engines.",
  "how_it_works": [
   {
    "step": "Prompt input",
    "detail": "You type a short description of the vibe or topics you want (e.g., “daily tech startup news in under 5 minutes”)."
   },
   {
    "step": "Gemini generation",
    "detail": "YouTube’s Gemini LLM translates the prompt into a query that pulls relevant videos and assembles a feed."
   },
   {
    "step": "Save & tweak",
    "detail": "The feed appears on your homepage; you can rename, edit, or delete it, and YouTube continues to update it based on the same criteria."
   }
  ],
  "what_to_build": [],
  "what_to_watch": "",
  "tags": [
   "youtube",
   "customfeeds",
   "gemini"
  ],
  "importance": 3.86,
  "sources": [
   "Techmeme",
   "TechCrunch",
   "WIRED"
  ]
 },
 {
  "id": "e297a2b90022",
  "topic": "finance",
  "headline": "Airtel Mobile eyes $800m London IPO",
  "summary": "African payments firm Airtel Mobile files for a London listing that could raise $800 million at an $8‑9 billion valuation, the biggest UK IPO in five years.",
  "what_happened": "Airtel Mobile submitted a prospectus for a London initial public offering. The deal aims to raise at least $800 million and value the company at $8‑9 billion. It would be the largest UK IPO in half a decade.",
  "why_it_matters": "A successful float could revive the City’s sluggish IPO market and give investors a new way into Africa’s fast‑growing mobile payments sector. For you, it signals fresh capital for fintech expansion and potential partnership or acquisition targets.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch whether the offering meets its price target and how quickly the market absorbs such a large Africa‑focused float.",
  "tags": [
   "ipo",
   "africa",
   "fintech"
  ],
  "importance": 2.93,
  "sources": [
   "Bloomberg",
   "Financial Times"
  ]
 },
 {
  "id": "7cff1964bf19",
  "topic": "ai",
  "headline": "Ringg AI agents cut call volume 65% with GPT‑5.6",
  "summary": "Ringg launched multilingual AI agents powered by OpenAI's GPT‑5.6 that resolve up to 65% of customer calls, while costing about 90% less than GPT‑4.1.",
  "what_happened": "Ringg introduced AI agents that handle voice, chat, WhatsApp and web interactions. They use OpenAI's GPT‑5.6 and resolve up to 65% of inbound calls. The solution costs roughly 90% less than the previous GPT‑4.1‑based offering.",
  "why_it_matters": "You can slash support expenses and automate most routine queries without sacrificing quality. The multilingual ability means you can serve global customers from a single model. Lower cost makes scaling AI support viable for smaller startups.",
  "how_it_works": [
   {
    "step": "Model selection",
    "detail": "Ringg runs OpenAI's GPT‑5.6, a newer, more efficient model than GPT‑4.1."
   },
   {
    "step": "Channel integration",
    "detail": "APIs connect the model to voice, chat, WhatsApp and web front‑ends, routing user input to the model."
   },
   {
    "step": "Cost optimization",
    "detail": "GPT‑5.6's architecture reduces compute per token, delivering about 90% lower inference cost."
   }
  ],
  "what_to_build": [
   "A niche customer‑support bot for a specific industry (e.g., SaaS onboarding) using the GPT‑5.6 API and Ringg‑style multi‑channel wrappers."
  ],
  "what_to_watch": "Watch if other support platforms adopt GPT‑5.6 and how pricing evolves as the model gains traction.",
  "tags": [
   "ai",
   "customer-service",
   "cost"
  ],
  "importance": 2.75,
  "sources": [
   "OpenAI"
  ]
 },
 {
  "id": "775524beebba",
  "topic": "photography",
  "headline": "Chronos Q12 high‑speed APS‑C camera hits 7,500 fps",
  "summary": "Kron's new Chronos Q12 can record 2.5K video at over 2,300 fps and drop to 7,471 fps at lower resolution, targeting labs, factories, and creative slow‑mo work.",
  "what_happened": "Kron Technologies unveiled the Chronos Q12, an APS‑C camera that shoots up to 2,313 fps at full 2.5K resolution, 5,148 fps at 1080p, and 7,471 fps at 1,536×864. It offers 8‑, 10‑, and 12‑bit depth modes and records to RAW, H.264/H.265, or TIFF.",
  "why_it_matters": "If you need to see events too fast for ordinary video—like fluid dynamics, crash testing, or extreme sports tricks—this camera gives you the detail and speed to analyze them. The raw output means you can extract every nuance for AI‑driven analysis or creative effects.",
  "how_it_works": [
   {
    "step": "Sensor selection",
    "detail": "APS‑C sensor (9 µm pixels) provides 2,560×2,016 native resolution."
   },
   {
    "step": "Frame‑rate mode switch",
    "detail": "Crop the sensor to lower resolutions to boost fps: 2,313 fps full, 5,148 fps at 1080p, 7,471 fps at 1,536×864."
   },
   {
    "step": "Bit‑depth trade‑off",
    "detail": "8‑bit at 2,313 fps, 10‑bit at 1,900 fps, 12‑bit limited to 975 fps for maximum color fidelity."
   }
  ],
  "what_to_build": [
   "A Python script that ingests the RAW CinemaDNG files and feeds frames into a computer‑vision model to automatically detect and tag fast‑moving particles.",
   "A web UI that lets creative teams scrub through 7,000 fps clips and export custom slow‑mo segments in H.264."
  ],
  "what_to_watch": "",
  "tags": [
   "highspeed",
   "aps-c",
   "camera"
  ],
  "importance": 1.95,
  "sources": [
   "PetaPixel"
  ]
 },
 {
  "id": "d0d1850e4e34",
  "topic": "ai",
  "headline": "KDE community pushes for a No‑AI policy",
  "summary": "KDE users and contributors are urging the project to ban AI‑generated code and assets from Plasma and related components.",
  "what_happened": "A group called KDE for People has released a petition calling for a strict No‑AI policy across KDE projects. They argue AI harms privacy, code review and community trust. The proposal also wants to block AI‑generated translations, issue descriptions and assets.",
  "why_it_matters": "If KDE adopts the ban, developers will need to avoid AI tools when contributing, which could reshape how plugins and themes are built. It also signals a broader stance on ethical AI in open‑source ecosystems—something you’ll see echoed in other projects.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch the KDE governance vote and any reaction from major KDE contributors in the next few weeks.",
  "tags": [
   "kde",
   "ai",
   "community"
  ],
  "importance": 1.93,
  "sources": [
   "Lobsters"
  ]
 },
 {
  "id": "b63bcf5811e0",
  "topic": "finance",
  "headline": "UK faces rising debt costs and slower growth ahead of budget",
  "summary": "The OECD cut UK growth forecast to 1% and warned debt interest is rising as energy prices stay high. The IMF says governments must act to curb borrowing costs.",
  "what_happened": "The OECD lowered its UK growth forecast to 1% for next year and highlighted ballooning debt interest costs. IMF chief Kristalina Georgieva warned that global shocks are pushing debt levels up like a staircase. Higher oil prices from Middle‑East conflicts are keeping inflation and borrowing costs high.",
  "why_it_matters": "Higher debt costs mean more of the budget goes to interest payments, leaving less room for spending on tech, AI or new projects. Slower growth squeezes consumer spending, which can affect startup markets and funding.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch how Chancellor John Healey's upcoming budget addresses debt servicing and whether any fiscal reforms are introduced.",
  "tags": [
   "uk",
   "debt",
   "growth"
  ],
  "importance": 1.83,
  "sources": [
   "BBC"
  ]
 },
 {
  "id": "5f54a61aa382",
  "topic": "ai",
  "headline": "Claude Code skips AGENTS.md when telemetry is off",
  "summary": "Claude Code 2.1.277 adds AGENTS.md support, but the loader is hidden behind a remote feature flag. Turning off telemetry or nonessential traffic stops the file from being read without any warning.",
  "what_happened": "The built‑in agents‑md plugin checks a remote feature flag before loading a local AGENTS.md. With telemetry disabled, the flag stays false, so the file is never read. No error or notice is shown.",
  "why_it_matters": "If you rely on AGENTS.md for project instructions, disabling telemetry silently disables that guidance. You’ll waste time debugging prompts that never see your file.",
  "how_it_works": [
   {
    "step": "Plugin registration",
    "detail": "Claude Code registers the agents‑md plugin with an isOnByDefault flag set to false."
   },
   {
    "step": "Remote flag check",
    "detail": "The plugin calls the remote flag `tengu_agents_md_mod`; if it can’t fetch a true value, the plugin stays unavailable."
   },
   {
    "step": "Telemetry gating",
    "detail": "Environment variables `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` or `DISABLE_TELEMETRY=1` force the flag to false, blocking the file load."
   }
  ],
  "what_to_build": [],
  "what_to_watch": "Anthropic may add a warning or change the fallback so AGENTS.md works even when telemetry is off.",
  "tags": [
   "ai",
   "programming",
   "products"
  ],
  "importance": 3.25,
  "sources": [
   "Hacker News"
  ]
 },
 {
  "id": "3d48e529ad7a",
  "topic": "ai",
  "headline": "OpenAI releases GPT-6 Sol and Luna",
  "summary": "OpenAI added two new GPT-6 models—Sol for complex coding work and Luna for fast clerical tasks—at half the price of the previous 5.6 series.",
  "what_happened": "OpenAI launched GPT-6 Sol and Luna, updated versions of its smaller models. Sol targets coding and tough problems, Luna handles summarizing, extraction, and quick Q&A. Both are priced about 50% lower than the 5.6 series.",
  "why_it_matters": "The cut‑price lets you run more AI calls for the same budget, and Sol’s error rate is half that of its predecessor, reaching Astra‑level reliability. Luna gives cheap, high‑throughput help for everyday document work. That means cheaper bots, better code assistants, and faster data‑processing tools.",
  "how_it_works": [
   {
    "step": "Efficiency upgrades",
    "detail": "OpenAI improved caching and inference pipelines, slashing compute per token and enabling the 50% price drop."
   },
   {
    "step": "Error reduction",
    "detail": "Sol’s internal factuality evaluation shows about half as many mistakes as its predecessor."
   },
   {
    "step": "Task specialization",
    "detail": "Luna is tuned for high‑volume, goal‑driven tasks like summarization and extraction, while Sol focuses on complex reasoning and programming."
   }
  ],
  "what_to_build": [
   "A low‑cost code‑assistant using the GPT‑6 Sol API for real‑time bug fixes.",
   "A document‑summarization SaaS that leverages Luna’s cheap, high‑throughput API."
  ],
  "what_to_watch": "Anthropic’s response with newer Opus models could spark further price or capability battles.",
  "tags": [
   "gpt-6",
   "sol",
   "luna"
  ],
  "importance": 2.0,
  "sources": [
   "OpenAI",
   "TechCrunch"
  ]
 },
 {
  "id": "747912d4f53e",
  "topic": "photography",
  "headline": "Leica M lenses get autofocus on Canon RF bodies",
  "summary": "Megadap’s M2RF adapter adds electronic AF to classic M lenses for Canon mirrorless cameras.",
  "what_happened": "Megadap released the M2RF adapter, a purely electronic helicoid mount that lets Leica M lenses autofocus on Canon RF cameras. It’s built from machined aluminum, weighs 183 g, and uses a core‑less motor with Hall‑effect sensors.",
  "why_it_matters": "You can finally use your vintage M glass on a modern Canon mirrorless without manual focus hunting. That means faster shooting, better video, and more creative freedom with lenses you already own.",
  "how_it_works": [
   {
    "step": "Mount",
    "detail": "Adapter attaches to the Canon RF mount and provides a Leica M mount at the front."
   },
   {
    "step": "Drive",
    "detail": "A custom core‑less motor drives a 4.5 mm electronic helicoid to move the lens barrel."
   },
   {
    "step": "Control",
    "detail": "Dual Hall‑effect sensors track barrel position, letting the camera’s AF system focus precisely."
   }
  ],
  "what_to_build": [
   "A small utility that logs focus distance data from the adapter via its magnetic firmware port for lens profiling."
  ],
  "what_to_watch": "Megadap may add firmware updates or a USB‑C port, expanding compatibility and performance.",
  "tags": [
   "leica",
   "canon",
   "adapter"
  ],
  "importance": 1.92,
  "sources": [
   "Fstoppers"
  ]
 },
 {
  "id": "a1051702ef9c",
  "topic": "products",
  "headline": "Meta Connect 2026 expected to reveal new AI glasses and a VR headset",
  "summary": "Meta is expected to showcase AI glasses without cameras and possibly a new Quest XR/VR headset at its Connect 2026 keynote, continuing its hardware push.",
  "what_happened": "Meta is expected to showcase a new pair of AI glasses that lack cameras and may also introduce a fresh Quest XR/VR headset during the Connect 2026 keynote.",
  "why_it_matters": "New hardware means fresh SDKs and sensor data you can tap for AR/VR and AI apps. Early access could give you a head start on building next‑gen immersive experiences.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch the keynote for developer tool announcements and API details for the new glasses and headset.",
  "tags": [
   "meta",
   "ai-glasses",
   "vr"
  ],
  "importance": 1.92,
  "sources": [
   "Engadget"
  ]
 },
 {
  "id": "21b9aad24b71",
  "topic": "programming",
  "headline": "Zig advice from a Munich conference",
  "summary": "A speaker at Zigtoberfest broke down Zig learning into three tiers: newcomers, intermediate, and advanced users.",
  "what_happened": "At Zigtoberfest in Munich, a speaker gave a talk on how to approach Zig at different skill levels. He urged newcomers to think in terms of target hardware, intermediate users to own build scripts and dependencies, and advanced users to finish passion projects.",
  "why_it_matters": "Understanding Zig’s low‑level focus can help you avoid fragile dependency chains and give you deeper control over system behavior, which is valuable for building robust system‑level applications.",
  "how_it_works": [],
  "what_to_build": [],
  "what_to_watch": "Watch for more Zig community events and the growing All Your Codebase repository for cross‑platform build scripts.",
  "tags": [
   "zig",
   "systems",
   "community"
  ],
  "importance": 1.9,
  "sources": [
   "Lobsters"
  ]
 },
 {
  "id": "f8d9a221b9a4",
  "topic": "technology",
  "headline": "Community fixes historic Portobello police station clock",
  "summary": "Volunteers untangled the old tower clock’s gears and a 2000‑era microcontroller to set the time and get the chime working again.",
  "what_happened": "Action Porty bought the abandoned police station and asked for help with the clock. Volunteers climbed the tower, disengaged a pawl on the gear train to turn the shaft and set the time, then figured out a PIC‑based control box that drives the chime motor.",
  "why_it_matters": "Heritage clocks are fragile blends of 19th‑century mechanics and modern electronics. Understanding how the old gear train and the DIY microcontroller box work lets you preserve community landmarks without expensive contractors.",
  "how_it_works": [
   {
    "step": "Disconnect motor",
    "detail": "Lift the pawl on the gear to free the hour/minute shaft, then turn the shaft manually to set the hands."
   },
   {
    "step": "Control box logic",
    "detail": "A PIC 16F628 reads a switch on the hour shaft, counts chimes, and powers the chime motor via relays. Holding the \"advance\" button steps the internal hour counter, causing a chime when released."
   },
   {
    "step": "Power and status",
    "detail": "Mains power runs the box; a LED flashes a fixed pattern unrelated to the time. The box has no built‑in clock—timing comes from the mechanical hour trigger."
   }
  ],
  "what_to_build": [
   "A simple web dashboard that reads the LED flashes (via a photodiode) and shows the clock’s current hour count.",
   "An Arduino‑style add‑on that logs chime events and lets volunteers remotely set the hour counter."
  ],
  "what_to_watch": "If the community adds a modern interface, other historic clocks may get similar retro‑fit upgrades.",
  "tags": [
   "clock",
   "community",
   "heritage"
  ],
  "importance": 3.21,
  "sources": [
   "Hacker News"
  ]
 }
];
