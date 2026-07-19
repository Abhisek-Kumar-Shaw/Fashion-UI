"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IMAGES, SITE } from "@/lib/site";

/** Brand intro curtain: gold monogram, a drawn gold thread, the name — then lifts away. */
export default function Loader() {
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduceMotion ? 100 : 1450);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-6 bg-ivory"
          exit={{ y: "-101%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={IMAGES.logoGold}
              alt=""
              width={104}
              height={78}
              priority
              className="w-[clamp(74px,9vw,104px)] h-auto"
            />
          </motion.div>
          <motion.div
            className="h-px bg-champagne-gold"
            initial={{ width: 0 }}
            animate={{ width: "min(200px, 40vw)" }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="pl-2 font-cormorant text-[0.8rem] tracking-[0.5em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {SITE.name}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
