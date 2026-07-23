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

// The "Alt/ Home" board (1728:209) draws every pill at ~80% of the original
// canvas size, so `sm` carries those measurements rather than each section
// overriding the padding, text and circle by hand.
const SIZES = {
  lg: {
    pill: "h-[65px] gap-5 pl-8 pr-2",
    label: "text-[24px]",
    circle: "size-[50px]",
    glyph: "size-[22px]",
  },
  sm: {
    pill: "h-[53px] gap-4 pl-[26px] pr-[6px]",
    label: "text-[19px]",
    circle: "size-[40px]",
    glyph: "size-[18px]",
  },
};

export default function PillButton({
  children,
  variant = "goldOutline",
  icon = "sparkle",
  size = "lg",
  className = "",
  as = "button",
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const s = SIZES[size] ?? SIZES.lg;
  const Glyph = ICONS[icon] ?? Sparkle;
  const Tag = as;

  return (
    <Tag
      className={`group inline-flex items-center justify-between rounded-full font-bold whitespace-nowrap transition-colors ${s.pill} ${v.pill} ${className}`}
      {...props}
    >
      <span className={`${s.label} leading-none`}>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${s.circle} ${v.circle}`}
      >
        <Glyph className={s.glyph} />
      </span>
    </Tag>
  );
}
