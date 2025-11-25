"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="absolute top-0 right-0 left-0 z-50 w-full py-6 md:py-8">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2 text-rp-ivory">
          <Link className="group flex items-center gap-2" href="/">
            <BrandLogo className="h-[25px] w-auto transition-opacity group-hover:opacity-80" />
            <span className="sr-only">Return Policy</span>
          </Link>
        </div>

        {isHomePage && (
          <>
            <div className="hidden items-center gap-10 font-medium text-base text-rp-ivory tracking-wide md:flex">
              <Link
                className="relative transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:text-rp-mint hover:after:w-full"
                href="#about"
              >
                About
              </Link>
              <Link
                className="relative transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-rp-mint after:transition-all hover:text-rp-mint hover:after:w-full"
                href="#partner"
              >
                Partner
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="p-0 text-rp-ivory hover:bg-transparent hover:text-rp-mint md:hidden"
                  size="icon"
                  variant="ghost"
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="flex w-full max-w-full flex-col items-center justify-center border-none bg-black text-rp-ivory sm:max-w-full"
                side="right"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-10 text-center font-bold text-5xl uppercase tracking-widest">
                  <SheetClose asChild>
                    <Link
                      className="transition-colors hover:text-rp-mint"
                      href="#about"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      className="transition-colors hover:text-rp-mint"
                      href="#partner"
                    >
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
  );
}
