/* ============================================================
   SITE CONFIG — the only file to edit for text/contact changes.
   Images live in public/images; replace a file (same name) to
   swap a photo. Nothing else on the site needs touching.
   ============================================================ */

export const SITE = {
  name: "Shivani Mehroliya",
  tagline: "Timeless elegance, designed for every celebration.",
  phone: "+91 85272 40336", // display + tel:
  whatsapp: "919717148003", // digits only, country code first
  email: "shivani@shivanimehroliya.com",
  instagram: "https://instagram.com/shivani_mehroliya1",
  instagramHandle: "@shivani_mehroliya1",
  addressLine1: "SM Atelier",
  addressLine2: "303, Ground Floor, Shahpur Jat, New Delhi, Delhi, 110049",
  mapCity: "New Delhi, India",
  maps: "https://maps.app.goo.gl/KcCGB2PHJFCsjTHY7",
  hours1: "Monday – Saturday · 11:00 — 19:00",
  hours2: "Sunday · By appointment",
};

export const LINKS = {
  tel: `tel:${SITE.phone.replace(/\s/g, "")}`,
  whatsapp: `https://wa.me/${SITE.whatsapp}`,
  // Booking runs entirely over WhatsApp — no forms, no backend, no upkeep
  whatsappBook: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello! I would like to book an appointment with the atelier.",
  )}`,
  mailto: `mailto:${SITE.email}`,
  instagram: SITE.instagram,
  maps: SITE.maps,
};

/* ---------- Imagery ---------- */

export const IMAGES = {
  logoDark: "/images/logo-dark.png",
  logoGold: "/images/logo-gold.png",
  logoLight: "/images/logo-light.png",
};

/* ---------- The looks ----------
   Each look has two photos in public/images:
   - look-<id>-front.jpg  → front view, shown in the gallery tiles / hero
   - look-<id>.jpg        → both views side by side, opened in the lightbox
   To swap a look's photos, replace those two files keeping the names. */

export interface Look {
  id: string;
  name: string;
  type: string;
  alt: string;
  caption: string;
  front: string;
  diptych: string;
  /** Tailwind aspect class matching the front crop — tiles never crop the garment */
  aspect: string;
  /** Arched (jharokha) frame vs square */
  arch?: boolean;
}

const look = (
  id: string,
  name: string,
  type: string,
  caption: string,
  alt: string,
  aspect: string,
  arch = false,
): Look => ({
  id,
  name,
  type,
  caption,
  alt,
  aspect,
  arch,
  front: `/images/look-${id}-front.jpg`,
  diptych: `/images/look-${id}.jpg`,
});

export const LOOKS: Look[] = [
  look(
    "kesar",
    "Kesar",
    "Cape set",
    "Kesar · Hand-embroidered cape set in saffron georgette",
    "Kesar — saffron cape set with ivory bird embroidery",
    "aspect-[695/1122]",
    true,
  ),
  look(
    "gulshan",
    "Gulshan",
    "Bridal lehenga",
    "Gulshan · Ivory bridal lehenga with hand-worked florals",
    "Gulshan — ivory bridal lehenga with multicolour floral embroidery and veil",
    "aspect-[559/1369]",
  ),
  look(
    "raat-rani",
    "Raat Rani",
    "Draped sari",
    "Raat Rani · Draped pre-stitched sari in midnight blue",
    "Raat Rani — midnight blue draped sari with embellished corset",
    "aspect-[703/1115]",
    true,
  ),
  look(
    "kanak",
    "Kanak",
    "Draped gown",
    "Kanak · Molten gold gown with embellished peplum and drape",
    "Kanak — molten gold draped gown with hand-embellished peplum",
    "aspect-[716/1086]",
  ),
  look(
    "sindoori",
    "Sindoori",
    "Bridal lehenga",
    "Sindoori · Vermilion bridal lehenga with miniature-art embroidery",
    "Sindoori — vermilion bridal lehenga with multicolour miniature-art skirt",
    "aspect-[668/1180]",
    true,
  ),
  look(
    "chandni",
    "Chandni",
    "Lehenga sari",
    "Chandni · Iridescent pearl lehenga sari with corset blouse",
    "Chandni — iridescent pearl lehenga sari with embellished corset",
    "aspect-[648/1181]",
  ),
  look(
    "pista",
    "Pista",
    "Drape skirt set",
    "Pista · Pre-draped skirt set with a crystal-net cape",
    "Pista — sage green pre-draped skirt set with sheer crystal cape",
    "aspect-[696/1122]",
  ),
  look(
    "motia",
    "Motia",
    "Cape gown",
    "Motia · Champagne corseted gown with cascading cape",
    "Motia — champagne corseted gown with cascading ruffle cape",
    "aspect-[649/1180]",
    true,
  ),
];

/* ---------- Lightbox gallery (shows both views of each look) ---------- */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY: GalleryImage[] = LOOKS.map((l) => ({
  id: l.id,
  src: l.diptych,
  alt: l.alt,
  caption: l.caption,
}));

/* ---------- Kind words ---------- */

export const TESTIMONIAL = {
  quote:
    "The outfit didn’t just fit me — it understood the occasion. I have never felt more myself at a celebration.",
  cite: "Bride · Wedding Couture",
};
