"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Testimonial data from user request
const TESTIMONIALS = [
  {
    id: 1,
    name: "Kamryn",
    rating: 5,
    date: "June 2024",
    review:
      "Perfect weekend getaway! The place is beautiful, clean, and has comfy beds. Christian made check-in smooth with a helpful video. Great location with restaurants and Rogers Centre within walking distance.",
  },
  {
    id: 2,
    name: "Raymund",
    rating: 5,
    date: "August 2025",
    review:
      "An absolute delight! Sweeping skyline views and stylish décor created a luxurious vibe. The apartment was immaculate. Seamless communication with the host made check-in a breeze. Highly recommended!",
  },
  {
    id: 3,
    name: "Danh",
    rating: 5,
    date: "August 2025",
    review:
      "Absolutely incredible stay! The penthouse was spotless, stylish, and had stunning Toronto views. Perfect location, close to everything yet peaceful. Smooth check-in and a friendly host. We will be back!",
  },
  {
    id: 4,
    name: "Fred",
    rating: 5,
    date: "August 2025",
    review:
      "Wow, soon as I walked in I was mesmerized! Top floor, amazing views of the city from living room to all the bedrooms. Views on views. Clean house, and communication was key. Definitely staying here again",
  },
  {
    id: 5,
    name: "Deborah",
    rating: 5,
    date: "October 2025",
    review:
      "Our best Airbnb experience yet! Patrick’s place is amazing, clean, and comfortable. The free parking spot was a real plus. Safe, upscale neighborhood near attractions and a grocery store. We'll definitely stay again!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const _containerRef = useRef<HTMLDivElement>(null);

  // Handlers for navigation
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-rp-mint pt-16 pb-16 text-rp-black md:pt-20 md:pb-20">
      <div className="container mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-medium text-6xl leading-[0.82] tracking-[-0.05em] md:text-8xl">
              Happy Returns.
            </h2>
            <p className="max-w-md font-normal text-lg leading-[1.15] tracking-[-0.02em] md:text-xl">
              Stories from those who have stayed, lived, and returned.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              aria-label="Previous testimonial"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-rp-black transition-colors hover:bg-rp-black hover:text-rp-mint"
              onClick={prevTestimonial}
              type="button"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next testimonial"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-rp-black transition-colors hover:bg-rp-black hover:text-rp-mint"
              onClick={nextTestimonial}
              type="button"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-0 left-0 w-full"
              custom={direction}
              exit={{ opacity: 0, x: direction * -100 }}
              initial={{ opacity: 0, x: direction * 100 }}
              key={currentIndex}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
                <div className="flex h-full flex-col justify-between md:col-span-4">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rp-black font-medium text-2xl text-rp-mint">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-xl">
                        {TESTIMONIALS[currentIndex].name}
                      </div>
                      <div className="mt-1 flex gap-1">
                        <Star className="h-4 w-4 fill-rp-black text-rp-black" />
                        <Star className="h-4 w-4 fill-rp-black text-rp-black" />
                        <Star className="h-4 w-4 fill-rp-black text-rp-black" />
                        <Star className="h-4 w-4 fill-rp-black text-rp-black" />
                        <Star className="h-4 w-4 fill-rp-black text-rp-black" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="indent-12 font-medium text-3xl leading-[0.96] tracking-[-0.04em] md:indent-24 md:text-5xl lg:text-6xl">
                    "{TESTIMONIALS[currentIndex].review}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
