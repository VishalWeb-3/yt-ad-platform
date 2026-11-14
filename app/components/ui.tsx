import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Motion from "./Motion";
import { Art } from "./art";
import type { ArtKind, Service } from "../content/services";
import { serviceHref } from "../content/services";
import { Arrow } from "./icons";

export { Arrow };

/** Splits text into masked words so GSAP can slide each one up. */
export function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="w">
            <span className="wi">{w}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

/** Page chrome shared by every route. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {children}
        <Footer />
      </main>
      <Motion />
    </>
  );
}

export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        <li>
          <a href="/">Home</a>
        </li>
        {items.map(([label, href]) => (
          <li key={label} aria-current={href ? undefined : "page"}>
            {href ? <a href={href}>{label}</a> : label}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Btn({ href, children, kind = "primary", sm }: { href: string; children: ReactNode; kind?: "primary" | "secondary"; sm?: boolean }) {
  return (
    <a className={`btn btn-${kind}${sm ? " btn-sm" : ""}`} href={href}>
      {children} <Arrow />
    </a>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="link" href={href}>
      {children} <Arrow size={16} />
    </a>
  );
}

/** Hero for inner pages: breadcrumbs, one H1, summary, actions and an optional illustration. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  summary,
  art,
  children,
}: {
  crumbs: [string, string?][];
  eyebrow?: string;
  title: string;
  summary: string;
  art?: ArtKind;
  children?: ReactNode;
}) {
  return (
    <section className="sec page-hero">
      <div className="wrap">
        <div className={art ? "split wide-left" : ""}>
          <div className="stack">
            <Crumbs items={crumbs} />
            {eyebrow && <span className="eyebrow" data-rise>{eyebrow}</span>}
            <h1 className="h1 sm" data-words>
              <Words text={title} />
            </h1>
            <p className="lead" data-rise>
              {summary}
            </p>
            {children && <div className="row" data-rise>{children}</div>}
          </div>
          {art && (
            <div className="page-hero-art" data-zoom data-tilt>
              <Art kind={art} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SecHead({
  eyebrow,
  title,
  lead,
  action,
  center,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: ReactNode;
  center?: boolean;
  as?: "h2" | "h3";
}) {
  const H = as;
  return (
    <div className={`sec-head${center ? " center" : ""}`}>
      <div>
        {eyebrow && <span className="eyebrow" data-rise>{eyebrow}</span>}
        <H className="h2" data-words>
          <Words text={title} />
        </H>
        {lead && (
          <p className="lead" data-rise>
            {lead}
          </p>
        )}
      </div>
      {action && <div data-rise>{action}</div>}
    </div>
  );
}

/** One card, one link (PRD: no nested interactive conflict). */
export function ServiceCard({ s, n }: { s: Service; n?: number }) {
  return (
    <article className="card">
      <div className="card-art">
        <Art kind={s.art} />
      </div>
      {n !== undefined && <span className="num">{String(n).padStart(2, "0")}</span>}
      <h3 className="h3">
        <a className="card-link" href={serviceHref(s)}>
          {s.name}
        </a>
      </h3>
      <p className="p">{s.card}</p>
      <span className="chip">{s.outcome}</span>
      <span className="more">
        View service <Arrow size={16} />
      </span>
    </article>
  );
}

export function LinkCard({ href, art, title, text, tag, more = "Read more" }: { href: string; art?: ArtKind; title: string; text: string; tag?: string; more?: string }) {
  return (
    <article className="card">
      {art && (
        <div className="card-art wide">
          <Art kind={art} />
        </div>
      )}
      {tag && <span className="num">{tag}</span>}
      <h3 className="h3">
        <a className="card-link" href={href}>
          {title}
        </a>
      </h3>
      <p className="p">{text}</p>
      <span className="more">
        {more} <Arrow size={16} />
      </span>
    </article>
  );
}

/** Closing call to action used at the foot of inner pages. */
export function CtaBand({
  title = "Ready to plan your campaign?",
  text = "Ten short steps. You see media budget, agency fee and tax as separate lines before you commit to anything.",
  href = "/campaign-planner",
  label = "Start your campaign",
  secondary = ["Request a quote", "/request-quote"],
  art = "views",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
  secondary?: [string, string];
  art?: ArtKind;
}) {
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="band" data-rise>
          <div className="stack">
            <h2 className="h2">{title}</h2>
            <p className="lead">{text}</p>
            <div className="row" style={{ marginTop: 8 }}>
              <Btn href={href}>{label}</Btn>
              <TextLink href={secondary[1]}>{secondary[0]}</TextLink>
            </div>
          </div>
          <div className="card-art" style={{ margin: 0 }}>
            <Art kind={art} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Honest placeholder for anything the PRD says to hide until evidence exists. */
export function Notice({ title, children, warn }: { title: string; children: ReactNode; warn?: boolean }) {
  return (
    <div className={`notice${warn ? " warn" : ""}`} role="note">
      <div>
        <strong>{title}</strong> {children}
      </div>
    </div>
  );
}
