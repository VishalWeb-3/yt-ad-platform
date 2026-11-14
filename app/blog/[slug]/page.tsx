import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "../../components/pages";
import { posts, getPost } from "../../content/articles";

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const x = getPost(slug);
  return x ? { title: x.title, description: x.summary } : {};
}

// The slug is URL data, so the part that reads it sits behind a Suspense boundary.
export default function Page({ params }: P) {
  return (
    <Suspense fallback={null}>
      <Inner params={params} />
    </Suspense>
  );
}

async function Inner({ params }: P) {
  const { slug } = await params;
  const x = getPost(slug);
  if (!x) notFound();
  return <ArticleTemplate base="/blog" label="Blog" a={x} />;
}
