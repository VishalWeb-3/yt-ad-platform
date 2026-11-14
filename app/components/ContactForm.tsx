"use client";

import { useState } from "react";
import { Arrow } from "./ui";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="form"
      data-blur
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-col">
        <label className="field">
          <span className="tiny">Name</span>
          <input name="name" type="text" placeholder="Your Name" required />
        </label>
        <label className="field">
          <span className="tiny">Email</span>
          <input name="email" type="email" placeholder="Your Email" required />
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
        <button type="submit" className="submit h6" disabled={sent}>
          {sent ? "Thank You" : "Submit"} {!sent && <Arrow size={16} />}
        </button>
      </div>
    </form>
  );
}
