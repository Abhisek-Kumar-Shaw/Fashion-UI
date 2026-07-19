"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { GALLERY } from "@/lib/site";

interface LightboxContextValue {
  open: (id: string) => void;
  setCursorActive: (active: boolean) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

function subscribeFinePointer(onChange: () => void) {
  const query = window.matchMedia("(pointer:fine)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Floating "View" label that follows a fine pointer over gallery items. */
function CursorView({ active }: { active: boolean }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const finePointer = useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia("(pointer:fine)").matches,
    () => false,
  );

  useEffect(() => {
    if (!finePointer) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-120 flex h-19 w-19 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-deep-black/90 text-[0.5625rem] font-normal tracking-[0.3em] text-ivory uppercase"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: active ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      View
    </motion.div>
  );
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);
  const [cursorActive, setCursorActive] = useState(false);

  const open = useCallback((id: string) => {
    const i = GALLERY.findIndex((g) => g.id === id);
    if (i >= 0) setIndex(i);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: number) => {
    setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  useEffect(() => {
    document.body.style.overflow = index !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  const item = index !== null ? GALLERY[index] : null;

  return (
    <LightboxContext.Provider value={{ open, setCursorActive }}>
      {children}

      <CursorView active={cursorActive && index === null} />

      <AnimatePresence>
        {item && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery"
            className="fixed inset-0 z-150 flex flex-col items-center justify-center bg-ivory/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-8 cursor-pointer p-2 font-cormorant text-4xl font-light leading-none hover:text-champagne-gold transition-colors"
            >
              ×
            </button>

            <button
              onClick={() => step(-1)}
              aria-label="Previous"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer p-5 opacity-55 hover:opacity-100 transition-opacity"
            >
              <svg viewBox="0 0 34 14" fill="none" stroke="currentColor" strokeWidth="1" className="h-3.5 w-8.5">
                <path d="M34 7H2M8 1L2 7l6 6" />
              </svg>
            </button>

            <motion.div
              key={item.id}
              className="relative h-[74vh] w-[86vw]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="86vw"
                className="object-contain drop-shadow-[0_30px_44px_rgba(17,17,17,.16)]"
              />
            </motion.div>

            <p className="caps mt-8 px-8 text-center text-warm-grey">{item.caption}</p>

            <button
              onClick={() => step(1)}
              aria-label="Next"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer p-5 opacity-55 hover:opacity-100 transition-opacity"
            >
              <svg viewBox="0 0 34 14" fill="none" stroke="currentColor" strokeWidth="1" className="h-3.5 w-8.5">
                <path d="M0 7h32M26 1l6 6-6 6" />
              </svg>
            </button>

            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-playfair italic text-warm-grey">
              {(index ?? 0) + 1} / {GALLERY.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
