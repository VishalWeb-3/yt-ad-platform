"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { services, serviceHref, type Service } from "../content/services";
import { countries, faqTopics, formats } from "../content/site";
import { Art } from "./art";
import { Arrow } from "./icons";

/* ───────────────────────── Accordion ───────────────────────── */

/** Accessible accordion. Items with an `id` open when the page loads on that hash (deep links). */
export function Accordion({ items, firstOpen = false }: { items: { id?: string; tag?: string; q: string; a: string }[]; firstOpen?: boolean }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const i = items.findIndex((it) => it.id === hash);
    if (i >= 0) setOpen(i);
  }, [items]);

  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-item${isOpen ? " open" : ""}`} key={it.q} id={it.id}>
            <h3>
              <button className="acc-btn" aria-expanded={isOpen} aria-controls={`${base}-p${i}`} id={`${base}-b${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span>
                  {it.tag && <span className="acc-tag">{it.tag}</span>}
                  {it.q}
                </span>
                <i aria-hidden />
              </button>
            </h3>
            <div className="acc-panel" id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-b${i}`} inert={!isOpen}>
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── Format comparison tabs ───────────────────────── */

export function FormatCompare() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const f = formats[i];

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + formats.length) % formats.length;
    setI(n);
    refs.current[n]?.focus();
  };

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Ad formats" onKeyDown={onKey}>
        {formats.map((x, k) => (
          <button
            key={x.key}
            ref={(el) => {
              refs.current[k] = el;
            }}
            className="tab"
            role="tab"
            id={`tab-${x.key}`}
            aria-selected={k === i}
            aria-controls={`panel-${x.key}`}
            tabIndex={k === i ? 0 : -1}
            onClick={() => setI(k)}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="tabpanel" role="tabpanel" id={`panel-${f.key}`} aria-labelledby={`tab-${f.key}`} key={f.key}>
        <div className="card-art" data-tilt>
          <Art kind={f.art} />
        </div>
        <div className="stack">
          <dl className="defs">
            <div>
              <dt>Placement</dt>
              <dd>{f.placement}</dd>
            </div>
            <div>
              <dt>Eligible goal</dt>
              <dd>{f.goal}</dd>
            </div>
            <div>
              <dt>Creative needs</dt>
              <dd>{f.creative}</dd>
            </div>
            <div>
              <dt>Metric family</dt>
              <dd>{f.metric}</dd>
            </div>
          </dl>
          <div>
            <a className="link" href={f.href}>
              Read about {f.name.toLowerCase()} <Arrow size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Country combobox ───────────────────────── */

/** Searchable multi-select of markets (PRD 33: keyboard arrows / Enter / Escape, removable chips). */
export function CountryPicker({
  value,
  onChange,
  label = "Countries",
  hint,
  exclude = [],
}: {
  value: string[];
  onChange: (v: string[]) => void;
  label?: string;
  hint?: string;
  exclude?: string[];
}) {
  const id = useId();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const options = useMemo(
    () => countries.filter(([code, name]) => !value.includes(code) && !exclude.includes(code) && name.toLowerCase().includes(q.trim().toLowerCase())),
    [q, value, exclude],
  );
  const add = (code: string) => {
    onChange([...value, code]);
    setQ("");
    setHi(0);
    input.current?.focus();
  };

  return (
    <div className="field">
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <div className="combo">
        <input
          ref={input}
          id={id}
          className="input"
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-autocomplete="list"
          aria-activedescendant={open && options[hi] ? `${id}-o${hi}` : undefined}
          placeholder="Search countries"
          autoComplete="off"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setHi(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
              setHi((h) => Math.min(options.length - 1, h + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setHi((h) => Math.max(0, h - 1));
            } else if (e.key === "Enter" && open && options[hi]) {
              e.preventDefault();
              add(options[hi][0]);
            } else if (e.key === "Escape") {
              setOpen(false);
            } else if (e.key === "Backspace" && !q && value.length) {
              onChange(value.slice(0, -1));
            }
          }}
        />
        {open && (
          <ul className="combo-list" id={`${id}-list`} role="listbox" aria-label={label}>
            {options.length === 0 && <li className="empty">No matching market. Ask us about it in your brief.</li>}
            {options.map(([code, name], k) => (
              <li key={code} id={`${id}-o${k}`} role="option" aria-selected={k === hi} onMouseDown={(e) => e.preventDefault()} onClick={() => add(code)} onMouseEnter={() => setHi(k)}>
                {name} <small>{code}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="chips" aria-live="polite">
        {value.map((code) => {
          const name = countries.find((c) => c[0] === code)?.[1] ?? code;
          return (
            <span className="chip solid" key={code}>
              {name}
              <button type="button" aria-label={`Remove ${name}`} onClick={() => onChange(value.filter((v) => v !== code))}>
                ×
              </button>
            </span>
          );
        })}
      </div>
      {hint && <span className="help">{hint}</span>}
    </div>
  );
}

/** Home "Global reach" block: pick markets and carry them into the planner. */
export function ReachPicker() {
  const [sel, setSel] = useState<string[]>([]);
  const href = `/campaign-planner?service=country-targeted${sel.length ? `&countries=${sel.join(",")}` : ""}`;
  return (
    <div className="panel stack lg">
      <CountryPicker value={sel} onChange={setSel} label="Where is your audience?" hint="These are markets you can request. Availability for your format is confirmed at review; we never imply every country is available." />
      <div className="row">
        <a className="btn btn-primary" href={href}>
          {sel.length ? `Plan for ${sel.length} ${sel.length === 1 ? "market" : "markets"}` : "Plan a targeted campaign"} <Arrow />
        </a>
        <a className="link" href="/campaign-planner?service=worldwide">
          Or go worldwide <Arrow size={16} />
        </a>
      </div>
    </div>
  );
}

/* ───────────────────────── Planner preview (home) ───────────────────────── */

const money = (n: number) => `USD ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * PRD 11.9: "No pretend calculated results." Fee rates are not configured (D05),
 * so the preview shows the structure of a price and passes the choices on, without inventing a total.
 */
export function PlannerPreview() {
  const [service, setService] = useState("google-ads-video-views");
  const [country, setCountry] = useState("US");
  const [budget, setBudget] = useState(1000);
  const href = `/campaign-planner?service=${service}&countries=${country}&budget=${budget}`;
  return (
    <div className="panel">
      <div className="form cols">
        <div className="field full">
          <label htmlFor="pp-s">
            <span>Service</span>
          </label>
          <select id="pp-s" className="input" value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="pp-c">
            <span>Country</span>
          </label>
          <select id="pp-c" className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map(([c, n]) => (
              <option key={c} value={c}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="pp-b">
            <span>Media budget (USD)</span>
          </label>
          <input id="pp-b" className="input" type="number" min={1} step={50} value={budget} onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))} />
        </div>
      </div>
      <dl className="lines" style={{ marginTop: 24 }}>
        <div>
          <dt>Media budget</dt>
          <dd>{money(budget)}</dd>
        </div>
        <div>
          <dt>Agency fee</dt>
          <dd className="small">Confirmed in your quote</dd>
        </div>
        <div>
          <dt>Tax</dt>
          <dd className="small">By jurisdiction, shown separately</dd>
        </div>
      </dl>
      <p className="help" style={{ margin: "16px 0 24px" }}>
        We do not show a total here because fee rates are set per quote. You will see every line before you accept anything.
      </p>
      <a className="btn btn-primary" href={href}>
        Continue in the planner <Arrow />
      </a>
    </div>
  );
}

/* ───────────────────────── Illustrative price calculator ───────────────────────── */

/** Works in whole cents to avoid floating-point drift; rounds half up as the PRD's pricing order specifies. */
export function PriceCalc() {
  const [media, setMedia] = useState(1000);
  const [rate, setRate] = useState(15);
  const [disc, setDisc] = useState(10);
  const [tax, setTax] = useState(10);

  const m = Math.round(media * 100);
  const f0 = Math.round((m * rate) / 100);
  const d = Math.round((f0 * disc) / 100);
  const f = f0 - d;
  const t = Math.round((f * tax) / 100);
  const total = m + f + t;
  const c = (n: number) => money(n / 100);

  const num = (label: string, v: number, set: (n: number) => void, max: number, suffix: string, id: string) => (
    <div className="field">
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <div className="row" style={{ flexWrap: "nowrap" }}>
        <input id={id} className="input" type="number" min={0} max={max} value={v} onChange={(e) => set(Math.min(max, Math.max(0, Number(e.target.value))))} />
        <span className="small">{suffix}</span>
      </div>
    </div>
  );

  return (
    <div className="panel">
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 24 }}>
        <h3 className="h3">Worked example</h3>
        <span className="dash-flag">Illustrative · not our price list</span>
      </div>
      <div className="form cols">
        {num("Media budget", media, setMedia, 10_000_000, "USD", "pc-m")}
        {num("Example fee rate", rate, setRate, 100, "% of media", "pc-r")}
        {num("Example fee discount", disc, setDisc, 100, "% of fee", "pc-d")}
        {num("Example tax on fee", tax, setTax, 100, "%", "pc-t")}
      </div>
      <div className="bars" style={{ marginTop: 28 }} aria-hidden>
        <span className="m" style={{ flexGrow: Math.max(m, 1) }}>Media</span>
        <span className="f" style={{ flexGrow: Math.max(f, total * 0.08) }}>Fee</span>
        <span className="t" style={{ flexGrow: Math.max(t, total * 0.06) }}>Tax</span>
      </div>
      <dl className="lines" style={{ marginTop: 16 }} aria-live="polite">
        <div>
          <dt>Media budget</dt>
          <dd>{c(m)}</dd>
        </div>
        <div>
          <dt>Agency fee ({rate}% of media)</dt>
          <dd>{c(f0)}</dd>
        </div>
        <div>
          <dt>Fee discount ({disc}% of fee)</dt>
          <dd>− {c(d)}</dd>
        </div>
        <div>
          <dt>Tax ({tax}% of fee, illustrative)</dt>
          <dd>{c(t)}</dd>
        </div>
        <div className="total">
          <dt>Total</dt>
          <dd>{c(total)}</dd>
        </div>
      </dl>
      <p className="help" style={{ marginTop: 16 }}>
        The rates above are examples you can change to see how the lines relate. Your actual fee, any discount and the tax that applies are stated in your quote. Nothing here is tax advice.
      </p>
    </div>
  );
}

/* ───────────────────────── Service explorer (/services) ───────────────────────── */

function MiniCard({ s }: { s: Service }) {
  return (
    <article className="card">
      <div className="card-art">
        <Art kind={s.art} />
      </div>
      <span className="num">{s.id}</span>
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

export function ServiceExplorer() {
  const cats = ["All", "Ad formats", "Geography", "Promotion", "Managed"];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = services.filter(
    (s) => (cat === "All" || s.category === cat) && `${s.name} ${s.card} ${s.outcome}`.toLowerCase().includes(q.trim().toLowerCase()),
  );
  return (
    <div className="stack lg">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="tabs" role="group" aria-label="Filter by category" style={{ margin: 0 }}>
          {cats.map((c) => (
            <button key={c} className="tab" aria-pressed={c === cat} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="field" style={{ minWidth: 260 }}>
          <label className="sr" htmlFor="svc-q">
            Search services
          </label>
          <input id="svc-q" className="input" type="search" placeholder="Search services" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      <p className="small" aria-live="polite">
        {list.length} of {services.length} services
      </p>
      <div className="grid g3">
        {list.map((s) => (
          <MiniCard key={s.slug} s={s} />
        ))}
      </div>
      {list.length === 0 && (
        <div className="notice">
          <div>
            <strong>No service matches that search.</strong> Clear the filters, or <a className="text-link" href="/request-quote">request a quote</a> and describe what you need.
          </div>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── FAQ explorer (/faq) ───────────────────────── */

export function FaqExplorer() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const topics = faqTopics
    .map((t) => ({ ...t, items: t.items.filter(([qq, a]) => !term || `${qq} ${a}`.toLowerCase().includes(term)) }))
    .filter((t) => t.items.length);
  return (
    <div className="split top" style={{ gridTemplateColumns: "280px minmax(0,1fr)" }}>
      <div className="sticky stack">
        <div className="field">
          <label htmlFor="faq-q">
            <span>Search questions</span>
          </label>
          <input id="faq-q" className="input" type="search" placeholder="e.g. refund, views, country" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <nav className="toc" aria-label="FAQ topics">
          {faqTopics.map((t) => (
            <a key={t.key} href={`#${t.key}`}>
              {t.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="stack lg">
        {topics.length === 0 && (
          <div className="notice">
            <div>
              <strong>Nothing matches “{q}”.</strong> Try another word, or <a className="text-link" href="/contact">ask us directly</a>.
            </div>
          </div>
        )}
        {topics.map((t) => (
          <section key={t.key} id={t.key} style={{ scrollMarginTop: 100 }}>
            <h2 className="h3" style={{ marginBottom: 16 }}>
              {t.title}
            </h2>
            <Accordion items={t.items.map(([qq, a]) => ({ q: qq, a }))} />
          </section>
        ))}
      </div>
    </div>
  );
}
