import Nav from "./components/Nav";
import Motion from "./components/Motion";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { Arrow, Check, Words } from "./components/ui";
import {
  avatarRows,
  clients,
  people,
  services,
  teamTags,
  testimonials,
  ticker,
  works,
} from "./data";

const RIBBON = "We plan. We target. We launch. Then we report on every view.  ";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ───────────── Hero + Selected work ───────────── */}
        <section className="hero" id="hero">
          <div className="hero-track">
            <div className="strip">
              <div className="strip-row">
                {works.map((w) => (
                  <a
                    key={w.img}
                    className="card"
                    href={w.slug ? `/case-study/${w.slug}` : "/case-study"}
                    data-cursor="View Guide"
                    aria-label={`Guide: ${w.slug || "all formats"}`}
                  >
                    <span
                      className="card-img"
                      style={{ backgroundImage: `url(${w.img})` }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-text">
            <div className="hero-body">
              <p className="p" data-blur>
                We help creators and businesses plan, launch, and manage YouTube ad campaigns, from the first brief to the final report.
              </p>
              <p className="p" data-blur>
                Targeting gets your video seen. Reporting shows you what happened.
              </p>
            </div>
            <h1 className="h1" data-words>
              <Words text="Get Your Video Seen." />
            </h1>
          </div>

          <div className="work" id="work">
            <div className="work-top">
              <h2 className="h2" data-words>
                <Words text="Ad Formats:" />
              </h2>
              <p className="p just" data-blur>
                From skippable in-stream to Shorts, each campaign starts with a different goal. Our role is to match the format, the audience, and the budget to it.
              </p>
            </div>
            <a className="link-xl line-link h3" href="/case-study" data-blur>
              See All Formats <Arrow size={40} />
            </a>
          </div>
          <div className="hero-tail" />
        </section>

        {/* ───────────── About ───────────── */}
        <section className="about" id="about">
          <div className="about-head">
            <h2 className="h2" data-words>
              <Words text="Clear plans. Clear prices." />
            </h2>
            <h3 className="h3" data-blur>
              Transparent, by design.
            </h3>
          </div>
          <div className="about-body about-body-1">
            <p className="p just" data-blur>
              We work with creators, channels, brands, and businesses who want their videos in front of the right viewers.
            </p>
          </div>
          <div className="about-body about-body-2">
            <p className="p just" data-blur>
              No hidden fees. No vague packages. No guessing where your budget went. Just clear pricing, defined audiences, and reporting you can read.
            </p>
          </div>

          <div className="ribbon" aria-label={RIBBON.trim()}>
            <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <path id="ri-path" d="M 0 200 C 480 200, 960 200, 1440 200" fill="none" />
              </defs>
              <path
                className="ribbon-band"
                d="M 0 139.4 C 480 139.4, 960 139.4, 1440 139.4 L 1440 221.4 C 960 221.4, 480 221.4, 0 221.4 Z"
              />
              <text className="ribbon-text">
                <textPath href="#ri-path" startOffset="0">
                  {RIBBON.repeat(8)}
                </textPath>
              </text>
            </svg>
          </div>

          <div className="team">
            <div className="polaroid">
              {/* Empty photo area: the frame stays, the picture is intentionally left out. */}
              <div className="photo" />
              {teamTags.map((t) => (
                <div
                  key={t.name}
                  className={`tag tag-${t.dir}`}
                  style={{ left: t.left, top: t.top }}
                >
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
                <span className="p">Meet the campaign team!</span>
              </div>
            </div>
          </div>

          <div className="people">
            <h5 className="h5" data-blur>
              People behind WEB3TASK:
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

        {/* ───────────── Services ───────────── */}
        <section className="services" id="services">
          <div className="services-sticky">
            <h2 className="h2" data-words>
              <Words text="What we do:" />
            </h2>
            <div className="services-content">
              <p className="p just services-left" data-blur>
                We cover planning, formats, targeting, and reporting, and only set up what your campaign actually needs.
              </p>
              <div className="svc-list">
                {services.map((s, i) => (
                  <div className={`svc${i === 0 ? " active" : ""}`} key={s.title}>
                    <div className="svc-img">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.img} alt="" loading="lazy" />
                    </div>
                    <h4 className="h4">{s.title}</h4>
                  </div>
                ))}
              </div>
              <div className="svc-texts">
                {services.map((s, i) => (
                  <h6 className={`h6 just svc-text${i === 0 ? " active" : ""}`} key={s.title}>
                    {s.text}
                  </h6>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Testimonials ───────────── */}
        <section className="testimonials">
          <h2 className="h2" data-words>
            <Words text="What To Expect:" />
          </h2>
          <div className="t-wrap">
            <div className="t-avatars" aria-hidden>
              {avatarRows.map((row, ri) => (
                <div className="t-avatar-row" key={ri}>
                  {row.map(([name, role, img]) => (
                    <div className="t-user" key={name}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt="" loading="lazy" />
                      <div>
                        <p className="p">{name}</p>
                        <p className="tiny">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="t-cols">
              {[0, 1, 2].map((c) => (
                <div className="t-col" key={c}>
                  {[testimonials[c], testimonials[c + 3]].map((t) => (
                    <article className="t-card" key={t.name} data-blur>
                      <div className="t-author">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.img} alt="" loading="lazy" />
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

        {/* ───────────── Clients ───────────── */}
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
                {clients.map((col, ci) => (
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

        {/* ───────────── CTA (pinned) + Footer overlay ───────────── */}
        <section className="cta" id="contact" data-pin>
          <div className="ticker" aria-hidden>
            <div className="ticker-track">
              {[0, 1, 2, 3].map((r) =>
                ticker.map((it, i) => (
                  <div className="ticker-item" key={`${r}-${i}`}>
                    {it.kind === "shape" ? (
                      <span
                        className="shape"
                        style={{
                          backgroundImage: `url(${it.img})`,
                          WebkitMaskImage: `url(${it.mask})`,
                          maskImage: `url(${it.mask})`,
                        }}
                      />
                    ) : (
                      <span className={`pill h6 pill-${it.tone}`}>{it.text}</span>
                    )}
                  </div>
                )),
              )}
            </div>
          </div>
          <div className="cta-head">
            <h2 className="h1" data-words>
              <Words text="Got A Video?" />
            </h2>
            <p className="h6b" data-words>
              <Words text="New channel, big launch, small budget — all welcome." />
            </p>
          </div>
          <ContactForm />
        </section>
        <Footer />
      </main>
      <Motion />
    </>
  );
}
