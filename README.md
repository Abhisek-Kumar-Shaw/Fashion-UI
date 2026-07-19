# Shivani Mehroliya — Atelier Website

A fully static, zero-maintenance luxury one-pager. No backend, no database,
no forms, no paid services — booking and contact run entirely over WhatsApp,
phone and email links.

## Updating the site (the only two places you'll ever touch)

**1. Text, phone number, address, hours, Instagram — [`lib/site.ts`](lib/site.ts)**

Every piece of contact info and gallery caption lives in this one file.
Change a value, rebuild, done. In particular, before going live replace:

- `phone: "+91 00000 00000"` → the real display number
- `whatsapp: "910000000000"` → real number, digits only, country code first
- `email`, `instagram`, `maps` → real destinations

**2. Photos — [`public/images/`](public/images/)**

Each look has two photos; to swap a look, replace both files **keeping the
same filenames**:

- `look-<name>-front.jpg` — the front view, shown in the gallery tiles and hero
- `look-<name>.jpg` — front + side views side by side, opened when a tile is tapped

Look names, captions and the list of looks live in `lib/site.ts` (`LOOKS`).
Adding a look = add its two photos + one entry there.

## Running & deploying (free)

```bash
npm install --legacy-peer-deps   # once
npm run dev                      # preview at http://localhost:3000
npm run build                    # emits a static site into ./out
```

The `out/` folder is a plain static site — host it for free on Netlify,
Cloudflare Pages, GitHub Pages, or Vercel. Connect the repo once and every
push redeploys automatically; there is nothing to renew or pay for.

## Design notes

- Palette: ivory `#FAF9F6` · beige `#F4EFE8` · champagne `#C9A876` · ink `#111111`
- Type: Cormorant Garamond (display) · Playfair Display (italic accents) · Inter (body)
- Custom shared CSS classes (`.eyebrow`, `.btn`, `.h-display`, …) are plain
  (unlayered) CSS in `app/globals.css` — do **not** wrap them in
  `@layer components`; Tailwind v4 + Turbopack drops layered custom classes.
# Fashion-UI
