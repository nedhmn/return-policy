"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LISTINGS = [
  {
    id: 1,
    title: "Your Chapter.",
    images: ["/images/listings/AL3A3437.jpg", "/images/listings/AL3A3521.jpg"],
    transitionInterval: 12_000,
    initialDelay: 3000,
  },
  {
    id: 2,
    title: "Your Mark.",
    images: [
      "/images/listings/155-dan-leckie-1.jpeg",
      "/images/listings/155-dan-leckie-2.jpeg",
    ],
    transitionInterval: 12_000,
    initialDelay: 6000,
  },
  {
    id: 3,
    title: "Your Return.",
    images: ["/images/3rd-1.jpeg", "/images/3rd-2.jpeg"],
    transitionInterval: 12_000,
    initialDelay: 9000,
  },
];

function ListingCard({ listing }: { listing: (typeof LISTINGS)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);

      // Set up repeating interval after initial delay
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
      }, listing.transitionInterval);

      return () => clearInterval(interval);
    }, listing.initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [listing.images.length, listing.transitionInterval, listing.initialDelay]);

  return (
    <>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="relative mb-6 h-[400px] w-full cursor-pointer overflow-hidden bg-rp-black/10 md:h-[500px] lg:h-[550px]"
          onClick={() => setSelectedImage(listing.images[currentImageIndex])}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {listing.images.map((image, index) => (
            <motion.div
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              key={image}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                alt={listing.title}
                className="object-cover"
                fill
                src={image || "/placeholder.svg"}
              />
            </motion.div>
          ))}
        </motion.div>

        <h3 className="font-medium text-3xl text-rp-black leading-[0.96] tracking-[-0.04em] md:text-5xl lg:text-6xl">
          {listing.title}
        </h3>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-rp-black/90 p-2"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="relative h-full max-h-[90vh] w-full max-w-[90vw]"
              exit={{ scale: 0.8, opacity: 0 }}
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                alt="Expanded view"
                className="object-contain"
                fill
                src={selectedImage || "/placeholder.svg"}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function FeaturedListings() {
  return (
    <section className="bg-rp-ivory py-3 lg:py-6">
      <div className="w-full px-3 lg:px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
