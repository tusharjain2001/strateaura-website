import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import bulletCheck from "../../assets/programs/pathway-bullet-check.svg";

// Figma nodes 1433:174 / 1433:9 / 1433:6 / 1433:8 — the section washes alternate
// gold and navy down the page. Each is a vertical gradient into #fffdf7, and the
// gold ones sit at 30% while the navy ones sit at 20%. "none" is Higher
// Education, which Figma leaves on plain white.
const BANDS = {
  gold: "bg-gradient-to-b from-[#c99400] to-[#fffdf7] opacity-30",
  goldUp: "bg-gradient-to-b from-[#fffdf7] to-[#c99400] opacity-30",
  navy: "bg-gradient-to-b from-[#233a58] to-[#fffdf7] opacity-20",
  none: null,
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
  band = "none",
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
  const wash = BANDS[band];

  return (
    <section id={id} className="relative overflow-hidden pt-[60px] pb-[60px]">
      {wash && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${wash}`}
        />
      )}

      <MobileContainer className="relative">
        {/* Headings alternate gold / navy down the page (1433:179, :203, :227,
            :366, :251). Everything below them is plain black at 60% — not the
            navy this block first used. */}
        <h2
          className={`text-[24px] leading-normal font-bold ${
            tone === "navy" ? "text-navy-2" : "text-gold"
          }`}
        >
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

        <div className="mt-[32px] [--pill-col:calc(min(100vw,430px)-32px)]">
          <MobilePill as="a" href={ctaHref} variant="goldOutline" size="veil">
            {ctaLabel}
          </MobilePill>
        </div>

        <img
          src={photo}
          alt={photoAlt}
          className="mt-[36px] block aspect-[371/415] w-full rounded-[4px] object-cover"
        />

        {/* 1433:192 — gold checklist card. Figma pins each check at a fixed
            y, but the list is a flow layout here so the copy can wrap. */}
        <div className="mt-[32px] rounded-[4px] bg-gradient-to-b from-gold to-gold-dark px-[27px] pt-[20px] pb-[24px]">
          <p className="text-[20px] leading-normal font-bold text-white">
            In this program, you will:
          </p>
          <ul className="mt-[12px] flex flex-col gap-[12px]">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[10px]">
                <img
                  src={bulletCheck}
                  alt=""
                  aria-hidden
                  className="mt-[3px] size-[20px] shrink-0"
                />
                <span className="text-[16px] leading-normal font-light text-white">
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
