"use client";

import Reveal from "@/components/Reveal";
import { TESTIMONIAL } from "@/lib/site";

/** A single, timeless client word — static, nothing to rotate or refresh. */
export default function KindWords() {
  return (
    <section id="words" className="section-pad bg-soft-beige">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow center">Kind Words</p>
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-225 text-center" delay={0.1}>
          <span
            aria-hidden="true"
            className="mb-10 block font-playfair text-7xl italic leading-none text-champagne-gold"
          >
            ”
          </span>
          <figure>
            <blockquote className="font-cormorant text-[clamp(1.5rem,3vw,2.2rem)] font-light italic leading-normal">
              {TESTIMONIAL.quote}
            </blockquote>
            <figcaption className="mt-10 text-[0.6563rem] tracking-[0.34em] text-warm-grey uppercase">
              {TESTIMONIAL.cite}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
