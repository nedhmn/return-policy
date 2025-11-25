"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <section ref={containerRef} className="w-full h-[60vh] md:h-screen overflow-hidden relative z-10">
      <div className="w-full h-full relative z-10">
        <motion.div style={{ scale, opacity }} className="relative w-full h-full overflow-hidden">
          <video src="/brand-showcase.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-20" />
        </motion.div>
      </div>
    </section>
  )
}
