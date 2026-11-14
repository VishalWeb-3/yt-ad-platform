import type { PhotoKey } from "./photos";
export type ArtKind = PhotoKey;

export type Service = {
  id: string;
  slug: string;
  /** Route, when the service does not live under /services */
  href?: string;
  name: string;
  category: "Ad formats" | "Geography" | "Promotion" | "Managed";
  art: ArtKind;
  card: string;
  outcome: string;
  headline: string;
  summary: string;
  placement: string;
  objective: string;
  metric: string;
  goals: string[];
  inputs: string[];
  creative: string[];
  audience: string;
  limits: string[];
  faqs: [string, string][];
  related: string[];
};

export const services: Service[] = [
  {
    id: "S01",
    slug: "google-ads-video-views",
    name: "Google Ads Video Views",
    category: "Ad formats",
    art: "views",
    card: "Paid video campaigns that put your video in front of a defined audience.",
    outcome: "Eligible platform views",
    headline: "Views from people who chose to watch.",
    summary:
      "We run your video as a Google Ads video campaign so it is shown to an audience you define on YouTube. You pay for advertising delivery, and we report the eligible views that Google Ads records for it.",
    placement:
      "YouTube watch pages, search results and feeds, depending on which ad formats suit your video.",
    objective: "Video views and consideration.",
    metric:
      "Eligible paid views, view rate, impressions and cost, reported from Google Ads. Cost per view applies only to formats billed that way.",
    goals: [
      "Get a new upload seen by a relevant audience",
      "Support a release in the countries that matter to you",
      "Introduce a channel to viewers who have not found it yet",
    ],
    inputs: [
      "Video URL (public or unlisted, and eligible to run as an ad)",
      "Campaign objective",
      "Media budget",
      "Target countries and languages",
    ],
    creative: [
      "The video complies with Google Ads and YouTube policies",
      "You hold the rights to everything in it, including music",
      "The first five seconds make clear what the video is",
      "Captions are recommended",
    ],
    audience:
      "Targeting can combine geography, language, demographics, interests and topics where Google Ads supports them. We confirm what is available for your campaign during review and show you exactly what was requested.",
    limits: [
      "Views reported in Google Ads and the public counter on YouTube are measured differently and may not match.",
      "A view is not a subscriber, a like or a comment. We do not sell or guarantee any of those.",
    ],
    faqs: [
      [
        "What counts as a view?",
        "We report eligible views as defined and recorded by Google Ads for the format that ran. The definition differs by format, so each report states which one applies.",
      ],
      [
        "Can you tell me how many views my budget will buy?",
        "Only when we have a defensible baseline for your format and markets. When we share a range, it is labelled as an estimate with the data it is based on. It is never a promise.",
      ],
      [
        "Do these views come from real people?",
        "Yes. This is paid advertising delivered by Google Ads to YouTube viewers. We do not use bots or artificial engagement of any kind.",
      ],
    ],
    related: ["in-stream", "in-feed", "channel-promotion"],
  },
  {
    id: "S02",
    slug: "in-stream",
    name: "In-Stream Advertising",
    category: "Ad formats",
    art: "instream",
    card: "Skippable and non-skippable ads that play before, during or after other videos.",
    outcome: "Reach, awareness and eligible views",
    headline: "Your video, where people are already watching.",
    summary:
      "In-stream ads play before, during or after other videos on YouTube. Skippable ads let viewers skip after five seconds; non-skippable ads are short and play in full. We help you choose between them and set the campaign up around your goal.",
    placement: "Before, during or after videos on YouTube watch pages.",
    objective: "Reach and awareness, or views and consideration.",
    metric:
      "Impressions, eligible views and view rate for skippable ads; impressions and reach for non-skippable ads.",
    goals: [
      "Reach a wide audience with a message that plays in full",
      "Earn views from people who choose not to skip",
      "Keep a launch visible across a set period",
    ],
    inputs: [
      "Video URL",
      "Skippable or non-skippable request",
      "Objective and media budget",
      "Countries, languages and audience notes",
    ],
    creative: [
      "Non-skippable ads must be short. We check your video length against the format before launch.",
      "Skippable ads should earn attention in the first five seconds",
      "Audio and visuals comply with Google Ads policies",
      "A clear next step, if you want viewers to act",
    ],
    audience:
      "In-stream campaigns can target by geography, language, demographics, interests and topics where supported. Reach and frequency settings are agreed with you before launch.",
    limits: [
      "Non-skippable availability depends on your video length and on account and creative eligibility.",
      "Impressions from non-skippable ads are not reported as views.",
    ],
    faqs: [
      [
        "Which should I choose, skippable or non-skippable?",
        "Skippable suits longer videos and view goals, because interested people stay. Non-skippable suits a short, complete message. If you are unsure, tell us the goal and we will recommend one in your quote.",
      ],
      [
        "How long can my ad be?",
        "Skippable ads can be longer, though the opening seconds matter most. Non-skippable ads have a short maximum length set by Google Ads, and we confirm the current limit at review.",
      ],
      [
        "Can I run both?",
        "Yes. Many campaigns pair a skippable video with a shorter non-skippable cut. Each is set up and reported separately.",
      ],
    ],
    related: ["google-ads-video-views", "shorts", "brand-awareness"],
  },
  {
    id: "S03",
    slug: "in-feed",
    name: "In-Feed Advertising",
    category: "Ad formats",
    art: "infeed",
    card: "A thumbnail and headline in search results and feeds. Viewers click to watch.",
    outcome: "Video discovery and eligible views",
    headline: "Show up where people are browsing.",
    summary:
      "In-feed video ads appear as a thumbnail and text in YouTube search results, next to related videos and on the Home feed. Nothing plays until the viewer clicks, so every view starts with a decision to watch. You may know this format by its earlier name, video discovery ads.",
    placement: "YouTube search results, the Home feed and alongside related videos.",
    objective: "Video discovery, views and consideration.",
    metric: "Impressions, clicks to watch and eligible views.",
    goals: [
      "Appear when people search for topics your video covers",
      "Sit next to videos your audience already watches",
      "Promote longer content that people choose to open",
    ],
    inputs: [
      "Video URL",
      "Thumbnail and headline text",
      "Topics, searches or channels the video relates to",
      "Media budget, countries and languages",
    ],
    creative: [
      "A clear, accurate thumbnail",
      "A headline that says what the video is, without clickbait",
      "The video delivers what the thumbnail and headline promise",
    ],
    audience:
      "In-feed targeting leans on what people are searching for and watching: keywords, topics and related content, combined with geography and language.",
    limits: [
      "Because viewers must click, in-feed ads usually reach fewer people than in-stream for the same budget, in exchange for more deliberate views.",
      "Thumbnail and text are reviewed by Google Ads and may be disapproved.",
    ],
    faqs: [
      [
        "Is this the same as Discovery ads?",
        "In-feed video ads were previously called video discovery ads. We use the current name and mention the old one only so you can recognise it.",
      ],
      [
        "Do I need a custom thumbnail?",
        "It helps. The thumbnail does most of the work in this format, so we review it with you before launch.",
      ],
      [
        "Where exactly will my ad show?",
        "In YouTube search results, on the Home feed and next to related videos. Your report breaks delivery down where Google Ads provides that detail.",
      ],
    ],
    related: ["google-ads-video-views", "channel-promotion", "music-video"],
  },
  {
    id: "S04",
    slug: "shorts",
    name: "YouTube Shorts Advertising",
    category: "Ad formats",
    art: "shorts",
    card: "Vertical video ads that appear between Shorts on mobile.",
    outcome: "Mobile video exposure",
    headline: "Vertical video, in the scroll.",
    summary:
      "Shorts ads are vertical video ads that appear between Shorts in the Shorts feed. Viewers swipe past them like any other Short, so the creative has to be made for a phone screen and get to the point quickly.",
    placement: "Between Shorts in the YouTube Shorts feed, mainly on mobile.",
    objective: "Mobile reach and awareness, or views.",
    metric: "Impressions, eligible views and engagement, as reported by Google Ads.",
    goals: [
      "Reach a mobile-first audience",
      "Tease a longer video, release or launch",
      "Reuse vertical content you already make",
    ],
    inputs: [
      "Shorts-compatible video URL",
      "Objective and media budget",
      "Countries and languages",
      "Campaign duration",
    ],
    creative: [
      "Vertical framing made for a phone",
      "Short, with the main point in the opening seconds",
      "Readable without sound, since many viewers scroll muted",
    ],
    audience:
      "Shorts delivery can be targeted by geography, language, demographics and interests where supported. Eligible delivery depends on the creative and the campaign type.",
    limits: [
      "Horizontal video can be ineligible or perform poorly in the Shorts feed. We tell you before you spend on it.",
      "Shorts inventory and measurement options vary by market.",
    ],
    faqs: [
      [
        "Can I use a normal horizontal video?",
        "We do not recommend it. If vertical footage is not available, another format will usually serve the video better, and we will say so.",
      ],
      [
        "How long should a Shorts ad be?",
        "Short. We check your video against current Shorts requirements at review and tell you if it needs a trim.",
      ],
      [
        "How are Shorts views measured?",
        "Your report uses the definitions Google Ads applies to the campaign type that ran, and states them.",
      ],
    ],
    related: ["in-stream", "music-video", "brand-awareness"],
  },
  {
    id: "S05",
    slug: "display",
    name: "Display Advertising",
    category: "Ad formats",
    art: "display",
    card: "Image and banner placements measured in impressions and clicks, not views.",
    outcome: "Display impressions and clicks",
    headline: "Be seen around the video, not only in it.",
    summary:
      "Display advertising places image or banner creative alongside content. It is measured in impressions and clicks. It is a different thing from a video view, and we never report or bill it as one.",
    placement: "Display placements on YouTube and eligible partner inventory, depending on the brief.",
    objective: "Awareness and traffic.",
    metric: "Impressions, clicks and click-through rate.",
    goals: [
      "Support a video campaign with additional visibility",
      "Send people to a site, store or sign-up page",
      "Stay visible to an audience across a longer period",
    ],
    inputs: [
      "Placement and creative brief",
      "Image assets, headlines and destination URL",
      "Media budget, countries and languages",
    ],
    creative: [
      "Image assets in the sizes the placement needs",
      "Short headline and description",
      "A destination page that works and matches the ad",
    ],
    audience:
      "Display can be targeted by geography, language, demographics, interests, topics and placements where supported.",
    limits: [
      "Display impressions are not video views and are never counted toward view totals.",
      "Display is requested through a brief, not the standard planner price.",
    ],
    faqs: [
      [
        "Why is display treated separately from views?",
        "Because an impression means an ad was shown, while a view means a video was watched under a defined condition. Mixing them would overstate results.",
      ],
      [
        "Can you design the banners?",
        "Creative production is quoted separately. Tell us what you need in the brief.",
      ],
      [
        "Can display run alongside my video campaign?",
        "Yes. It is set up as its own campaign and reported in its own section.",
      ],
    ],
    related: ["brand-awareness", "in-stream", "worldwide"],
  },
  {
    id: "S06",
    slug: "worldwide",
    name: "Worldwide Advertising",
    category: "Geography",
    art: "worldwide",
    card: "One campaign plan across many countries, with explicit inclusions and exclusions.",
    outcome: "Multi-market delivery",
    headline: "Many markets, one plan.",
    summary:
      "Worldwide advertising runs your video across a broad set of countries. It never means everywhere: it resolves to an explicit list of supported countries that you can see, with any exclusions you choose removed.",
    placement: "Depends on the ad formats selected for the campaign.",
    objective: "Broad reach, awareness or views across markets.",
    metric: "The metrics for your chosen format, broken down by country where available.",
    goals: [
      "Launch to an international audience at once",
      "Find out which markets respond before focusing spend",
      "Reach a language audience spread across countries",
    ],
    inputs: [
      "Video URL and format",
      "Countries to exclude, if any",
      "Languages",
      "Media budget and how to allocate it across markets",
    ],
    creative: [
      "Language of the video matches the languages targeted",
      "Captions or localised versions for mixed-language markets",
      "Content suitable for every included country",
    ],
    audience:
      "You choose worldwide, we show the resulting country list, and exclusions always win. Budget can be allocated evenly or weighted toward markets you prioritise.",
    limits: [
      "Not every country is available for every format. The supported list is shown before you submit.",
      "Costs and delivery vary widely between markets, so country-level results will differ.",
    ],
    faqs: [
      [
        "Does worldwide mean every country?",
        "No. It means every country currently enabled for the service, minus your exclusions. You see the list before you submit a brief.",
      ],
      [
        "Can I exclude specific countries?",
        "Yes. Exclusions always take priority over inclusions.",
      ],
      [
        "How is budget split between countries?",
        "By the allocation method agreed in your quote. The report shows spend and delivery per country where Google Ads provides it.",
      ],
    ],
    related: ["country-targeted", "music-video", "enterprise"],
  },
  {
    id: "S07",
    slug: "country-targeted",
    name: "Country-Targeted Advertising",
    category: "Geography",
    art: "country",
    card: "Deliver to the specific countries, and where supported regions or cities, you choose.",
    outcome: "Selected market delivery",
    headline: "Reach the markets you choose.",
    summary:
      "Country-targeted advertising delivers your campaign only in the markets you select. Where Google Ads supports it, targeting can narrow to regions or cities, and we tell you how location is determined.",
    placement: "Depends on the ad formats selected for the campaign.",
    objective: "Reach, awareness or views within selected markets.",
    metric: "The metrics for your chosen format, reported for the selected markets.",
    goals: [
      "Promote in the countries where you sell or perform",
      "Support a local launch, tour or event",
      "Avoid paying to reach people outside your market",
    ],
    inputs: [
      "Video URL and format",
      "Country selection",
      "Optional regions or cities, where supported",
      "Languages and media budget",
    ],
    creative: [
      "Language and references that fit the market",
      "Local details correct: dates, currency, availability",
      "Content that meets local advertising rules",
    ],
    audience:
      "Location targeting uses the options Google Ads provides, such as people in or regularly in a location. We state which option was used so the report can be read correctly.",
    limits: [
      "Small areas mean small audiences. We tell you roughly what your targeting can reach before you set a budget, when a baseline exists.",
      "Region and city targeting is not available everywhere.",
    ],
    faqs: [
      [
        "How precise is location targeting?",
        "It is based on Google's location signals and is not exact for every viewer. We disclose the location option used in your campaign.",
      ],
      [
        "Can I target a single city?",
        "Where Google Ads supports it for that city, yes. Very small areas may not have enough audience to deliver.",
      ],
      [
        "Can I change countries after launch?",
        "Changes after approval are handled as an amendment to your order, so the price and scope stay clear.",
      ],
    ],
    related: ["worldwide", "live-event", "google-ads-video-views"],
  },
  {
    id: "S08",
    slug: "channel-promotion",
    name: "Channel Promotion",
    category: "Promotion",
    art: "channel",
    card: "Introduce your channel to new viewers through your strongest videos.",
    outcome: "Channel awareness",
    headline: "Put your channel in front of new viewers.",
    summary:
      "Channel promotion advertises one or more of your videos to people likely to be interested in the rest of your channel. It is an awareness strategy built on paid video ads. It is not a subscriber package, and we do not guarantee subscribers.",
    placement: "In-stream, in-feed or Shorts placements, chosen to suit your content.",
    objective: "Channel awareness and video views.",
    metric: "The metrics for the formats used. Subscriber changes are not a paid metric and are not promised.",
    goals: [
      "Help a new or growing channel get discovered",
      "Promote a series, not only a single upload",
      "Reach viewers of similar topics",
    ],
    inputs: [
      "Channel URL",
      "The videos you want promoted",
      "Topics and audiences the channel serves",
      "Media budget, countries and languages",
    ],
    creative: [
      "Promoted videos represent the channel well",
      "Channel page is ready for new visitors: name, banner, playlists",
      "Videos are eligible to run as ads",
    ],
    audience:
      "We target by the topics and interests your channel covers, plus geography and language. What viewers do after watching depends on your content.",
    limits: [
      "No guaranteed subscribers, watch time or monetisation outcome.",
      "Advertising can put the channel in front of the right people; whether they stay is down to the channel.",
    ],
    faqs: [
      [
        "Will this get me subscribers?",
        "We cannot promise that. Advertising brings relevant viewers to your videos. Subscribing is their choice, and we will never claim otherwise.",
      ],
      [
        "Which video should I promote?",
        "Usually the one that best shows what the channel is about. We can review a shortlist with you.",
      ],
      [
        "Does paid promotion affect my channel's standing?",
        "Running Google Ads campaigns for your own videos is an accepted practice. We do not use any method that breaks YouTube's terms.",
      ],
    ],
    related: ["google-ads-video-views", "in-feed", "music-video"],
  },
  {
    id: "S09",
    slug: "music-video",
    name: "Music Video Promotion",
    category: "Promotion",
    art: "music",
    card: "Release campaigns planned around a date, a rights check and your chosen territories.",
    outcome: "Release awareness",
    headline: "Give your release a planned first week.",
    summary:
      "Music video promotion is planned around your release date. The format, territories and budget are agreed in advance so the campaign can start when the video goes public, once rights and eligibility are confirmed.",
    placement: "In-stream, in-feed and Shorts placements, chosen to suit the release.",
    objective: "Release awareness and video views in selected music markets.",
    metric: "The metrics for the formats used, by territory where available.",
    goals: [
      "Support a single, album track or video premiere",
      "Reach listeners in specific territories",
      "Coordinate promotion with a release schedule",
    ],
    inputs: [
      "Video URL, or a preview before release",
      "Release date and time zone",
      "Rights confirmation",
      "Target music markets and media budget",
    ],
    creative: [
      "You confirm you hold the rights to the recording, composition and visuals",
      "The video will be public or unlisted and ad-eligible on the start date",
      "Optional vertical cut for Shorts",
    ],
    audience:
      "Targeting is built from territories, languages and listener interests. Budget can be weighted toward priority markets.",
    limits: [
      "Campaigns cannot start until the video is live and has passed ad review.",
      "Copyright claims or policy issues on the video can delay or stop delivery.",
    ],
    faqs: [
      [
        "How far ahead should I book?",
        "As early as you can. Our standard review lead time is two business days, and releases go more smoothly with more notice.",
      ],
      [
        "Why do you ask for rights confirmation?",
        "Because ads on content with unresolved rights can be disapproved or removed. Confirming up front protects your launch.",
      ],
      [
        "Can I promote in several countries at once?",
        "Yes. Each territory is listed in your quote and reported separately where data is available.",
      ],
    ],
    related: ["worldwide", "shorts", "channel-promotion"],
  },
  {
    id: "S10",
    slug: "live-event",
    name: "Live Event Promotion",
    category: "Promotion",
    art: "live",
    card: "Promote an upcoming livestream or event within a set window before it starts.",
    outcome: "Event awareness",
    headline: "Tell people before it starts.",
    summary:
      "Live event promotion raises awareness of a livestream, premiere or event during a defined window before it begins. We plan around the event's date and time zone and prepare a fallback video in case plans change.",
    placement: "In-stream, in-feed or Shorts placements in the period before the event.",
    objective: "Event awareness.",
    metric: "Impressions, reach, clicks and eligible views for the promotional creative.",
    goals: [
      "Announce a livestream, premiere or broadcast",
      "Reach people in the event's time zone or region",
      "Build awareness in the days before a launch",
    ],
    inputs: [
      "Event URL",
      "Event date, time and time zone",
      "Promotion window",
      "Fallback video and media budget",
    ],
    creative: [
      "A promotional video or trailer that states the date and time",
      "A fallback video if the event is delayed or cancelled",
      "Correct time zone shown to each market",
    ],
    audience:
      "Targeting focuses on the regions and audiences able to attend or watch, with the schedule set against the event's time zone.",
    limits: [
      "No guaranteed concurrent viewers or attendance.",
      "If an event ends early or moves, the campaign switches to the fallback creative or stops.",
    ],
    faqs: [
      [
        "Can you guarantee live viewers?",
        "No. We can make the right audience aware of the event. How many tune in is outside any advertiser's control.",
      ],
      [
        "What if my event date changes?",
        "Tell us as soon as you know. The campaign is rescheduled or moved to the fallback video through an amendment.",
      ],
      [
        "How long before the event should promotion start?",
        "It depends on the event. We agree the promotion window with you in the quote.",
      ],
    ],
    related: ["country-targeted", "in-stream", "music-video"],
  },
  {
    id: "S11",
    slug: "brand-awareness",
    name: "Brand Awareness",
    category: "Promotion",
    art: "brand",
    card: "Reach and exposure campaigns planned around an awareness metric, not a view count.",
    outcome: "Reach and exposure",
    headline: "Be known by the people who matter to you.",
    summary:
      "Brand awareness campaigns aim to reach as many of the right people as the budget allows, a sensible number of times. We agree up front which awareness metric the campaign is planned and judged on.",
    placement: "Non-skippable and skippable in-stream, Shorts and display, depending on the plan.",
    objective: "Reach and exposure.",
    metric: "Impressions, reach and frequency, plus any agreed awareness measure.",
    goals: [
      "Introduce a brand, product or service",
      "Stay visible during a launch or season",
      "Reach a defined audience consistently",
    ],
    inputs: [
      "Brand brief",
      "Creative assets",
      "Target audience",
      "Awareness metric plan and media budget",
    ],
    creative: [
      "Brand shown early and clearly",
      "Short cuts for reach formats",
      "Consistent message across formats",
    ],
    audience:
      "Audiences are defined by geography, demographics and interests, with frequency managed so the same people are not shown the ad too often.",
    limits: [
      "Awareness is measured by reach and exposure. It is not a sales or conversion guarantee.",
      "Survey-based lift measurement, where available, has its own eligibility requirements.",
    ],
    faqs: [
      [
        "How is awareness measured?",
        "By the reach and frequency Google Ads reports, plus any additional measure we agree with you beforehand.",
      ],
      [
        "Which formats work best for awareness?",
        "Short formats that play in full reach the most people. We recommend a mix in your plan.",
      ],
      [
        "Can I combine awareness with a views goal?",
        "Yes, as separate campaigns with separate metrics, so each can be judged on its own terms.",
      ],
    ],
    related: ["in-stream", "display", "enterprise"],
  },
  {
    id: "S12",
    slug: "enterprise",
    href: "/enterprise",
    name: "Enterprise Campaign Management",
    category: "Managed",
    art: "enterprise",
    card: "Custom multi-campaign, multi-country delivery with a dedicated contact.",
    outcome: "Custom multi-campaign delivery",
    headline: "Larger budgets, more markets, one accountable contact.",
    summary:
      "Enterprise management covers multi-campaign, multi-country programmes with custom terms, procurement documentation and consolidated reporting. It starts with a custom quote, not the standard planner.",
    placement: "Any combination of formats, planned per market.",
    objective: "Custom, agreed per programme.",
    metric: "Consolidated reporting across campaigns, with native-currency figures.",
    goals: [
      "Coordinate campaigns across countries and brands",
      "Meet procurement and invoicing requirements",
      "Report to stakeholders in one place",
    ],
    inputs: [
      "Budget and markets",
      "Billing and procurement requirements",
      "Reporting requirements",
      "Named contacts on both sides",
    ],
    creative: [
      "Creative supplied per market or centrally",
      "Approval process agreed before launch",
      "Rights confirmed for every territory",
    ],
    audience: "Defined per campaign and market in the programme plan.",
    limits: [
      "Terms, timelines and fees are set in a custom quotation.",
      "Advertising platform approval is never guaranteed.",
    ],
    faqs: [
      [
        "What qualifies as enterprise?",
        "Programmes with several campaigns or countries, or with procurement, invoicing or reporting needs beyond a standard order.",
      ],
      [
        "Do we get a dedicated contact?",
        "Yes. An account manager is named in your quotation.",
      ],
      [
        "Can you work with our purchase-order process?",
        "Tell us your requirements in the quote request and we will confirm what we can support.",
      ],
    ],
    related: ["worldwide", "brand-awareness", "google-ads-video-views"],
  },
];

export const serviceHref = (s: Service) => s.href ?? `/services/${s.slug}`;
export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** The six services featured on the home page (PRD section 11.4). */
export const coreServices = [
  "google-ads-video-views",
  "in-stream",
  "in-feed",
  "shorts",
  "worldwide",
  "country-targeted",
].map((s) => getService(s)!);

/** Quote-only consulting categories listed in the PRD (section 12). */
export const consulting = [
  "Google Ads management",
  "Video marketing consultation",
  "Creative strategy",
  "Audience research",
  "Retargeting",
  "Analytics",
  "Optimisation",
  "Video launches",
  "Paid-media consulting",
];
