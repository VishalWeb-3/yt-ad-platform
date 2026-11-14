import { CONTACT_EMAIL, QUOTE_VALIDITY, REVIEW_LEAD } from "./site";

export type Legal = {
  slug: string;
  title: string;
  intro: string;
  cta: [string, string];
  sections: { h: string; p: string[] }[];
};

/**
 * Draft policy text following the structure in the PRD. It has NOT been reviewed
 * by a lawyer or tax adviser and must be approved before publication (PRD D07, D11, D16).
 */
export const legal: Legal[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    intro: "What personal information we handle, why, who receives it, and your rights.",
    cta: ["Contact us about privacy", "/contact"],
    sections: [
      { h: "Controller", p: ["The operator of this website is the controller of the personal information described here. The legal entity name and registered address will be stated in this section before publication.", `Privacy questions can be sent to ${CONTACT_EMAIL}.`] },
      { h: "What we collect and why", p: ["Contact details and campaign briefs you submit, so we can quote, deliver and support your order.", "Order, invoice and payment records, to fulfil contracts and meet legal obligations.", "Support messages, to answer them.", "Analytics about website use, only where you have consented."] },
      { h: "Recipients", p: ["Service providers that host the platform, deliver email and process payments, and advertising platforms used to run your campaign. Each receives only what it needs. We do not sell personal information."] },
      { h: "Your rights", p: ["Depending on where you live, you may have the right to access, correct, delete or export your information, and to object to or restrict certain uses. Contact us to make a request."] },
      { h: "Retention", p: ["We keep information for as long as needed for the purposes above and to meet legal requirements. Retention periods will be listed here once approved."] },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    intro: "The scope of our services, what each side is responsible for, payment and liability.",
    cta: ["Start a campaign", "/campaign-planner"],
    sections: [
      { h: "Scope", p: ["We plan, set up, monitor and report paid advertising campaigns on YouTube and Google Ads on your behalf, as described in your accepted quotation.", "We do not guarantee subscribers, engagement, sales, or approval by any advertising platform."] },
      { h: "Your responsibilities", p: ["You confirm that you hold the rights to the content you ask us to advertise and that it complies with applicable advertising policies.", "You provide accurate information and respond to requests needed to launch the campaign."] },
      { h: "Our responsibilities", p: ["We carry out the campaign described in your quotation, tell you its actual status, and deliver a report at completion.", `We review new briefs within our standard lead time of ${REVIEW_LEAD}.`] },
      { h: "Quotes and payment", p: [`Quotations show media budget, agency fee and tax as separate lines and are valid for ${QUOTE_VALIDITY}. Accepted quotations are not edited; changes are made by amendment.`, "Payment does not by itself mean a campaign is live."] },
      { h: "Liability", p: ["Liability terms will be set out here after legal review."] },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund and cancellation policy",
    intro: "What can be refunded depends on the stage your order has reached.",
    cta: ["Request support", "/contact"],
    sections: [
      { h: "Stage-based eligibility", p: ["Before review is complete: you may cancel, and amounts paid are refundable subject to the terms in your quotation.", "After approval and before launch: media budget not yet committed is refundable; fee treatment is as stated in your terms.", "After launch: advertising costs already incurred cannot be refunded. Unspent, uncommitted media budget remains eligible."] },
      { h: "Incurred costs", p: ["Advertising spend that has already been delivered by the platform, and any costs committed on your behalf, are deducted from refundable amounts."] },
      { h: "How to request", p: ["Contact support with your order reference. We confirm what is eligible, and refunds are approved by two people before they are issued."] },
      { h: "Timing", p: ["Refund processing times depend on the payment method and will be confirmed when your request is approved."] },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie policy",
    intro: "The categories of cookies this site may use and how to control them.",
    cta: ["Manage preferences", "/cookies#preferences"],
    sections: [
      { h: "Categories", p: ["Strictly necessary: needed for the site and forms to work. Always on.", "Analytics: help us understand how the site is used. Off unless you consent.", "Marketing: used to measure advertising. Off unless you consent."] },
      { h: "Vendors", p: ["The specific providers in each category will be listed here once they are selected."] },
      { h: "Preference controls", p: ["You can change your choice at any time. Declining analytics or marketing cookies does not affect your ability to use the site, plan a campaign or track an order."] },
    ],
  },
  {
    slug: "advertising-disclosures",
    title: "Advertising disclosures",
    intro: "What you are buying, what the numbers mean, and what we do not promise.",
    cta: ["Understand our formats", "/youtube-advertising"],
    sections: [
      { h: "Paid promotion", p: ["Our services are paid advertising delivered through Google Ads on YouTube and eligible Google inventory. We do not use bots, artificial engagement or any method that breaks platform terms."] },
      { h: "Metric limits", p: ["Views, impressions and clicks are reported as defined by the advertising platform for the format that ran. They can differ from public counters on YouTube. Display impressions are never reported as views."] },
      { h: "Independence", p: ["We are an independent agency. We are not YouTube or Google, and nothing on this site implies a partnership, endorsement or special status."] },
      { h: "Estimates", p: ["Any forecast is an estimate, shown as a range with its basis. Estimates are not guarantees, and we hide them where no defensible baseline exists."] },
      { h: "No guaranteed outcomes", p: ["We do not guarantee subscribers, engagement, sales, concurrent viewers or advertising platform approval."] },
    ],
  },
];

export const getLegal = (slug: string) => legal.find((l) => l.slug === slug)!;
