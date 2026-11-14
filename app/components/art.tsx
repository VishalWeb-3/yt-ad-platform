import type { CSSProperties } from "react";
import { photos, photoUrl, type PhotoKey } from "../content/photos";

/**
 * Photograph for a topic (see content/photos.ts). Served from Unsplash's CDN at
 * the width each layout needs. Decorative by default: the text beside it carries
 * the meaning, so alt is empty unless `describe` is set.
 */
export function Art({ kind, className = "", describe = false, priority = false, style }: { kind: PhotoKey; className?: string; describe?: boolean; priority?: boolean; style?: CSSProperties }) {
  const p = photos[kind];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`art photo ${className}`}
      src={photoUrl(p, 1200)}
      srcSet={[480, 800, 1200, 1800].map((w) => `${photoUrl(p, w)} ${w}w`).join(", ")}
      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 640px"
      alt={describe ? p.alt : ""}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      width={1200}
      height={900}
      style={style}
    />
  );
}

/**
 * Illustrative dashboard (PRD 11.11). The figures are sample data, labelled as such,
 * and are kept apart from anything a customer would see in real reporting.
 */
export function DashboardArt() {
  const tiles = [
    ["Impressions", "48,200"],
    ["Eligible views", "12,640"],
    ["Clicks", "910"],
    ["Spend", "USD 1,000.00"],
  ];
  return (
    <figure className="dash" aria-label="Illustrative dashboard with sample data">
      <div className="dash-top">
        <span className="h4">Campaign overview</span>
        <span className="dash-flag">Illustrative · sample data</span>
      </div>
      <div className="dash-tiles">
        {tiles.map(([k, v]) => (
          <div className="dash-tile" key={k}>
            <span className="small">{k}</span>
            <b>{v}</b>
          </div>
        ))}
      </div>
      <div className="dash-chart">
        <svg viewBox="0 0 600 200" role="img" aria-label="Sample chart: impressions and eligible views rising over fourteen days">
          {[40, 80, 120, 160].map((y) => (
            <path key={y} d={`M0 ${y}H600`} stroke="var(--border)" strokeWidth="1" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => {
            const h = 30 + ((i * 37) % 60) + i * 5;
            return <rect key={i} data-grow x={12 + i * 42} y={190 - h} width="22" height={h} rx="4" fill="var(--border)" />;
          })}
          <path data-draw d="M10 160C70 150 90 120 150 118S230 96 290 92 380 60 440 56 540 34 590 26" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
          <path data-draw d="M10 180C80 176 120 160 180 156S280 140 340 136 460 112 590 100" fill="none" stroke="var(--muted)" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
        </svg>
        <div className="dash-legend">
          <span><i />Impressions</span>
          <span><i className="b" />Eligible views</span>
          <span>Date range, time zone and data freshness appear on every real report.</span>
        </div>
      </div>
    </figure>
  );
}
