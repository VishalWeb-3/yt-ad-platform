import type { Metadata } from "next";
import { Btn, CtaBand, PageHero, SecHead, Shell, TextLink } from "../components/ui";
import { ServiceExplorer } from "../components/widgets";
import { consulting, services, serviceHref } from "../content/services";

export const metadata: Metadata = { title: "YouTube advertising services", description: "Twelve paid advertising services on YouTube and Google Ads: formats, geography, promotion and managed programmes. Search, filter and compare." };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Services"]]} eyebrow="All services" title="Twelve services. One honest way to compare them." summary="Every service here is paid advertising delivered through Google Ads. Filter by category, search by name, or compare them side by side below." art="instream">
        <Btn href="/campaign-planner">Start your campaign</Btn>
        <Btn href="/youtube-advertising" kind="secondary">How YouTube advertising works</Btn>
      </PageHero>
      <section className="sec flush-top">
        <div className="wrap">
          <ServiceExplorer />
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <SecHead eyebrow="Comparison" title="Side by side" lead="What each service delivers and how it is measured. Display impressions are never reported as views." />
          <div className="table-wrap" data-rise>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Primary outcome</th>
                  <th scope="col">Where it appears</th>
                  <th scope="col">Measured by</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug}>
                    <th scope="row">
                      <a className="text-link" href={serviceHref(s)}>{s.name}</a>
                    </th>
                    <td>{s.outcome}</td>
                    <td>{s.placement}</td>
                    <td>{s.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split top">
          <SecHead eyebrow="Also available" title="Consulting and management, by quote" lead="These are scoped individually. Tell us what you need and we will confirm whether we can take it on, what we need from you and what it costs." action={<TextLink href="/request-quote">Request a quote</TextLink>} />
          <ul className="grid g2" data-stagger>
            {consulting.map((c) => (
              <li className="card" key={c}>
                <span className="num">Quote only</span>
                <h3 className="h4">{c}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
