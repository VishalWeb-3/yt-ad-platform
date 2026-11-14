import type { Metadata } from "next";
import Nav from "../components/Nav";
import Motion from "../components/Motion";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import CopyEmail from "../components/CopyEmail";
import { Words } from "../components/ui";

export const metadata: Metadata = { title: "Contact — WEB3TASK" };

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <section className="contact" id="cta" data-pin>
          <div className="contact-inner">
            <h1 className="h2" data-words>
              <Words text="Got A Video?" />
            </h1>
            <p className="h6b" data-words>
              <Words text="New channel, big launch, small budget — all welcome." />
            </p>
            <div className="contact-row">
              <p className="p" data-blur>
                Tell us about your video, your audience, and your budget. We&rsquo;ll come back with a plan and a clear price.
              </p>
              <div className="contact-actions" data-blur>
                <CopyEmail />
                <a className="outline-chip tiny" href="#cta">
                  Book A Call
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <Footer />
      </main>
      <Motion />
    </>
  );
}
