import type { Metadata } from "next";
import { ArticleIndex } from "../components/pages";
import { guides } from "../content/articles";

export const metadata: Metadata = { title: "Guides to YouTube advertising", description: "Plain-language guides to ad formats, targeting, measurement and briefing a campaign." };

export default function Page() {
  return <ArticleIndex base="/resources" label="Resources" title="Guides you can use before you spend" summary="Format education, measurement basics and checklists. Each guide states when it was last reviewed, because advertising platforms change." items={guides} />;
}
