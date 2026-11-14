import type { Metadata } from "next";
import { ProcessStrip } from "../components/pages";
import { Btn, CtaBand, LinkCard, PageHero, SecHead, Shell, TextLink } from "../components/ui";
import { Accordion, FormatCompare } from "../components/widgets";
import { faqTopics, formats } from "../content/site";

export const metadata: Metadata = { title: "YouTube advertising explained", description: "How paid YouTube advertising works: the ad formats, the objectives they serve, the process and common questions." };

const objectives = [
  ["Views and consideration", "You want people to watch. Skippable in-stream and in-feed are planned and judged on eligible views.", "/services/google-ads-video-views"],
  ["Reach and awareness", "You want to be seen by as many of the right people as possible. Non-skippable, Shorts and display are judged on impressions and reach.", "/services/brand-awareness"],
  ["Channel awareness", "You want new viewers to discover a channel. Promotion runs through your strongest videos, with no subscriber promise.", "/services/channel-promotion"],
  ["Traffic", "You want viewers to go somewhere next. Formats with a link are planned around clicks.", "/services/display"],
  ["Event and release timing", "You have a date. Campaigns are scheduled against it with a fallback if plans move.", "/services/live-event"],
];

export default function Page() {
  const faqs = [faqTopics[3], faqTopics[1], faqTopics[4]].flatMap((t) => t.items.slice(0, 2).map(([q, a]) => ({ tag: t.title, q, a })));
  return (
    <Shell>
      <PageHero crumbs={[["YouTube advertising"]]} eyebrow="For new advertisers" title="YouTube advertising, without the jargon" summary="YouTube ads are bought through Google Ads. You choose a format, an audience and a budget; the platform shows your ad to matching viewers and reports what happened. This page walks through the formats, the objectives and the process." art="views">
        <Btn href="/campaign-planner">Plan a campaign</Btn>
        <Btn href="/services" kind="secondary">All services</Btn>
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Formats" title="Five formats, compared" lead="Where each appears, what it is for, what it needs and which family of metric it reports." />
          <div data-rise>
            <FormatCompare />
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="Objectives" title="Start with what you want to happen" lead="The objective decides the format and the metric the campaign is judged on." />
          <div className="grid g3" data-stagger>
            {objectives.map(([t, d, h]) => (
              <LinkCard key={t} href={h} title={t} text={d} more="See a matching service" />
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SecHead eyebrow="Process" title="What happens after you brief us" action={<TextLink href="/how-it-works">Full workflow</TextLink>} />
          <ProcessStrip />
        </div>
      </section>
      <section className="sec">
        <div className="wrap split top">
          <div className="sticky">
            <SecHead eyebrow="FAQ" title="Common first questions" />
            <TextLink href="/faq">All questions</TextLink>
          </div>
          <div data-rise>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap grid g3" data-stagger>
          {formats.slice(0, 3).map((f) => (
            <LinkCard key={f.key} href={f.href} art={f.art} title={f.name} text={f.placement} more="Service details" />
          ))}
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
