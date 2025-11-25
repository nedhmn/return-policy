"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { submitPartnerContact } from "@/app/actions/partner-contact"

export function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitPartnerContact(formData)
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="partner" className="relative bg-rp-ivory py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Right column: Heading - shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:order-2 relative"
          >
            <div className="flex items-center gap-6 mb-4">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "#035F1D",
                  boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.25)",
                }}
              />
              <h2 className="font-medium text-rp-black text-6xl md:text-8xl leading-[0.82] tracking-[-0.05em]">
                Joint
                <br />
                Policy.
              </h2>
            </div>
            <p className="font-normal text-rp-black text-lg md:text-xl leading-[1.15] tracking-[-0.02em]">
              Interested in hosting with Return Policy? Let's create something extraordinary together.
            </p>
          </motion.div>

          {/* Left column: Contact Form - shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:order-1"
          >
            <div className="bg-rp-ivory border-3 border-rp-black rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-rp-black text-sm tracking-[-0.02em]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white text-rp-black placeholder:text-rp-black/40 font-normal text-base md:text-lg px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 border-rp-black tracking-[-0.02em] leading-[1.15] focus:outline-none focus:ring-2 focus:ring-rp-blue focus:border-rp-blue transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium text-rp-black text-sm tracking-[-0.02em]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white text-rp-black placeholder:text-rp-black/40 font-normal text-base md:text-lg px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 border-rp-black tracking-[-0.02em] leading-[1.15] focus:outline-none focus:ring-2 focus:ring-rp-blue focus:border-rp-blue transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-medium text-rp-black text-sm tracking-[-0.02em]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white text-rp-black placeholder:text-rp-black/40 font-normal text-base md:text-lg px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 border-rp-black tracking-[-0.02em] leading-[1.15] focus:outline-none focus:ring-2 focus:ring-rp-blue focus:border-rp-blue transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rp-blue text-white font-medium text-base md:text-xl px-6 md:px-10 py-4 md:py-5 rounded-full border-3 border-rp-black tracking-[-0.02em] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-2 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-rp-green font-medium text-center tracking-[-0.02em]">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-rp-vermilion font-medium text-center tracking-[-0.02em]">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
