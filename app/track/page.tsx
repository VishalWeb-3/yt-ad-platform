import type { Metadata } from "next";
import { Notice, PageHero, SecHead, Shell } from "../components/ui";
import { TrackForm } from "../components/Forms";

export const metadata: Metadata = { title: "Track an order", description: "Check the progress of an order with your reference and email.", robots: { index: false } };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Track order"]]} eyebrow="Existing customers" title="Track your order" summary="Enter your order reference and the email used for the order. We email a single-use link; an order reference alone never shows any order details." />
      <section className="sec flush-top">
        <div className="wrap split top">
          <div className="panel" data-rise>
            <TrackForm />
          </div>
          <div className="stack lg">
            <SecHead eyebrow="What you will see" title="Three statuses, shown separately" lead="After you verify your email, you see this one order: its summary, invoices, approved reports and a way to contact support." />
            <Notice title="Illustrative example.">The timeline below is a sample to show the layout. It is not a real order.</Notice>
            <div className="grid g3">
              {[
                ["Order", ["Submitted", "In review", "Approved"], 2],
                ["Payment", ["Invoice issued", "Payment received"], 1],
                ["Campaign", ["Setup", "Scheduled", "Verified live", "Completed"], 1],
              ].map(([title, steps, now]) => (
                <div key={title as string}>
                  <h3 className="h4" style={{ marginBottom: 16 }}>{title as string}</h3>
                  <ol className="timeline">
                    {(steps as string[]).map((s, i) => (
                      <li key={s} className={i < (now as number) ? "done" : i === now ? "now" : ""}>
                        <b>{s}</b>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
