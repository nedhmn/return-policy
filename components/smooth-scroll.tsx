"use client"

import type React from "react"

import { ReactLenis } from "@studio-freight/react-lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // lerp: 0.1 is the default and provides the "weighty" feel.
  // Lower values make it heavier/slower (e.g. 0.05).
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
