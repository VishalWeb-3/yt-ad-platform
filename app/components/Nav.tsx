"use client";

import { useState } from "react";
import { Arrow } from "./ui";

const links = [
  ["Formats", "/case-study"],
  ["About", "/#about"],
  ["Services", "/#services"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <div className="nav-blur" aria-hidden />
        <a className="logo" href="/" aria-label="WEB3TASK — home">
          WEB3TASK
        </a>
        <nav className="nav-right">
          <div className="nav-menu">
            {links.map(([label, href]) => (
              <a key={label} className="chip h6" href={href}>
                <span data-label={label}>{label}</span>
              </a>
            ))}
          </div>
          <a className="talk h6 line-link" href="/contact-us">
            Let&rsquo;s Talk! <Arrow size={24} />
          </a>
        </nav>
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5.75v12.5M18.25 12H5.75" />
          </svg>
        </button>
      </header>
      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {[...links, ["Let's Talk!", "/contact-us"]].map(([label, href]) => (
          <a key={label} href={href} className="h2" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
