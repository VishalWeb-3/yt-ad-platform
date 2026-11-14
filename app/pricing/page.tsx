import type { Metadata } from "next";
import { PricingLines } from "../components/pages";
import { Btn, CtaBand, PageHero, SecHead, Shell, TextLink } from "../components/ui";
import { PriceCalc } from "../components/widgets";
import { QUOTE_VALIDITY } from "../content/site";

export const metadata: Metadata = { title: "Pricing", description: "How our prices are built: media budget, agency fee and tax as three separate lines, with a worked example." };

const rules = [
  ["One currency per order", "The currency is stated on the quote and the invoice. There is no hidden conversion."],
  ["Fee, then discount", "Any minimum fee is applied first. Discounts apply to the fee only, never to your media budget."],
  ["One discount at a time", "A negotiated adjustment replaces public promotions. Otherwise the single best eligible discount applies."],
  ["Tax per line", "Tax is calculated on the lines it applies to for your jurisdiction, and rounded per line."],
  [`Valid for ${QUOTE_VALIDITY}`, "After that we issue a new version. Accepted quotes are never edited; changes are amendments."],
  ["No forecast without a basis", "View estimates appear only when a defensible baseline exists, as a labelled range. They exclude fees and tax."],
];

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Pricing"]]} eyebrow="Pricing" title="Media, fee and tax. Three lines, always." summary="We do not publish a rate card, because fees depend on the service and the scope. What we do publish is exactly how a price is built, so any quote we send can be checked line by line." art="views">
        <Btn href="/campaign-planner">Get a quote through the planner</Btn>
        <Btn href="/request-quote" kind="secondary">Request a custom quote</Btn>
      </PageHero>
      <section className="sec">
        <div className="wrap split">
          <SecHead eyebrow="The three lines" title="What you are paying for" lead="Media budget is yours to set and is spent on advertising. The agency fee is ours. Tax is whatever your jurisdiction requires. They never merge into one number." />
          <div data-rise>
            <PricingLines />
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap split top">
          <div className="sticky">
            <SecHead eyebrow="Worked example" title="See how the lines relate" lead="Change the numbers to see how a quote is assembled. The rates are examples for illustration, not our prices." />
            <p className="p">With 1,000.00 media, a 15% fee, a 10% fee discount and 10% tax on the fee, the total is 1,148.50.</p>
          </div>
          <div data-rise>
            <PriceCalc />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Rules" title="How every quote is calculated" action={<TextLink href="/refund-policy">Refund and cancellation</TextLink>} />
          <div className="grid g3" data-stagger>
            {rules.map(([k, v], i) => (
              <article className="card pad-lg" key={k}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{k}</h3>
                <p className="p">{v}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want an actual number?" text="Submit a brief and we will send a quote with every line shown. Nothing is charged for asking." />
    </Shell>
  );
}
