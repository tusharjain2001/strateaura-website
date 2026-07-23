import { Sparkle } from "./Icons";

/**
 * Responsive counterpart of PillButton for the fluid (non-canvas) pages.
 * Matches the Figma pill at desktop sizes and scales down on smaller screens,
 * so legacy fixed-canvas pages can keep using PillButton untouched.
 */
const VARIANTS = {
  creamFilled: {
    pill: "bg-cream text-gold",
    circle: "bg-gold text-cream",
  },
  goldFilled: {
    pill: "bg-gold text-white",
    circle: "bg-white text-gold",
  },
  goldOutline: {
    pill: "border border-gold text-gold",
    circle: "bg-gold text-cream",
  },
  whiteOutline: {
    pill: "border border-white text-white",
    circle: "bg-white text-gold",
  },
  creamOutline: {
    pill: "border border-cream text-white",
    circle: "bg-cream text-gold",
  },
  navyOutline: {
    pill: "border border-navy-2 text-navy-2",
    circle: "bg-navy-2 text-white",
  },
  navyFilled: {
    pill: "bg-navy-2 text-white",
    circle: "bg-white text-navy-2",
  },
};

const SIZES = {
  lg: {
    pill: "h-[54px] gap-4 pr-2 pl-6 text-[17px] sm:text-[20px] lg:h-[65px] lg:gap-5 lg:pl-8 lg:text-[24px]",
    circle: "size-[42px] lg:size-[50px]",
    glyph: "size-[18px] lg:size-[36px]",
  },
  md: {
    pill: "h-[46px] gap-3 pr-[6px] pl-6 text-[17px] sm:text-[20px] lg:h-[50px] lg:gap-[19px] lg:pl-[29px] lg:text-[24px]",
    circle: "size-[32px] lg:size-[36px]",
    glyph: "size-[14px] lg:size-[26px]",
  },
  // Webinar-page mobile pills follow the phone Figma (1296:5703 / 1296:5763)
  // exactly, then return to the lg/md scales from sm up so tablet and desktop
  // render precisely as before.
  lgCompact: {
    pill: "h-[35px] gap-3 pr-[5px] pl-[15px] text-[16px] sm:h-[54px] sm:gap-4 sm:pr-2 sm:pl-6 sm:text-[20px] lg:h-[65px] lg:gap-5 lg:pl-8 lg:text-[24px]",
    circle: "size-[26px] sm:size-[42px] lg:size-[50px]",
    glyph: "size-[12px] sm:size-[18px] lg:size-[36px]",
  },
  mdCompact: {
    pill: "h-[29px] gap-[11px] pr-1 pl-[17px] text-[16px] sm:h-[46px] sm:gap-3 sm:pr-[6px] sm:pl-6 sm:text-[20px] lg:h-[50px] lg:gap-[19px] lg:pl-[29px] lg:text-[24px]",
    circle: "size-[21px] sm:size-[32px] lg:size-[36px]",
    glyph: "size-[10px] sm:size-[14px] lg:size-[26px]",
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
      className={`group inline-flex items-center justify-between rounded-full font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${s.pill} ${v.pill} ${className}`}
      {...props}
    >
      <span className="leading-none">{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform motion-safe:group-hover:scale-105 ${s.circle} ${v.circle}`}
      >
        <Icon className={s.glyph} />
      </span>
    </Tag>
  );
}
