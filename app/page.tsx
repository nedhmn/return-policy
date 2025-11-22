import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="bg-white font-sans text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}
