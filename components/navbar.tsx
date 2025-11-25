"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrandLogo } from "@/components/brand-logo"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full py-6 md:py-8">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 text-rp-ivory">
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo className="h-[25px] w-auto transition-opacity group-hover:opacity-80" />
            <span className="sr-only">Return Policy</span>
          </Link>
        </div>

        {isHomePage && (
          <>
            <div className="hidden md:flex items-center gap-10 text-base font-medium tracking-wide text-rp-ivory">
              <Link
                href="#about"
                className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
              >
                About
              </Link>
              <Link
                href="#partner"
                className="hover:text-rp-mint transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:after:w-full"
              >
                Partner
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-rp-ivory hover:text-rp-mint hover:bg-transparent p-0"
                >
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
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-full sm:max-w-full bg-black border-none text-rp-ivory flex flex-col justify-center items-center"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-10 text-5xl font-bold uppercase tracking-widest text-center">
                  <SheetClose asChild>
                    <Link href="#about" className="hover:text-rp-mint transition-colors">
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#partner" className="hover:text-rp-mint transition-colors">
                      Partner
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>
    </nav>
  )
}
