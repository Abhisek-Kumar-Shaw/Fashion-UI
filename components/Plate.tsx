"use client";

import Image from "next/image";
import { useLightbox } from "@/components/Lightbox";

interface PlateProps {
  src: string;
  alt: string;
  /** Transparent cutout standing on the plate vs full-bleed cover photo */
  mode?: "cut" | "cover";
  /** Arched (Mughal jharokha) frame vs square frame */
  arch?: boolean;
  /** Tailwind aspect-ratio class, e.g. "aspect-[.66]" */
  aspect?: string;
  /** GALLERY id — makes the plate open the lightbox */
  lightboxId?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  background?: "beige" | "ivory";
}

/**
 * The signature editorial frame of the maison: an arched niche with an
 * inner champagne hairline, a soft floor shadow, and the garment either
 * standing inside it (cut) or filling it (cover).
 */
export default function Plate({
  src,
  alt,
  mode = "cut",
  arch = true,
  aspect = "aspect-[.66]",
  lightboxId,
  sizes = "(max-width: 768px) 90vw, 40vw",
  priority = false,
  className = "",
  background = "beige",
}: PlateProps) {
  const { open, setCursorActive } = useLightbox();
  const radius = arch ? "rounded-t-full" : "";
  const interactive = Boolean(lightboxId);

  return (
    <div
      className={`group relative overflow-hidden ${radius} ${
        background === "beige" ? "bg-soft-beige" : "bg-ivory"
      } ${aspect} ${interactive ? "cursor-pointer" : ""} ${className}`}
      {...(interactive
        ? {
            role: "button",
            tabIndex: 0,
            "aria-label": `View ${alt}`,
            onClick: () => open(lightboxId!),
            onKeyDown: (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(lightboxId!);
              }
            },
            onMouseEnter: () => setCursorActive(true),
            onMouseLeave: () => setCursorActive(false),
          }
        : {})}
    >
      {/* Inner champagne hairline */}
      <div
        className={`pointer-events-none absolute inset-3 z-30 border border-champagne-gold/40 ${radius}`}
      />

      {mode === "cut" ? (
        <>
          {/* Floor shadow under the garment */}
          <div className="absolute bottom-[2.5%] left-1/2 z-10 h-6 w-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,.15),transparent_68%)]" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-[91%] transition-transform duration-[1300ms] ease-luxe group-hover:scale-[1.025]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain object-bottom drop-shadow-[0_26px_34px_rgba(17,17,17,.16)]"
            />
          </div>
        </>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-[center_18%] transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.045]"
        />
      )}
    </div>
  );
}
