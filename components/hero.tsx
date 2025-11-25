"use client"

import { motion } from "framer-motion"
import { GuestyWidget } from "@/components/guesty-widget"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function Hero() {
  const titleLines = [
    {
      id: "line1",
      segments: [{ text: "LONG", className: "text-rp-mint" }],
    },
    {
      id: "line2",
      segments: [{ text: "STORY", className: "text-rp-mint" }],
    },
    {
      id: "line3",
      segments: [{ text: "SHORT-", className: "text-rp-yellow" }],
    },
    {
      id: "line4",
      segments: [{ text: "TERM", className: "text-rp-yellow" }],
    },
    {
      id: "line5",
      segments: [{ text: "STAYS.", className: "text-rp-mint" }],
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center min-h-[700px] lg:min-h-screen w-full pt-28 pb-16 md:pt-32 md:pb-20 xl:pt-32 xl:pb-24 z-20">
      <div className="container max-w-7xl relative mx-auto h-full w-full px-6 lg:px-12 grid lg:grid-cols-12 gap-4 items-center z-10">
        <div className="z-10 flex w-full flex-col items-start text-left lg:col-span-7 gap-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="font-sans text-6xl md:text-8xl lg:text-[7rem] xl:text-9xl font-medium leading-[0.82] tracking-[-0.05em]"
          >
            {titleLines.map((line) => (
              <span key={line.id} className="block overflow-hidden pb-[0.2em] -mb-[0.2em]">
                <motion.span variants={lineVariants} className="block">
                  {line.segments.map((segment, i) => (
                    <span key={i} className={segment.className}>
                      {segment.text}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl font-normal leading-[1.15] tracking-[-0.02em] text-rp-ivory max-w-xl">
              Another reason to come back. At Return Policy, nothing ends, there are only many happy returns. Designed
              to feel less like rentals and more like residences.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <GuestyWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
