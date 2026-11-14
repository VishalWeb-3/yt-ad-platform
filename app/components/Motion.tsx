"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const EASE = "power3.inOut";

/**
 * All scroll + load choreography. Renders nothing.
 * Mounted once per page; every block checks that its elements exist,
 * so the same component drives the home page and the inner pages.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = () => window.innerWidth < 810;
    const has = (s: string) => !!document.querySelector(s);

    // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
    const lenis = new Lenis({ anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const $ = <T extends Element = HTMLElement>(s: string) =>
        gsap.utils.toArray<T>(s);

      /* ── Generic reveals ─────────────────────────────── */
      $("[data-blur]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.9,
          ease: "power2.out",
          clearProps: "filter",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
      $("[data-words]").forEach((el) => {
        gsap.from(el.querySelectorAll(".wi"), {
          yPercent: 115,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
      // Images that grow into place as they blur in (case-study hero image).
      $("[data-zoom]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.83,
          filter: "blur(14px)",
          duration: 1.1,
          ease: "power3.out",
          clearProps: "filter,transform",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top 92%" },
        });
      });
      // Slow drift of an image inside its frame.
      $("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* ── Home hero: cards blur in, then react to scroll stages ── */
      const hero = document.querySelector<HTMLElement>(".hero");
      const row = document.querySelector<HTMLElement>(".strip-row");
      const cards = $(".card");
      if (hero && row) {
        gsap.from(cards, {
          opacity: 0,
          filter: "blur(14px)",
          duration: 1.1,
          ease: "power2.out",
          stagger: 0.07,
          clearProps: "filter",
        });

        let stage = -1;
        const setStage = (s: number, instant = false) => {
          stage = s;
          const big = s >= 1;
          const w = mobile() ? (big ? 240 : 140) : big ? 320 : 200;
          const h = mobile() ? (big ? 300 : 168) : big ? 400 : 240;
          const rowW = cards.length * w + (cards.length - 1) * 8;
          const max = Math.max(0, rowW - window.innerWidth);
          const x = s === 2 ? -max / 2 : s === 3 ? -max : 0;
          const d = instant || reduced ? 0 : 1;
          gsap.to(cards, { width: w, height: h, duration: d, ease: EASE, overwrite: "auto" });
          gsap.to(row, { x, duration: d, ease: EASE, overwrite: "auto" });
        };
        // Read the scroll position straight from layout each frame: cheap, and
        // immune to jumps (anchor links, restored scroll) that skip scroll events.
        const stageFor = (y: number) => (y < 520 ? 0 : y < 1550 ? 1 : y < 1950 ? 2 : 3);
        setStage(stageFor(-hero.getBoundingClientRect().top), true);
        const heroTick = () => {
          const s = stageFor(-hero.getBoundingClientRect().top);
          if (s !== stage) setStage(s);
        };
        gsap.ticker.add(heroTick);
        const onResize = () => setStage(stage, true);
        window.addEventListener("resize", onResize);
        cleanups.push(() => {
          gsap.ticker.remove(heroTick);
          window.removeEventListener("resize", onResize);
        });
      }

      /* ── About: wavy marquee ribbon ─────────────────── */
      const tp = document.querySelector<SVGTextPathElement>(".ribbon textPath");
      const guide = document.querySelector<SVGPathElement>("#ri-path");
      const band = document.querySelector<SVGPathElement>(".ribbon-band");
      if (tp && guide && band) {
        let unit = 0;
        let off = 0;
        let amp = 0;
        const measure = () => {
          unit = tp.getComputedTextLength() / 8;
        };
        measure();
        document.fonts?.ready.then(measure);
        const ribbonTick = () => {
          if (!unit) return;
          const v = lenis.velocity || 0;
          off -= 1.4 + Math.abs(v) * 0.25;
          if (off <= -unit) off += unit;
          tp.setAttribute("startOffset", String(off));
          const target = reduced ? 0 : gsap.utils.clamp(-90, 90, v * 3.2);
          amp += (target - amp) * 0.06;
          const a = Math.abs(amp) < 0.05 ? 0 : amp;
          const y0 = 200 + a * 0.35;
          const c1 = 200 - a;
          const c2 = 200 + a;
          const y3 = 200 - a * 0.35;
          guide.setAttribute("d", `M 0 ${y0} C 480 ${c1}, 960 ${c2}, 1440 ${y3}`);
          const t = -60.6;
          const b = 21.4;
          band.setAttribute(
            "d",
            `M 0 ${y0 + t} C 480 ${c1 + t}, 960 ${c2 + t}, 1440 ${y3 + t} L 1440 ${y3 + b} C 960 ${c2 + b}, 480 ${c1 + b}, 0 ${y0 + b} Z`,
          );
        };
        gsap.ticker.add(ribbonTick);
        cleanups.push(() => gsap.ticker.remove(ribbonTick));
      }

      /* ── About: polaroid drifts up, name tags pop in ── */
      if (has(".polaroid")) {
        gsap.fromTo(
          ".polaroid",
          { y: 200 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: ".team", start: "top bottom", end: "bottom 45%", scrub: true },
          },
        );
        gsap.from(".photo span", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: ".team", start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.from(".tag", {
          opacity: 0,
          filter: "blur(5px)",
          scale: 0.8,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: 0.08,
          scrollTrigger: { trigger: ".polaroid", start: "top 55%" },
        });
      }

      /* ── Services: scroll steps through the accordion ── */
      const servicesEl = document.querySelector<HTMLElement>(".services");
      if (servicesEl) {
        const svcs = $(".svc");
        const svcTexts = $(".svc-text");
        let active = 0;
        const steps = [110, 470, 830, 1190];
        const svcTick = () => {
          const y = -servicesEl.getBoundingClientRect().top;
          let i = 0;
          steps.forEach((s, k) => {
            if (y >= s) i = k + 1;
          });
          if (i === active) return;
          active = i;
          svcs.forEach((el, k) => el.classList.toggle("active", k === i));
          svcTexts.forEach((el, k) => el.classList.toggle("active", k === i));
        };
        gsap.ticker.add(svcTick);
        cleanups.push(() => gsap.ticker.remove(svcTick));
      }

      /* ── Testimonials: columns drift at different speeds ── */
      $(".t-col").forEach((col, i) => {
        if (mobile()) return;
        gsap.fromTo(
          col,
          { y: 70 - i * 20 },
          {
            y: -20 + i * 10,
            ease: "none",
            scrollTrigger: { trigger: ".testimonials", start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* ── Clients: parallax in, names roll up line by line ── */
      if (has(".clients")) {
        if (!mobile()) {
          gsap.fromTo(
            ".clients-inner",
            { y: -160 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: { trigger: ".clients", start: "top bottom", end: "top 20%", scrub: true },
            },
          );
        }
        gsap.from(".client-name", {
          yPercent: 110,
          duration: 0.7,
          ease: "power3.out",
          stagger: { each: 0.04, from: "start" },
          scrollTrigger: { trigger: ".clients-grid", start: "top 85%" },
        });
      }

      /* ── CTA: endless ticker with wobbling shapes ──── */
      if (has(".ticker-track")) {
        gsap.to(".ticker-track", { xPercent: -50, duration: 48, ease: "none", repeat: -1 });
        $(".shape").forEach((el, i) => {
          gsap.fromTo(
            el,
            { rotation: -12 },
            { rotation: 22, duration: 2.6 + (i % 3) * 0.5, ease: "sine.inOut", yoyo: true, repeat: -1 },
          );
        });
      }

      /* ── Footer: card straightens while the pinned section behind blurs ── */
      if (has(".footer")) {
        if (!mobile()) {
          gsap.fromTo(
            ".footer-card",
            { rotation: 20 },
            {
              rotation: 1.5,
              ease: "none",
              scrollTrigger: { trigger: ".footer", start: "top bottom", end: "top top", scrub: true },
            },
          );
          // Blur the pinned section itself (more reliable than backdrop-filter over a sticky layer).
          if (has("[data-pin]")) {
            gsap.fromTo(
              "[data-pin]",
              { filter: "blur(0px)" },
              {
                filter: "blur(10px)",
                ease: "none",
                scrollTrigger: { trigger: ".footer", start: "top 45%", end: "top top", scrub: true },
              },
            );
          }
        }
        gsap.from(".footer-logo span", {
          opacity: 0,
          filter: "blur(12px)",
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: ".footer", start: "top 40%" },
        });
      }

      /* ── "Case Study" label that follows the cursor over work cards ── */
      const cursor = document.querySelector<HTMLElement>(".cursor");
      if (cursor && window.matchMedia("(hover: hover)").matches) {
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });
        const move = (e: PointerEvent) => {
          xTo(e.clientX);
          yTo(e.clientY + 28);
        };
        // Delegated, so cards added later (the filterable grid) are covered too.
        const over = (e: PointerEvent) => {
          const on = !!(e.target as Element | null)?.closest?.("[data-cursor]");
          gsap.to(cursor, { opacity: on ? 1 : 0, duration: 0.25, overwrite: "auto" });
        };
        window.addEventListener("pointermove", move);
        document.addEventListener("pointerover", over);
        cleanups.push(() => {
          window.removeEventListener("pointermove", move);
          document.removeEventListener("pointerover", over);
        });
      }
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cleanups.splice(0).forEach((fn) => fn());
      window.removeEventListener("load", onLoad);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
