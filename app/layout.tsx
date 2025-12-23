import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
// Replace Geist fonts with Inter for Return Policy brand
import { Inter } from "next/font/google";
import type React from "react";
import { PageTransition } from "@/components/page-transition";
import SmoothScroll from "@/components/smooth-scroll";
import { siteConfig } from "@/lib/config";
import "./globals.css";

// Configure Inter font with brand specifications
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
