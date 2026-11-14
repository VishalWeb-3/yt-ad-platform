import type { Metadata } from "next";
import { Btn, PageHero, Shell } from "../components/ui";
import { FaqExplorer } from "../components/widgets";

export const metadata: Metadata = { title: "FAQ", description: "Answers on setup, targeting, budgets, formats, reporting, timelines, payments and cancellation." };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["FAQ"]]} eyebrow="FAQ" title="Questions, answered plainly" summary="Eight topics: setup, targeting, budgets, formats, reporting, timelines, payments and cancellation. Search across all of them or jump to one.">
        <Btn href="/contact" kind="secondary">Contact support</Btn>
      </PageHero>
      <section className="sec flush-top">
        <div className="wrap">
          <FaqExplorer />
        </div>
      </section>
    </Shell>
  );
}
