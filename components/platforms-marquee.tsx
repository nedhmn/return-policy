"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const platforms = [
  { name: "Airbnb", logo: "/platforms/airbnb-white.svg", size: "large" },
  { name: "Booking.com", logo: "/platforms/booking-white.svg", size: "large" },
  { name: "Vrbo", logo: "/platforms/vrbo-white.svg", size: "normal" },
  { name: "Stayz", logo: "/platforms/stayz-white.svg", size: "normal" },
  { name: "Capital One", logo: "/platforms/capital-one-white.svg", size: "xlarge" },
  { name: "Hopper", logo: "/platforms/hopper-white.svg", size: "normal" },
  { name: "Livily", logo: "/platforms/livily-white.svg", size: "normal" },
]

export function PlatformsMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Clone the content for seamless loop
    const scrollerContent = Array.from(scroller.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scroller) {
        scroller.appendChild(duplicatedItem as Node)
      }
    })
  }, [])

  return (
    <section className="w-full py-8 bg-black overflow-hidden border-t border-white/10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex items-center w-max animate-marquee-turbo" ref={scrollerRef}>
        {platforms.map((platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex items-center justify-center mx-12 md:mx-16 min-w-[240px]"
          >
            <Image
              src={platform.logo || "/placeholder.svg"}
              alt={platform.name}
              width={240}
              height={80}
              className={
                platform.size === "xlarge"
                  ? "h-32 md:h-40 w-auto object-contain"
                  : platform.size === "large"
                    ? "h-24 md:h-32 w-auto object-contain"
                    : "h-16 md:h-20 w-auto object-contain"
              }
            />
          </div>
        ))}
      </div>
    </section>
  )
}
