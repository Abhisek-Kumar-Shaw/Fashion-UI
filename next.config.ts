import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits ./out, hostable for free on any
  // static host (Netlify, GitHub Pages, Cloudflare Pages, Vercel).
  output: "export",
  images: {
    // No image-optimization server needed; assets are pre-optimized webp/png.
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.18.66", "localhost:3000"],
};

export default nextConfig;
