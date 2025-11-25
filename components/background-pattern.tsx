"use client";

export function BackgroundPattern() {
  const patternUrl = "/images/hero-bg-pattern.png";
  const blockWidth = "8320px";

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
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
      <div className="-rotate-[25deg] absolute inset-0 flex scale-150 flex-col items-center justify-center gap-32 opacity-[0.07] md:gap-48">
        {/* Row 1 */}
        <div className="flex w-fit animate-marquee will-change-transform">
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
        </div>
        {/* Row 2 */}
        <div className="flex w-fit animate-marquee-reverse will-change-transform">
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
        </div>
        {/* Row 3 - Added to extend pattern */}
        <div className="flex w-fit animate-marquee will-change-transform">
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
          <div className="h-28 shrink-0 bg-rp-mint md:h-52" style={rowStyle} />
        </div>
      </div>
    </div>
  );
}
