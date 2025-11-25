"use client";

import { motion } from "framer-motion";
import { GuestyWidget } from "@/components/guesty-widget";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

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
  ];

  return (
    <section className="relative z-20 flex min-h-[700px] w-full flex-col items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 lg:min-h-screen xl:pt-32 xl:pb-24">
      <div className="container relative z-10 mx-auto grid h-full w-full max-w-7xl items-center gap-4 px-6 lg:grid-cols-12 lg:px-12">
        <div className="z-10 flex w-full flex-col items-start gap-8 text-left lg:col-span-7">
          <motion.h1
            animate="visible"
            className="font-medium font-sans text-6xl leading-[0.82] tracking-[-0.05em] md:text-8xl lg:text-[7rem] xl:text-9xl"
            initial="hidden"
            variants={containerVariants}
          >
            {titleLines.map((line) => (
              <span
                className="-mb-[0.2em] block overflow-hidden pb-[0.2em]"
                key={line.id}
              >
                <motion.span className="block" variants={lineVariants}>
                  {line.segments.map((segment) => (
                    <span className={segment.className} key={segment.text}>
                      {segment.text}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="max-w-xl font-normal text-rp-ivory text-xl leading-[1.15] tracking-[-0.02em] md:text-2xl">
              Another reason to come back. At Return Policy, nothing ends, there
              are only many happy returns. Designed to feel less like rentals
              and more like residences.
            </p>
          </motion.div>
        </div>

        <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <GuestyWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
