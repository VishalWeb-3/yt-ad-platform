import type { Metadata } from "next";
import Nav from "../components/Nav";
import Motion from "../components/Motion";
import Footer from "../components/Footer";
import WorkGrid from "../components/WorkGrid";
import { Words } from "../components/ui";

export const metadata: Metadata = { title: "Ad Formats — WEB3TASK" };

export default function CaseStudies() {
  return (
    <>
      <Nav />
      <main className="cs-page">
        <header className="cs-head">
          <p className="p just" data-blur>
            A guide to the ad formats and campaign types we plan and run on YouTube.
          </p>
          <h1 className="h1" data-words>
            <Words text="Ways To Get Seen." />
          </h1>
        </header>
        <WorkGrid />
        <Footer />
      </main>
      <Motion />
    </>
  );
}
