"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-[80vh] w-full flex-col justify-center bg-[#FFF68E] px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-sans text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-[#1A1A1A] md:text-6xl lg:text-7xl xl:text-8xl">
              Many Happy Returns.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8 pt-4 lg:pt-8"
          >
            <p className="text-xl font-medium leading-relaxed tracking-tight text-[#1A1A1A] md:text-2xl">
              We believe every departure is just a beginning. Our short-term stays are designed not just as places to
              sleep, but as chapters in your story.
            </p>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/80 md:text-xl">
              Whether you're here for a weekend or a season, Return Policy offers curated spaces that feel like home
              from the moment you turn the key. Discover a new way to travel where the return trip is always the best
              part.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] underline underline-offset-4 hover:text-[#3B99D9] transition-colors"
              >
                Explore Our Locations
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
