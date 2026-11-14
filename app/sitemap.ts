import type { MetadataRoute } from "next";
import { services, serviceHref } from "./content/services";
import { industries, solutions } from "./content/site";
import { guides, posts } from "./content/articles";

// Replace with the production origin before launch.
const ORIGIN = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/about", "/services", "/youtube-advertising", "/enterprise", "/solutions", "/industries", "/how-it-works", "/pricing",
    "/request-quote", "/case-studies", "/resources", "/blog", "/faq", "/contact", "/privacy", "/terms", "/refund-policy", "/cookies", "/advertising-disclosures", "/credits",
    ...services.map(serviceHref),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...industries.map((s) => `/industries/${s.slug}`),
    ...guides.map((g) => `/resources/${g.slug}`),
    ...posts.map((g) => `/blog/${g.slug}`),
  ];
  return [...new Set(paths)].map((p) => ({ url: `${ORIGIN}${p}` }));
}
