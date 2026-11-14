"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies, categories, img } from "../lib/case-studies";

/** Category filter + the grid of case-study cards. */
export default function WorkGrid() {
  const [active, setActive] = useState("All");
  const grid = useRef<HTMLDivElement>(null);

  const shown =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.categories.includes(active));

  // Cards blur and grow into place as they enter the viewport; re-runs on filter change.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cs-card-img").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.83,
          filter: "blur(14px)",
          duration: 1.1,
          ease: "power3.out",
          clearProps: "filter,transform",
          scrollTrigger: { trigger: el.parentElement, start: "top 95%" },
        });
      });
    }, grid);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [active]);

  return (
    <div className="cs-content">
      <div className="cats">
        <p className="tiny cats-label">Categories</p>
        <div className="cats-row">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              className={`cat h6${c === active ? " active" : ""}`}
              aria-pressed={c === active}
              onClick={() => setActive(c)}
            >
              <span className="cat-b">[</span>
              {c}
              <span className="cat-b">]</span>
            </button>
          ))}
        </div>
      </div>

      <div className="cs-grid" ref={grid}>
        {shown.map((c) => (
          <a
            key={c.slug}
            className="cs-card"
            href={`/case-study/${c.slug}`}
            data-cursor="View Guide"
          >
            <div className="cs-card-frame">
              <div className="cs-card-img">
                <span style={{ backgroundImage: `url(${img(c.images[0])})` }} />
              </div>
            </div>
            <div className="cs-card-row">
              <h6 className="h6">{c.title}</h6>
              <h6 className="h6">{c.year}</h6>
            </div>
            <p className="p">{c.tagline}</p>
            <div className="tags">
              {c.categories.map((t) => (
                <span className="tag-chip tiny" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
        {shown.length === 0 && (
          <p className="p cs-empty">Nothing here yet — more soon.</p>
        )}
      </div>
    </div>
  );
}
