import { About } from "@/components/about";
import { BackgroundPattern } from "@/components/background-pattern";
import { BrandShowcase } from "@/components/brand-showcase";
import { FeaturedListings } from "@/components/featured-listings";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PartnerForm } from "@/components/partner-form";
import { PlatformsMarquee } from "@/components/platforms-marquee";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-rp-ivory font-sans text-rp-black">
      <Navbar />
      <div className="relative overflow-hidden bg-rp-black">
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
  );
}
