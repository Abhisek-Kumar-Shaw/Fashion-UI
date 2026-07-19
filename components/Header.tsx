"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES, LINKS, SITE } from "@/lib/site";

const NAV = [
  { href: "#gallery", label: "Gallery" },
  { href: "#atelier", label: "The House" },
  { href: "#visit", label: "Visit" },
];

const MOBILE_NAV = [
  { href: "#gallery", label: "Gallery", num: "I" },
  { href: "#atelier", label: "The House", num: "II" },
  { href: "#visit", label: "Visit & Contact", num: "III" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ease-luxe ${
          scrolled
            ? "bg-ivory/90 py-3.5 shadow-[0_1px_0_rgba(17,17,17,.08)] backdrop-blur-md"
            : "py-6"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-site grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          {/* Primary nav (desktop) */}
          <nav aria-label="Primary" className="hidden gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-underline py-1.5 text-[0.6563rem] font-normal tracking-[0.28em] uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Monogram */}
          <a href="#home" aria-label={`${SITE.name} — home`} className="flex justify-start lg:justify-center">
            <Image
              src={IMAGES.logoDark}
              alt={`${SITE.name} monogram`}
              width={120}
              height={90}
              priority
              className={`w-auto transition-all duration-500 ease-luxe ${scrolled ? "h-9" : "h-11"}`}
            />
          </a>

          <div className="flex items-center justify-end gap-8">
            <a
              href={LINKS.whatsappBook}
              target="_blank"
              rel="noopener"
              className="nav-underline hidden py-1.5 text-[0.6563rem] font-normal tracking-[0.28em] uppercase lg:block"
            >
              Book an Appointment
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex cursor-pointer flex-col gap-1.5 py-2.5 lg:hidden"
            >
              <span
                className={`block h-px w-6.5 bg-deep-black transition-transform duration-450 ease-luxe ${
                  menuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6.5 bg-deep-black transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6.5 bg-deep-black transition-transform duration-450 ease-luxe ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-90 flex flex-col justify-center bg-ivory px-[clamp(1.4rem,5vw,5rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-1.5">
              {MOBILE_NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-5 font-cormorant text-[clamp(2rem,8vw,2.8rem)] leading-normal"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-playfair text-[0.85rem] italic text-champagne-gold">
                    {item.num}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="caps absolute inset-x-[clamp(1.4rem,5vw,5rem)] bottom-10 flex justify-between text-warm-grey">
              <span>{SITE.instagramHandle}</span>
              <span>Couture · India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
