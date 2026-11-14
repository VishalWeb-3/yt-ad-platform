export const works = [
  { slug: "skippable-in-stream", img: "/images/work-1.png" },
  { slug: "non-skippable-in-stream", img: "/images/work-2.png" },
  { slug: "bumper-ads", img: "/images/work-3.webp" },
  { slug: "in-feed-video", img: "/images/work-4.png" },
  { slug: "shorts-ads", img: "/images/work-5.jpg" },
  { slug: "channel-growth", img: "/images/work-6.png" },
  { slug: "website-traffic", img: "/images/work-7.webp" },
  { slug: "local-awareness", img: "/images/work-8.png" },
  { slug: "", img: "/images/work-9.jpg" },
];

// Labels pinned on the team photo: what each part of the team handles.
export const teamTags = [
  { name: "Planning", dir: "down", left: 215, top: 100 },
  { name: "Formats", dir: "right", left: 92, top: 140 },
  { name: "Creative", dir: "up", left: 272, top: 200 },
  { name: "Targeting", dir: "down", left: 325, top: 100 },
  { name: "Setup", dir: "up", left: 362, top: 188 },
  { name: "Pricing", dir: "down", left: 418, top: 73 },
  { name: "Support", dir: "left", left: 502, top: 120 },
  { name: "Reporting", dir: "left", left: 522, top: 160 },
] as const;

export const people = [
  [
    ["Planning", "Goals & Budgets"],
    ["Formats", "Format Selection"],
    ["Targeting", "Audience Setup"],
    ["Creative", "Pre-Launch Review"],
  ],
  [
    ["Setup", "Launch & Scheduling"],
    ["Pricing", "Clear Quotes"],
    ["Support", "Help While You Run"],
    ["Reporting", "Views & Spend"],
  ],
];

export const services = [
  {
    title: "Campaign Planning",
    img: "/images/service-1.png",
    text: "Goals, budget, and timeline before anything goes live.",
  },
  {
    title: "Ad Formats",
    img: "/images/service-2.png",
    text: "In-stream, in-feed, bumper, and Shorts, matched to your goal.",
  },
  {
    title: "Audience Targeting",
    img: "/images/service-3.png",
    text: "Reach viewers by interest, topic, location, and more.",
  },
  {
    title: "Campaign Support",
    img: "/images/service-4.png",
    text: "Help with setup, changes, and questions while you run.",
  },
  {
    title: "Reporting",
    img: "/images/service-5.png",
    text: "Views, impressions, and spend in one clear report.",
  },
];

// "What to expect" cards. These are our own commitments, not customer quotes.
export const testimonials = [
  {
    name: "Pricing",
    role: "Before You Start",
    img: "/images/avatar-1.jpg",
    quote:
      "You see what your campaign costs before it launches. No hidden fees added along the way.",
  },
  {
    name: "Targeting",
    role: "Your Audience",
    img: "/images/avatar-3.jpg",
    quote:
      "You choose who should see your video. We set up the audience and show you exactly what was selected.",
  },
  {
    name: "Reporting",
    role: "After Launch",
    img: "/images/avatar-5.png",
    quote:
      "You get a report covering views, impressions, and spend, written so it is easy to read.",
  },
  {
    name: "Formats",
    role: "Your Options",
    img: "/images/avatar-2.jpg",
    quote:
      "We explain each ad format in plain terms so you can pick the one that fits your goal.",
  },
  {
    name: "Support",
    role: "While You Run",
    img: "/images/avatar-4.png",
    quote:
      "Questions during your campaign go to a person who knows how it was set up.",
  },
  {
    name: "Planning",
    role: "First Step",
    img: "/images/avatar-6.png",
    quote:
      "Every campaign starts with a short plan: your goal, your budget, and your timeline.",
  },
];

// Background avatar layer order (row 1, then row 2)
export const avatarRows = [
  [
    ["Pricing", "Before You Start", "/images/avatar-1.jpg"],
    ["Formats", "Your Options", "/images/avatar-2.jpg"],
    ["Targeting", "Your Audience", "/images/avatar-3.jpg"],
  ],
  [
    ["Support", "While You Run", "/images/avatar-4.png"],
    ["Reporting", "After Launch", "/images/avatar-5.png"],
    ["Planning", "First Step", "/images/avatar-6.png"],
  ],
];

// Who the platform is for (kinds of advertiser, not named clients).
export const clients = [
  ["Creators", "Musicians", "Podcasters", "Educators"],
  ["Startups", "Agencies", "Online Shops", "App Makers"],
  ["Gaming", "Local", "Events", "Courses"],
  ["Channels", "Brands", "Launches", "Nonprofits"],
];

export type TickerItem =
  | { kind: "shape"; img: string; mask: string }
  | { kind: "pill"; text: string; tone: "lime" | "pink" };

export const ticker: TickerItem[] = [
  { kind: "shape", img: "/images/cta-1.png", mask: "/images/mask-1.svg" },
  { kind: "pill", text: "IN_STREAM", tone: "lime" },
  { kind: "pill", text: "CPV?", tone: "pink" },
  { kind: "shape", img: "/images/cta-2.jpg", mask: "/images/mask-2.svg" },
  { kind: "pill", text: "In-Feed", tone: "lime" },
  { kind: "shape", img: "/images/cta-3.png", mask: "/images/mask-3.svg" },
  { kind: "pill", text: "Shorts", tone: "pink" },
];
