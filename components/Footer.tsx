import Image from "next/image";
import { IMAGES, LINKS, SITE } from "@/lib/site";

const FOOT_NAV = [
  { href: "#gallery", label: "Gallery" },
  { href: "#atelier", label: "The House" },
  { href: "#visit", label: "Visit & Contact" },
];

const SOCIAL = [{ href: LINKS.instagram, label: "Instagram" }];

export default function Footer() {
  return (
    <footer className="bg-deep-black text-ivory">
      <div className="container-site">
        <div className="grid items-center justify-items-center gap-9 border-b border-ivory/12 pt-18 pb-14 text-center md:grid-cols-[auto_1fr_auto] md:justify-items-start md:text-left">
          <Image
            src={IMAGES.logoLight}
            alt={`${SITE.name} monogram`}
            width={80}
            height={60}
            className="h-15 w-auto"
          />
          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-10 gap-y-4 md:justify-self-center"
          >
            {FOOT_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.625rem] tracking-[0.3em] text-ivory/70 uppercase transition-colors duration-400 hover:text-champagne-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-7">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener"
                className="text-[0.625rem] tracking-[0.26em] text-ivory/70 uppercase transition-colors duration-400 hover:text-champagne-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="py-18 text-center">
          <p className="pl-[0.42em] font-cormorant text-[clamp(1.3rem,3.6vw,2.6rem)] font-light tracking-[0.42em] uppercase">
            {SITE.name}
          </p>
          <p className="mt-5 font-playfair text-[0.95rem] italic text-ivory/55">{SITE.tagline}</p>
        </div>

        <div className="flex flex-wrap justify-between gap-6 border-t border-ivory/12 py-8 text-[0.5938rem] tracking-[0.24em] text-ivory/45 uppercase">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>Couture · Crafted in India</span>
        </div>
      </div>
    </footer>
  );
}
