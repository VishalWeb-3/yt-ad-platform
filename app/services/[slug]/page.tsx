import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ServiceTemplate } from "../../components/pages";
import { CtaBand, Shell } from "../../components/ui";
import { getService, services } from "../../content/services";

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.filter((s) => !s.href).map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const x = getService(slug);
  return x ? { title: x.name, description: x.summary } : {};
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
  const x = getService(slug);
  if (!x) notFound();
  return (
    <Shell>
      <ServiceTemplate s={x} />
      <CtaBand title={`Plan ${x.name.toLowerCase()}`} href={`/campaign-planner?service=${x.slug}`} art={x.art} />
    </Shell>
  );
}
