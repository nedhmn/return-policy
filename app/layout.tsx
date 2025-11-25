import type React from "react"
import type { Metadata } from "next"
// Replace Geist fonts with Inter for Return Policy brand
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

// Configure Inter font with brand specifications
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  // Update metadata for Return Policy
  title: "Return Policy | Short-Term Stays",
  description:
    "Every departure, just another beginning. Short-term stays designed to feel less like rentals and more like residences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
