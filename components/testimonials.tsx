"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

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
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handlers for navigation
  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-rp-mint pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden text-rp-black">
      <div className="container max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-[-0.05em] leading-[0.82] mb-4">Happy Returns.</h2>
            <p className="text-lg md:text-xl max-w-md leading-[1.15] tracking-[-0.02em] font-normal">
              Stories from those who have stayed, lived, and returned.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-rp-black flex items-center justify-center hover:bg-rp-black hover:text-rp-mint transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-rp-black flex items-center justify-center hover:bg-rp-black hover:text-rp-mint transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-0 left-0 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-rp-black text-rp-mint flex items-center justify-center text-2xl font-medium">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xl font-medium">{TESTIMONIALS[currentIndex].name}</div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-rp-black text-rp-black" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.04em] indent-12 md:indent-24">
                    "{TESTIMONIALS[currentIndex].review}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
