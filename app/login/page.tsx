import type { Metadata } from "next";
import { Notice, PageHero, Shell, TextLink } from "../components/ui";
import { LoginForm } from "../components/Forms";

export const metadata: Metadata = { title: "Client login", description: "Sign in to your client account.", robots: { index: false } };

export default function Page() {
  return (
    <Shell>
      <PageHero crumbs={[["Client login"]]} eyebrow="Client accounts" title="Sign in" summary="Client accounts give you your order history, invoices and reports in one place. Sign-in is by email link, so there is no password to remember." />
      <section className="sec flush-top">
        <div className="wrap split top">
          <div className="panel" data-rise>
            <LoginForm />
          </div>
          <div className="stack lg">
            <Notice title="Coming after launch.">Persistent client accounts are planned for a later release. Until then, every order can be followed with email-verified tracking.</Notice>
            <TextLink href="/track">Track an order instead</TextLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}
