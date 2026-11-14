import { services, serviceHref } from "../content/services";
import { BRAND, navCompany, navLegal, navResources, solutions } from "../content/site";
import { Arrow } from "./icons";

/**
 * The clone's blue footer card, widened to carry the site links the PRD asks for.
 * It slides over whatever section is pinned behind it (marked data-pin) and straightens as it arrives.
 */
export default function Footer() {
  const cols: [string, [string, string][]][] = [
    ["Services", [...services.slice(0, 6).map((s) => [s.name.replace(" Advertising", ""), serviceHref(s)] as [string, string]), ["All services", "/services"]]],
    ["Solutions", [...solutions.map((s) => [s.name, `/solutions/${s.slug}`] as [string, string]), ["Enterprise", "/enterprise"], ["Industries", "/industries"]]],
    ["Company", [...(navCompany as [string, string][]), ["Track order", "/track"], ["Client login", "/login"]]],
    ["Resources", navResources as [string, string][]],
    ["Legal", navLegal as [string, string][]],
  ];
  return (
    <>
      <div className="foot-gap" />
      <footer className="foot">
        <svg className="foot-noise" aria-hidden>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="foot-card">
          <div className="foot-main">
            <div className="foot-word" aria-label={BRAND}>
              {BRAND.split("").map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
            <div className="foot-side">
              <p>We plan and run paid YouTube and Google Ads campaigns for creators and businesses who want their videos seen.</p>
              <a className="foot-start" href="/campaign-planner">
                Get Started <Arrow size={40} />
              </a>
            </div>
          </div>
          <div className="foot-links">
            {cols.map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <h3>{title}</h3>
                <ul>
                  {links.map(([l, h]) => (
                    <li key={h}>
                      <a href={h}>{l}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="foot-info">
            <span>© 2026 All rights reserved.</span>
            <span className="tiny">Independent agency. Not affiliated with YouTube or Google.</span>
            <div className="foot-social">
              <span className="tiny">Contact:</span>
              <a className="tiny" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="tiny" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="tiny" href="/contact">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
