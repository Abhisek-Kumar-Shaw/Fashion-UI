"use client";

import Reveal from "@/components/Reveal";
import { LINKS, SITE } from "@/lib/site";

const CHANNELS = [
  { label: "Phone", value: SITE.phone, href: LINKS.tel, external: false },
  { label: "WhatsApp", value: "Message the atelier", href: LINKS.whatsapp, external: true },
  { label: "Email", value: SITE.email, href: LINKS.mailto, external: false },
  { label: "Instagram", value: SITE.instagramHandle, href: LINKS.instagram, external: true },
];

/** Visit & contact in one — every channel is a direct link, no forms to babysit. */
export default function VisitContact() {
  return (
    <section id="visit" className="section-pad">
      <div className="container-site grid items-stretch gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Visit & Contact</p>
            <h2 className="h-display mt-7 mb-9">
              The <em>atelier</em>
            </h2>
          </Reveal>

          <Reveal className="border-t border-hairline py-7">
            <span className="caps mb-3 block text-champagne-gold">Address</span>
            <p className="font-cormorant text-xl leading-relaxed">{SITE.addressLine1}</p>
            <p className="font-cormorant text-xl leading-relaxed">{SITE.addressLine2}</p>
          </Reveal>

          <Reveal className="border-t border-hairline py-7">
            <span className="caps mb-3 block text-champagne-gold">Hours</span>
            <p className="font-cormorant text-xl leading-relaxed">{SITE.hours1}</p>
            <p className="font-cormorant text-xl leading-relaxed">{SITE.hours2}</p>
          </Reveal>

          <Reveal className="border-t border-hairline">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener" } : {})}
                className="group flex items-center justify-between gap-4 border-b border-hairline py-5 transition-[padding-left] duration-[450ms] ease-luxe hover:pl-3.5"
              >
                <span className="text-[0.625rem] tracking-[0.3em] text-warm-grey uppercase">
                  {channel.label}
                </span>
                <span className="text-right font-cormorant text-lg transition-colors duration-400 group-hover:text-champagne-gold">
                  {channel.value}
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-5">
            <a className="btn gold" href={LINKS.whatsappBook} target="_blank" rel="noopener">
              Book on WhatsApp
            </a>
            <a className="btn" href={LINKS.tel}>
              Call the Atelier
            </a>
          </Reveal>
        </div>

        {/* Stylised map panel */}
        <Reveal className="relative flex min-h-[480px] items-center justify-center bg-soft-beige bg-[linear-gradient(rgba(17,17,17,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.08)_1px,transparent_1px)] bg-[size:54px_54px] before:pointer-events-none before:absolute before:inset-3.5 before:border before:border-champagne-gold/35 before:content-['']">
          <div className="p-8 text-center">
            <div className="relative mx-auto mb-6 h-3 w-3 rounded-full bg-champagne-gold after:absolute after:-inset-3 after:animate-pulse-ring after:rounded-full after:border after:border-champagne-gold after:content-[''] motion-reduce:after:animate-none" />
            <p className="font-cormorant text-2xl">{SITE.name} — Atelier</p>
            <span className="caps mt-3 block text-warm-grey">{SITE.mapCity}</span>
            <a className="btn mt-9 inline-block" href={LINKS.maps} target="_blank" rel="noopener">
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
