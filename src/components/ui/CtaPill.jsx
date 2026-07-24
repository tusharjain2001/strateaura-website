import { Sparkle } from "./Icons";

/**
 * Responsive counterpart of PillButton for the fluid (non-canvas) pages.
 * Matches the Figma pill at desktop sizes and scales down on smaller screens,
 * so legacy fixed-canvas pages can keep using PillButton untouched.
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
  goldFilled: {
    pill: "bg-gold text-white ring-1 ring-inset ring-gold/0 hover:bg-transparent hover:text-gold hover:ring-gold",
    circle: "bg-white text-gold group-hover:bg-gold group-hover:text-white",
  },
  goldOutline: {
    pill: "border border-gold text-gold hover:bg-gold hover:text-cream",
    circle: "bg-gold text-cream group-hover:bg-cream group-hover:text-gold",
  },
  whiteOutline: {
    pill: "border border-white text-white hover:bg-white hover:text-gold",
    circle: "bg-white text-gold group-hover:bg-gold group-hover:text-white",
  },
  creamOutline: {
    pill: "border border-cream text-white hover:bg-cream hover:text-gold",
    circle: "bg-cream text-gold group-hover:bg-gold group-hover:text-cream",
  },
  navyOutline: {
    pill: "border border-navy-2 text-navy-2 hover:bg-navy-2 hover:text-white",
    circle: "bg-navy-2 text-white group-hover:bg-white group-hover:text-navy-2",
  },
  navyFilled: {
    pill: "bg-navy-2 text-white ring-1 ring-inset ring-navy-2/0 hover:bg-transparent hover:text-navy-2 hover:ring-navy-2",
    circle: "bg-white text-navy-2 group-hover:bg-navy-2 group-hover:text-white",
  },
};

const SIZES = {
  lg: {
    pill: "h-[54px] gap-4 pr-2 pl-6 text-[17px] sm:text-[20px] lg:h-[65px] lg:gap-5 lg:pl-8 lg:text-[24px]",
    circle: "size-[42px] lg:size-[50px]",
    glyph: "size-[18px] lg:size-[31px]",
  },
  // Matches the Home canvas pills (PillButton `xs`, 43 tall) so the desktop
  // footer CTA reads the same size as the buttons on the Home board.
  xs: {
    pill: "h-[43px] gap-[18px] pr-[8px] pl-[18px] text-[20px]",
    circle: "size-[27px]",
    glyph: "size-[19.3px]",
  },
  // The compact pill on the redesigned Programs page (Figma 1755:2156): ~44px
  // tall, 16px label, 33px icon circle. Used by every CTA on that page.
  compact: {
    pill: "h-[44px] gap-[13px] pr-[5px] pl-[21px] text-[16px]",
    circle: "size-[33px]",
    glyph: "size-[18px]",
  },
  // Same mobile/tablet appearance as `lg` (so the responsive Insights page
  // keeps its untouched mobile CTAs) but shrinks to the compact 44px pill at
  // lg+, where the redesigned Insights desktop (Figma 1755:1061) needs it.
  compactLg: {
    pill: "h-[54px] gap-4 pr-2 pl-6 text-[17px] sm:text-[20px] lg:h-[44px] lg:gap-[13px] lg:pr-[5px] lg:pl-[21px] lg:text-[16px]",
    circle: "size-[42px] lg:size-[33px]",
    glyph: "size-[18px]",
  },
  // Like compactLg on mobile, but the small ~34px pill at lg+ — the Insights
  // "Watch & Listen" button (Figma 1755:1251).
  sm34Lg: {
    pill: "h-[54px] gap-4 pr-2 pl-6 text-[17px] sm:text-[20px] lg:h-[34px] lg:gap-[9px] lg:pr-[4px] lg:pl-[14px] lg:text-[13px]",
    circle: "size-[42px] lg:size-[26px]",
    glyph: "size-[18px] lg:size-[15px]",
  },
  md: {
    pill: "h-[46px] gap-3 pr-[6px] pl-6 text-[17px] sm:text-[20px] lg:h-[50px] lg:gap-[19px] lg:pl-[29px] lg:text-[24px]",
    circle: "size-[32px] lg:size-[31px]",
    glyph: "size-[14px] lg:size-[22px]",
  },
  // Webinar-page mobile pills follow the phone Figma (1296:5703 / 1296:5763)
  // exactly, then return to the lg/md scales from sm up so tablet and desktop
  // render precisely as before.
  lgCompact: {
    pill: "h-[35px] gap-3 pr-[5px] pl-[15px] text-[16px] sm:h-[54px] sm:gap-4 sm:pr-2 sm:pl-6 sm:text-[20px] lg:h-[65px] lg:gap-5 lg:pl-8 lg:text-[24px]",
    circle: "size-[26px] sm:size-[42px] lg:size-[50px]",
    glyph: "size-[12px] sm:size-[18px] lg:size-[31px]",
  },
  mdCompact: {
    pill: "h-[29px] gap-[11px] pr-1 pl-[17px] text-[16px] sm:h-[46px] sm:gap-3 sm:pr-[6px] sm:pl-6 sm:text-[20px] lg:h-[50px] lg:gap-[19px] lg:pl-[29px] lg:text-[24px]",
    circle: "size-[21px] sm:size-[32px] lg:size-[31px]",
    glyph: "size-[10px] sm:size-[14px] lg:size-[22px]",
  },
  // Frameworks-page pills (Figma 1755:2975 / 1755:3055 / 1755:3100): three
  // small pills, all 16px text, 36/39/44px tall.
  sm36: {
    pill: "h-[36px] gap-[9px] pr-[5px] pl-[14px] text-[16px]",
    circle: "size-[26px]",
    glyph: "size-[18px]",
  },
  sm39: {
    pill: "h-[39px] gap-[11px] pr-[6px] pl-[15px] text-[16px]",
    circle: "size-[27px]",
    glyph: "size-[19.3px]",
  },
  sm44: {
    pill: "h-[44px] gap-[6px] pr-[5px] pl-[16px] text-[16px]",
    circle: "size-[34px]",
    glyph: "size-[24px]",
  },
};

export default function CtaPill({
  children,
  variant = "goldOutline",
  size = "lg",
  className = "",
  as = "button",
  icon: Icon = Sparkle,
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.goldOutline;
  const s = SIZES[size] ?? SIZES.lg;
  const Tag = as;

  return (
    <Tag
      className={`group inline-flex items-center justify-between rounded-full font-bold whitespace-nowrap transition-[color,background-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${s.pill} ${v.pill} ${className}`}
      {...props}
    >
      <span className="leading-none">{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-[color,background-color,transform] duration-300 motion-safe:group-hover:scale-105 ${s.circle} ${v.circle}`}
      >
        <Icon className={s.glyph} />
      </span>
    </Tag>
  );
}
