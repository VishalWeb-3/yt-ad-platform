"use client";

import { useEffect, useRef, useState } from "react";
import { services, serviceHref } from "../content/services";
import { BRAND, industries, navCompany, navResources, solutions } from "../content/site";

type Menu = "services" | "solutions" | "resources" | null;

const Caret = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M1.5 3.5 5 7l3.5-3.5" />
  </svg>
);

const categories = ["Ad formats", "Geography", "Promotion", "Managed"] as const;

/**
 * Sticky site navigation with a services mega-menu (PRD 11.1).
 * Menus open on hover as an enhancement and on click / Enter for keyboard and touch;
 * Escape closes and returns focus to the button that opened the menu.
 */
export default function Nav() {
  const [menu, setMenu] = useState<Menu>(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const opener = useRef<HTMLButtonElement | null>(null);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu((m) => {
        if (m) opener.current?.focus();
        return null;
      });
      setDrawer((d) => {
        if (d) burger.current?.focus();
        return false;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const trigger = (id: Exclude<Menu, null>, label: string) => (
    <button
      className="nav-item"
      aria-expanded={menu === id}
      aria-controls={`mega-${id}`}
      onMouseEnter={() => setMenu(id)}
      onClick={(e) => {
        opener.current = e.currentTarget;
        setMenu((m) => (m === id ? null : id));
      }}
    >
      {label} <Caret />
    </button>
  );

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}${menu || drawer ? " open" : ""}`} onMouseLeave={() => setMenu(null)}>
        <div className="wrap nav-in">
          <a className="logo" href="/" aria-label={`${BRAND} home`}>
            {BRAND}
          </a>
          <nav className="nav-links" aria-label="Main">
            {trigger("services", "Services")}
            {trigger("solutions", "Solutions")}
            <a className="nav-item" href="/how-it-works" onMouseEnter={() => setMenu(null)}>
              How it works
            </a>
            <a className="nav-item" href="/pricing" onMouseEnter={() => setMenu(null)}>
              Pricing
            </a>
            {trigger("resources", "Resources")}
            <a className="nav-item" href="/about" onMouseEnter={() => setMenu(null)}>
              About
            </a>
            <a className="nav-item" href="/contact" onMouseEnter={() => setMenu(null)}>
              Contact
            </a>
          </nav>
          <div className="nav-cta">
            <a className="nav-item" href="/track">
              Track order
            </a>
            <a className="btn btn-primary btn-sm" href="/campaign-planner">
              Start your campaign
            </a>
          </div>
          <button
            ref={burger}
            className="burger"
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
            aria-controls="drawer"
            onClick={() => setDrawer((d) => !d)}
          >
            <span>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>

        <div id="mega-services" className={`mega${menu === "services" ? " show" : ""}`} aria-hidden={menu !== "services"}>
          <div className="wrap mega-grid">
            {categories.map((cat) => (
              <div key={cat}>
                <h3>{cat}</h3>
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <a key={s.slug} href={serviceHref(s)} tabIndex={menu === "services" ? 0 : -1}>
                      {s.name}
                      <span>{s.outcome}</span>
                    </a>
                  ))}
                {cat === "Managed" && (
                  <>
                    <a href="/services" tabIndex={menu === "services" ? 0 : -1}>
                      All services
                      <span>Browse and compare the full catalogue</span>
                    </a>
                    <a href="/youtube-advertising" tabIndex={menu === "services" ? 0 : -1}>
                      YouTube advertising
                      <span>How the formats fit together</span>
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="mega-solutions" className={`mega${menu === "solutions" ? " show" : ""}`} aria-hidden={menu !== "solutions"}>
          <div className="wrap mega-grid">
            <div>
              <h3>Solutions</h3>
              {solutions.map((s) => (
                <a key={s.slug} href={`/solutions/${s.slug}`} tabIndex={menu === "solutions" ? 0 : -1}>
                  {s.name}
                </a>
              ))}
              <a href="/enterprise" tabIndex={menu === "solutions" ? 0 : -1}>
                Enterprise
              </a>
            </div>
            <div>
              <h3>Industries</h3>
              {industries.slice(0, 3).map((s) => (
                <a key={s.slug} href={`/industries/${s.slug}`} tabIndex={menu === "solutions" ? 0 : -1}>
                  {s.name}
                </a>
              ))}
            </div>
            <div>
              <h3>&nbsp;</h3>
              {industries.slice(3).map((s) => (
                <a key={s.slug} href={`/industries/${s.slug}`} tabIndex={menu === "solutions" ? 0 : -1}>
                  {s.name}
                </a>
              ))}
            </div>
            <div>
              <h3>Overview</h3>
              <a href="/solutions" tabIndex={menu === "solutions" ? 0 : -1}>
                All solutions
                <span>By the kind of advertiser you are</span>
              </a>
              <a href="/industries" tabIndex={menu === "solutions" ? 0 : -1}>
                All industries
                <span>By the problem you need solved</span>
              </a>
            </div>
          </div>
        </div>

        <div id="mega-resources" className={`mega${menu === "resources" ? " show" : ""}`} aria-hidden={menu !== "resources"}>
          <div className="wrap mega-grid">
            <div>
              <h3>Learn</h3>
              {navResources.map(([l, h]) => (
                <a key={h} href={h} tabIndex={menu === "resources" ? 0 : -1}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <h3>Company</h3>
              {navCompany.map(([l, h]) => (
                <a key={h} href={h} tabIndex={menu === "resources" ? 0 : -1}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <h3>Customers</h3>
              <a href="/track" tabIndex={menu === "resources" ? 0 : -1}>
                Track an order
                <span>With your reference and email</span>
              </a>
              <a href="/login" tabIndex={menu === "resources" ? 0 : -1}>
                Client login
              </a>
              <a href="/request-quote" tabIndex={menu === "resources" ? 0 : -1}>
                Request a quote
              </a>
            </div>
          </div>
        </div>
        <span className="progress" data-progress aria-hidden />
      </header>

      <div id="drawer" className={`drawer${drawer ? " show" : ""}`} aria-hidden={!drawer}>
        <details>
          <summary>Services</summary>
          {services.map((s) => (
            <a key={s.slug} href={serviceHref(s)}>
              {s.name}
            </a>
          ))}
          <a href="/services">All services</a>
          <a href="/youtube-advertising">YouTube advertising</a>
        </details>
        <details>
          <summary>Solutions</summary>
          {solutions.map((s) => (
            <a key={s.slug} href={`/solutions/${s.slug}`}>
              {s.name}
            </a>
          ))}
          <a href="/enterprise">Enterprise</a>
          <a href="/industries">Industries</a>
        </details>
        <details>
          <summary>Resources</summary>
          {navResources.map(([l, h]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
          <a href="/case-studies">Case studies</a>
        </details>
        <a href="/how-it-works">How it works</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/track">Track order</a>
        <a className="btn btn-primary" href="/campaign-planner">
          Start your campaign
        </a>
      </div>
    </>
  );
}
