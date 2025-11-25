"use client"

export function BackgroundPattern() {
  const patternUrl = "/images/hero-bg-pattern.png"
  const blockWidth = "8320px"

  const rowStyle = {
    maskImage: `url(${patternUrl})`,
    maskRepeat: "repeat-x",
    maskSize: "auto 100%",
    maskPosition: "center",
    WebkitMaskImage: `url(${patternUrl})`,
    WebkitMaskRepeat: "repeat-x",
    WebkitMaskSize: "auto 100%",
    WebkitMaskPosition: "center",
    width: blockWidth,
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.07] -rotate-[25deg] scale-150 gap-32 md:gap-48">
        {/* Row 1 */}
        <div className="flex w-fit animate-marquee will-change-transform">
          {[...Array(2)].map((_, i) => (
            <div key={`row1-${i}`} className="h-28 md:h-52 shrink-0 bg-rp-mint" style={rowStyle} />
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex w-fit animate-marquee-reverse will-change-transform">
          {[...Array(2)].map((_, i) => (
            <div key={`row2-${i}`} className="h-28 md:h-52 shrink-0 bg-rp-mint" style={rowStyle} />
          ))}
        </div>
        {/* Row 3 - Added to extend pattern */}
        <div className="flex w-fit animate-marquee will-change-transform">
          {[...Array(2)].map((_, i) => (
            <div key={`row3-${i}`} className="h-28 md:h-52 shrink-0 bg-rp-mint" style={rowStyle} />
          ))}
        </div>
      </div>
    </div>
  )
}
