import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SegmentTemplate } from "../../components/pages";
import { industries } from "../../content/site";

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const x = industries.find((s) => s.slug === slug);
  return x ? { title: `YouTube advertising for ${x.name.toLowerCase()}`, description: x.card } : {};
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
  const x = industries.find((s) => s.slug === slug);
  if (!x) notFound();
  return <SegmentTemplate kind="industries" s={x} />;
}
