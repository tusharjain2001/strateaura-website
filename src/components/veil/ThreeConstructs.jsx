import cardAura1 from "../../assets/webinar/card-aura-1.svg";
import cardAura2 from "../../assets/webinar/card-aura-2.svg";
import cardAura3 from "../../assets/webinar/card-aura-3.svg";
import cardSparkle from "../../assets/veil/construct-sparkle-gold.svg";

// Figma 1755:1467 (1439x292): centred 30px title, then three 306x154 cards in
// a 952px row at x:248 — 20px bold titles, 16px body, 17px gaps, 24px corner
// stars. Body copy wraps naturally (the 265px measure matches the design).
const CONSTRUCTS = [
  {
    title: "Capacity Regulation",
    body: "The biological and physiological foundation. Sleep, energy, recovery, and the body's signals - before they become crises.",
    aura: cardAura1,
  },
  {
    title: "Identity Coherence",
    body: "The internal sense of self that remains stable under institutional pressure. She brings power to the title - not derives it from one.",
    aura: cardAura2,
  },
  {
    title: "Authority Execution",
    body: "Decisions made cleanly. Boundaries held without apology. Presence that is grounded, not performed.",
    aura: cardAura3,
  },
];

export default function ThreeConstructs() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-0 lg:pt-[41px] lg:pb-[41px]">
        <h2 className="text-center text-[30px] leading-[1.2] font-bold text-navy">
          The Three Constructs of VEIL™
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-[20px] lg:ml-[17.22%] lg:w-[66.11%] lg:gap-[17px]">
          {CONSTRUCTS.map((card) => (
            <div
              key={card.title}
              className="group relative min-h-[190px] transition-transform duration-[400ms] hover:scale-90 lg:min-h-[154px]"
            >
              {/* Corner sparkle straddles the top-right corner, outside the
                  clipped panel; desktop-only flourish like the Figma file. */}
              <img
                src={cardSparkle}
                alt=""
                className="pointer-events-none absolute -top-[12px] -right-[12px] z-10 hidden size-[24px] lg:block"
              />
              {/* Hover splits across two elements like the Home cards: the
                  wrapper composites the scale while this panel transitions
                  only its glow shadow. */}
              <div className="relative h-full w-full overflow-hidden rounded-[3.4px] bg-gradient-to-b from-gold to-gold-dark p-6 transition-shadow duration-[400ms] group-hover:shadow-[0_0_10px_var(--color-gold)] lg:p-[20px]">
                <img
                  src={card.aura}
                  alt=""
                  className="pointer-events-none absolute right-0 bottom-1 w-[62%]"
                />
                <p className="relative z-10 text-[20px] leading-[1.2] font-bold text-white">
                  {card.title}
                </p>
                <p className="relative z-10 mt-4 text-[16px] leading-normal text-white lg:mt-[13px] lg:leading-[1.17]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
