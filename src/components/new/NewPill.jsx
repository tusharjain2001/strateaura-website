import { Sparkle, ArrowUpRight } from "../ui/Icons";

// Every CTA in the 1920 frame is a 65px capsule with a 50px glyph circle and a
// 35.65px icon; only the width and the two horizontal paddings change per pill,
// so those come from the caller as Figma measured them.
//
// The Figma width is applied as a MINIMUM, not a fixed width: Inter (the free
// stand-in for the licensed Acumin Pro) sets these labels wider than the design
// allows for, and a hard width would push the glyph circle out through the
// capsule's right edge. Pills whose label fits keep their exact Figma width.
const VARIANTS = {
  creamFilled: {
    pill: "border border-gold bg-cream text-gold",
    circle: "bg-gold text-white",
  },
  creamOutline: {
    pill: "border border-cream text-white",
    circle: "bg-white text-gold",
  },
  goldOutline: {
    pill: "border border-gold text-gold",
    circle: "bg-gold text-white",
  },
  navyOutline: {
    pill: "border border-navy-2 text-navy-2",
    circle: "bg-navy-2 text-white",
  },
};

export default function NewPill({
  children,
  variant = "goldOutline",
  icon = "sparkle",
  minWidth,
  pl,
  pr,
  className = "",
  href = "#",
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const Glyph = icon === "arrowUp" ? ArrowUpRight : Sparkle;

  return (
    <a
      href={href}
      style={{ minWidth, paddingLeft: pl, paddingRight: pr }}
      className={`group inline-flex h-[65px] items-center justify-between gap-[20px] rounded-full transition-colors ${v.pill} ${className}`}
    >
      <span className="text-[24px] leading-none font-bold whitespace-nowrap">
        {children}
      </span>
      <span
        className={`flex size-[50px] shrink-0 items-center justify-center rounded-full transition-transform motion-safe:group-hover:scale-105 ${v.circle}`}
      >
        <Glyph className="size-[35.65px]" />
      </span>
    </a>
  );
}
