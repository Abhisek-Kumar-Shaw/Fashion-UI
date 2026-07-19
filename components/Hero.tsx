"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Plate from "@/components/Plate";
import { LINKS, LOOKS } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Copy enters as the loader curtain lifts
const BASE_DELAY = 1.45;

const TITLE_LINES = [
  <>Timeless Elegance.</>,
  <>
    Designed for <em className="italic">every</em>
  </>,
  <em key="l3" className="italic">
    celebration.
  </em>,
];

const lineReveal = (i: number) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1.3, delay: BASE_DELAY + i * 0.14, ease: EASE },
});

const fadeUp = (delay: number) => ({
  initial: { y: 26, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: BASE_DELAY + delay, ease: EASE },
});

const heroLook = LOOKS[0]; // Kesar — the opening look

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: the arched portrait drifts gently as you scroll away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [0, 34]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-clip pt-26"
      aria-label="Shivani Mehroliya — luxury Indian couture"
    >
      <div className="container-site grid w-full items-center gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[1.05fr_.95fr]">
        {/* Copy */}
        <div>
          <motion.p className="eyebrow mb-9" {...fadeUp(0.35)}>
            Couture · Handcrafted in India
          </motion.p>

          <h1 className="font-cormorant text-[clamp(3rem,7.2vw,6.9rem)] font-light leading-[1.02]">
            {TITLE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" {...lineReveal(i)}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="lede mt-10 max-w-[26em]" {...fadeUp(0.45)}>
            Hand-embroidered occasion wear from the house of Shivani Mehroliya — where Indian
            heritage is draped in a modern silhouette.
          </motion.p>

          <motion.div className="mt-13 flex flex-wrap items-center gap-10" {...fadeUp(0.55)}>
            <a className="btn" href="#gallery">
              Explore Collection
            </a>
            <a className="link-arrow" href={LINKS.whatsappBook} target="_blank" rel="noopener">
              Book an appointment
              <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 6h22M17 1l5 5-5 5" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Figure — Look I framed in the arch */}
        <motion.div
          className="relative order-last flex h-[72vh] items-end justify-center lg:h-[min(86vh,940px)]"
          initial={{ y: 56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: BASE_DELAY + 0.25, ease: EASE }}
        >
          <div className="absolute -bottom-1.5 left-1/2 z-1 h-7.5 w-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,.18),transparent_68%)]" />

          <motion.div
            className="absolute object-cover bottom-0 z-2 h-[92%] w-[min(78%,470px)] drop-shadow-[0_34px_44px_rgba(17,17,17,.18)]"
            style={{ y: archY }}
          >
            <Plate
              src={heroLook.front}
              alt={heroLook.alt}
              lightboxId={heroLook.id}
              mode="cover"
              arch
              aspect="h-full w-full"
              priority
              sizes="(max-width: 1024px) 88vw, 470px"
            />
          </motion.div>
              
          <span className="absolute -right-4 bottom-[9%] z-3 text-[0.625rem] tracking-[0.34em] text-warm-grey uppercase [writing-mode:vertical-rl] sm:right-0">
            <b className="font-normal text-deep-black">Look I — Kesar</b>
            &nbsp;&nbsp;The Festive Edit
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3.5 text-[0.5938rem] tracking-[0.4em] text-warm-grey uppercase lg:flex">
        Scroll
        <motion.span
          className="block h-13 w-px origin-top bg-linear-to-b from-champagne-gold to-transparent"
          animate={{ scaleY: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 2.4, times: [0, 0.45, 1], repeat: Infinity, ease: EASE }}
        />
      </div>
    </section>
  );
}
