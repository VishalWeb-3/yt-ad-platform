import type { Metadata } from "next";
import { Suspense } from "react";
import Planner from "../components/Planner";
import { Crumbs, Shell, Words } from "../components/ui";

export const metadata: Metadata = { title: "Campaign planner", description: "Build a campaign brief in ten short steps.", robots: { index: false } };

export default function Page() {
  return (
    <Shell>
      <section className="sec page-hero" style={{ paddingBottom: 40 }}>
        <div className="wrap stack" style={{ gap: 20 }}>
          <Crumbs items={[["Campaign planner"]]} />
          <h1 className="h1 sm" data-words>
            <Words text="Plan your campaign" />
          </h1>
          <p className="lead" data-rise>
            Ten short steps. Your answers are kept if you go back, and nothing is charged when you submit.
          </p>
        </div>
      </section>
      <section className="sec flush-top">
        <div className="wrap">
          <Suspense fallback={<p className="p">Loading the planner…</p>}>
            <Planner />
          </Suspense>
        </div>
      </section>
    </Shell>
  );
}
