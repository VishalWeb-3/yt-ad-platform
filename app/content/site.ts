import type { ArtKind } from "./services";

export const BRAND = "WEB3TASK";
/** Placeholder until verified business contacts are supplied (PRD decision D01). */
export const CONTACT_EMAIL = "hello@example.com";
export const SUPPORT_HOURS = "Monday to Friday, 09:00 to 18:00 IST";
export const REVIEW_LEAD = "two business days";
export const QUOTE_VALIDITY = "7 days";

/* ───────── Workflow (PRD 11.8): seven stages ───────── */
export const workflow = [
  {
    title: "Choose a service",
    you: "Pick the format or campaign type that fits your goal.",
    we: "Explain each option in plain terms and flag anything quote-only.",
  },
  {
    title: "Define your audience",
    you: "Select countries, languages and who the video is for.",
    we: "Show which targeting options are available for your choice.",
  },
  {
    title: "Set your budget",
    you: "Enter the media budget you want to spend on advertising.",
    we: "Show media, agency fee and tax as separate lines.",
  },
  {
    title: "Submit your brief",
    you: "Review the summary and send it.",
    we: "Confirm receipt and tell you the next step.",
  },
  {
    title: "Review",
    you: "Answer any questions and approve the quote.",
    we: `Check the video, rights and targeting, normally within ${REVIEW_LEAD}.`,
  },
  {
    title: "Execution",
    you: "Stay reachable in case something needs a decision.",
    we: "Set up the campaign, verify it is live and monitor delivery.",
  },
  {
    title: "Reporting",
    you: "Read the report and decide what to do next.",
    we: "Deliver a source-labelled report reconciled against spend.",
  },
];

/* ───────── Why choose us (PRD 11.7): observable process, not superlatives ───────── */
export const why = [
  {
    title: "Strategy",
    text: "Every campaign starts from a written brief: goal, audience, budget and dates. You approve it before anything is set up.",
  },
  {
    title: "Targeting",
    text: "You see the exact countries, languages and audience settings requested, and which location option was used.",
  },
  {
    title: "Reporting",
    text: "Reports label where each number came from and how fresh it is, and separate measured results from estimates.",
  },
  {
    title: "Flexibility",
    text: "Formats can be combined and budgets split across markets. Changes after approval go through a visible amendment.",
  },
  {
    title: "Support",
    text: `Questions go to the team running your campaign, ${SUPPORT_HOURS}.`,
  },
];

/* ───────── Format comparison (PRD 11.6) ───────── */
export const formats: {
  key: string;
  name: string;
  art: ArtKind;
  href: string;
  placement: string;
  goal: string;
  creative: string;
  metric: string;
}[] = [
  {
    key: "skippable",
    name: "Skippable in-stream",
    art: "instream",
    href: "/services/in-stream",
    placement: "Before, during or after other videos. Viewers can skip after five seconds.",
    goal: "Views and consideration; reach.",
    creative: "Any length, with a strong opening five seconds.",
    metric: "Views family: eligible views, view rate, impressions.",
  },
  {
    key: "non-skippable",
    name: "Non-skippable in-stream",
    art: "phones",
    href: "/services/in-stream",
    placement: "Before, during or after other videos. Plays in full.",
    goal: "Reach and awareness.",
    creative: "A short, complete message cut for the format.",
    metric: "Impressions family: impressions, reach, frequency.",
  },
  {
    key: "in-feed",
    name: "In-feed video",
    art: "infeed",
    href: "/services/in-feed",
    placement: "Search results, Home feed and next to related videos. Viewers click to watch.",
    goal: "Discovery, views and consideration.",
    creative: "Thumbnail, headline and a video that delivers on both.",
    metric: "Views family: impressions, clicks to watch, eligible views.",
  },
  {
    key: "shorts",
    name: "Shorts",
    art: "shorts",
    href: "/services/shorts",
    placement: "Between Shorts in the Shorts feed, mainly on mobile.",
    goal: "Mobile reach, awareness and views.",
    creative: "Vertical, short and readable without sound.",
    metric: "Views family, as defined for the campaign type that ran.",
  },
  {
    key: "display",
    name: "Display",
    art: "display",
    href: "/services/display",
    placement: "Image and banner placements alongside content.",
    goal: "Awareness and traffic.",
    creative: "Image assets, headline and a working destination page.",
    metric: "Impressions family: impressions and clicks. Never counted as views.",
  },
];

/* ───────── Campaign strategy (PRD 11.12) ───────── */
export const strategy = [
  { title: "Audience research", owner: "We do", text: "Turn your brief into a defined audience and check what targeting is available." },
  { title: "Media plan", owner: "We propose, you approve", text: "Formats, markets, schedule and budget allocation, written into a quote." },
  { title: "Approval", owner: "You decide", text: "Nothing is set up until you accept the quote and the video passes review." },
  { title: "Optimisation", owner: "We do, and record", text: "Changes during the campaign are logged with the reason and the time they took effect." },
  { title: "Reporting", owner: "We deliver, you review", text: "A reconciled report with definitions, sources and data freshness." },
];

/* ───────── Analytics preview definitions (PRD 11.11) ───────── */
export const metricDefs = [
  ["Impressions", "How many times an ad was shown."],
  ["Eligible views", "Views as defined by Google Ads for the format that ran."],
  ["Clicks", "Clicks on the ad or its link."],
  ["Spend", "Advertising cost for the period, excluding agency fee and tax."],
];

/* ───────── Solutions (PRD /solutions): creator, music, brand, agency ───────── */
export type Segment = {
  slug: string;
  name: string;
  art: ArtKind;
  card: string;
  headline: string;
  intro: string;
  problems: string[];
  help: string[];
  journey: string[];
  services: string[];
};

export const solutions: Segment[] = [
  {
    slug: "creators",
    name: "Creators",
    art: "channel",
    card: "Affordable exposure for your videos, without confusing metrics or hidden costs.",
    headline: "Get your videos seen, and know what you paid for.",
    intro:
      "If you make videos, you want real people to find them and you want to understand the bill. We run paid YouTube advertising for individual creators with simple formats, a visible budget split and email order tracking.",
    problems: [
      "Worry about fake engagement and services that break YouTube's rules",
      "Prices that hide what goes to advertising and what goes to fees",
      "Reports full of terms nobody explained",
    ],
    help: [
      "Only Google Ads campaigns. No bots, no purchased subscribers.",
      "Media budget, agency fee and tax shown as separate lines",
      "Plain-language definitions next to every metric",
      "Forms that work properly on a phone",
    ],
    journey: ["Pick a service", "Complete the planner", "Review and pay", "Track by email"],
    services: ["google-ads-video-views", "in-feed", "channel-promotion", "shorts"],
  },
  {
    slug: "music",
    name: "Music artists and labels",
    art: "music",
    card: "Release campaigns built around a date, a rights check and the territories you choose.",
    headline: "Launch a music video in the markets you choose.",
    intro:
      "Releases run on deadlines. We plan promotion around your release date, check rights and eligibility in advance, and set the campaign to begin when the video goes live in your selected territories.",
    problems: [
      "Release deadlines that leave no room for ad review surprises",
      "Rights and approval questions that surface too late",
      "Budget spent in countries that do not matter to the release",
    ],
    help: [
      "A launch brief with release date, time zone and territories",
      "Rights confirmation and a creative checklist before launch",
      "Budget weighted toward your priority markets",
      "A completion report by territory where data is available",
    ],
    journey: ["Music solution", "Launch brief", "Rights check", "Scheduled campaign"],
    services: ["music-video", "worldwide", "country-targeted", "shorts"],
  },
  {
    slug: "brands",
    name: "Businesses and brands",
    art: "brand",
    card: "Reach prospective customers and see outcomes with their sources labelled.",
    headline: "Reach the right customers and measure what happened.",
    intro:
      "Brands need to know who saw the campaign and what the numbers mean. We start with your objective, set up the measurement that fits it, and report with every figure traced to its source.",
    problems: [
      "Unclear attribution between advertising and results",
      "Inconsistent execution from one campaign to the next",
      "Charts that look good and explain nothing",
    ],
    help: [
      "Objective selection that determines format and metric",
      "A conversion setup checklist where the goal needs one",
      "Budget control with media and fees kept apart",
      "Source-labelled data and understandable charts",
    ],
    journey: ["Industry page", "Consultation", "Campaign brief", "Report"],
    services: ["brand-awareness", "in-stream", "display", "country-targeted"],
  },
  {
    slug: "agencies",
    name: "Marketing agencies",
    art: "camera",
    card: "Repeat campaigns for multiple client brands, with strict separation between them.",
    headline: "Run repeat campaigns for every client, kept apart.",
    intro:
      "Agencies place campaigns again and again for different brands. We are building for that: reusable briefs, client labels, exports and clear fee terms, with strict boundaries between one client's data and the next.",
    problems: [
      "Entering the same brief details for every campaign",
      "Invoices scattered across clients and inboxes",
      "Risk of one client's data appearing in another's report",
    ],
    help: [
      "Briefs organised per client brand",
      "Transparent fee terms you can pass on or absorb",
      "Reports and invoices exportable per client",
      "A named contact for assignment and status questions",
    ],
    journey: ["Agency solution", "Account", "Repeat a prior brief", "Approve the new quote"],
    services: ["enterprise", "google-ads-video-views", "brand-awareness", "worldwide"],
  },
];

/* ───────── Industries (PRD /industries): distinct business problems ───────── */
export const industries: Segment[] = [
  {
    slug: "ecommerce",
    name: "Ecommerce",
    art: "display",
    card: "Show products in video and send interested viewers to the store.",
    headline: "Show the product. Send viewers to the store.",
    intro:
      "Online shops use video to show what a photo cannot. The campaign's job is to put that video in front of likely buyers and give them a clear way to reach the product page.",
    problems: [
      "Viewers who watch but have no obvious next step",
      "Landing pages that do not match the ad",
      "Seasonal peaks that need campaigns ready on time",
    ],
    help: [
      "Formats that carry a link alongside the video",
      "A destination check before any spend begins",
      "Scheduling agreed ahead of sales periods",
      "Clicks reported as clicks; on-site sales remain yours to measure",
    ],
    journey: ["Brief", "Destination check", "Launch", "Report"],
    services: ["in-stream", "display", "country-targeted", "shorts"],
  },
  {
    slug: "startups",
    name: "Startups",
    art: "views",
    card: "Explain a new product to a defined audience on a controlled budget.",
    headline: "Explain something new to the people who need it.",
    intro:
      "A new product has to be explained before it can be chosen. Video does that well, and a modest, well-targeted campaign shows whether the message lands before you commit more.",
    problems: [
      "Small budgets that cannot afford waste",
      "No historical data to plan from",
      "A message that is still being refined",
    ],
    help: [
      "Tight audience definitions over broad reach",
      "Budgets set by you, with fees visible from the start",
      "Reports that show what to keep and what to change",
      "No long commitments",
    ],
    journey: ["Brief", "Quote", "Short campaign", "Review and decide"],
    services: ["google-ads-video-views", "in-feed", "country-targeted", "brand-awareness"],
  },
  {
    slug: "education",
    name: "Education and courses",
    art: "infeed",
    card: "Reach learners searching for the subjects you teach.",
    headline: "Reach people looking to learn what you teach.",
    intro:
      "Learners search YouTube by topic. Courses, schools and educators can appear in those searches and next to related lessons with video that shows the teaching itself.",
    problems: [
      "Enrolment dates that set hard deadlines",
      "Audiences defined by interest, not demographics",
      "Long videos that need a deliberate viewer",
    ],
    help: [
      "In-feed placements against relevant topics and searches",
      "Schedules planned back from enrolment dates",
      "Country and language targeting for each intake",
      "Views reported with the definition used",
    ],
    journey: ["Brief", "Topic targeting", "Launch", "Report"],
    services: ["in-feed", "google-ads-video-views", "country-targeted", "channel-promotion"],
  },
  {
    slug: "gaming",
    name: "Gaming",
    art: "shorts",
    card: "Trailers, launches and channels in front of players by interest and region.",
    headline: "Put the trailer in front of players.",
    intro:
      "Game launches, updates and gaming channels compete for attention in a crowded feed. Campaigns work when the audience is defined by what people play and watch, and the creative suits the placement.",
    problems: [
      "Launch dates fixed long in advance",
      "Regional releases with different timing",
      "Vertical and horizontal cuts needed for different placements",
    ],
    help: [
      "Interest and topic targeting around games and genres",
      "Country schedules matched to regional release dates",
      "Shorts and in-stream planned together",
      "Per-market reporting where available",
    ],
    journey: ["Brief", "Format mix", "Launch", "Report"],
    services: ["shorts", "in-stream", "worldwide", "live-event"],
  },
  {
    slug: "local-business",
    name: "Local business",
    art: "country",
    card: "Reach viewers in the area you serve, and nobody you cannot.",
    headline: "Reach viewers near you.",
    intro:
      "Shops, restaurants, venues and services only need to reach people who can visit. Location targeting keeps the budget inside your area.",
    problems: [
      "Paying to reach people too far away to become customers",
      "Small audiences that limit how much can be spent well",
      "Little time to manage advertising",
    ],
    help: [
      "City and region targeting where Google Ads supports it",
      "An honest view of how many people the area can reach",
      "A budget sized to the audience",
      "A short report in plain language",
    ],
    journey: ["Brief", "Area check", "Launch", "Report"],
    services: ["country-targeted", "in-stream", "live-event", "display"],
  },
  {
    slug: "events",
    name: "Entertainment and events",
    art: "live",
    card: "Build awareness in the window before a show, stream or premiere.",
    headline: "Fill the days before the date.",
    intro:
      "Events have one date. Promotion has to reach the right region inside a fixed window, and plans need a fallback if the schedule moves.",
    problems: [
      "A fixed date with no room to rerun",
      "Time zones across audiences",
      "Changes or cancellations close to the event",
    ],
    help: [
      "A promotion window planned back from the event time",
      "Scheduling against the event's time zone",
      "A fallback creative agreed in advance",
      "No promises about attendance or concurrent viewers",
    ],
    journey: ["Event brief", "Window and fallback", "Promotion", "Report"],
    services: ["live-event", "country-targeted", "shorts", "music-video"],
  },
];

/* ───────── FAQ (PRD 11.16): eight topics ───────── */
export const faqTopics: { key: string; title: string; items: [string, string][] }[] = [
  {
    key: "setup",
    title: "Setup",
    items: [
      ["What do you need from me to start?", "A link to the video or channel, your goal, the countries and languages you want, a media budget and your dates. The campaign planner collects all of it in ten short steps."],
      ["Do I need my own Google Ads account?", "Tell us in your brief whether you have one. We never ask for the password to your Google account."],
      ["Does my video need to be public?", "It needs to be public or unlisted and eligible to run as an ad. Private videos cannot be advertised."],
    ],
  },
  {
    key: "targeting",
    title: "Targeting",
    items: [
      ["Who will see my ad?", "The audience defined in your brief: countries, languages and any demographic, interest or topic targeting that Google Ads supports for your campaign."],
      ["Can I exclude countries?", "Yes. Exclusions always take priority over inclusions, including in worldwide campaigns."],
      ["Is every targeting option always available?", "No. Availability depends on format, market and account. We confirm what applies during review and treat it as a prerequisite, not a promise."],
    ],
  },
  {
    key: "budgets",
    title: "Budgets",
    items: [
      ["How is the price made up?", "Three separate lines: your media budget, which is spent on advertising; our agency fee; and any applicable tax. They are never merged into one figure."],
      ["Is there a minimum budget?", "Minimums are set per service and shown in your quote. Where a service is quote-only, we confirm the figure after reviewing your brief."],
      ["Will my budget buy a set number of views?", "No fixed number. Delivery depends on format, market and competition. When we give a range, it is labelled as an estimate with its basis."],
    ],
  },
  {
    key: "formats",
    title: "Formats",
    items: [
      ["Which format should I choose?", "It depends on the goal. In-stream suits reach and views, in-feed suits discovery, Shorts suits mobile, display suits visibility and traffic. The comparison on the home page sets them side by side."],
      ["Can I use more than one format?", "Yes. Each runs as its own campaign and is reported separately."],
      ["Are display impressions counted as views?", "Never. Impressions and views are different metric families and are reported apart."],
    ],
  },
  {
    key: "reporting",
    title: "Reporting",
    items: [
      ["What will my report show?", "Impressions, eligible views, clicks and spend for the campaign, with a definition for each, the source of the data and how fresh it is."],
      ["Why might the report differ from my public view count?", "Google Ads and the public YouTube counter measure views differently. The report states which definition it uses."],
      ["When do I get the report?", "After the campaign ends and spend has been reconciled. Progress is visible through order tracking in the meantime."],
    ],
  },
  {
    key: "timelines",
    title: "Timelines",
    items: [
      ["How soon can a campaign start?", `Our standard review lead time is ${REVIEW_LEAD}. Urgent requests are handled as a custom quote.`],
      ["Does payment mean my ad is live?", "No. An ad is live only after the video passes review, the campaign is set up and we have verified it is serving. We tell you at each stage."],
      ["What can delay a launch?", "A video that is private or not ad-eligible, unresolved rights, missing information, or advertising platform review."],
    ],
  },
  {
    key: "payments",
    title: "Payments",
    items: [
      ["How do I pay?", "Your quote explains the payment options available for your order. Where online checkout is not offered, we issue an invoice."],
      ["Which currency do you bill in?", "Each order has one currency, shown on the quote and the invoice. There is no hidden currency conversion."],
      ["How long is a quote valid?", `Quotes are valid for ${QUOTE_VALIDITY}. After that we issue an updated version for you to accept.`],
    ],
  },
  {
    key: "cancellation",
    title: "Cancellation",
    items: [
      ["Can I cancel?", "Yes. What is refundable depends on the stage the order has reached and on advertising costs already incurred. The refund and cancellation policy sets out each stage."],
      ["What happens to unspent media budget?", "Unspent, uncommitted media budget is treated as refundable under the policy. Fee treatment is stated in your terms."],
      ["How do I request a change or refund?", "Contact support with your order reference. Changes after approval are handled as amendments so the scope and price stay clear."],
    ],
  },
];

/* ───────── Markets you can request. Final availability is confirmed at review. ───────── */
export const countries: [string, string][] = [
  ["AR", "Argentina"], ["AU", "Australia"], ["AT", "Austria"], ["BD", "Bangladesh"], ["BE", "Belgium"],
  ["BR", "Brazil"], ["CA", "Canada"], ["CL", "Chile"], ["CO", "Colombia"], ["CZ", "Czechia"],
  ["DK", "Denmark"], ["EG", "Egypt"], ["FI", "Finland"], ["FR", "France"], ["DE", "Germany"],
  ["GH", "Ghana"], ["GR", "Greece"], ["HK", "Hong Kong"], ["IN", "India"], ["ID", "Indonesia"],
  ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["JP", "Japan"], ["KE", "Kenya"],
  ["MY", "Malaysia"], ["MX", "Mexico"], ["NL", "Netherlands"], ["NZ", "New Zealand"], ["NG", "Nigeria"],
  ["NO", "Norway"], ["PK", "Pakistan"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"],
  ["PT", "Portugal"], ["RO", "Romania"], ["SA", "Saudi Arabia"], ["SG", "Singapore"], ["ZA", "South Africa"],
  ["KR", "South Korea"], ["ES", "Spain"], ["SE", "Sweden"], ["CH", "Switzerland"], ["TH", "Thailand"],
  ["TR", "Türkiye"], ["AE", "United Arab Emirates"], ["GB", "United Kingdom"], ["US", "United States"], ["VN", "Vietnam"],
];

export const objectives = ["Video views", "Reach and awareness", "Channel awareness", "Website traffic", "Event awareness"];
export const languages = ["English", "Spanish", "Portuguese", "French", "German", "Hindi", "Arabic", "Indonesian", "Japanese", "Korean"];

/* ───────── Navigation ───────── */
export const navCompany = [
  ["About", "/about"],
  ["How it works", "/how-it-works"],
  ["Pricing", "/pricing"],
  ["Case studies", "/case-studies"],
  ["Contact", "/contact"],
];
export const navResources = [
  ["Resources", "/resources"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["YouTube advertising", "/youtube-advertising"],
];
export const navLegal = [
  ["Privacy policy", "/privacy"],
  ["Terms of service", "/terms"],
  ["Refund and cancellation", "/refund-policy"],
  ["Cookie policy", "/cookies"],
  ["Advertising disclosures", "/advertising-disclosures"],
  ["Photo credits", "/credits"],
];
