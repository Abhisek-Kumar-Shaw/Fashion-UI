"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        infinite: false,
        // Premium syrupy easing function
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children as ReactNode & string}
    </ReactLenis>
  );
}
