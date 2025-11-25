"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    // If the value has a decimal, format to 1 decimal place
    if (value % 1 !== 0) {
      return latest.toFixed(1)
    }
    return Math.round(latest)
  })
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function About() {
  const stats = [
    { label: "Founded", value: 2018, display: "year" },
    { label: "Guests Served", value: 300, suffix: "K+" },
    { label: "Avg Rating", value: 9.8, suffix: "/10" },
    { label: "Countries", value: 3, display: "number" },
  ]

  return (
    <section
      id="about"
      className="relative z-0 flex w-full flex-col justify-center bg-[#FEF380] pt-16 md:pt-20 pb-16 md:pb-20"
    >
      <div className="container max-w-7xl mx-auto w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        ></motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-sans text-5xl font-medium leading-[0.82] tracking-[-0.05em] text-black md:text-6xl lg:text-7xl xl:text-8xl">
              Many Happy Returns.
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex flex-col"
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[0.82] tracking-[-0.05em] text-black">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                  </span>
                  <span className="mt-2 text-sm md:text-base font-normal leading-[1.15] tracking-[-0.02em] text-black/70">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 pt-4 lg:pt-8"
          >
            <p className="text-lg md:text-xl font-normal leading-[1.15] tracking-[-0.02em] text-black">
              Every departure, just another beginning. At Return Policy, nothing ends, there are only many happy
              returns.
            </p>
            <p className="text-lg md:text-xl font-normal leading-[1.15] tracking-[-0.02em] text-black">
              Short-term stays designed to feel like home, thoughtfully crafted and grounded in the pulse of Toronto,
              New York, Mexico and beyond.
            </p>
            <p className="text-lg md:text-xl font-normal leading-[1.15] tracking-[-0.02em] text-black">
              Find us on your favorite booking platforms, the doorway changes, the promise doesn't. Multiplatformed, but
              always Return Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
