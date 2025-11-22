import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      {/* Logo - Adjusted size and text color for contrast against white background */}
      <div className="flex items-center gap-2 text-[#1A1A1A]">
        <Link href="/" className="flex items-center gap-2 group">
          <BrandLogo className="h-4 w-auto md:h-5 transition-opacity group-hover:opacity-80" />
          <span className="sr-only">Return Policy</span>
        </Link>
      </div>

      {/* Navigation Links - Updated for contrast on Blue Background */}
      {/* The right side of the hero is blue, so these links need to be white/light to pop. */}
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/90 mix-blend-plus-lighter">
        <Link
          href="#"
          className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
        >
          Stays
        </Link>
        <Link
          href="#"
          className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
        >
          Shop
        </Link>
        <Link
          href="#"
          className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
        >
          Blog
        </Link>
        <Link
          href="#about"
          className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
        >
          About
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-[#1A1A1A]">
        <span className="sr-only">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </nav>
  )
}
