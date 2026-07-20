import { Sparkle, ArrowUpRight } from "../ui/Icons";

/**
 * Pill button at the mobile Home page's sizes (Figma node 1434:405).
 *
 * Separate from CtaPill/PillButton on purpose: those carry the desktop sizing
 * ramps, while every pill in the mobile frame is a fixed ~42px tall capsule
 * with a 26-34px glyph circle. Kept here so the mobile page can never shift
 * the desktop pills.
 */
const VARIANTS = {
  // Hero primary: cream fill, gold border, gold label, gold circle.
  creamFilled: {
    pill: "border border-gold bg-cream text-gold",
    circle: "bg-gold text-white",
  },
  // Hero secondary: cream outline on the navy hero, white label.
  creamOutline: {
    pill: "border border-cream text-white",
    circle: "bg-white text-gold",
  },
  goldOutline: {
    pill: "border-[1.3px] border-gold text-gold",
    circle: "bg-gold text-white",
  },
  navyOutline: {
    pill: "border-[0.66px] border-navy-2 text-navy-2",
    circle: "bg-navy-2 text-white",
  },
  goldFilled: {
    pill: "bg-gold text-white",
    circle: "bg-white text-gold",
  },
  whiteFilled: {
    pill: "bg-white text-gold",
    circle: "bg-gold text-white",
  },
};

// Two sizes appear in the frame: the 16px label pills used inside sections and
// the 20px "View All Programs"-style pills that head a section.
const SIZES = {
  sm: { pill: "pl-[16px] text-[16px]", circle: "size-[32px]", glyph: "size-[17px]" },
  md: { pill: "pl-[21px] text-[20px]", circle: "size-[34px]", glyph: "size-[18px]" },
};

export default function MobilePill({
  children,
  variant = "goldOutline",
  size = "sm",
  icon = "sparkle",
  className = "",
  as = "button",
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const s = SIZES[size] ?? SIZES.sm;
  const Tag = as;
  const Glyph = icon === "arrowUp" ? ArrowUpRight : Sparkle;

  return (
    <Tag
      className={`group inline-flex items-center justify-between gap-3 rounded-full py-[5px] pr-[5px] leading-none font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${s.pill} ${v.pill} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform motion-safe:group-hover:scale-105 ${s.circle} ${v.circle}`}
      >
        <Glyph className={s.glyph} />
      </span>
    </Tag>
  );
}
