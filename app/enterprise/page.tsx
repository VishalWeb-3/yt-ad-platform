import type { Metadata } from "next";
import { ServiceTemplate } from "../components/pages";
import { SecHead, Shell } from "../components/ui";
import { QuoteForm } from "../components/Forms";
import { getService } from "../content/services";

const s = getService("enterprise")!;
export const metadata: Metadata = { title: "Enterprise campaign management", description: s.summary };

const governance = [
  ["Named contacts", "An account manager on our side and accountable contacts on yours, written into the quotation."],
  ["Custom terms", "Scope, timelines, fees and invoicing agreed in a custom quotation before work starts."],
  ["Financial documentation", "Invoices that separate media, fee and tax, in one stated currency per order."],
  ["Consolidated reporting", "One report across campaigns and markets, in native currency, with sources and freshness stated."],
  ["Change control", "Changes after approval are made by amendment, so scope and price stay traceable."],
  ["Access boundaries", "Each customer sees only their own orders, invoices and reports."],
];

export default function Page() {
  return (
    <Shell>
      <ServiceTemplate s={s} enterprise />
      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="Governance" title="How larger programmes are kept under control" />
          <div className="grid g3" data-stagger>
            {governance.map(([k, v], i) => (
              <article className="card pad-lg" key={k}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{k}</h3>
                <p className="p">{v}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" id="quote">
        <div className="wrap split top">
          <div className="sticky">
            <SecHead eyebrow="Custom quote" title="Tell us about the programme" lead="Markets, budget and how your procurement works. A named contact replies with a custom quotation." />
          </div>
          <div className="panel" data-rise>
            <QuoteForm enterprise />
          </div>
        </div>
      </section>
    </Shell>
  );
}
