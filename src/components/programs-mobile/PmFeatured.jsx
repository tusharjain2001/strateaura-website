import MobileContainer from "../home-mobile/MobileContainer";
import badge from "../../assets/about-mobile/phil-badge.svg";
import cardDecor1 from "../../assets/home-mobile/veil-card-1.svg";
import cardDecor2 from "../../assets/home-mobile/veil-card-2.svg";
import cardDecor3 from "../../assets/home-mobile/veil-card-3.svg";

// Figma nodes 1295:4048 / 1295:4058 / 1295:4068 — navy→blue gradient cards,
// each carrying the same ellipse-swirl decor as the Home page's VEIL block.
const CONSTRUCTS = [
  {
    title: "Capacity Regulation",
    body: "the biological and physiological foundation of sustained performance",
    decor: cardDecor1,
  },
  {
    title: "Identity Coherence",
    body: "the internal sense of self that remains stable under institutional pressure",
    decor: cardDecor2,
  },
  {
    title: "Authority Execution",
    body: "the practiced capacity to act from clarity, hold boundaries without apology, and lead from a grounded place",
    decor: cardDecor3,
  },
];

/**
 * Featured VEIL block — Figma node 1295:4037.
 *
 * FEATURED badge, the flagship headline, the "Core Concept" essay, then the
 * three construct cards. The badge reuses the About hero's notched shape at the
 * smaller 136x25 size Figma draws here.
 */
export default function PmFeatured() {
  return (
    <section className="relative pt-[26px] pb-[60px]">
      <MobileContainer>
        {/* 1295:4039 — 136x25 badge */}
        <div className="relative flex h-[25px] w-[136px] items-center justify-center">
          <img
            src={badge}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full -scale-y-100"
          />
          <span className="relative text-[13px] leading-none font-bold tracking-[0.04em] text-white">
            FEATURED
          </span>
        </div>

        <h2 className="mt-[23px] text-[28px] leading-normal font-bold text-navy-2">
          VEIL™ - Strategic Health Framework for Women Leaders - The Flagship
          Program of Strateaura™
        </h2>

        {/* 1295:4045 — navy Medium, not gold; 1295:4046 is plain black at 60%
            with a 1.5 line-height, not the navy Light used elsewhere. */}
        <p className="mt-[35px] text-[16px] leading-normal font-medium text-navy">
          Core Concept
        </p>

        <div className="mt-[6px] space-y-[1.5em] text-[16px] leading-[1.5] text-black/60">
          <p>
            VEIL™️ is designed for women in leadership and high-demand
            professional roles who are performing well externally - and already
            paying a silent cost for how they are leading. They are capable,
            trusted, and accomplished — often the strongest person in the room —
            but quietly navigating changes they cannot fully explain. VEIL is
            not a wellness programme. It is not resilience training. It is a
            strategic health framework that helps women understand what is
            happening beneath sustained performance, reconnect with themselves,
            and continue leading without losing who they are. VEIL is a
            strategic health framework grounded in validated science and
            designed specifically for women carrying sustained leadership
            responsibility.
          </p>
          <p>
            The woman VEIL serves is not in crisis. She is still succeeding.
            What she needs is not another programme that teaches her how to
            perform. She needs a framework that helps her understand herself,
            preserve her internal architecture, and sustain her leadership
            without paying an invisible personal cost. Through the VEIL
            Framework you will explore the biological and physiological
            foundation of sustained performance, Identify the internal sense of
            self that remains stable under pressure, and learn the practiced
            capacity to act from clarity, hold boundaries without apology, and
            lead from a grounded place.
          </p>
        </div>

        {/* 1295:4047 — three construct cards, 145px tall on a 12px stack. */}
        <div className="mt-[41px] flex flex-col gap-[12px]">
          {CONSTRUCTS.map((card) => (
            <div
              key={card.title}
              className="relative min-h-[145px] overflow-hidden rounded-[4px] bg-gradient-to-b from-navy-2 to-blue px-[24px] pt-[24px] pb-[24px]"
            >
              <img
                src={card.decor}
                alt=""
                aria-hidden
                className="pointer-events-none absolute top-[98px] left-[131.67px] h-[84.879px] w-[231px] max-w-none"
              />
              <p className="relative z-10 text-[20px] leading-normal font-bold text-white">
                {card.title}
              </p>
              <p className="relative z-10 mt-[16px] text-[16px] leading-normal font-light text-white">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
