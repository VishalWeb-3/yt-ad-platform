import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Motion from "../../components/Motion";
import Footer from "../../components/Footer";
import { Arrow, Words } from "../../components/ui";
import { caseStudies, img, neighbours } from "../../lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return { title: c ? `${c.title} — WEB3TASK` : "WEB3TASK", description: c?.tagline };
}

function Shot({ file, className = "" }: { file: string; className?: string }) {
  return (
    <div className={`shot ${className}`} data-blur>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img(file)} alt="" loading="lazy" />
    </div>
  );
}

// The slug is URL data, so the part that reads it sits behind a Suspense
// boundary: the nav shell can paint immediately on client navigations.
export default function CaseStudyPage({ params }: Props) {
  return (
    <>
      <Nav />
      <Suspense fallback={<main className="cd" />}>
        <CaseStudy params={params} />
      </Suspense>
    </>
  );
}

async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const { prev, next } = neighbours(c.slug);
  const [hero, i1, i2, wide1, wide2, half1, half2, i7] = c.images;

  return (
    <>
      <main className="cd">
        <div className="cd-body">
          {/* Title block */}
          <header className="cd-head">
            <div className="cd-title-row">
              <h6 className="h6" data-blur>
                {c.year}
              </h6>
              <h1 className="h2" data-words>
                <Words text={c.title} />
              </h1>
            </div>
            <div className="cd-sub-row">
              <h5 className="h5" data-blur>
                {c.tagline}
              </h5>
              <div className="cd-cats" data-blur>
                <span className="tiny">{c.industry}</span>
                <div className="tags">
                  {c.categories.map((t) => (
                    <span className="tag-chip tiny" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <div className="cd-hero">
            <div className="cd-hero-img" data-zoom>
              <span data-parallax style={{ backgroundImage: `url(${img(hero)})` }} />
            </div>
          </div>

          {/* Description */}
          <section className="cd-split">
            <Shot file={i1} className="shot-sq" />
            <div className="cd-sticky cd-desc">
              <h6 className="h6b just" data-blur>
                {c.description}
              </h6>
            </div>
          </section>

          {/* Challenge */}
          <section className="cd-split">
            <div className="cd-sticky cd-note cd-note-left">
              <h6 className="h6b" data-blur>
                [When_To_Use]
              </h6>
              <p className="p just" data-blur>
                {c.challenge}
              </p>
            </div>
            <Shot file={i2} className="shot-sq" />
          </section>

          <section className="cd-wide">
            <Shot file={wide1} className="shot-wide" />
            <Shot file={wide2} className="shot-wide" />
          </section>

          {/* Approach + palette */}
          <section className="cd-approach">
            <h6 className="h6b" data-blur>
              [How_We_Set_It_Up]
            </h6>
            <p className="p just" data-blur>
              {c.approach}
            </p>
          </section>
          <div className="swatches">
            {c.swatches.map((s) => {
              const hex = s.hex.startsWith("#") ? s.hex : `#${s.hex}`;
              return (
                <div className="swatch" key={s.name} style={{ background: hex }}>
                  <h6 className="h6b">{s.name}</h6>
                  <p className="p">{s.hex}</p>
                </div>
              );
            })}
          </div>
          <section className="cd-halves">
            <Shot file={half1} className="shot-half" />
            <Shot file={half2} className="shot-half" />
          </section>

          {/* Outcome */}
          <section className="cd-split">
            <Shot file={i7} className="shot-sq" />
            <div className="cd-sticky cd-note cd-note-right">
              <h6 className="h6b" data-blur>
                [What_You_Get]
              </h6>
              <p className="p just" data-blur>
                {c.outcome}
              </p>
            </div>
          </section>

          <div className="cd-site">
            <a className="h3 line-link link-blue" href="/contact-us" data-blur>
              Start A Campaign <Arrow size={40} />
            </a>
          </div>
        </div>

        {/* Pinned end: testimonial + previous / next */}
        <section className="cd-end" data-pin>
          <div className="cd-quote">
            <div className="cd-quote-text">
              <span className="quote-mark" aria-hidden>
                &quot;
              </span>
              <h5 className="h5 just" data-blur>
                {c.quote}
              </h5>
            </div>
            <div className="cd-author" data-blur>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(c.avatar)} alt="" loading="lazy" />
              <div>
                <h6 className="h6b">{c.author}</h6>
                <p className="p just">{c.authorTitle}</p>
              </div>
            </div>
          </div>
          <nav className="cd-pager" aria-label="More guides">
            <a className="h4" href={`/case-study/${prev.slug}`}>
              {prev.title}
            </a>
            <a className="h4" href={`/case-study/${next.slug}`}>
              {next.title}
            </a>
          </nav>
        </section>
        <Footer />
      </main>
      <Motion />
    </>
  );
}
