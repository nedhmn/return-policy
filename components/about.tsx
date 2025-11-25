"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // If the value has a decimal, format to 1 decimal place
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    }
    return String(Math.round(latest));
  });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { label: "Founded", value: siteConfig.foundedYear },
    {
      label: "Guests Served",
      value: siteConfig.stats.guestsServed.value,
      suffix: siteConfig.stats.guestsServed.suffix,
    },
    {
      label: "Avg Rating",
      value: siteConfig.stats.avgRating.value,
      suffix: siteConfig.stats.avgRating.suffix,
    },
    { label: "Countries", value: siteConfig.stats.countries },
  ];

  return (
    <section
      className="relative z-0 flex w-full flex-col justify-center bg-[#FEF380] pt-16 pb-16 md:pt-20 md:pb-20"
      id="about"
    >
      <div className="container mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-medium font-sans text-5xl text-black leading-[0.82] tracking-[-0.05em] md:text-6xl lg:text-7xl xl:text-8xl">
              Many Happy Returns.
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  key={stat.label}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="font-medium text-3xl text-black leading-[0.82] tracking-[-0.05em] md:text-4xl lg:text-5xl">
                    <AnimatedCounter
                      suffix={stat.suffix || ""}
                      value={stat.value}
                    />
                  </span>
                  <span className="mt-2 font-normal text-black/70 text-sm leading-[1.15] tracking-[-0.02em] md:text-base">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 pt-4 lg:pt-8"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="font-normal text-black text-lg leading-[1.15] tracking-[-0.02em] md:text-xl">
              Every departure, just another beginning. At Return Policy, nothing
              ends, there are only many happy returns.
            </p>
            <p className="font-normal text-black text-lg leading-[1.15] tracking-[-0.02em] md:text-xl">
              Short-term stays designed to feel like home, thoughtfully crafted
              and grounded in the pulse of Toronto, New York, Mexico and beyond.
            </p>
            <p className="font-normal text-black text-lg leading-[1.15] tracking-[-0.02em] md:text-xl">
              Find us on your favorite booking platforms, the doorway changes,
              the promise doesn't. Multiplatformed, but always Return Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
