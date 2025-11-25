"use client";

import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { submitPartnerContact } from "@/app/actions/partner-contact";

export function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await submitPartnerContact(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (_error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-rp-ivory py-16 md:py-20"
      id="partner"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Right column: Heading - shows first on mobile, second on desktop */}
          <motion.div
            className="relative flex flex-col justify-center lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 flex items-center gap-6">
              <div
                className="h-20 w-20 flex-shrink-0 rounded-full md:h-24 md:w-24"
                style={{
                  backgroundColor: "#035F1D",
                  boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.25)",
                }}
              />
              <h2 className="font-medium text-6xl text-rp-black leading-[0.82] tracking-[-0.05em] md:text-8xl">
                Joint
                <br />
                Policy.
              </h2>
            </div>
            <p className="font-normal text-lg text-rp-black leading-[1.15] tracking-[-0.02em] md:text-xl">
              Interested in hosting with Return Policy? Let's create something
              extraordinary together.
            </p>
          </motion.div>

          {/* Left column: Contact Form - shows second on mobile, first on desktop */}
          <motion.div
            className="flex flex-col justify-center lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="rounded-3xl border-3 border-rp-black bg-rp-ivory p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-medium text-rp-black text-sm tracking-[-0.02em]"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="rounded-xl border-2 border-rp-black bg-white px-4 py-3 font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all placeholder:text-rp-black/40 focus:border-rp-blue focus:outline-none focus:ring-2 focus:ring-rp-blue md:px-5 md:py-4 md:text-lg"
                    id="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.name}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-medium text-rp-black text-sm tracking-[-0.02em]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="rounded-xl border-2 border-rp-black bg-white px-4 py-3 font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all placeholder:text-rp-black/40 focus:border-rp-blue focus:outline-none focus:ring-2 focus:ring-rp-blue md:px-5 md:py-4 md:text-lg"
                    id="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-medium text-rp-black text-sm tracking-[-0.02em]"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="rounded-xl border-2 border-rp-black bg-white px-4 py-3 font-normal text-base text-rp-black leading-[1.15] tracking-[-0.02em] transition-all placeholder:text-rp-black/40 focus:border-rp-blue focus:outline-none focus:ring-2 focus:ring-rp-blue md:px-5 md:py-4 md:text-lg"
                    id="phone"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    required
                    type="tel"
                    value={formData.phone}
                  />
                </div>

                <button
                  className="mt-2 cursor-pointer rounded-full border-3 border-rp-black bg-rp-blue px-6 py-4 font-medium text-base text-white tracking-[-0.02em] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:px-10 md:py-5 md:text-xl"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-center font-medium text-rp-green tracking-[-0.02em]">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center font-medium text-rp-vermilion tracking-[-0.02em]">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
