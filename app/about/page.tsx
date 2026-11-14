import type { Metadata } from "next";
import { Btn, CtaBand, Notice, PageHero, SecHead, Shell } from "../components/ui";
import { strategy, why } from "../content/site";

export const metadata: Metadata = { title: "About", description: "Who we are, how we work and what we will not promise." };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["About"]]} eyebrow="About us" title="Reach with intention" summary="We are an independent agency that plans and runs paid YouTube and Google Ads campaigns. We exist because buying video advertising should be understandable: what you are purchasing, who will see it, what it costs and what was actually measured." art="brand">
        <Btn href="/contact">Request a consultation</Btn>
      </PageHero>
      <section className="sec alt">
        <div className="wrap split top">
          <h2 className="manifesto" data-words>A view only matters if the <em>right person</em> watched.</h2>
          <div className="stack lg">
            <p className="lead" data-rise>So a brief comes before a budget. Targeting is written down where you can see it. And a report tells you what was measured and what was only estimated.</p>
            <p className="lead" data-rise>We do not sell subscribers, engagement or guaranteed outcomes, and we do not use bots or anything else that breaks platform rules.</p>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Method" title="How we work" lead="Five things you can observe in any campaign we run." />
          <div className="grid g3" data-stagger>
            {why.map((w, i) => (
              <article className="card pad-lg" key={w.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{w.title}</h3>
                <p className="p">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Responsibilities" title="Who does what" />
          <div className="table-wrap" data-rise>
            <table className="table">
              <thead>
                <tr><th scope="col">Stage</th><th scope="col">Responsibility</th><th scope="col">What happens</th></tr>
              </thead>
              <tbody>
                {strategy.map((s) => (
                  <tr key={s.title}><th scope="row">{s.title}</th><td>{s.owner}</td><td>{s.text}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap stack">
          <SecHead eyebrow="Business details" title="The formal part" />
          <Notice title="To be completed.">Registered business name, address and verified contact details will be published here before launch. We do not list team members, partners or client logos that we cannot verify.</Notice>
        </div>
      </section>
      <CtaBand title="Talk it through first?" text="Tell us about the video and the audience. We will say plainly whether advertising is the right move." href="/contact" label="Request a consultation" art="brand" />
    </Shell>
  );
}
