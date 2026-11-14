import type { ArtKind } from "./services";

export type Article = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  art: ArtKind;
  minutes: number;
  /** ISO date the page was last reviewed */
  updated: string;
  sections: { h: string; p: string[] }[];
  related: string[]; // service slugs
};

const AUTHOR = "WEB3TASK editorial team";
export const articleAuthor = AUTHOR;
const UPDATED = "2026-11-14";

/* ───────── Resources: evergreen guides ───────── */
export const guides: Article[] = [
  {
    slug: "youtube-ad-formats-explained",
    title: "YouTube ad formats explained",
    summary: "What each format is, where it appears and what it is good for.",
    topic: "Formats",
    art: "instream",
    minutes: 5,
    updated: UPDATED,
    sections: [
      {
        h: "Start with where the ad appears",
        p: [
          "YouTube ad formats differ mainly in where they appear and whether the viewer chooses to watch. In-stream ads play before, during or after another video. In-feed ads sit in search results and feeds as a thumbnail and wait to be clicked. Shorts ads appear between Shorts. Display ads are images shown alongside content.",
        ],
      },
      {
        h: "Skippable and non-skippable in-stream",
        p: [
          "A skippable in-stream ad can be skipped after five seconds. People who keep watching have chosen to, which makes the format a natural fit for view goals and longer videos.",
          "A non-skippable ad is short and plays in full. It suits a single, complete message and is planned and measured on reach, not views.",
        ],
      },
      {
        h: "In-feed and Shorts",
        p: [
          "In-feed ads, formerly called video discovery ads, depend on the thumbnail and headline. They reach people who are already searching or browsing for something related.",
          "Shorts ads need vertical video that works in the first second or two. They are built for mobile reach.",
        ],
      },
      {
        h: "Choosing",
        p: [
          "Pick the goal first, then the format. Views and consideration point to skippable in-stream or in-feed. Reach points to non-skippable and Shorts. Traffic and visibility around content point to display. Many campaigns use more than one, each reported separately.",
        ],
      },
    ],
    related: ["in-stream", "in-feed", "shorts"],
  },
  {
    slug: "views-vs-impressions",
    title: "Views and impressions are not the same thing",
    summary: "Why the two metric families are reported apart, and how to read each.",
    topic: "Measurement",
    art: "views",
    minutes: 4,
    updated: UPDATED,
    sections: [
      {
        h: "Two families of metric",
        p: [
          "An impression means an ad was shown. A view means a video was watched under a condition defined by the advertising platform for that format. One impression does not equal one view, and the gap between them is often large.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "If impressions were reported as views, results would look better than they are. That is why display impressions are never counted as video views, and why a non-skippable campaign is judged on reach.",
          "It also matters for cost. Some formats are billed in relation to views and others in relation to impressions, so comparing the price of one against the other is misleading.",
        ],
      },
      {
        h: "The public view count",
        p: [
          "The number shown under a video on YouTube is measured by YouTube's own rules. The views reported in Google Ads are measured by Google Ads' rules for the format that ran. The two can differ. A report should say which definition it uses.",
        ],
      },
      {
        h: "What to ask of any report",
        p: [
          "For each number: what is it, where did it come from, and how recent is it? If a figure is an estimate, it should say so.",
        ],
      },
    ],
    related: ["google-ads-video-views", "display", "brand-awareness"],
  },
  {
    slug: "how-to-brief-a-campaign",
    title: "How to brief a YouTube campaign",
    summary: "The information that makes a quote fast and a launch smooth.",
    topic: "Planning",
    art: "enterprise",
    minutes: 4,
    updated: UPDATED,
    sections: [
      {
        h: "One goal",
        p: [
          "State what the campaign is for in a sentence: views of a new video, awareness of a brand, visitors to a page, attention for an event. The goal decides the format and the metric the campaign is judged on.",
        ],
      },
      {
        h: "The destination",
        p: [
          "Give the exact video or channel link. Check that the video is public or unlisted, that you hold the rights to everything in it, and that it is suitable to run as an ad.",
        ],
      },
      {
        h: "Audience and geography",
        p: [
          "List the countries you want and any you want excluded. Add languages, and describe who the video is for. Narrow descriptions are more useful than broad ones.",
        ],
      },
      {
        h: "Budget and dates",
        p: [
          "Give the media budget you want spent on advertising, in one currency. Fees and tax are added as separate lines in the quote. Add a start date that allows for review, and an end date.",
        ],
      },
      {
        h: "Anything unusual",
        p: [
          "Release dates, embargoes, events, regional restrictions, procurement rules. Mention them at the start so they shape the plan.",
        ],
      },
    ],
    related: ["google-ads-video-views", "music-video", "enterprise"],
  },
  {
    slug: "targeting-options",
    title: "Audience targeting options on YouTube",
    summary: "Geography, language, demographics, interests and topics, and their limits.",
    topic: "Targeting",
    art: "country",
    minutes: 4,
    updated: UPDATED,
    sections: [
      {
        h: "Where",
        p: [
          "Location targeting selects countries and, where supported, regions or cities. It relies on location signals and is not exact for every viewer. A campaign should record which location option was used.",
        ],
      },
      {
        h: "Who",
        p: [
          "Demographic targeting covers broad groups such as age ranges. Interest targeting reaches people by the subjects they engage with. Both describe likelihood, not certainty.",
        ],
      },
      {
        h: "What they are watching",
        p: [
          "Topic, keyword and placement targeting put an ad next to particular kinds of content or searches. This is the backbone of in-feed campaigns.",
        ],
      },
      {
        h: "Limits",
        p: [
          "Not every option is available for every format, market or account, and stacking many restrictions can leave too small an audience to deliver. Availability is a prerequisite to confirm at review, not a promise.",
          "Retargeting and conversion-based audiences need the right consent and account eligibility before they can be used.",
        ],
      },
    ],
    related: ["country-targeted", "worldwide", "in-feed"],
  },
  {
    slug: "reading-your-report",
    title: "Reading a campaign report",
    summary: "What each section means and which numbers to look at first.",
    topic: "Measurement",
    art: "display",
    minutes: 3,
    updated: UPDATED,
    sections: [
      {
        h: "The header",
        p: [
          "Check the date range, time zone, currency and data freshness first. Numbers only mean something inside those bounds.",
        ],
      },
      {
        h: "Delivery",
        p: [
          "Impressions show how often the ad appeared. Eligible views show how often it was watched under the platform's definition. View rate connects the two for skippable formats.",
        ],
      },
      {
        h: "Spend",
        p: [
          "Advertising spend is the media cost for the period. It excludes agency fee and tax, which appear on the invoice. A reconciled report matches spend to the platform's billing records.",
        ],
      },
      {
        h: "Breakdowns",
        p: [
          "Country and format breakdowns show where delivery happened. Differences between markets are normal and are useful for planning the next campaign.",
        ],
      },
      {
        h: "Measured and estimated",
        p: [
          "Measured results come from the platform. Estimates are projections. A good report labels each clearly and never presents one as the other.",
        ],
      },
    ],
    related: ["google-ads-video-views", "brand-awareness", "worldwide"],
  },
  {
    slug: "creative-checklist",
    title: "Creative checklist before you advertise a video",
    summary: "Checks that prevent a delayed or disapproved campaign.",
    topic: "Creative",
    art: "shorts",
    minutes: 3,
    updated: UPDATED,
    sections: [
      {
        h: "Eligibility",
        p: [
          "The video is public or unlisted. It follows advertising and community policies. Nothing in it is misleading.",
        ],
      },
      {
        h: "Rights",
        p: [
          "You hold or have licensed the rights to the footage, music, images and any people shown. Unresolved claims can stop an ad after launch.",
        ],
      },
      {
        h: "Format fit",
        p: [
          "Length suits the format: short for non-skippable and Shorts. Framing suits the placement: vertical for Shorts. The opening seconds say what the video is.",
        ],
      },
      {
        h: "Accessibility",
        p: [
          "Add captions. Make sure the message works without sound, since many people watch muted.",
        ],
      },
      {
        h: "The next step",
        p: [
          "If you want viewers to do something, say what, and make sure the destination works on a phone.",
        ],
      },
    ],
    related: ["shorts", "in-stream", "music-video"],
  },
];

/* ───────── Blog: shorter, topical pieces ───────── */
export const posts: Article[] = [
  {
    slug: "why-we-dont-sell-subscribers",
    title: "Why we don't sell subscribers",
    summary: "What paid advertising can do for a channel, and what it cannot.",
    topic: "Principles",
    art: "channel",
    minutes: 3,
    updated: UPDATED,
    sections: [
      {
        h: "The request we turn down",
        p: [
          "People sometimes ask for a fixed number of subscribers. We do not offer it. Subscribers bought in bulk are not an audience, and services that promise them usually rely on methods that break YouTube's terms and put the channel at risk.",
        ],
      },
      {
        h: "What advertising does",
        p: [
          "A Google Ads campaign shows your video to people who match the audience you define. Some will watch. Some of those will look at your channel. A few will subscribe because they want more. That decision is theirs.",
        ],
      },
      {
        h: "What we promise instead",
        p: [
          "That the campaign is real paid advertising, that the audience is the one you asked for, that the costs are shown line by line, and that the report tells you what was measured. Growth that follows is yours.",
        ],
      },
    ],
    related: ["channel-promotion", "google-ads-video-views"],
  },
  {
    slug: "payment-is-not-launch",
    title: "Paid is not the same as live",
    summary: "The stages between paying for a campaign and an ad actually serving.",
    topic: "Process",
    art: "live",
    minutes: 3,
    updated: UPDATED,
    sections: [
      {
        h: "Three separate statuses",
        p: [
          "An order, its payment and its campaign each have their own status. Paying moves the payment forward. It does not, by itself, make an ad live.",
        ],
      },
      {
        h: "What happens in between",
        p: [
          "The video is checked for eligibility and rights. Targeting is confirmed. The campaign is set up. The advertising platform reviews the ad. Only when we have verified that it is serving do we mark it active.",
        ],
      },
      {
        h: "Why we are strict about it",
        p: [
          "Telling a customer their ad is live when it is still in review helps nobody. You see each status separately in order tracking, so you always know which stage you are at and whether anything is waiting on you.",
        ],
      },
    ],
    related: ["google-ads-video-views", "music-video"],
  },
  {
    slug: "media-fee-tax",
    title: "Media, fee and tax: three lines, always",
    summary: "How to read a quote so you know where every unit of currency goes.",
    topic: "Pricing",
    art: "views",
    minutes: 3,
    updated: UPDATED,
    sections: [
      {
        h: "Media budget",
        p: [
          "This is the money spent on advertising itself. It is yours to set, and it is what the campaign's delivery depends on.",
        ],
      },
      {
        h: "Agency fee",
        p: [
          "This is what we charge for planning, setting up, monitoring and reporting the campaign. It is shown as its own line, and any discount applies to the fee, not to your media budget.",
        ],
      },
      {
        h: "Tax",
        p: [
          "Tax depends on jurisdiction and on what is being taxed. It is calculated per line and shown separately. Nothing here is tax advice.",
        ],
      },
      {
        h: "Why keep them apart",
        p: [
          "A single bundled price hides how much reaches the audience. Three lines let you compare quotes fairly and check the report's spend against the media budget you approved.",
        ],
      },
    ],
    related: ["google-ads-video-views", "enterprise"],
  },
  {
    slug: "worldwide-is-a-list",
    title: "\"Worldwide\" is a list, not a slogan",
    summary: "What a worldwide campaign really targets, and why exclusions matter.",
    topic: "Targeting",
    art: "worldwide",
    minutes: 2,
    updated: UPDATED,
    sections: [
      {
        h: "Every campaign targets specific countries",
        p: [
          "There is no setting that means everyone, everywhere. A worldwide campaign resolves to a list of supported countries. You should be able to see that list before you agree to it.",
        ],
      },
      {
        h: "Exclusions win",
        p: [
          "If you exclude a country, it is out, even if a broader selection would include it. That rule keeps your intent clear when the two overlap.",
        ],
      },
      {
        h: "Expect differences",
        p: [
          "Costs and audiences vary between markets, so a worldwide report will show uneven delivery. That is information: it tells you where to focus next time.",
        ],
      },
    ],
    related: ["worldwide", "country-targeted"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const getPost = (slug: string) => posts.find((g) => g.slug === slug);
