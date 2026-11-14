import type { Metadata } from "next";
import { SegmentIndex } from "../components/pages";
import { industries } from "../content/site";

export const metadata: Metadata = { title: "YouTube advertising by industry", description: "Distinct business problems, the services that fit them, and what we do differently for each." };

export default function Page() {
  return <SegmentIndex kind="industries" title="Start from the problem" summary="Each industry brings a different problem to solve with video. These pages set out the problem, the services that fit it and how we approach it." items={industries} art="display" />;
}
