import type { Metadata } from "next";
import { ArticleIndex } from "../components/pages";
import { posts } from "../content/articles";

export const metadata: Metadata = { title: "Blog", description: "Short pieces on how we work and why: pricing, process and principles." };

export default function Page() {
  return <ArticleIndex base="/blog" label="Blog" title="How we think about paid video" summary="Short pieces on pricing, process and the things we will not sell." items={posts} />;
}
