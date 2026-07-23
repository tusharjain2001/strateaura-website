import { Sparkle, ArrowRight, ArrowUpRight } from "./Icons";

/**
 * Rounded "pill" button with a 50px circular icon on the right — the recurring
 * CTA used across the StrateAura landing page.
 *
 * variant controls the pill/circle colours; icon controls the glyph.
 */
/**
 * Hover mirrors the live strateaura.com buttons: over 300ms each pill swaps
 * into its opposite — outlines fill with their accent, fills hollow out into
 * an outline — and the icon circle inverts with it. Filled variants draw the
 * hover "border" with an inset ring so no layout shifts.
 */
const VARIANTS = {
  creamFilled: {
    pill: "bg-cream text-gold ring-1 ring-inset ring-cream/0 hover:bg-transparent hover:text-white hover:ring-cream",
    circle: "bg-gold text-cream group-hover:bg-cream group-hover:text-gold",
  },
  creamOutline: {
    pill: "border border-cream text-white hover:bg-cream hover:text-gold",
    circle: "bg-cream text-gold group-hover:bg-gold group-hover:text-cream",
  },
  goldOutline: {
    pill: "border border-gold text-gold hover:bg-gold hover:text-cream",
    circle: "bg-gold text-cream group-hover:bg-cream group-hover:text-gold",
  },
  goldOutlineWhite: {
    pill: "bg-white border border-gold text-gold hover:bg-gold hover:text-white",
    circle: "bg-gold text-cream group-hover:bg-white group-hover:text-gold",
  },
  navyOutline: {
    pill: "border border-navy-2 text-navy-2 hover:bg-navy-2 hover:text-white",
    circle: "bg-navy-2 text-white group-hover:bg-white group-hover:text-navy-2",
  },
};

const ICONS = {
  sparkle: Sparkle,
  arrow: ArrowRight,
  arrowUp: ArrowUpRight,
};

// The "Alt/ Home" board (1728:209) draws every pill at ~80% of the original
// canvas size, so the sizes below carry those measurements rather than each
// section overriding the padding, text and circle by hand. Every pill on that
// board is `xs` (43 tall); sm and lg are the other pages' sizes.
const SIZES = {
  lg: {
    pill: "h-[65px] gap-5 pl-8 pr-2",
    label: "text-[24px]",
    circle: "size-[50px]",
    glyph: "size-[31px]",
  },
  sm: {
    pill: "h-[53px] gap-4 pl-[26px] pr-[6px]",
    label: "text-[19px]",
    circle: "size-[40px]",
    glyph: "size-[25px]",
  },
  // The label sits equidistant from the left edge and the icon (18 either
  // side), so it reads as centred in the pill. The board varies this inset per
  // button (14/17/22) which made the label look shoved against the icon.
  xs: {
    pill: "h-[43px] gap-[18px] pl-[18px] pr-[8px]",
    label: "text-[20px]",
    circle: "size-[27px]",
    glyph: "size-[19.3px]",
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
      className={`group inline-flex items-center justify-between rounded-full font-bold whitespace-nowrap transition-[color,background-color,box-shadow] duration-300 ${s.pill} ${v.pill} ${className}`}
      {...props}
    >
      <span className={`${s.label} leading-none`}>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-[color,background-color,transform] duration-300 group-hover:scale-105 ${s.circle} ${v.circle}`}
      >
        <Glyph className={s.glyph} />
      </span>
    </Tag>
  );
}
