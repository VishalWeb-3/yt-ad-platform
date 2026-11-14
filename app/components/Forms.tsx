"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { services } from "../content/services";
import { SUPPORT_HOURS } from "../content/site";
import { Arrow } from "./icons";

/**
 * This build is frontend-only. No form posts anywhere, so none of them may claim
 * success (PRD: a disabled feature "may not simulate success"). After a valid
 * submit we keep what was typed and say plainly that nothing was sent.
 */
function useStub() {
  const [tried, setTried] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTried(true);
  };
  return { tried, onSubmit };
}

export function NotConnected({ what }: { what: string }) {
  return (
    <div className="notice warn full" role="status">
      <div>
        <strong>Preview only.</strong> This site is not connected to a server yet, so {what} was not sent. Your entries are still here.
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  optional,
  full,
  children,
}: {
  label: string;
  hint?: string;
  optional?: boolean;
  full?: boolean;
  children: (p: { id: string; "aria-describedby"?: string }) => ReactNode;
}) {
  const id = useId();
  return (
    <div className={`field${full ? " full" : ""}`}>
      <label htmlFor={id}>
        <span>
          {label} {optional && <em>(optional)</em>}
        </span>
      </label>
      {children({ id, "aria-describedby": hint ? `${id}-h` : undefined })}
      {hint && (
        <span className="help" id={`${id}-h`}>
          {hint}
        </span>
      )}
    </div>
  );
}

export function Newsletter() {
  const { tried, onSubmit } = useStub();
  return (
    <form onSubmit={onSubmit} style={{ marginTop: 24, maxWidth: 340 }}>
      <label className="small" htmlFor="nl">
        Occasional guides on YouTube advertising
      </label>
      <div className="newsletter">
        <input id="nl" className="input" type="email" required placeholder="you@example.com" autoComplete="email" />
        <button className="btn btn-secondary btn-sm" type="submit">
          Sign up
        </button>
      </div>
      <label className="check" style={{ marginTop: 10 }}>
        <input type="checkbox" required />
        <span>I agree to receive these emails. I can unsubscribe at any time.</span>
      </label>
      {tried && (
        <p className="help" role="status" style={{ marginTop: 8 }}>
          Preview only: sign-up is not connected yet, so you were not subscribed.
        </p>
      )}
    </form>
  );
}

export function ContactForm() {
  const { tried, onSubmit } = useStub();
  return (
    <form className="form cols" onSubmit={onSubmit}>
      <Field label="Name">{(p) => <input {...p} className="input" name="name" required maxLength={120} autoComplete="name" />}</Field>
      <Field label="Email">{(p) => <input {...p} className="input" name="email" type="email" required maxLength={254} autoComplete="email" />}</Field>
      <Field label="Topic" full>
        {(p) => (
          <select {...p} className="input" name="topic" defaultValue="New campaign">
            <option>New campaign</option>
            <option>Existing order</option>
            <option>Billing</option>
            <option>Something else</option>
          </select>
        )}
      </Field>
      <Field label="Message" hint={`We reply ${SUPPORT_HOURS}.`} full>
        {(p) => <textarea {...p} className="input" name="message" required maxLength={5000} />}
      </Field>
      {tried && <NotConnected what="your message" />}
      <div className="full">
        <button className="btn btn-primary" type="submit">
          Send inquiry <Arrow />
        </button>
      </div>
    </form>
  );
}

export function QuoteForm({ enterprise }: { enterprise?: boolean }) {
  const { tried, onSubmit } = useStub();
  return (
    <form className="form cols" onSubmit={onSubmit}>
      {!enterprise && (
        <Field label="Service" full>
          {(p) => (
            <select {...p} className="input" name="service" defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((s) => (
                <option key={s.slug}>{s.name}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          )}
        </Field>
      )}
      <Field label="What do you want to achieve?" full>
        {(p) => <textarea {...p} className="input" name="brief" required maxLength={5000} placeholder="The video or channel, who it is for, and the result you are after." />}
      </Field>
      <Field label="Budget band" hint="Media budget only. Fees and tax are quoted as separate lines.">
        {(p) => (
          <select {...p} className="input" name="budget" defaultValue="">
            <option value="" disabled>
              Select a band
            </option>
            {(enterprise
              ? ["USD 10,000 to 25,000", "USD 25,000 to 100,000", "Over USD 100,000", "Custom or not decided"]
              : ["Under USD 500", "USD 500 to 2,000", "USD 2,000 to 10,000", "Over USD 10,000", "Custom or not decided"]
            ).map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        )}
      </Field>
      <Field label="Timing">
        {(p) => (
          <select {...p} className="input" name="timing" defaultValue="Within a month">
            <option>As soon as possible</option>
            <option>Within a month</option>
            <option>One to three months</option>
            <option>Just researching</option>
          </select>
        )}
      </Field>
      {enterprise && (
        <>
          <Field label="Markets" hint="Countries or regions the programme covers." full>
            {(p) => <input {...p} className="input" name="markets" required maxLength={500} />}
          </Field>
          <Field label="Procurement requirements" optional hint="Purchase orders, vendor onboarding, invoicing rules." full>
            {(p) => <textarea {...p} className="input" name="procurement" maxLength={2000} style={{ minHeight: 88 }} />}
          </Field>
        </>
      )}
      <Field label="Name">{(p) => <input {...p} className="input" name="name" required maxLength={120} autoComplete="name" />}</Field>
      <Field label="Work email">{(p) => <input {...p} className="input" name="email" type="email" required maxLength={254} autoComplete="email" />}</Field>
      <Field label="Company" optional={!enterprise}>
        {(p) => <input {...p} className="input" name="company" required={enterprise} maxLength={200} autoComplete="organization" />}
      </Field>
      <Field label="Phone" optional hint="Include the country code.">
        {(p) => <input {...p} className="input" name="phone" type="tel" maxLength={20} autoComplete="tel" />}
      </Field>
      {tried && <NotConnected what="your quote request" />}
      <div className="full">
        <button className="btn btn-primary" type="submit">
          {enterprise ? "Request a custom quote" : "Submit quote request"} <Arrow />
        </button>
      </div>
    </form>
  );
}

export function TrackForm() {
  const { tried, onSubmit } = useStub();
  return (
    <form className="form" onSubmit={onSubmit}>
      <Field label="Order reference" hint="Looks like YT-2026-000123. You will find it in your confirmation email.">
        {(p) => <input {...p} className="input" name="reference" required maxLength={30} placeholder="YT-2026-000000" autoComplete="off" />}
      </Field>
      <Field label="Email used for the order">{(p) => <input {...p} className="input" name="email" type="email" required maxLength={254} autoComplete="email" />}</Field>
      {tried && (
        <div className="notice warn" role="status">
          <div>
            <strong>Preview only.</strong> Tracking is not connected yet, so no email was sent. When it is live you will see the same message whether or not an order matches: &ldquo;If those details match an order, we have emailed a single-use link that expires in 15 minutes.&rdquo;
          </div>
        </div>
      )}
      <div>
        <button className="btn btn-primary" type="submit">
          Email me a secure link <Arrow />
        </button>
      </div>
    </form>
  );
}

export function LoginForm() {
  const { tried, onSubmit } = useStub();
  return (
    <form className="form" onSubmit={onSubmit}>
      <Field label="Email" hint="We email a sign-in link. There is no password to remember.">
        {(p) => <input {...p} className="input" name="email" type="email" required maxLength={254} autoComplete="email" />}
      </Field>
      {tried && <NotConnected what="a sign-in link" />}
      <div>
        <button className="btn btn-primary" type="submit">
          Send sign-in link <Arrow />
        </button>
      </div>
    </form>
  );
}

/** The clone's contact form (name / email / campaign / message), kept in its original markup. */
export function FogForm() {
  const { tried, onSubmit } = useStub();
  return (
    <form className="form" data-blur onSubmit={onSubmit}>
      <div className="form-col">
        <label className="field">
          <span className="tiny">Name</span>
          <input name="name" type="text" placeholder="Your Name" required autoComplete="name" />
        </label>
        <label className="field">
          <span className="tiny">Email</span>
          <input name="email" type="email" placeholder="Your Email" required autoComplete="email" />
        </label>
        <label className="field">
          <span className="tiny">Campaign</span>
          <input name="project" type="text" placeholder="Video Or Channel Link" />
        </label>
      </div>
      <div className="form-col form-col-right">
        <label className="field">
          <span className="tiny">Message</span>
          <textarea name="message" placeholder="Goal, Audience, Budget" required />
        </label>
        <button type="submit" className="submit h6">
          Submit <Arrow size={16} />
        </button>
        {tried && (
          <p className="tiny" role="status" style={{ textTransform: "none", fontSize: 12, fontWeight: 500 }}>
            Preview only: this form is not connected yet, so nothing was sent.
          </p>
        )}
      </div>
    </form>
  );
}
