import { Art, DashboardArt } from "./components/art";
import { Btn, LinkCard, SecHead, ServiceCard, Shell, TextLink } from "./components/ui";
import { Accordion, FormatCompare, PlannerPreview, ReachPicker } from "./components/widgets";
import { QuoteForm } from "./components/Forms";
import { FogAbout, FogBuiltFor, FogCta, FogExpect, FogHero, FogServices } from "./components/fog";
import { coreServices, services } from "./content/services";
import { faqTopics, industries, metricDefs, solutions, strategy, why, workflow } from "./content/site";

/**
 * Home page. The FOG clone's sections are the base (hero strip, about, pinned accordion,
 * "what to expect", "built for", pinned call to action). The sections the PRD asks for
 * (section 11) are added between them in the same visual language. The trust module and
 * case-study cards are left out until verified material exists.
 */
export default function Home() {
  const segmentCards = [
    ...solutions.map((s) => ({ ...s, href: `/solutions/${s.slug}` })),
    ...industries.slice(0, 2).map((s) => ({ ...s, href: `/industries/${s.slug}` })),
  ];
  return (
    <Shell>
      <FogHero />
      {/* 4 · Core services */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            eyebrow="Core services"
            title="Six ways to put a video in front of people"
            lead="Each service is a paid advertising method on YouTube. Pick by where you want the ad to appear and where your audience is."
            action={<TextLink href="/services">All {services.length} services</TextLink>}
          />
          <div className="grid g3" data-stagger>
            {coreServices.map((s, i) => (
              <ServiceCard key={s.slug} s={s} n={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <FogAbout />

      {/* 5 · Global reach */}
      <section className="sec">
        <div className="wrap split">
          <div className="stack lg">
            <SecHead
              eyebrow="Global reach"
              title="Choose the markets. See the list."
              lead="Search for the countries you want. Worldwide campaigns resolve to an explicit list of supported markets, and your exclusions always win."
            />
            <ReachPicker />
          </div>
          <div className="page-hero-art" data-zoom data-tilt>
            <Art kind="globe" />
          </div>
        </div>
      </section>

      {/* 6 · Format comparison */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            eyebrow="Format comparison"
            title="Same platform, different jobs"
            lead="Where each format appears, what it is for, what it needs from you and which family of metric it reports. Display impressions are never classed as views."
          />
          <div data-rise>
            <FormatCompare />
          </div>
        </div>
      </section>

      <FogServices />

      {/* 7 · Why choose us */}
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Why choose us" title="Things you can check, not things we claim" lead="We would rather describe a process you can observe than say we are the best at it." />
          <div className="grid g3" data-stagger>
            {why.map((w, i) => (
              <article className="card pad-lg" key={w.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{w.title}</h3>
                <p className="p">{w.text}</p>
              </article>
            ))}
            <article className="card pad-lg" style={{ background: "#3f00ff", color: "#f7f7f7", borderColor: "#3f00ff" }}>
              <span className="num" style={{ color: "#c7e4ff" }}>Not on the list</span>
              <h3 className="h3">What we will not promise</h3>
              <p style={{ color: "#f7f7f7" }}>Guaranteed subscribers, engagement, sales, live viewers or advertising platform approval. Nobody can honestly sell those.</p>
              <a className="more" href="/advertising-disclosures" style={{ color: "#f7f7f7" }}>
                Advertising disclosures
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 8 · Workflow */}
      <section className="sec alt">
        <div className="wrap">
          <SecHead
            eyebrow="Workflow"
            title="Seven stages, each with an owner"
            lead="What you do and what we do at every stage, from choosing a service to reading the report."
            action={<TextLink href="/how-it-works">How it works in detail</TextLink>}
          />
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

      {/* 9 · Planner preview */}
      <section className="sec">
        <div className="wrap split top">
          <div className="stack lg sticky">
            <SecHead
              eyebrow="Campaign planner"
              title="Start a brief in under a minute"
              lead="Pick a service, a country and a media budget. The planner takes it from there in ten short steps and saves your progress as you go."
            />
            <ul className="ticks" data-stagger>
              <li>Your choices carry over into the planner</li>
              <li>Nothing is charged when you submit a brief</li>
              <li>Quote-only services lead to a custom estimate request</li>
            </ul>
          </div>
          <div data-rise>
            <PlannerPreview />
          </div>
        </div>
      </section>

      {/* 10 · Industry solutions */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            eyebrow="Solutions"
            title="Built around who you are"
            lead="Creators, artists, brands, agencies, online shops, startups and enterprise teams each come with different problems. Start from yours."
            action={<TextLink href="/solutions">All solutions</TextLink>}
          />
          <div className="grid g3" data-stagger>
            {segmentCards.map((s) => (
              <LinkCard key={s.slug} href={s.href} art={s.art} title={s.name} text={s.card} more="See the solution" />
            ))}
            <LinkCard href="/enterprise" art="enterprise" title="Enterprise" text="Multi-country programmes with custom terms, procurement support and a named contact." more="Enterprise campaigns" />
          </div>
        </div>
      </section>

      <FogExpect />

      {/* 11 · Analytics preview */}
      <section className="sec">
        <div className="wrap split">
          <div data-zoom>
            <DashboardArt />
          </div>
          <div className="stack lg">
            <SecHead
              eyebrow="Reporting"
              title="Numbers with their definitions attached"
              lead="This is an illustrative dashboard with sample data, shown so you know what a report covers. Your real report states its date range, time zone, currency and how fresh the data is."
            />
            <dl className="defs" data-stagger>
              {metricDefs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <TextLink href="/resources/reading-your-report">How to read a report</TextLink>
          </div>
        </div>
      </section>

      {/* 12 · Campaign strategy */}
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Campaign strategy" title="Who does what, start to finish" lead="Five stages, with the responsibility for each one stated." />
          <div className="table-wrap" data-rise>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Stage</th>
                  <th scope="col">Responsibility</th>
                  <th scope="col">What happens</th>
                </tr>
              </thead>
              <tbody>
                {strategy.map((s) => (
                  <tr key={s.title}>
                    <th scope="row">{s.title}</th>
                    <td>
                      <span className="chip">{s.owner}</span>
                    </td>
                    <td>{s.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 15 · Pricing overview */}
      <section className="sec alt">
        <div className="wrap split">
          <div className="stack lg">
            <SecHead
              eyebrow="Pricing"
              title="Three lines, always"
              lead="Every quote separates the media budget you spend on advertising, our agency fee, and any tax. One currency per order. Quotes are valid for 7 days."
            />
            <div className="row">
              <Btn href="/pricing">See how pricing works</Btn>
              <TextLink href="/request-quote">Request a custom quote</TextLink>
            </div>
          </div>
          <div className="panel stack lg" data-rise>
            <div className="bars" aria-hidden>
              <span className="m" style={{ flexGrow: 7 }}>Media budget</span>
              <span className="f" style={{ flexGrow: 2 }}>Agency fee</span>
              <span className="t" style={{ flexGrow: 1 }}>Tax</span>
            </div>
            <dl className="defs">
              <div>
                <dt>Media budget</dt>
                <dd>Spent on advertising. You set it.</dd>
              </div>
              <div>
                <dt>Agency fee</dt>
                <dd>Planning, setup, monitoring and reporting. Discounts apply here, never to your media.</dd>
              </div>
              <div>
                <dt>Tax</dt>
                <dd>Calculated per line for your jurisdiction and shown on its own.</dd>
              </div>
            </dl>
            <p className="help">Proportions in the bar are for illustration. Minimums and fee rates are stated per service in your quote.</p>
          </div>
        </div>
      </section>

      <FogBuiltFor />

      {/* 16 · FAQ: one question from each of the eight topics */}
      <section className="sec">
        <div className="wrap split top">
          <div className="sticky">
            <SecHead eyebrow="FAQ" title="Questions people ask first" lead="One from each topic: setup, targeting, budgets, formats, reporting, timelines, payments and cancellation." />
            <TextLink href="/faq">All questions</TextLink>
          </div>
          <div data-rise>
            <Accordion items={faqTopics.map((t) => ({ id: `faq-${t.key}`, tag: t.title, q: t.items[0][0], a: t.items[0][1] }))} />
          </div>
        </div>
      </section>

      {/* 17 · Enterprise CTA */}
      <section className="sec alt">
        <div className="wrap split top">
          <div className="stack lg sticky">
            <SecHead
              eyebrow="Enterprise"
              title="Large budget or many countries?"
              lead="Tell us the markets, the budget and how your procurement works. A named contact replies with a custom quotation."
            />
            <div className="card-art" data-tilt style={{ margin: 0, maxWidth: 420 }}>
              <Art kind="enterprise" />
            </div>
            <TextLink href="/enterprise">Enterprise campaigns</TextLink>
          </div>
          <div className="panel" data-rise>
            <QuoteForm enterprise />
          </div>
        </div>
      </section>

      <FogCta />
    </Shell>
  );
}
