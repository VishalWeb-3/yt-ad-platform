import type { Metadata } from "next";
import { SegmentIndex } from "../components/pages";
import { solutions } from "../content/site";

export const metadata: Metadata = { title: "Solutions for creators, artists, brands and agencies", description: "YouTube advertising planned around the kind of advertiser you are." };

export default function Page() {
  return <SegmentIndex kind="solutions" title="Start from who you are" summary="Creators, music artists, brands and agencies come to YouTube advertising with different goals and different worries. Pick yours to see how we handle it." items={solutions} art="channel" />;
}
