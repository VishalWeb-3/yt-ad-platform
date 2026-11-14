import { Arrow } from "./ui";

/** Blue footer card that slides over whatever section is pinned behind it. */
export default function Footer() {
  return (
    <>
      <div className="footer-gap" />
      <footer className="footer">
        <svg className="footer-noise" aria-hidden>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="footer-card">
          <div className="footer-main">
            <div className="footer-logo" aria-label="WEB3TASK">
              <span>W</span><span>E</span><span>B</span><span>3</span><span>T</span><span>A</span><span>S</span><span>K</span>
            </div>
            <div className="footer-side">
              <p className="p just">
                We plan and run YouTube ad campaigns for creators and businesses who want their videos seen.
              </p>
              <a className="h3 line-link footer-start" href="/contact-us">
                Get Started <Arrow size={40} />
              </a>
            </div>
          </div>
          <div className="footer-info">
            <p className="p">© 2026 All rights reserved.</p>
            <div className="footer-contact">
              <span className="tiny">Contact:</span>
              <a className="tiny social" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="tiny social" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="tiny social" href="https://www.behance.com" target="_blank" rel="noreferrer">
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="cursor h6" aria-hidden>
        View Guide
      </div>
    </>
  );
}
