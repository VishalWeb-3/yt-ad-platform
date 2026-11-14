import type { Metadata } from "next";
import { Btn, CtaBand, PageHero, SecHead, Shell } from "../components/ui";
import { REVIEW_LEAD, QUOTE_VALIDITY, SUPPORT_HOURS, workflow } from "../content/site";

export const metadata: Metadata = { title: "How it works", description: "The seven-step workflow from choosing a service to reading your report, with who is responsible at each stage and how long things take." };

const statuses = [
  ["Order", "Where the request is: submitted, in review, approved, in delivery, completed or cancelled."],
  ["Payment", "Whether an invoice is issued, paid, or being refunded. Paying does not change the campaign status."],
  ["Campaign", "Whether the ad is being set up, scheduled, verified as live, paused or finished."],
];
const timing = [
  ["Brief review", `Within ${REVIEW_LEAD}`],
  ["Quote validity", QUOTE_VALIDITY],
  ["Earliest standard start", `${REVIEW_LEAD} after a complete brief`],
  ["Urgent requests", "Handled as a custom quote"],
  ["Support hours", SUPPORT_HOURS],
  ["Report", "After the campaign ends and spend is reconciled"],
];

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["How it works"]]} eyebrow="For first-time customers" title="Seven steps, and who does what" summary="From the moment you pick a service to the day you read the report. Every step has an owner, and you always know which stage you are at." art="enterprise">
        <Btn href="/campaign-planner">Start the planner</Btn>
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Workflow" title="Service, audience, budget, submission, review, execution, reporting" />
          <div className="flow">
            <span className="flow-line" aria-hidden>
              <i />
            </span>
            <ol>
              {workflow.map((w) => (
                <li className="flow-step" key={w.title}>
                  <h3 className="h3">{w.title}</h3>
                  <dl>
                    <dt>You</dt>
                    <dd>{w.you}</dd>
                  </dl>
                  <dl>
                    <dt>We</dt>
                    <dd>{w.we}</dd>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="Three statuses" title="Paid is not the same as live" lead="An order, its payment and its campaign each move on their own. You see all three, so a payment is never mistaken for a launch." />
          <div className="grid g3" data-stagger>
            {statuses.map(([k, v]) => (
              <article className="card pad-lg" key={k}>
                <span className="num">Status</span>
                <h3 className="h3">{k}</h3>
                <p className="p">{v}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split top">
          <SecHead eyebrow="Timing" title="How long things take" lead="These are our standard working assumptions. Platform review and missing information can add time, and we tell you when they do." />
          <dl className="defs" data-stagger>
            {timing.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
