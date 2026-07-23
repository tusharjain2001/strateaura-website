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
// canvas size, so the sizes below carry those measurements rather than each
// section overriding the padding, text and circle by hand. Keys are ordered by
// pill height: xs 43 (hero + "View All Programs"), md 48 ("Browse Insights"),
// sm 53 (the card pills), xl 58 ("Our Solutions"), lg 65 (the other pages).
const SIZES = {
  lg: {
    pill: "h-[65px] gap-5 pl-8 pr-2",
    label: "text-[24px]",
    circle: "size-[50px]",
    glyph: "size-[31px]",
  },
  xl: {
    pill: "h-[58.35px] gap-[12px] pl-[18.85px] pr-[8.65px]",
    label: "text-[21.5px]",
    circle: "size-[44.88px]",
    glyph: "size-[32px]",
  },
  sm: {
    pill: "h-[53px] gap-4 pl-[26px] pr-[6px]",
    label: "text-[19px]",
    circle: "size-[40px]",
    glyph: "size-[25px]",
  },
  md: {
    pill: "h-[48px] gap-[10px] pl-[18.56px] pr-[5.6px]",
    label: "text-[20px]",
    circle: "size-[36.88px]",
    glyph: "size-[26.3px]",
  },
  xs: {
    pill: "h-[43px] gap-[10px] pl-[14px] pr-[8px]",
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
  // A few pills on the "Alt/ Home" board share a size but not its left inset.
  // Passed as an inline style so it beats the size class regardless of the
  // order Tailwind happens to emit the two padding utilities in.
  padLeft,
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const s = SIZES[size] ?? SIZES.lg;
  const Glyph = ICONS[icon] ?? Sparkle;
  const Tag = as;

  return (
    <Tag
      className={`group inline-flex items-center justify-between rounded-full font-bold whitespace-nowrap transition-colors ${s.pill} ${v.pill} ${className}`}
      style={padLeft == null ? undefined : { paddingLeft: padLeft }}
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
