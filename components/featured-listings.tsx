"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const LISTINGS = [
  {
    id: 1,
    title: "Your Chapter.",
    images: ["/images/listings/AL3A3437.jpg", "/images/listings/AL3A3521.jpg"],
    transitionInterval: 12000,
    initialDelay: 3000,
  },
  {
    id: 2,
    title: "Your Mark.",
    images: ["/images/listings/155-dan-leckie-1.jpeg", "/images/listings/155-dan-leckie-2.jpeg"],
    transitionInterval: 12000,
    initialDelay: 6000,
  },
  {
    id: 3,
    title: "Your Return.",
    images: ["/images/3rd-1.jpeg", "/images/3rd-2.jpeg"],
    transitionInterval: 12000,
    initialDelay: 9000,
  },
]

function ListingCard({ listing }: { listing: (typeof LISTINGS)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)

      // Set up repeating interval after initial delay
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
      }, listing.transitionInterval)

      return () => clearInterval(interval)
    }, listing.initialDelay)

    return () => clearTimeout(initialTimeout)
  }, [listing.images.length, listing.transitionInterval, listing.initialDelay])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col"
      >
        <motion.div
          className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full overflow-hidden bg-rp-black/10 mb-6 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(listing.images[currentImageIndex])}
        >
          {listing.images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.04em] text-rp-black">
          {listing.title}
        </h3>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rp-black/90 p-2 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
            >
              <Image src={selectedImage || "/placeholder.svg"} alt="Expanded view" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function FeaturedListings() {
  return (
    <section className="bg-rp-ivory py-3 lg:py-6">
      <div className="w-full px-3 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
