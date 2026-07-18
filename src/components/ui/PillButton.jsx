import { Sparkle, ArrowRight, ArrowUpRight } from "./Icons";

/**
 * Rounded "pill" button with a 50px circular icon on the right — the recurring
 * CTA used across the StrateAura landing page.
 *
 * variant controls the pill/circle colours; icon controls the glyph.
 */
const VARIANTS = {
  creamFilled: {
    pill: "bg-cream text-gold",
    circle: "bg-gold text-cream",
  },
  creamOutline: {
    pill: "border border-cream text-white",
    circle: "bg-cream text-gold",
  },
  goldOutline: {
    pill: "border border-gold text-gold",
    circle: "bg-gold text-cream",
  },
  goldOutlineWhite: {
    pill: "bg-white border border-gold text-gold",
    circle: "bg-gold text-cream",
  },
  navyOutline: {
    pill: "border border-navy-2 text-navy-2",
    circle: "bg-navy-2 text-white",
  },
};

const ICONS = {
  sparkle: Sparkle,
  arrow: ArrowRight,
  arrowUp: ArrowUpRight,
};

export default function PillButton({
  children,
  variant = "goldOutline",
  icon = "sparkle",
  className = "",
  as = "button",
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const Glyph = ICONS[icon] ?? Sparkle;
  const Tag = as;

  return (
    <Tag
      className={`group inline-flex h-[65px] items-center justify-between gap-5 rounded-full pl-8 pr-2 font-bold whitespace-nowrap transition-colors ${v.pill} ${className}`}
      {...props}
    >
      <span className="text-[24px] leading-none">{children}</span>
      <span
        className={`flex size-[50px] shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${v.circle}`}
      >
        <Glyph className="size-[22px]" />
      </span>
    </Tag>
  );
}
