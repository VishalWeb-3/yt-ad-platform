import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Old clone routes point at their PRD equivalents.
  async redirects() {
    return [
      { source: "/case-study", destination: "/services", permanent: true },
      { source: "/case-study/:slug", destination: "/services", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
