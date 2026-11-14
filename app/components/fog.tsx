import { Art } from "./art";
import { Arrow } from "./icons";
import { Words } from "./ui";
import { FogForm } from "./Forms";
import { services, serviceHref, type ArtKind } from "../content/services";

/**
 * The FOG clone's home sections, kept as the base design. Each is wrapped in
 * <div class="fog"> so the clone's stylesheet (the .fog block in globals.css) applies.
 * Template photos are replaced with our own illustrations; layout and motion are unchanged.
 */

const RIBBON = "We plan. We target. We launch. Then we report on every view.  ";

const strip = services.slice(0, 9);

const teamTags = [
  { name: "Planning", dir: "down", left: 215, top: 100 },
  { name: "Formats", dir: "right", left: 92, top: 140 },
  { name: "Creative", dir: "up", left: 272, top: 200 },
  { name: "Targeting", dir: "down", left: 325, top: 100 },
  { name: "Setup", dir: "up", left: 362, top: 188 },
  { name: "Pricing", dir: "down", left: 418, top: 73 },
  { name: "Support", dir: "left", left: 502, top: 120 },
  { name: "Reporting", dir: "left", left: 522, top: 160 },
];

const people = [
  [
    ["Planning", "Goals & Budgets"],
    ["Formats", "Format Selection"],
    ["Targeting", "Audience Setup"],
    ["Creative", "Pre-Launch Review"],
  ],
  [
    ["Setup", "Launch & Scheduling"],
    ["Pricing", "Clear Quotes"],
    ["Support", "Help While You Run"],
    ["Reporting", "Views & Spend"],
  ],
];

const whatWeDo: { title: string; art: ArtKind; text: string }[] = [
  { title: "Campaign Planning", art: "enterprise", text: "Goals, budget, and timeline before anything goes live." },
  { title: "Ad Formats", art: "studio", text: "In-stream, in-feed, Shorts and display, matched to your goal." },
  { title: "Audience Targeting", art: "country", text: "Reach viewers by country, language, interest and topic." },
  { title: "Campaign Support", art: "creator", text: "Help with setup, changes, and questions while you run." },
  { title: "Reporting", art: "street", text: "Impressions, eligible views, clicks and spend, with sources." },
];

// "What to expect" cards: our own commitments, not customer quotes.
const expect = [
  { name: "Pricing", role: "Before You Start", quote: "You see media budget, agency fee and tax as separate lines before anything launches." },
  { name: "Targeting", role: "Your Audience", quote: "You choose who should see your video. We show you exactly what was requested." },
  { name: "Reporting", role: "After Launch", quote: "You get a report with a definition, a source and a date range for every number." },
  { name: "Formats", role: "Your Options", quote: "We explain each ad format in plain terms so you can pick the one that fits your goal." },
  { name: "Support", role: "While You Run", quote: "Questions during your campaign go to a person who knows how it was set up." },
  { name: "Planning", role: "First Step", quote: "Every campaign starts with a short brief: your goal, your budget, and your dates." },
];
const avatarRows = [
  [expect[0], expect[3], expect[1]],
  [expect[4], expect[2], expect[5]],
];

// Who the platform is for (kinds of advertiser, not named clients).
const builtFor = [
  ["Creators", "Musicians", "Podcasters", "Educators"],
  ["Startups", "Agencies", "Online Shops", "App Makers"],
  ["Gaming", "Local", "Events", "Courses"],
  ["Channels", "Brands", "Launches", "Nonprofits"],
];

const ticker: ({ shape: number } | { pill: string; tone: "blue" | "pink" })[] = [
  { shape: 1 },
  { pill: "IN_STREAM", tone: "blue" },
  { pill: "CPV?", tone: "pink" },
  { shape: 2 },
  { pill: "In-Feed", tone: "blue" },
  { shape: 3 },
  { pill: "Shorts", tone: "pink" },
];

function Check() {
  return (
    <span className="check" aria-hidden>
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.75 12.87l2.59 3.55c.81 1.11 2.48 1.09 3.26-.04L18.25 6.75" />
      </svg>
    </span>
  );
}

/* ───────────── Hero + pinned service strip ───────────── */
export function FogHero() {
  return (
    <div className="fog">
      <section className="hero" id="hero">
        <div className="hero-track">
          <div className="strip">
            <div className="strip-row">
              {strip.map((s) => (
                <a key={s.slug} className="wcard" href={serviceHref(s)} data-cursor="View Service" aria-label={s.name}>
                  <span className="card-img">
                    <Art kind={s.art} priority />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-body">
            <p className="p" data-blur>
              We plan and run paid YouTube and Google Ads campaigns for creators and businesses, from the first brief to the final report.
            </p>
            <p className="p" data-blur>
              Targeting gets your video seen. Reporting shows you what happened.
            </p>
          </div>
          <h1 className="h1" data-words>
            <Words text="Your audience is out there. Let's reach them." />
          </h1>
          <div className="hero-cta" data-blur>
            <a className="btn btn-primary" href="/campaign-planner">
              Start your campaign <Arrow />
            </a>
            <a className="btn btn-secondary" href="/services">
              Explore our services <Arrow />
            </a>
          </div>
        </div>

        <div className="work" id="work">
          <div className="work-top">
            <h2 className="h2" data-words>
              <Words text="Ad Formats:" />
            </h2>
            <p className="p just" data-blur>
              From in-stream to Shorts, each campaign starts with a different goal. Our role is to match the format, the audience, and the budget to it.
            </p>
          </div>
          <a className="link-xl line-link h3" href="/services" data-blur>
            See All Services <Arrow size={40} />
          </a>
        </div>
        <div className="hero-tail" />
      </section>
      <div className="cursor" aria-hidden>
        View Service
      </div>
    </div>
  );
}

/* ───────────── About: ribbon, framed illustration, the team's functions ───────────── */
export function FogAbout() {
  return (
    <div className="fog">
      <section className="about" id="about">
        <div className="about-head">
          <h2 className="h2" data-words>
            <Words text="Reach with intention." />
          </h2>
          <h3 className="h3" data-blur>
            Transparent, by design.
          </h3>
        </div>
        <div className="about-body about-body-1">
          <p className="p just" data-blur>
            A view only matters if the right person watched. We start every campaign by asking who the video is for.
          </p>
        </div>
        <div className="about-body about-body-2">
          <p className="p just" data-blur>
            No hidden fees. No guaranteed subscribers. No guessing where your budget went. Just clear pricing, defined audiences, and reporting you can read.
          </p>
        </div>

        <div className="ribbon" aria-label={RIBBON.trim()}>
          <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <path id="ri-path" d="M 0 200 C 480 200, 960 200, 1440 200" fill="none" />
            </defs>
            <path className="ribbon-band" d="M 0 139.4 C 480 139.4, 960 139.4, 1440 139.4 L 1440 221.4 C 960 221.4, 480 221.4, 0 221.4 Z" />
            <text className="ribbon-text">
              <textPath href="#ri-path" startOffset="0">
                {RIBBON.repeat(8)}
              </textPath>
            </text>
          </svg>
        </div>

        <div className="team">
          <div className="polaroid">
            <div className="photo">
              <Art kind="set" />
            </div>
            {teamTags.map((t) => (
              <div key={t.name} className={`tag tag-${t.dir}`} style={{ left: t.left, top: t.top }}>
                <span className="p">{t.name}</span>
                <i />
              </div>
            ))}
            <div className="polaroid-icons" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path transform="translate(4.75 5.75)" d="M7.245 1.483C5.796-.14 3.378-.577 1.562.91-.254 2.396-.51 4.881.917 6.639L7.245 12.5l6.329-5.861C15 4.881 14.775 2.38 12.928.91 11.081-.561 8.695-.14 7.245 1.483Z" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path transform="translate(4.75 5.75)" d="M7.25 12.5c3.5 0 7.25-1.75 7.25-6.25S10.75 0 7.25 0 0 1.75 0 6.25c0 1.03.196 1.916.541 2.669.215.47.336.988.241 1.496l-.263 1.399c-.129.691.476 1.296 1.168 1.167l3.207-.602c.252-.047.511-.043.764-.003.527.084 1.062.124 1.592.124Z" />
                <path d="M9 12h.01M12 12h.01M15 12h.01" strokeWidth="2" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path transform="translate(8.75 6.75)" d="M8.5 8.5V0H0" />
                <path transform="translate(6.75 7)" d="M10.25 0 0 10.25" />
              </svg>
            </div>
            <div className="polaroid-caption">
              <span className="h6">WEB3TASK:</span>
              <span className="p">Made for people who make videos.</span>
            </div>
          </div>
        </div>

        <div className="people">
          <h5 className="h5" data-blur>
            Who does what:
          </h5>
          <div className="people-groups">
            {people.map((group, gi) => (
              <div className="people-group" key={gi}>
                {group.map(([name, role]) => (
                  <div key={name} data-blur>
                    <h6 className="h6">{name}</h6>
                    <p className="p">{role}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── What we do: pinned accordion ───────────── */
export function FogServices() {
  return (
    <div className="fog">
      <section className="services" id="services">
        <div className="services-sticky">
          <h2 className="h2" data-words>
            <Words text="What we do:" />
          </h2>
          <div className="services-content">
            <p className="p just services-left" data-blur>
              We cover planning, formats, targeting, support and reporting, and only set up what your campaign actually needs.
            </p>
            <div className="svc-list">
              {whatWeDo.map((s, i) => (
                <div className={`svc${i === 0 ? " active" : ""}`} key={s.title}>
                  <div className="svc-img">
                    <Art kind={s.art} />
                  </div>
                  <h4 className="h4">{s.title}</h4>
                </div>
              ))}
            </div>
            <div className="svc-texts">
              {whatWeDo.map((s, i) => (
                <h6 className={`h6 just svc-text${i === 0 ? " active" : ""}`} key={s.title}>
                  {s.text}
                </h6>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── What to expect (the clone's testimonial layout, without testimonials) ───────────── */
export function FogExpect() {
  return (
    <div className="fog">
      <section className="testimonials">
        <h2 className="h2" data-words>
          <Words text="What To Expect:" />
        </h2>
        <div className="t-wrap">
          <div className="t-avatars" aria-hidden>
            {avatarRows.map((row, ri) => (
              <div className="t-avatar-row" key={ri}>
                {row.map((t) => (
                  <div className="t-user" key={t.name}>
                    <i>{t.name[0]}</i>
                    <div>
                      <p className="p">{t.name}</p>
                      <p className="tiny">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="t-cols">
            {[0, 1, 2].map((c) => (
              <div className="t-col" key={c}>
                {[expect[c], expect[c + 3]].map((t) => (
                  <article className="t-card" key={t.name} data-blur>
                    <div className="t-author">
                      <i>{t.name[0]}</i>
                      <div>
                        <p className="p">
                          {t.name} <Check />
                        </p>
                        <p className="tiny">{t.role}</p>
                      </div>
                    </div>
                    <h6 className="h6">{t.quote}</h6>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── Built for ───────────── */
export function FogBuiltFor() {
  return (
    <div className="fog">
      <section className="clients">
        <div className="clients-inner">
          <div className="clients-text">
            <h2 className="h2" data-words>
              <Words text="Built For:" />
            </h2>
            <p className="p" data-blur>
              We run campaigns for creators and businesses of every size, across many kinds of channels and goals.
            </p>
          </div>
          <div className="clients-cols">
            <div className="clients-grid">
              {builtFor.map((col, ci) => (
                <div key={ci}>
                  {col.map((n) => (
                    <span className="client-line" key={n}>
                      <span className="h6b client-name">{n}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <h3 className="h3 clients-more" data-blur>
              &amp; Many More
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────────── Final call to action: pinned while the footer card slides over it ───────────── */
export function FogCta() {
  return (
    <div className="fog">
      <section className="cta" id="contact" data-pin>
        <div className="ticker" aria-hidden>
          <div className="ticker-track">
            {[0, 1, 2, 3].map((r) =>
              ticker.map((it, i) => (
                <div className="ticker-item" key={`${r}-${i}`}>
                  {"shape" in it ? (
                    <span className="shape" style={{ WebkitMaskImage: `url(/images/mask-${it.shape}.svg)`, maskImage: `url(/images/mask-${it.shape}.svg)` }} />
                  ) : (
                    <span className={`pill h6 pill-${it.tone}`}>{it.pill}</span>
                  )}
                </div>
              )),
            )}
          </div>
        </div>
        <div className="cta-head">
          <h2 className="h1" data-words>
            <Words text="Make your next video count." />
          </h2>
          <p className="h6b" data-words>
            <Words text="New channel, big launch, small budget — all welcome." />
          </p>
        </div>
        <FogForm />
      </section>
    </div>
  );
}
