import type { Metadata } from "next";
import { Btn, CtaBand, LinkCard, Notice, PageHero, SecHead, Shell } from "../components/ui";
import { guides } from "../content/articles";

export const metadata: Metadata = { title: "Case studies", description: "We publish campaign results only when they are verified and the customer has agreed. Here is what each case study will contain." };

const parts = [
  ["Objective", "What the campaign set out to achieve, stated in one sentence before any numbers."],
  ["Dates and spend context", "When it ran and the scale of the media budget, so results can be read in proportion."],
  ["Method", "Formats, markets, targeting and schedule, and how results were measured."],
  ["Results", "Measured figures with their source, date range and definitions. Estimates are labelled as estimates."],
  ["Permission", "Published only with the customer's written agreement, and removed if they withdraw it."],
  ["What we would change", "An honest note on what did not work as planned."],
];

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Case studies"]]} eyebrow="Evidence" title="No case studies yet. Here is why." summary="We will not publish a result we cannot back up, and we will not publish one without the customer's permission. Until verified case studies exist, this page explains what each one will contain." art="display">
        <Btn href="/contact">Discuss a similar brief</Btn>
      </PageHero>
      <section className="sec flush-top">
        <div className="wrap stack lg">
          <Notice title="Nothing here is hidden.">There are simply no published case studies at the moment. We would rather show an empty page than invented numbers.</Notice>
          <SecHead eyebrow="The format" title="What every case study will include" />
          <div className="grid g3" data-stagger>
            {parts.map(([k, v], i) => (
              <article className="card pad-lg" key={k}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{k}</h3>
                <p className="p">{v}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="In the meantime" title="Learn how campaigns are planned and measured" />
          <div className="grid g3" data-stagger>
            {guides.slice(0, 3).map((g) => (
              <LinkCard key={g.slug} href={`/resources/${g.slug}`} art={g.art} tag={g.topic} title={g.title} text={g.summary} more="Read the guide" />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
