import type { Metadata } from "next";
import { Unbounded, Outfit } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-unbounded",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "WEB3TASK",
  description:
    "WEB3TASK helps creators and businesses plan and run YouTube ad campaigns, with clear pricing, audience targeting, campaign support, and reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
