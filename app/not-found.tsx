import { Btn, Shell, TextLink } from "./components/ui";

export default function NotFound() {
  return (
    <Shell>
      <section className="sec page-hero">
        <div className="wrap stack" style={{ gap: 24 }}>
          <span className="eyebrow">404</span>
          <h1 className="h1 sm">This page is not available.</h1>
          <p className="lead">The link may be old, or the service may no longer be offered. Nothing is wrong on your side.</p>
          <div className="row">
            <Btn href="/services">Browse services</Btn>
            <TextLink href="/">Back to home</TextLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}
