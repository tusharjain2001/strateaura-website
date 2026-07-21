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

// Three sizes appear in the frame: the 16px label pills used inside sections,
// the 20px "View All Programs"-style pills that head a section, and the hero's
// slightly tighter pair (Figma nodes 1434:478/1434:484 sit at a 0.804 scale).
const SIZES = {
  sm: {
    pill: "gap-3 py-[5px] pr-[5px] pl-[16px] text-[16px]",
    circle: "size-[32px]",
    glyph: "size-[17px]",
  },
  md: {
    pill: "gap-3 py-[5px] pr-[5px] pl-[21px] text-[20px]",
    circle: "size-[34px]",
    glyph: "size-[18px]",
  },
  hero: {
    pill: "gap-[9.65px] py-[6.44px] pr-[6.44px] pl-[12.87px] text-[16px]",
    circle: "size-[25.8px]",
    glyph: "size-[18.4px]",
  },
  // VEIL card pills (Figma nodes 1434:513 / 1434:519). "Learn More about MAP &
  // DECODE" is 259px at 16px Acumin and ~272px in Inter, which overflows the
  // capsule and pushes the glyph circle out past the border.
  //
  // The label scales off --veil-col (the card's inner width, set by MobileVeil)
  // but the chrome around it does not, so the 74.3px of padding + gap + circle +
  // border is subtracted before scaling — a plain multiplier holds at 402px and
  // then diverges as the screen narrows. 0.0588 is 16/272, the px-per-unit of
  // label width in Inter.
  veil: {
    pill: "gap-[13.15px] py-[5px] pr-[5.25px] pl-[21px] text-[min(16px,calc((var(--veil-col)-74.3px)*0.0588))]",
    circle: "size-[32.87px]",
    glyph: "size-[17px]",
  },
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
      className={`group inline-flex items-center justify-between rounded-full leading-none font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${s.pill} ${v.pill} ${className}`}
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
