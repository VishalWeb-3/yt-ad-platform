import type { MetadataRoute } from "next";

// Robots is not a security control; it only keeps personal and transactional screens out of search.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/track", "/login", "/campaign-planner"] }] };
}
