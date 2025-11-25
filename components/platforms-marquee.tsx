"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function getSizeClass(size: string) {
  if (size === "xlarge") {
    return "h-32 w-auto object-contain md:h-40";
  }
  if (size === "large") {
    return "h-24 w-auto object-contain md:h-32";
  }
  return "h-16 w-auto object-contain md:h-20";
}

const platforms = [
  { name: "Airbnb", logo: "/platforms/airbnb-white.svg", size: "large" },
  { name: "Booking.com", logo: "/platforms/booking-white.svg", size: "large" },
  { name: "Vrbo", logo: "/platforms/vrbo-white.svg", size: "normal" },
  { name: "Stayz", logo: "/platforms/stayz-white.svg", size: "normal" },
  {
    name: "Capital One",
    logo: "/platforms/capital-one-white.svg",
    size: "xlarge",
  },
  { name: "Hopper", logo: "/platforms/hopper-white.svg", size: "normal" },
  { name: "Livily", logo: "/platforms/livily-white.svg", size: "normal" },
];

export function PlatformsMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    // Clone the content for seamless loop
    const scrollerContent = Array.from(scroller.children);
    for (const item of scrollerContent) {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem as Node);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-white/10 border-t bg-black py-8">
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent md:w-48" />

      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-black to-transparent md:w-48" />

      <div
        className="flex w-max animate-marquee-turbo items-center"
        ref={scrollerRef}
      >
        {platforms.map((platform, index) => (
          <div
            className="mx-12 flex min-w-[240px] items-center justify-center md:mx-16"
            key={`${platform.name}-${index}`}
          >
            <Image
              alt={platform.name}
              className={getSizeClass(platform.size)}
              height={80}
              src={platform.logo || "/placeholder.svg"}
              width={240}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
