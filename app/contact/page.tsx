import type { Metadata } from "next";
import { Notice, PageHero, SecHead, Shell, TextLink } from "../components/ui";
import { ContactForm } from "../components/Forms";
import { CONTACT_EMAIL, REVIEW_LEAD, SUPPORT_HOURS } from "../content/site";

export const metadata: Metadata = { title: "Contact", description: "Send an inquiry about a new campaign, an existing order or billing." };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Contact"]]} eyebrow="Contact" title="Got a video? Tell us about it." summary="New channel, big launch, small budget: all welcome. Tell us what you are trying to do and we will reply with a next step." />
      <section className="sec flush-top">
        <div className="wrap split top">
          <div className="sticky stack lg">
            <SecHead eyebrow="Reach us" title="Contact details" />
            <dl className="defs">
              <div>
                <dt>Email</dt>
                <dd><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{SUPPORT_HOURS}</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>New briefs are reviewed within {REVIEW_LEAD}. Questions about an existing order go to the team running it.</dd>
              </div>
            </dl>
            <Notice title="Placeholder contact.">The email address shown is a placeholder until verified business contact details are supplied.</Notice>
            <div className="row">
              <TextLink href="/track">Track an existing order</TextLink>
              <TextLink href="/faq">Read the FAQ</TextLink>
            </div>
          </div>
          <div className="panel" data-rise>
            <ContactForm />
          </div>
        </div>
      </section>
    </Shell>
  );
}
