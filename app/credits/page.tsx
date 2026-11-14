import type { Metadata } from "next";
import { Art } from "../components/art";
import { PageHero, Shell } from "../components/ui";
import { photos, type PhotoKey } from "../content/photos";

export const metadata: Metadata = { title: "Photo credits", description: "The photographers whose work appears on this site." };

export default function Page() {
  const list = Object.entries(photos) as [PhotoKey, (typeof photos)[PhotoKey]][];
  return (
    <Shell>
      <PageHero crumbs={[["Photo credits"]]} eyebrow="Credits" title="Photography on this site" summary="Every photograph here comes from Unsplash and is used under the Unsplash License. Thank you to the photographers below." />
      <section className="sec flush-top">
        <div className="wrap grid g4">
          {list.map(([k, p]) => (
            <figure className="card" key={k}>
              <div className="card-art">
                <Art kind={k} describe />
              </div>
              <figcaption className="small">
                Photo by{" "}
                <a className="text-link" href={`https://unsplash.com/@${p.handle}`} target="_blank" rel="noreferrer">
                  {p.by}
                </a>{" "}
                on{" "}
                <a className="text-link" href={`https://unsplash.com/photos/${p.page}`} target="_blank" rel="noreferrer">
                  Unsplash
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Shell>
  );
}
