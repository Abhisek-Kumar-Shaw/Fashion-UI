"use client";

import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import Plate from "@/components/Plate";
import { LOOKS } from "@/lib/site";

/** The atelier gallery — every look of the house, with the philosophy card woven in. */
export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-site">
        <Reveal className="mb-[clamp(3rem,6vw,5.5rem)] flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow">The Collection</p>
            <h2 className="h-display mt-6">
              The atelier <em>gallery</em>
            </h2>
          </div>
          <p className="lede max-w-[22em]">
            No prices. No carts. Only the pieces, their craft, and the stories they are made for.
            Touch a look to see it from every side.
          </p>
        </Reveal>

        <div className="columns-1 gap-[clamp(1.4rem,2.6vw,2.4rem)] md:columns-2 lg:columns-3">
          {LOOKS.map((piece, i) => (
            <Fragment key={piece.id}>
              <Reveal className="mb-[clamp(1.4rem,2.6vw,2.4rem)] break-inside-avoid">
                <figure>
                  <Plate
                    src={piece.front}
                    alt={piece.alt}
                    lightboxId={piece.id}
                    mode="cover"
                    arch={piece.arch}
                    aspect={piece.aspect}
                  />
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-cormorant text-[1.2rem]">{piece.name}</span>
                    <span className="text-[0.625rem] tracking-[0.26em] text-warm-grey uppercase">
                      {piece.type}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              {/* House philosophy card sits after the second look */}
              {i === 1 && (
                <Reveal className="mb-[clamp(1.4rem,2.6vw,2.4rem)] break-inside-avoid">
                  <div className="bg-soft-beige px-10 py-14 text-center">
                    <p className="font-cormorant text-2xl font-light italic leading-normal">
                      “Crafted by hand,
                      <br />
                      worn for a lifetime.”
                    </p>
                    <span className="mt-6 block text-[0.5938rem] tracking-[0.34em] text-champagne-gold uppercase">
                      House Philosophy
                    </span>
                  </div>
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
