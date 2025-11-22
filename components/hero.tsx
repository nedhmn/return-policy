"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"

// Define the card data structure
const CARDS = [
  {
    id: 1,
    src: "/cinematic-shot-woman-holding-crystal-glass-cocktai.jpg",
    phrases: [
      { text: "Every departure is just", top: "15%", left: "8%" },
      { text: "a beginning,", top: "19%", left: "10%" },
      { text: "Cities aren't just places", top: "45%", left: "60%" },
      { text: "but stories in motion.", top: "80%", left: "15%" },
    ],
  },
  {
    id: 2,
    src: "/hero-image-2.jpg",
    phrases: [
      { text: "Designed to feel", top: "12%", left: "8%" },
      { text: "less like rentals", top: "16%", left: "10%" },
      { text: "and more like", top: "20%", left: "12%" },
      { text: "residences.", top: "24%", left: "14%" },
      { text: "Thoughtful,", top: "40%", left: "65%" },
      { text: "stylish,", top: "44%", left: "70%" },
      { text: "grounded.", top: "48%", left: "72%" },
      { text: "In the pulse", top: "70%", left: "5%" },
      { text: "of their", top: "74%", left: "8%" },
      { text: "neighbourhoods.", top: "78%", left: "10%" },
    ],
  },
  {
    id: 3,
    src: "/moody-interior.jpg",
    phrases: [
      { text: "Places that carry", top: "15%", left: "60%" },
      { text: "the mark of", top: "19%", left: "62%" },
      { text: "the city.", top: "23%", left: "64%" },
      { text: "Invite you to", top: "50%", left: "10%" },
      { text: "make your own.", top: "54%", left: "12%" },
      { text: "Short term stays", top: "80%", left: "50%" },
      { text: "written in the", top: "84%", left: "52%" },
      { text: "margins.", top: "88%", left: "54%" },
    ],
  },
]

const MapPinDotComponent = ({
  top,
  left,
  delay,
  className,
}: {
  top: string
  left: string
  delay: number
  className?: string
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay,
    }}
    className={`absolute z-20 h-4 w-4 rounded-full bg-rp-mint shadow-sm md:h-6 md:w-6 ${className}`}
    style={{ top, left }}
  />
)

export function Hero() {
  const [cards, setCards] = useState(CARDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards]
        const firstCard = newCards.shift()
        if (firstCard) newCards.push(firstCard)
        return newCards
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-rp-ivory pt-32 md:pt-0">
      {/* Background Split - Ivory Left / Brand Blue Right */}
      <div className="absolute right-0 top-0 hidden h-full w-full bg-rp-blue md:block md:w-[40%]" />

      <div className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-hidden">
        {/* Adjusted dot positions for mobile to avoid text overlap */}
        <MapPinDotComponent top="10%" left="85%" delay={1.0} />
        <MapPinDotComponent top="65%" left="10%" delay={1.2} className="md:top-[75%] md:left-[40%]" />
        <MapPinDotComponent top="90%" left="80%" delay={1.4} className="md:top-[10%] md:left-[92%]" />
        <MapPinDotComponent top="88%" left="15%" delay={1.6} className="hidden md:block" />
      </div>

      <div className="container relative mx-auto flex h-full w-full flex-col items-center px-6 md:flex-row md:justify-between lg:px-12">
        {/* Left Content - Text */}
        <div className="z-10 flex w-full flex-col items-start md:w-1/2 lg:w-[55%]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 block text-xs font-bold uppercase tracking-widest text-rp-black"
          >
            Short-Term Stays
          </motion.span>

          <h1 className="font-sans text-6xl font-medium leading-[0.82] tracking-[-0.05em] text-rp-black md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block overflow-hidden pb-6 -mb-6">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Long Story
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-6 -mb-6">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Short.
              </motion.span>
            </span>
          </h1>

          <div className="mt-12 max-w-md overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-xl font-normal tracking-tight text-rp-black/80 md:text-2xl"
            >
              Stays designed for the long run. Experience the city like a local, not a visitor.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            {/* Updated buttons to ensure proper mobile alignment and stacking */}
            <Link
              href="#about"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-rp-blue px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-rp-blue/90 hover:scale-105 active:scale-95 sm:w-auto"
            >
              <span>Read Our Story</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Link>

            <Link
              href="#"
              className="group relative flex items-center px-4 py-2 text-sm font-bold uppercase tracking-wider text-rp-black transition-colors hover:text-rp-blue"
            >
              <span className="relative z-10">View Stays</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-rp-blue transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Better Card Stack Animation */}
        <div className="relative mt-16 flex w-full justify-center md:mt-0 md:w-1/2 lg:h-[800px] lg:w-[45%] lg:items-center lg:justify-center">
          {/* Adjusted card dimensions for mobile to fit screen without overflow */}
          <div className="relative h-[400px] w-[280px] xs:w-[320px] md:h-[650px] md:w-[500px]">
            <AnimatePresence mode="popLayout">
              {cards.map((card, index) => {
                // We only render the first 3 cards to keep the stack clean
                if (index > 2) return null

                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{
                      scale: 1 - index * 0.06, // 1, 0.94, 0.88
                      zIndex: 30 - index,
                      x: index * 24, // Reduced offset for mobile? No, let's keep consistent, transform handles it
                      y: index * 12,
                      rotate: index % 2 === 0 ? index * 2 : index * -2,
                      opacity: 1,
                    }}
                    exit={{
                      x: -250,
                      opacity: 0,
                      rotate: -15,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1], // Custom ease for smooth shuffle
                    }}
                    className="absolute top-0 left-0 h-full w-full origin-bottom-left shadow-2xl"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-100 p-2 md:p-3">
                      <div className="relative h-full w-full overflow-hidden bg-rp-blue/10">
                        <Image
                          src={card.src || "/placeholder.svg"}
                          alt="Editorial hero image"
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />

                        <div className="absolute inset-0 z-10 pointer-events-none">
                          {card.phrases.map((item, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                              className="absolute text-[10px] md:text-xs font-medium text-white/90 tracking-wide drop-shadow-sm mix-blend-plus-lighter"
                              style={{ top: item.top, left: item.left }}
                            >
                              {item.text}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
