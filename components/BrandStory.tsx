"use client";

import Reveal from "@/components/Reveal";
import Plate from "@/components/Plate";
import { LOOKS, SITE } from "@/lib/site";

// Raat Rani fronts the story of the house
const storyLook = LOOKS.find((l) => l.id === "raat-rani")!;

// Craft credentials — evergreen numbers, folded in from the old craft section
const STATS = [
  { value: "120+", label: "Hours of embroidery per piece" },
  { value: "100%", label: "Made to measure in the atelier" },
  { value: "1 of 1", label: "Every piece finished by hand" },
];

export default function BrandStory() {
  return (
    <section id="atelier" className="section-pad bg-soft-beige">
      <div className="container-site grid items-center gap-[clamp(3rem,7vw,7rem)] lg:grid-cols-[.92fr_1.08fr]">
        <Reveal className="mx-auto w-full max-w-110 lg:max-w-none">
          <Plate
            src={storyLook.front}
            alt={storyLook.alt}
            lightboxId={storyLook.id}
            mode="cover"
            aspect={storyLook.aspect}
            background="ivory"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The House</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-7 mb-8">
              Modern heritage,
              <br />
              <em>made by hand</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              The house of Shivani Mehroliya was founded on a simple belief — that a woman should
              never have to choose between her heritage and her modernity. Every silhouette begins
              with Indian craft: resham threadwork, zardozi, pearl and bead embroidery worked slowly
              across georgette, organza and raw silk.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede mt-6">
              And every silhouette ends in the present — draped, corseted and pre-stitched for the
              way women celebrate today. Nothing is mass-made. Each piece is cut to the client,
              finished in the atelier, and meant to be kept for a lifetime of occasions.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 font-cormorant text-[2rem] font-light italic">{SITE.name}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap gap-[clamp(2.5rem,5vw,5rem)] border-t border-hairline pt-9">
              {STATS.map((stat) => (
                <div key={stat.value}>
                  <b className="block font-cormorant text-[clamp(2rem,3vw,2.8rem)] font-light leading-none">
                    {stat.value}
                  </b>
                  <span className="mt-3 block max-w-[11em] text-[0.5938rem] tracking-[0.3em] text-warm-grey uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
