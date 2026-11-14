import type { Metadata } from "next";
import { PageHero, SecHead, Shell } from "../components/ui";
import { QuoteForm } from "../components/Forms";
import { QUOTE_VALIDITY, REVIEW_LEAD } from "../content/site";

export const metadata: Metadata = { title: "Request a quote", description: "Describe your campaign and budget band, and receive a quotation with media, fee and tax shown separately." };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Request a quote"]]} eyebrow="Custom quote" title="Tell us what you need quoted" summary="Use this for anything that does not fit the planner: several services at once, unusual timing, consulting, or a budget you would like advice on." />
      <section className="sec flush-top">
        <div className="wrap split top">
          <div className="sticky stack lg">
            <SecHead eyebrow="What happens next" title="From request to quotation" />
            <ol className="timeline">
              <li className="done"><b>You send the request</b>Brief, budget band, timing and contact details.</li>
              <li className="now"><b>We review it</b>Normally within {REVIEW_LEAD}. We may ask a question or two.</li>
              <li><b>You receive a quotation</b>Media budget, agency fee and tax on separate lines, valid for {QUOTE_VALIDITY}.</li>
              <li><b>You decide</b>Nothing is charged, and nothing starts, until you accept.</li>
            </ol>
          </div>
          <div className="panel" data-rise>
            <QuoteForm />
          </div>
        </div>
      </section>
    </Shell>
  );
}
