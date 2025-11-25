"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef } from "react";

export function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const videoRef = useCallback((video: HTMLVideoElement | null) => {
    if (!video) {
      return;
    }

    // Fix React bug #10389 - must set BOTH the attribute AND the property
    // iOS WebKit requires the HTML attribute to be present for autoplay
    video.setAttribute("muted", "");
    video.muted = true;

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay prevented - requires user interaction
      });
    };

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section
      className="relative z-10 h-[60vh] w-full overflow-hidden md:h-screen"
      ref={containerRef}
    >
      <div className="relative z-10 h-full w-full">
        <motion.div
          className="relative h-full w-full overflow-hidden"
          style={{ scale, opacity }}
        >
          <video
            autoPlay
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            src="/brand-showcase.mp4"
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
