import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shivani Mehroliya — Luxury Indian Couture & Occasion Wear",
  description:
    "The official house of Shivani Mehroliya — hand-embroidered Indian couture for weddings, festive occasions and modern celebration. Crafted in India.",
  keywords: [
    "Shivani Mehroliya",
    "Indian couture",
    "luxury ethnic wear",
    "bridal lehenga",
    "festive wear",
    "hand embroidery",
    "designer",
    "India",
  ],
  authors: [{ name: SITE.name }],
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Shivani Mehroliya — Luxury Indian Couture",
    description:
      "Timeless elegance, designed for every celebration. Hand-embroidered couture from the house of Shivani Mehroliya.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description: "Luxury Indian couture house — hand-embroidered occasion wear.",
  email: SITE.email,
  areaServed: "IN",
  brand: { "@type": "Brand", name: SITE.name },
  sameAs: [SITE.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-deep-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
