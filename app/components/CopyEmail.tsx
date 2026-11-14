"use client";

import { useState } from "react";

// Placeholder address: the template doesn't expose a real one.
const EMAIL = "hello@example.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="outline-chip tiny"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard unavailable: leave the label unchanged */
        }
      }}
    >
      {copied ? "Copied" : "Copy Email Address"}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6.5 15.25A1.75 1.75 0 0 1 4.75 13.5V6.75a2 2 0 0 1 2-2h6.75a1.75 1.75 0 0 1 1.75 1.75" />
        <rect x="8.75" y="8.75" width="10.5" height="10.5" rx="2" />
      </svg>
    </button>
  );
}
