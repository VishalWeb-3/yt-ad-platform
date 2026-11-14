"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const EASE = "power3.out";

/**
 * Scroll and pointer choreography for every page. Renders nothing.
 * Each block looks for its own hooks (data attributes), so pages opt in by markup alone.
 * With "reduce motion" on, none of this runs and the page shows its complete static state.
 */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Smooth scrolling that follows the wheel; it never takes over or snaps the scroll position.
    const lenis = new Lenis({ anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const $ = <T extends Element = HTMLElement>(s: string) => gsap.utils.toArray<T>(s);
      const once = (el: Element, start = "top 90%") => ({ trigger: el, start, once: true });

      /* Reading progress under the nav */
      const bar = document.querySelector("[data-progress]");
      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.3 },
        });
      }

      /* Text and block reveals */
      $("[data-words]").forEach((el) => {
        gsap.from(el.querySelectorAll(".wi"), { yPercent: 115, duration: 0.8, ease: EASE, stagger: 0.045, scrollTrigger: once(el, "top 92%") });
      });
      $("[data-rise]").forEach((el) => {
        gsap.from(el, { y: 28, opacity: 0, duration: 0.6, ease: EASE, scrollTrigger: once(el, "top 92%") });
      });
      $("[data-zoom]").forEach((el) => {
        gsap.from(el, { scale: 0.9, opacity: 0, filter: "blur(12px)", duration: 0.9, ease: EASE, clearProps: "filter", scrollTrigger: once(el) });
      });
      $("[data-stagger]").forEach((el) => {
        gsap.from(el.children, { y: 40, opacity: 0, duration: 0.6, ease: EASE, stagger: 0.07, scrollTrigger: once(el, "top 88%") });
      });

      /* Charts: lines draw themselves, bars grow */
      $<SVGPathElement>("path[data-draw]").forEach((p) => {
        if (p.getAttribute("stroke-dasharray")) {
          gsap.from(p, { opacity: 0, duration: 1.2, delay: 0.5, scrollTrigger: once(p, "top 85%") });
          return;
        }
        const len = p.getTotalLength();
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", scrollTrigger: once(p, "top 85%") });
      });
      $("svg:has([data-grow])").forEach((svg) => {
        gsap.from(svg.querySelectorAll("[data-grow]"), {
          scaleY: 0,
          transformOrigin: "50% 100%",
          duration: 0.7,
          ease: EASE,
          stagger: 0.04,
          scrollTrigger: once(svg, "top 85%"),
        });
      });

      /* Slow drift for anything marked data-parallax="<px>" */
      $("[data-parallax]").forEach((el) => {
        const amt = Number(el.dataset.parallax) || 60;
        gsap.fromTo(el, { y: amt }, { y: -amt, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      /* Workflow: the line fills as you read down, and each step lights up when reached */
      $(".flow").forEach((flow) => {
        const line = flow.querySelector(".flow-line i");
        if (line) {
          gsap.to(line, { scaleY: 1, ease: "none", scrollTrigger: { trigger: flow, start: "top 60%", end: "bottom 60%", scrub: true } });
        }
        flow.querySelectorAll(".flow-step").forEach((step) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 62%",
            onEnter: () => step.classList.add("on"),
            onLeaveBack: () => step.classList.remove("on"),
          });
          gsap.from(step.children, { x: 24, opacity: 0, duration: 0.5, ease: EASE, stagger: 0.06, scrollTrigger: once(step, "top 85%") });
        });
      });

      /* Hero orbit: opens up on load, layers shift with the pointer, eases back on scroll */
      const orbit = document.querySelector<SVGElement>(".orbit");
      if (orbit) {
        const layers = gsap.utils.toArray<SVGGElement>(orbit.querySelectorAll("[data-depth]"));
        gsap.from(layers, { scale: 0.4, opacity: 0, transformOrigin: "300px 300px", duration: 1.4, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: orbit, start: "top 80%", once: true } });
        
        if (fine) {
          const movers = layers.map((l) => ({
            depth: Number(l.dataset.depth) || 1,
            x: gsap.quickTo(l, "x", { duration: 0.9, ease: "power3" }),
            y: gsap.quickTo(l, "y", { duration: 0.9, ease: "power3" }),
          }));
          const move = (e: PointerEvent) => {
            const nx = e.clientX / window.innerWidth - 0.5;
            const ny = e.clientY / window.innerHeight - 0.5;
            movers.forEach((m) => {
              m.x(nx * -14 * m.depth);
              m.y(ny * -14 * m.depth);
            });
          };
          window.addEventListener("pointermove", move);
          cleanups.push(() => window.removeEventListener("pointermove", move));
        }
      }

      /* Illustration panels tilt toward the pointer */
      if (fine) {
        $("[data-tilt]").forEach((el) => {
          gsap.set(el, { transformPerspective: 900 });
          const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
          const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            ry(((e.clientX - r.left) / r.width - 0.5) * 10);
            rx(((e.clientY - r.top) / r.height - 0.5) * -10);
          };
          const leave = () => {
            rx(0);
            ry(0);
          };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", leave);
          });
        });
      }

      /* Endless ticker; scrolling nudges its speed */
      $(".ticker-track").forEach((track) => {
        const tween = gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
        const tick = () => {
          tween.timeScale(1 + Math.min(4, Math.abs(lenis.velocity || 0) * 0.08));
        };
        gsap.ticker.add(tick);
        cleanups.push(() => gsap.ticker.remove(tick));
      });

      /* Brand-story ribbon: text runs along a path that bends with scroll speed */
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
        const tick = () => {
          if (!unit) return;
          const v = lenis.velocity || 0;
          off -= 1.2 + Math.abs(v) * 0.25;
          if (off <= -unit) off += unit;
          tp.setAttribute("startOffset", String(off));
          amp += (gsap.utils.clamp(-70, 70, v * 3) - amp) * 0.06;
          const a = Math.abs(amp) < 0.05 ? 0 : amp;
          const y0 = 200 + a * 0.35;
          const c1 = 200 - a;
          const c2 = 200 + a;
          const y3 = 200 - a * 0.35;
          guide.setAttribute("d", `M 0 ${y0} C 480 ${c1}, 960 ${c2}, 1440 ${y3}`);
          const t = -60.6;
          const b = 21.4;
          band.setAttribute("d", `M 0 ${y0 + t} C 480 ${c1 + t}, 960 ${c2 + t}, 1440 ${y3 + t} L 1440 ${y3 + b} C 960 ${c2 + b}, 480 ${c1 + b}, 0 ${y0 + b} Z`);
        };
        gsap.ticker.add(tick);
        cleanups.push(() => gsap.ticker.remove(tick));
      }

      /* Closing call to action: rings turn as the section passes */
      $(".cta-rings").forEach((el) => {
        gsap.fromTo(el, { rotation: -40, scale: 0.8 }, { rotation: 40, scale: 1.15, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      /* Footer card straightens as it slides in; the pinned section behind it blurs */
      const footCard = document.querySelector(".foot-card");
      if (footCard && window.innerWidth >= 810) {
        gsap.fromTo(footCard, { rotation: 14 }, { rotation: 1.2, ease: "none", scrollTrigger: { trigger: ".foot", start: "top bottom", end: "top top", scrub: true } });
        if (document.querySelector("[data-pin]")) {
          gsap.fromTo("[data-pin]", { filter: "blur(0px)" }, { filter: "blur(10px)", ease: "none", scrollTrigger: { trigger: ".foot", start: "top 45%", end: "top top", scrub: true } });
        }
      }
      const word = document.querySelector(".foot-word");
      if (word) {
        gsap.from(word.children, { opacity: 0, filter: "blur(12px)", duration: 0.8, stagger: 0.08, scrollTrigger: { trigger: ".foot", start: "top 45%", once: true } });
      }

      /* "View Service" label that follows the cursor over the hero cards */
      const cursor = document.querySelector<HTMLElement>(".cursor");
      if (cursor && fine) {
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });
        const move = (e: PointerEvent) => {
          xTo(e.clientX);
          yTo(e.clientY + 28);
        };
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
      /* ════ FOG clone sections (home) ════ */
      const reduced = false;
      const mobile = () => window.innerWidth < 810;
      const has = (sel: string) => !!document.querySelector(sel);
      const EASE_IO = "power3.inOut";
      $("[data-blur]").forEach((el) => {
        gsap.from(el, { opacity: 0, filter: "blur(10px)", duration: 0.9, ease: "power2.out", clearProps: "filter", scrollTrigger: { trigger: el, start: "top 92%" } });
      });

      /* ── Home hero: cards blur in, then react to scroll stages ── */
      const hero = document.querySelector<HTMLElement>(".hero");
      const row = document.querySelector<HTMLElement>(".strip-row");
      const cards = $(".wcard");
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
          gsap.to(cards, { width: w, height: h, duration: d, ease: EASE_IO, overwrite: "auto" });
          gsap.to(row, { x, duration: d, ease: EASE_IO, overwrite: "auto" });
        };
        // Read the scroll position straight from layout each frame: cheap, and
        // immune to jumps (anchor links, restored scroll) that skip scroll events.
        const stageFor = (y: number) => (y < 420 ? 0 : y < 1000 ? 1 : y < 1250 ? 2 : 3);
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
        const steps = [110, 400, 690, 980];
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
