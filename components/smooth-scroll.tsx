"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type React from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // lerp: 0.1 is the default and provides the "weighty" feel.
  // Lower values make it heavier/slower (e.g. 0.05).
  return (
    <ReactLenis options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }} root>
      {children}
    </ReactLenis>
  );
}
