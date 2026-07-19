import { LINKS } from "@/lib/site";

/** Floating WhatsApp / call actions — pinned bottom right. */
export default function Fabs() {
  return (
    <div className="fixed right-6 bottom-6 z-80 flex flex-col gap-3">
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp the atelier"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-deep-black text-ivory shadow-[0_10px_26px_rgba(17,17,17,.22)] transition-all duration-400 ease-luxe hover:-translate-y-0.5 hover:bg-champagne-gold"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.9-3.05-.2-.31A8.2 8.2 0 1 1 12.04 20.1zm4.5-6.15c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.4.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
      </a>
      <a
        href={LINKS.tel}
        aria-label="Call the atelier"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-deep-black text-ivory shadow-[0_10px_26px_rgba(17,17,17,.22)] transition-all duration-400 ease-luxe hover:-translate-y-0.5 hover:bg-champagne-gold"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3.99 3 3.45 3.45 3 4 3h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.03l-2.22 2.2z" />
        </svg>
      </a>
    </div>
  );
}
