import type { Metadata } from "next";
import { LegalTemplate } from "../components/pages";
import { getLegal } from "../content/legal";

const l = getLegal("terms");
export const metadata: Metadata = { title: l.title, description: l.intro };

export default function Page() {
  return <LegalTemplate l={l} />;
}
