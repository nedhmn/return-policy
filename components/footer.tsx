"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-rp-black text-rp-ivory py-12 md:py-16">
      <div className="container max-w-7xl mx-auto w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start justify-between mb-16 lg:mb-24"
        >
          <h2 className="font-sans font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.82] tracking-[-0.05em] text-rp-yellow">
            See You
            <br />
            Sooner.
          </h2>
          <div className="w-32 lg:w-40 flex-shrink-0">
            <Image
              src="/images/rp-primary-logo-white.svg"
              alt="Return Policy Logo"
              width={160}
              height={80}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12"
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-medium text-lg tracking-[-0.04em] leading-[0.96] mb-6">Contact</h3>
            <a
              href="mailto:help@returnpolicystays.com"
              className="flex items-center gap-3 text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              <Mail className="w-5 h-5" />
              help@returnpolicystays.com
            </a>
            <a
              href="tel:+14165543272"
              className="flex items-center gap-3 text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              <Phone className="w-5 h-5" />
              +1 (416) 554-3272
            </a>
            <div className="flex items-start gap-3 text-rp-ivory font-sans tracking-[-0.02em] leading-[1.15]">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span>
                639 Queen St W,
                <br />
                Toronto, ON M5V 2B7,
                <br />
                Canada
              </span>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-sans font-medium text-lg tracking-[-0.04em] leading-[0.96] mb-6">Legal</h3>
            <a
              href="/terms"
              className="block text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="block text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social & Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-medium text-lg tracking-[-0.04em] leading-[0.96] mb-6">Follow Us</h3>
            <a
              href="https://instagram.com/returnpolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/returnpolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/returnpolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-rp-ivory hover:text-rp-yellow transition-colors font-sans tracking-[-0.02em] leading-[1.15]"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-rp-ivory/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="text-sm font-sans tracking-[-0.02em] leading-[1.15] text-rp-ivory/70">
            © Since 2018 Return Policy™. All rights reserved.
          </p>
          <p className="text-sm font-sans tracking-[-0.02em] leading-[1.15] text-rp-ivory/70">
            returnpolicystays.com • Short-Term Stays
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
