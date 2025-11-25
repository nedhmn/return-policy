import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BrandShowcase } from "@/components/brand-showcase"
import { BackgroundPattern } from "@/components/background-pattern"
import { Testimonials } from "@/components/testimonials"
import { PartnerForm } from "@/components/partner-form"
import { Footer } from "@/components/footer"
import { PlatformsMarquee } from "@/components/platforms-marquee"
import { FeaturedListings } from "@/components/featured-listings"

export default function Home() {
  return (
    <main className="bg-rp-ivory font-sans text-rp-black">
      <Navbar />
      <div className="relative bg-rp-black overflow-hidden">
        <BackgroundPattern />
        <Hero />
        <BrandShowcase />
      </div>
      <About />
      <PlatformsMarquee />
      <FeaturedListings />
      <Testimonials />
      <PartnerForm />
      <Footer />
    </main>
  )
}
