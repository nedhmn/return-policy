"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-rp-black py-12 text-rp-ivory md:py-16">
      <div className="container mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-16 flex items-start justify-between lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-medium font-sans text-5xl text-rp-yellow leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            See You
            <br />
            Sooner.
          </h2>
          <div className="w-32 flex-shrink-0 lg:w-40">
            <Image
              alt="Return Policy Logo"
              className="h-auto w-full"
              height={80}
              src="/images/rp-primary-logo-white.svg"
              width={160}
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="mb-6 font-medium font-sans text-lg leading-[0.96] tracking-[-0.04em]">
              Contact
            </h3>
            <a
              className="flex items-center gap-3 font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href={`mailto:${siteConfig.contact.email}`}
            >
              <Mail className="h-5 w-5" />
              {siteConfig.contact.email}
            </a>
            <a
              className="flex items-center gap-3 font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href={`tel:${siteConfig.contact.phoneRaw}`}
            >
              <Phone className="h-5 w-5" />
              {siteConfig.contact.phone}
            </a>
            <div className="flex items-start gap-3 font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em]">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>
                {siteConfig.contact.address.street},
                <br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode},
                <br />
                {siteConfig.contact.address.country}
              </span>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="mb-6 font-medium font-sans text-lg leading-[0.96] tracking-[-0.04em]">
              Legal
            </h3>
            <a
              className="block font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href="/terms"
            >
              Terms of Service
            </a>
            <a
              className="block font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href="/privacy"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social & Info */}
          <div className="space-y-4">
            <h3 className="mb-6 font-medium font-sans text-lg leading-[0.96] tracking-[-0.04em]">
              Follow Us
            </h3>
            <a
              className="block font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href={siteConfig.socials.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="block font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href={siteConfig.socials.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              className="block font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em] transition-colors hover:text-rp-yellow"
              href={siteConfig.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-between gap-4 border-rp-ivory/20 border-t pt-8 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          whileInView={{ opacity: 1 }}
        >
          <p className="font-sans text-rp-ivory/70 text-sm leading-[1.15] tracking-[-0.02em]">
            © Since {siteConfig.foundedYear} {siteConfig.name}™. All rights reserved.
          </p>
          <p className="font-sans text-rp-ivory/70 text-sm leading-[1.15] tracking-[-0.02em]">
            {siteConfig.domain} • Short-Term Stays
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
