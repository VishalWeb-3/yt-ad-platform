import { Art } from "./art";
import { Btn, CtaBand, Crumbs, LinkCard, Notice, PageHero, SecHead, ServiceCard, Shell, TextLink, Words } from "./ui";
import { Accordion } from "./widgets";
import { getService, serviceHref, type Service } from "../content/services";
import { QUOTE_VALIDITY, REVIEW_LEAD, workflow, type Segment } from "../content/site";
import { articleAuthor, type Article } from "../content/articles";
import type { Legal } from "../content/legal";

const fmtDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/* ───────── Shared blocks ───────── */

export function ProcessStrip() {
  return (
    <ol className="grid g4" data-stagger>
      {workflow.map((w, i) => (
        <li className="card" key={w.title}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="h4">{w.title}</h3>
          <p className="small">{w.we}</p>
        </li>
      ))}
      <li className="card" style={{ justifyContent: "center" }}>
        <TextLink href="/how-it-works">The full workflow</TextLink>
      </li>
    </ol>
  );
}

export function PricingLines() {
  return (
    <div className="panel stack lg">
      <div className="bars" aria-hidden>
        <span className="m" style={{ flexGrow: 7 }}>Media budget</span>
        <span className="f" style={{ flexGrow: 2 }}>Agency fee</span>
        <span className="t" style={{ flexGrow: 1 }}>Tax</span>
      </div>
      <ul className="ticks">
        <li>Media budget is what is spent on advertising. You set it.</li>
        <li>The agency fee covers planning, setup, monitoring and reporting.</li>
        <li>Tax is calculated per line and shown on its own.</li>
        <li>Quotes are valid for {QUOTE_VALIDITY}. Accepted quotes are never edited in place.</li>
      </ul>
      <p className="help">Bar proportions are illustrative. Fee rates and any minimum are stated in your quote.</p>
    </div>
  );
}

/* ───────── Service page template (PRD section 13) ───────── */

export function ServiceTemplate({ s, enterprise }: { s: Service; enterprise?: boolean }) {
  const plan = `/campaign-planner?service=${s.slug}`;
  const related = s.related.map((r) => getService(r)!).filter(Boolean);
  return (
    <>
      <PageHero
        crumbs={enterprise ? [[s.name]] : [["Services", "/services"], [s.name]]}
        eyebrow={`${s.id} · ${s.category}`}
        title={s.headline}
        summary={s.summary}
        art={s.art}
      >
        <Btn href={enterprise ? "#quote" : plan}>{enterprise ? "Request a custom quote" : `Plan ${s.name.replace(" Advertising", "").toLowerCase()}`}</Btn>
        <Btn href="/pricing" kind="secondary">How pricing works</Btn>
      </PageHero>

      {/* Format explanation */}
      <section className="sec light">
        <div className="wrap split top">
          <SecHead eyebrow="The format" title="What you are buying" lead={`${s.name} is paid advertising delivered through Google Ads. Here is where it appears, what it is for and how it is measured.`} />
          <div className="stack lg" data-rise>
            <dl className="defs">
              <div>
                <dt>Placement</dt>
                <dd>{s.placement}</dd>
              </div>
              <div>
                <dt>Objective</dt>
                <dd>{s.objective}</dd>
              </div>
              <div>
                <dt>Metric family</dt>
                <dd>{s.metric}</dd>
              </div>
              <div>
                <dt>Primary outcome</dt>
                <dd>{s.outcome}</dd>
              </div>
            </dl>
            <Notice title="Availability.">
              Formats, targeting and metric definitions are set by Google Ads and can change. We confirm what applies to your campaign during review. Format details on this page were last reviewed in November 2026.
            </Notice>
          </div>
        </div>
      </section>

      {/* Eligible goals + requirements */}
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Fit and requirements" title="Is this right for your campaign?" />
          <div className="grid g3" data-stagger>
            <article className="card pad-lg">
              <span className="num">Good for</span>
              <h3 className="h3">Eligible goals</h3>
              <ul className="ticks">
                {s.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
            <article className="card pad-lg">
              <span className="num">We need</span>
              <h3 className="h3">Your inputs</h3>
              <ul className="ticks">
                {s.inputs.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
            <article className="card pad-lg">
              <span className="num">Before launch</span>
              <h3 className="h3">Creative checklist</h3>
              <ul className="ticks">
                {s.creative.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="small" style={{ marginTop: 24 }} data-rise>
            Minimum lead time: we review new briefs within {REVIEW_LEAD}. Account, creative and rights approval are prerequisites for launch, not promises.
          </p>
        </div>
      </section>

      {/* Audience and geography */}
      <section className="sec alt">
        <div className="wrap split">
          <div className="page-hero-art" data-zoom data-tilt>
            <Art kind={s.slug === "worldwide" || s.slug === "country-targeted" ? "street" : "globe"} />
          </div>
          <div className="stack lg">
            <SecHead eyebrow="Audience and geography" title="Who sees it, and where" lead={s.audience} />
            <div className="row">
              <TextLink href="/services/country-targeted">Country targeting</TextLink>
              <TextLink href="/resources/targeting-options">Targeting options explained</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec light">
        <div className="wrap">
          <SecHead eyebrow="Process" title="From brief to report" lead="The same seven stages apply to every service. This is what we do at each one." />
          <ProcessStrip />
        </div>
      </section>

      {/* Transparent pricing */}
      <section className="sec">
        <div className="wrap split">
          <div className="stack lg">
            <SecHead
              eyebrow="Pricing"
              title="Priced in three separate lines"
              lead={`${s.name} is priced by quotation: your media budget, our agency fee and any tax, each on its own line. We do not publish a rate card, so there is no number here to mislead you.`}
            />
            <div className="row">
              <Btn href={enterprise ? "#quote" : plan}>{enterprise ? "Request a quote" : "Get a quote through the planner"}</Btn>
              <TextLink href="/pricing">Pricing explained</TextLink>
            </div>
          </div>
          <div data-rise>
            <PricingLines />
          </div>
        </div>
      </section>

      {/* Evidence (PRD 13): approved case studies only. None exist yet, so the module is omitted. */}

      {/* Limitations */}
      <section className="sec alt">
        <div className="wrap split top">
          <SecHead eyebrow="Limitations" title="What this service does not do" lead="Stated up front, so nothing in the report comes as a surprise." />
          <ul className="ticks cross" data-stagger>
            {s.limits.map((l) => (
              <li key={l}>{l}</li>
            ))}
            <li>Payment alone does not mean an ad is live. We confirm when it is verified as serving.</li>
            <li>Advertising platform approval cannot be guaranteed by anyone.</li>
            <li>Forecasts are shared only when a defensible baseline exists, and always as a labelled range.</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="sec light">
        <div className="wrap split top">
          <div className="sticky">
            <SecHead eyebrow="FAQ" title={`Questions about ${s.name.toLowerCase()}`} />
            <TextLink href="/faq">All questions</TextLink>
          </div>
          <div data-rise>
            <Accordion items={s.faqs.map(([q, a]) => ({ q, a }))} firstOpen />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Related" title="Often planned together" />
          <div className="grid g3" data-stagger>
            {related.map((r) => (
              <ServiceCard key={r.slug} s={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────── Solutions and industries ───────── */

export function SegmentIndex({ kind, title, summary, items, art }: { kind: "solutions" | "industries"; title: string; summary: string; items: Segment[]; art: Segment["art"] }) {
  const label = kind === "solutions" ? "Solutions" : "Industries";
  return (
    <Shell>
      <PageHero crumbs={[[label]]} eyebrow={label} title={title} summary={summary} art={art}>
        <Btn href="/campaign-planner">Start your campaign</Btn>
        <Btn href={kind === "solutions" ? "/industries" : "/solutions"} kind="secondary">
          {kind === "solutions" ? "Browse by industry" : "Browse by advertiser type"}
        </Btn>
      </PageHero>
      <section className="sec light">
        <div className="wrap">
          <div className="grid g3" data-stagger>
            {items.map((s) => (
              <LinkCard key={s.slug} href={`/${kind}/${s.slug}`} art={s.art} title={s.name} text={s.card} more={kind === "solutions" ? "See the solution" : "See the approach"} />
            ))}
            {kind === "solutions" && (
              <LinkCard href="/enterprise" art="enterprise" title="Enterprise" text="Multi-country programmes with custom terms, procurement support and a named contact." more="Enterprise campaigns" />
            )}
          </div>
        </div>
      </section>
      <CtaBand title="Not sure where you fit?" text="Describe what you are trying to do and we will point you to the right service, or tell you honestly if advertising is not the answer." href="/contact" label="Discuss your campaign" />
    </Shell>
  );
}

export function SegmentTemplate({ kind, s }: { kind: "solutions" | "industries"; s: Segment }) {
  const label = kind === "solutions" ? "Solutions" : "Industries";
  const svc = s.services.map((x) => getService(x)!).filter(Boolean);
  return (
    <Shell>
      <PageHero crumbs={[[label, `/${kind}`], [s.name]]} eyebrow={s.name} title={s.headline} summary={s.intro} art={s.art}>
        <Btn href={`/campaign-planner?service=${s.services[0]}`}>Start your campaign</Btn>
        <Btn href="/contact" kind="secondary">Discuss your campaign</Btn>
      </PageHero>

      <section className="sec light">
        <div className="wrap grid g2" data-stagger>
          <article className="card pad-lg">
            <span className="num">The problem</span>
            <h2 className="h3">What usually gets in the way</h2>
            <ul className="ticks cross">
              {s.problems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
          <article className="card pad-lg">
            <span className="num">Our approach</span>
            <h2 className="h3">How we handle it</h2>
            <ul className="ticks">
              {s.help.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Your path" title="A typical journey" lead="The steps most people in your position take with us." />
          <ol className="grid g4" data-stagger>
            {s.journey.map((j, i) => (
              <li className="card pad-lg" key={j}>
                <span className="num">Step {i + 1}</span>
                <h3 className="h4">{j}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="Eligible services" title="Services that fit" lead="Each is paid advertising through Google Ads. Open one to see what it needs and what it cannot do." />
          <div className="grid g4" data-stagger>
            {svc.map((x) => (
              <ServiceCard key={x.slug} s={x} />
            ))}
          </div>
        </div>
      </section>

      {/* Evidence: published only when verified and permitted. */}
      <section className="sec tight light">
        <div className="wrap">
          <Notice title="No case studies yet.">
            We publish results for {s.name.toLowerCase()} only when they are verified and the customer has agreed. <a className="text-link" href="/case-studies">See what a case study will contain.</a>
          </Notice>
        </div>
      </section>
      <CtaBand art={s.art} />
    </Shell>
  );
}

/* ───────── Resources and blog ───────── */

export function ArticleIndex({ base, label, title, summary, items }: { base: "/resources" | "/blog"; label: string; title: string; summary: string; items: Article[] }) {
  return (
    <Shell>
      <PageHero crumbs={[[label]]} eyebrow={label} title={title} summary={summary}>
        <Btn href={base === "/blog" ? "/resources" : "/blog"} kind="secondary">
          {base === "/blog" ? "Browse the guides" : "Read the blog"}
        </Btn>
      </PageHero>
      <section className="sec light flush-top" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="grid g3" data-stagger>
            {items.map((a) => (
              <LinkCard key={a.slug} href={`${base}/${a.slug}`} art={a.art} tag={`${a.topic} · ${a.minutes} min read`} title={a.title} text={a.summary} more={base === "/blog" ? "Read the post" : "Read the guide"} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}

const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function ArticleTemplate({ base, label, a }: { base: "/resources" | "/blog"; label: string; a: Article }) {
  const related = a.related.map((r) => getService(r)!).filter(Boolean);
  return (
    <Shell>
      <section className="sec page-hero" style={{ paddingBottom: 48 }}>
        <div className="wrap stack" style={{ gap: 24 }}>
          <Crumbs items={[[label, base], [a.title]]} />
          <span className="eyebrow" data-rise>{a.topic}</span>
          <h1 className="h1 sm" data-words style={{ maxWidth: "18ch" }}>
            <Words text={a.title} />
          </h1>
          <p className="lead" data-rise>{a.summary}</p>
          <p className="meta" data-rise>
            <span>By {articleAuthor}</span>
            <span>Updated <time dateTime={a.updated}>{fmtDate(a.updated)}</time></span>
            <span>{a.minutes} min read</span>
          </p>
        </div>
      </section>
      <section className="sec light">
        <div className="wrap split top" style={{ gridTemplateColumns: "260px minmax(0,1fr)" }}>
          <aside className="sticky stack">
            <span className="num">On this page</span>
            <nav className="toc" aria-label="On this page">
              {a.sections.map((s) => (
                <a key={s.h} href={`#${anchor(s.h)}`}>
                  {s.h}
                </a>
              ))}
            </nav>
          </aside>
          <article className="prose">
            {a.sections.map((s) => (
              <section key={s.h}>
                <h2 id={anchor(s.h)}>{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </section>
            ))}
            <Notice title="Source review.">
              Format and metric details are set by Google Ads and YouTube and can change. This page was last reviewed on {fmtDate(a.updated)}.
            </Notice>
          </article>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Related services" title="Put it into practice" />
          <div className="grid g3" data-stagger>
            {related.map((r) => (
              <ServiceCard key={r.slug} s={r} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}

/* ───────── Legal pages ───────── */

export function LegalTemplate({ l }: { l: Legal }) {
  return (
    <Shell>
      <section className="sec page-hero" style={{ paddingBottom: 48 }}>
        <div className="wrap stack" style={{ gap: 24 }}>
          <Crumbs items={[[l.title]]} />
          <h1 className="h1 sm" data-words>
            <Words text={l.title} />
          </h1>
          <p className="lead" data-rise>{l.intro}</p>
          <Notice title="Draft for review." warn>
            This text is a working draft that follows the planned structure. It has not been reviewed by a lawyer or tax adviser and is not yet in force.
          </Notice>
        </div>
      </section>
      <section className="sec light">
        <div className="wrap split top" style={{ gridTemplateColumns: "260px minmax(0,1fr)" }}>
          <aside className="sticky stack">
            <span className="num">Contents</span>
            <nav className="toc" aria-label="Contents">
              {l.sections.map((s) => (
                <a key={s.h} href={`#${anchor(s.h)}`}>
                  {s.h}
                </a>
              ))}
            </nav>
          </aside>
          <article className="prose">
            {l.sections.map((s) => (
              <section key={s.h}>
                <h2 id={anchor(s.h)}>{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </section>
            ))}
            <p>
              <a className="link" href={l.cta[1]}>
                {l.cta[0]}
              </a>
            </p>
          </article>
        </div>
      </section>
    </Shell>
  );
}

export { serviceHref };
