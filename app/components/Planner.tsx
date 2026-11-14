"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services, getService } from "../content/services";
import { countries, languages, objectives, REVIEW_LEAD } from "../content/site";
import { CountryPicker } from "./widgets";
import { NotConnected } from "./Forms";
import { Arrow } from "./icons";

const STEPS = ["Service", "Destination", "Objective", "Geography", "Audience", "Budget", "Schedule", "Your details", "Review", "Submit"];
const DRAFT_KEY = "planner-draft-v1";

type Brief = {
  service: string;
  url: string;
  objective: string;
  geo: "worldwide" | "countries";
  countries: string[];
  exclusions: string[];
  languages: string[];
  audience: string;
  budget: string;
  start: string;
  end: string;
  zone: string;
  // Personal details below are never written to browser storage (PRD: guest drafts exclude PII).
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
  rights: boolean;
  terms: boolean;
};

const empty: Brief = {
  service: "",
  url: "",
  objective: "",
  geo: "countries",
  countries: [],
  exclusions: [],
  languages: [],
  audience: "",
  budget: "",
  start: "",
  end: "",
  zone: "",
  name: "",
  email: "",
  company: "",
  phone: "",
  notes: "",
  rights: false,
  terms: false,
};

/** Syntactic check only. "Looks valid" is not "verified available" (PRD: destination validation). */
function checkUrl(raw: string, service: string): { ok: boolean; msg: string } {
  const v = raw.trim();
  if (!v) return { ok: false, msg: "Enter the link to your video or channel." };
  if (v.length > 2048) return { ok: false, msg: "That link is too long." };
  let u: URL;
  try {
    u = new URL(v);
  } catch {
    return { ok: false, msg: "Enter a full link starting with https://" };
  }
  if (u.protocol !== "https:") return { ok: false, msg: "The link must start with https://" };
  if (u.username || u.password) return { ok: false, msg: "Remove the sign-in details from the link." };
  const host = u.hostname.replace(/^(www|m)\./, "");
  if (host !== "youtube.com" && host !== "youtu.be") return { ok: false, msg: "Use a link on youtube.com or youtu.be." };
  const isVideo = host === "youtu.be" ? u.pathname.length > 1 : (u.pathname === "/watch" && !!u.searchParams.get("v")) || /^\/shorts\/[\w-]+/.test(u.pathname);
  const isChannel = host === "youtube.com" && (/^\/@[\w.-]+/.test(u.pathname) || /^\/channel\/[\w-]+/.test(u.pathname));
  if (service === "channel-promotion") {
    if (!isChannel && !isVideo) return { ok: false, msg: "Enter a channel link such as https://www.youtube.com/@yourchannel" };
  } else if (!isVideo) {
    return { ok: false, msg: isChannel ? "This service needs a video link, not a channel link." : "Enter a video link such as https://www.youtube.com/watch?v=…" };
  }
  return { ok: true, msg: "The link format looks right. We verify that the video is available and ad-eligible during review." };
}

/** Adds business days (Mon–Fri) to today, for the review lead-time rule. */
function earliestStart(days = 2) {
  const d = new Date();
  let left = days;
  while (left > 0) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d.toISOString().slice(0, 10);
}

const name = (code: string) => countries.find((c) => c[0] === code)?.[1] ?? code;

export default function Planner() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [b, setB] = useState<Brief>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const [done, setDone] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const minStart = earliestStart();

  // Restore a draft, then apply any preset passed in the link (service, countries, budget).
  useEffect(() => {
    let next = { ...empty, zone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC" };
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (raw) next = { ...next, ...JSON.parse(raw) };
    } catch {
      /* storage unavailable: start fresh */
    }
    if (!next.zone) next.zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const s = params.get("service");
    if (s && getService(s)) next.service = s;
    const c = params.get("countries");
    if (c) {
      const list = c.split(",").filter((x) => countries.some((k) => k[0] === x));
      if (list.length) {
        next.countries = list;
        next.geo = "countries";
      }
    }
    if (s === "worldwide") next.geo = "worldwide";
    const bud = params.get("budget");
    if (bud && Number(bud) > 0) next.budget = String(Number(bud));
    setB(next);
  }, [params]);

  // Autosave the non-personal part of the brief.
  useEffect(() => {
    const { name: _n, email: _e, company: _c, phone: _p, notes: _o, ...draft } = b;
    void _n; void _e; void _c; void _p; void _o;
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [b]);

  const set = <K extends keyof Brief>(k: K, v: Brief[K]) => {
    setB((p) => ({ ...p, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = (i: number) => {
    const e: Record<string, string> = {};
    if (i === 0 && !b.service) e.service = "Choose a service to continue.";
    if (i === 1) {
      const r = checkUrl(b.url, b.service);
      if (!r.ok) e.url = r.msg;
      if (!b.rights) e.rights = "Please confirm you hold the rights to this content.";
    }
    if (i === 2 && !b.objective) e.objective = "Choose the main objective.";
    if (i === 3) {
      if (b.geo === "countries" && b.countries.length === 0) e.countries = "Add at least one country.";
      if (b.geo === "worldwide" && b.exclusions.length >= countries.length) e.exclusions = "Excluding every market leaves nowhere to deliver.";
    }
    if (i === 4 && b.languages.length === 0) e.languages = "Choose at least one language.";
    if (i === 5 && !(Number(b.budget) > 0)) e.budget = "Enter a media budget greater than zero.";
    if (i === 6) {
      if (!b.start) e.start = "Choose a start date.";
      if (!b.end) e.end = "Choose an end date.";
      if (b.start && b.end && b.end <= b.start) e.end = "The end date must be after the start date.";
    }
    if (i === 7) {
      if (!b.name.trim()) e.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) e.email = "Enter a valid email address.";
    }
    if (i === 8 && !b.terms) e.terms = "Please confirm before submitting.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const go = (n: number) => {
    setStep(n);
    requestAnimationFrame(() => heading.current?.focus());
  };
  const next = () => {
    if (!validate(step)) return;
    if (step === 8) {
      setDone(true);
      go(9);
    } else go(step + 1);
  };

  const svc = getService(b.service);
  const urgent = !!b.start && b.start < minStart;
  const err = (k: string) => errors[k] && <span className="err" id={`e-${k}`} role="alert">{errors[k]}</span>;
  const geoText = b.geo === "worldwide" ? `Worldwide${b.exclusions.length ? `, excluding ${b.exclusions.map(name).join(", ")}` : ""}` : b.countries.map(name).join(", ");

  const summary: [string, string][] = [
    ["Service", svc?.name ?? ""],
    ["Destination", b.url],
    ["Objective", b.objective],
    ["Geography", geoText],
    ["Languages", b.languages.join(", ")],
    ["Media budget", Number(b.budget) > 0 ? `USD ${Number(b.budget).toLocaleString("en-US", { minimumFractionDigits: 2 })}` : ""],
    ["Schedule", b.start && b.end ? `${b.start} to ${b.end} (${b.zone})` : ""],
  ];

  return (
    <div className="planner">
      <div className="panel">
        <ol className="stepper" aria-hidden>
          {STEPS.map((s, i) => (
            <li key={s} className={i < step ? "done" : i === step ? "now" : ""} />
          ))}
        </ol>
        <p className="small" aria-live="polite">
          Step {step + 1} of {STEPS.length}
          {saved && step < 9 ? " · Draft saved in this browser (contact details are not stored)" : ""}
        </p>
        <h2 className="h2" tabIndex={-1} ref={heading} style={{ margin: "8px 0 24px", outline: "none" }}>
          {STEPS[step]}
        </h2>

        {step === 0 && (
          <fieldset className="stack" style={{ border: 0, padding: 0, margin: 0 }}>
            <legend className="sr">Choose a service</legend>
            <div className="choices">
              {services.map((s) => (
                <label className="choice" key={s.slug}>
                  <input type="radio" name="service" checked={b.service === s.slug} onChange={() => set("service", s.slug)} />
                  <span>{s.name}</span>
                </label>
              ))}
            </div>
            {svc && <p className="help">{svc.card}</p>}
            {(svc?.slug === "enterprise" || svc?.slug === "display") && (
              <p className="help">
                This service is quoted individually. You can continue here, or use the <a className="text-link" href={svc.slug === "enterprise" ? "/enterprise" : "/request-quote"}>quote form</a>.
              </p>
            )}
            {err("service")}
          </fieldset>
        )}

        {step === 1 && (
          <div className="form">
            <div className="field">
              <label htmlFor="pl-url"><span>{b.service === "channel-promotion" ? "Channel or video link" : b.service === "live-event" ? "Event link" : "Video link"}</span></label>
              <input id="pl-url" className="input" type="url" inputMode="url" placeholder="https://www.youtube.com/watch?v=…" value={b.url} aria-invalid={!!errors.url} aria-describedby="pl-url-h e-url" onChange={(e) => set("url", e.target.value)} />
              <span className="help" id="pl-url-h">Accepted: youtube.com/watch, youtu.be and youtube.com/shorts links{b.service === "channel-promotion" ? ", or a channel @handle" : ""}.</span>
              {err("url")}
              {!errors.url && b.url && checkUrl(b.url, b.service).ok && <span className="okmsg">{checkUrl(b.url, b.service).msg}</span>}
            </div>
            <label className="check">
              <input type="checkbox" checked={b.rights} onChange={(e) => set("rights", e.target.checked)} />
              <span>I hold or have licensed the rights to this content, including any music, and it is public or unlisted.</span>
            </label>
            {err("rights")}
          </div>
        )}

        {step === 2 && (
          <fieldset className="stack" style={{ border: 0, padding: 0, margin: 0 }}>
            <legend className="help">The objective decides which metric the campaign is planned and judged on.</legend>
            <div className="choices">
              {objectives.map((o) => (
                <label className="choice" key={o}>
                  <input type="radio" name="objective" checked={b.objective === o} onChange={() => set("objective", o)} />
                  <span>{o}</span>
                </label>
              ))}
            </div>
            {err("objective")}
          </fieldset>
        )}

        {step === 3 && (
          <div className="form">
            <div className="choices" role="radiogroup" aria-label="Geography">
              {(["countries", "worldwide"] as const).map((g) => (
                <label className="choice" key={g}>
                  <input type="radio" name="geo" checked={b.geo === g} onChange={() => set("geo", g)} />
                  <span>{g === "countries" ? "Selected countries" : "Worldwide"}</span>
                </label>
              ))}
            </div>
            {b.geo === "countries" ? (
              <>
                <CountryPicker value={b.countries} onChange={(v) => set("countries", v)} label="Countries to target" hint="Markets you can request. Availability for your format is confirmed at review." />
                {err("countries")}
              </>
            ) : (
              <>
                <p className="help">Worldwide resolves to the list of currently enabled markets ({countries.length} shown here). It never means every country. Exclusions always win.</p>
                <CountryPicker value={b.exclusions} onChange={(v) => set("exclusions", v)} label="Countries to exclude (optional)" />
                {err("exclusions")}
              </>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="form">
            <fieldset className="stack" style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="legend">Languages</legend>
              <div className="choices">
                {languages.map((l) => (
                  <label className="choice" key={l}>
                    <input type="checkbox" checked={b.languages.includes(l)} onChange={(e) => set("languages", e.target.checked ? [...b.languages, l] : b.languages.filter((x) => x !== l))} />
                    <span>{l}</span>
                  </label>
                ))}
              </div>
              {err("languages")}
            </fieldset>
            <div className="field">
              <label htmlFor="pl-aud"><span>Who is this for? <em>(optional)</em></span></label>
              <textarea id="pl-aud" className="input" maxLength={2000} placeholder="Age ranges, interests, topics or channels your audience watches." value={b.audience} onChange={(e) => set("audience", e.target.value)} />
              <span className="help">We confirm which targeting options are available for your format and markets. Availability is a prerequisite, not a promise.</span>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="form">
            <div className="field">
              <label htmlFor="pl-bud"><span>Media budget (USD)</span></label>
              <input id="pl-bud" className="input" type="number" inputMode="decimal" min={1} step="0.01" value={b.budget} aria-invalid={!!errors.budget} aria-describedby="pl-bud-h e-budget" onChange={(e) => set("budget", e.target.value)} />
              <span className="help" id="pl-bud-h">This is the amount spent on advertising. One currency per order; no hidden conversion.</span>
              {err("budget")}
            </div>
            <dl className="lines">
              <div><dt>Media budget</dt><dd>{Number(b.budget) > 0 ? `USD ${Number(b.budget).toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "—"}</dd></div>
              <div><dt>Agency fee</dt><dd className="small">Stated in your quote</dd></div>
              <div><dt>Tax</dt><dd className="small">By jurisdiction, shown separately</dd></div>
            </dl>
            <p className="help">We do not show an estimated total or view count here. Fee rates are set in your quote, and forecasts are shared only when a defensible baseline exists.</p>
          </div>
        )}

        {step === 6 && (
          <div className="form cols">
            <div className="field">
              <label htmlFor="pl-start"><span>Start date</span></label>
              <input id="pl-start" className="input" type="date" value={b.start} aria-invalid={!!errors.start} onChange={(e) => set("start", e.target.value)} />
              {err("start")}
            </div>
            <div className="field">
              <label htmlFor="pl-end"><span>End date</span></label>
              <input id="pl-end" className="input" type="date" min={b.start || undefined} value={b.end} aria-invalid={!!errors.end} onChange={(e) => set("end", e.target.value)} />
              {err("end")}
            </div>
            <div className="field full">
              <label htmlFor="pl-zone"><span>Time zone</span></label>
              <input id="pl-zone" className="input" value={b.zone} onChange={(e) => set("zone", e.target.value)} />
              <span className="help">Dates are read in this time zone. We never adjust them silently.</span>
            </div>
            <div className={`notice full${urgent ? " warn" : ""}`}>
              <div>
                {urgent ? (
                  <><strong>That start is sooner than our review lead time.</strong> We need {REVIEW_LEAD} to review a brief (earliest standard start: {minStart}). You can still submit; it will be handled as an urgent custom quote.</>
                ) : (
                  <><strong>Review lead time: {REVIEW_LEAD}.</strong> The earliest standard start is {minStart}. Payment alone does not make an ad live; we confirm when it is verified as serving.</>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="form cols">
            <div className="field">
              <label htmlFor="pl-name"><span>Name</span></label>
              <input id="pl-name" className="input" maxLength={120} autoComplete="name" value={b.name} aria-invalid={!!errors.name} onChange={(e) => set("name", e.target.value)} />
              {err("name")}
            </div>
            <div className="field">
              <label htmlFor="pl-email"><span>Email</span></label>
              <input id="pl-email" className="input" type="email" maxLength={254} autoComplete="email" value={b.email} aria-invalid={!!errors.email} onChange={(e) => set("email", e.target.value)} />
              {err("email")}
            </div>
            <div className="field">
              <label htmlFor="pl-co"><span>Company <em>(optional)</em></span></label>
              <input id="pl-co" className="input" maxLength={200} autoComplete="organization" value={b.company} onChange={(e) => set("company", e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="pl-ph"><span>Phone <em>(optional)</em></span></label>
              <input id="pl-ph" className="input" type="tel" maxLength={20} autoComplete="tel" placeholder="+1 555 0100" value={b.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div className="field full">
              <label htmlFor="pl-notes"><span>Notes <em>(optional)</em></span></label>
              <textarea id="pl-notes" className="input" maxLength={5000} value={b.notes} onChange={(e) => set("notes", e.target.value)} />
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="stack lg">
            <dl className="summary">
              {[...summary, ["Contact", `${b.name} · ${b.email}`] as [string, string]].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="notice">
              <div>
                <strong>What happens next.</strong> We review your brief, confirm eligibility and targeting, and send a quote showing media budget, agency fee and tax as separate lines. Nothing is charged at this step.
              </div>
            </div>
            <label className="check">
              <input type="checkbox" checked={b.terms} onChange={(e) => set("terms", e.target.checked)} />
              <span>
                I have read the <a className="text-link" href="/terms">terms</a>, <a className="text-link" href="/refund-policy">refund policy</a> and <a className="text-link" href="/advertising-disclosures">advertising disclosures</a>, and I understand that no outcome is guaranteed.
              </span>
            </label>
            {err("terms")}
          </div>
        )}

        {step === 9 && done && (
          <div className="stack lg">
            <NotConnected what="your brief" />
            <p className="p">
              When the platform is connected, this screen will show your order reference, confirm that we received the brief, and tell you the next step. Until then you can send the same details through the <a className="text-link" href="/contact">contact page</a>.
            </p>
            <div className="row">
              <button className="btn btn-secondary" type="button" onClick={() => go(8)}>Back to review</button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  sessionStorage.removeItem(DRAFT_KEY);
                  setB({ ...empty, zone: b.zone });
                  setDone(false);
                  go(0);
                }}
              >
                Delete draft and start again
              </button>
            </div>
          </div>
        )}

        {step < 9 && (
          <div className="planner-actions">
            <button className="btn btn-secondary" type="button" onClick={() => go(step - 1)} disabled={step === 0}>
              Back
            </button>
            <button className="btn btn-primary" type="button" onClick={next}>
              {step === 8 ? "Submit brief" : "Continue"} <Arrow />
            </button>
          </div>
        )}
      </div>

      <aside className="panel sticky" aria-label="Brief summary">
        <h3 className="h4" style={{ marginBottom: 20 }}>Your brief so far</h3>
        <dl className="summary">
          {summary.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd className={v ? "" : "todo"}>{v || "Not set yet"}</dd>
            </div>
          ))}
        </dl>
        <p className="help">Agency fee and tax are added as separate lines in your quote.</p>
      </aside>
    </div>
  );
}
