import raw from "../case-studies.json";

export type CaseStudy = {
  slug: string;
  year: string;
  title: string;
  tagline: string;
  industry: string;
  categories: string[];
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  swatches: { name: string; hex: string }[];
  quote: string;
  author: string;
  authorTitle: string;
  avatar: string;
  /** hero, description, challenge, wide 1, wide 2, half 1, half 2, outcome */
  images: string[];
};

export const caseStudies = raw as unknown as CaseStudy[];

export const categories = [
  "Ad Formats",
  "Campaign Types",
  "Video Views",
  "Awareness",
  "Traffic",
];

export const img = (file: string) => `/images/cs/${file}`;

export function neighbours(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const n = caseStudies.length;
  return {
    prev: caseStudies[(i - 1 + n) % n],
    next: caseStudies[(i + 1) % n],
  };
}
