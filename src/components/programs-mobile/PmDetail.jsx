import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import bulletStar from "../../assets/programs/yellowcardpointer.png";

// Every block carries one tone, and the tone drives all three of its colours:
// the heading, the section wash behind it, and the checklist card at the end.
//
// The washes are Figma nodes 1433:174 / 1433:9 / 1433:6 / 1433:8 / 1433:7. Each
// is rotated a half turn, so the stop order reverses: they read light at the
// top deepening to colour at the bottom, not the other way round. Un-rotated
// their spans also line up one section off, which is what put the navy wash
// behind Integrated Marketing instead of Higher Education. Rotated, all five sit
// 60px above and below their own block.
const TONES = {
  gold: {
    heading: "text-gold",
    wash: "bg-gradient-to-b from-[#fffdf7] to-[#c99400] opacity-30",
    card: "from-gold to-gold-dark",
    pill: "goldOutline",
  },
  navy: {
    heading: "text-navy-2",
    wash: "bg-gradient-to-b from-[#fffdf7] to-[#233a58] opacity-20",
    // 1433:216 — navy to blue, not the gold ramp.
    card: "from-navy to-blue",
    pill: "navyOutline",
  },
};

/**
 * One programme detail block — Figma nodes 1433:175 / 1433:199 / 1433:223 /
 * 1433:362 / 1433:247, which are all the same shape:
 *
 *   heading -> eyebrow + paragraph -> "This program is suited for:" -> CTA
 *   -> photo -> the gold "In this program, you will:" checklist card.
 */
export default function PmDetail({
  id,
  tone = "gold",
  heading,
  eyebrow,
  paragraph,
  suitedFor,
  ctaLabel,
  ctaHref = "/contact",
  photo,
  photoAlt,
  bullets,
}) {
  const t = TONES[tone] ?? TONES.gold;

  return (
    <section id={id} className="relative overflow-hidden pt-[60px] pb-[60px]">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${t.wash}`}
      />

      <MobileContainer className="relative">
        {/* Headings alternate gold / navy down the page (1433:179, :203, :227,
            :366, :251). Everything below them is plain black at 60% — not the
            navy this block first used. */}
        <h2 className={`text-[24px] leading-normal font-bold ${t.heading}`}>
          {heading}
        </h2>

        <div className="mt-[16px] text-[16px] leading-normal text-black/60">
          <p className="font-bold">{eyebrow}</p>
          {/* Figma separates these with a blank line, not a paragraph gap. */}
          <p className="mt-[1em]">{paragraph}</p>
        </div>

        <p className="mt-[16px] text-[16px] leading-normal font-bold text-black/60">
          This program is suited for:
        </p>
        <p className="mt-[8px] text-[16px] leading-normal font-light text-black/60">
          {suitedFor}
        </p>

        {/* The CTA takes the section's tone, like the heading above it. */}
        <div className="mt-[32px] [--pill-col:calc(min(100vw,430px)-32px)]">
          <MobilePill
            as="a"
            href={ctaHref}
            variant={t.pill}
            size="veil"
          >
            {ctaLabel}
          </MobilePill>
        </div>

        {/* Each photo ships pre-masked with the arch cut and transparency, at
            exactly its Figma node's size (371x415, 369x450, ...). Forcing a
            shared aspect ratio and object-cover cropped every one of them to
            Wellness's proportions, so the image is left at its natural size. */}
        <img src={photo} alt={photoAlt} className="mt-[36px] block w-full" />

        {/* 1433:192 — gold checklist card. Figma pins the star at x=27 and the
            copy at x=57 on a 38px pitch, which is exactly two lines of 16px at
            normal leading, so the rows butt up with no gap between them.
            --box-col is the copy's own column (279px in Figma): the text scales
            off it so Inter keeps each item to the two lines the design shows. */}
        <div
          className={`mt-[32px] rounded-[4px] bg-gradient-to-b px-[27px] pt-[20px] pb-[24px] [--box-col:calc(min(100vw,430px)-116px)] ${t.card}`}
        >
          <p className="text-[20px] leading-normal font-bold text-white">
            In this program, you will:
          </p>
          <ul className="mt-[20px] flex flex-col">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[10px]">
                <img
                  src={bulletStar}
                  alt=""
                  aria-hidden
                  className="mt-[1px] size-[20px] shrink-0"
                />
                <span className="text-[min(16px,calc(var(--box-col)*0.054))] leading-normal font-light text-white">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </MobileContainer>
    </section>
  );
}
