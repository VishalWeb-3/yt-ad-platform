import type { Metadata } from "next";
import { Unbounded, Outfit } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-unbounded",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "WEB3TASK — YouTube advertising and Google Ads campaigns",
    template: "%s — WEB3TASK",
  },
  description:
    "Paid YouTube advertising for creators and businesses: in-stream, in-feed and Shorts campaigns with audience targeting, line-by-line pricing and source-labelled reporting.",
  openGraph: {
    type: "website",
    siteName: "WEB3TASK",
    title: "WEB3TASK — YouTube advertising and Google Ads campaigns",
    description: "Plan a YouTube ad campaign with clear targeting, separate media, fee and tax lines, and reports you can read.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
