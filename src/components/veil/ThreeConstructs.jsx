import cardAura1 from "../../assets/webinar/card-aura-1.svg";
import cardAura2 from "../../assets/webinar/card-aura-2.svg";
import cardAura3 from "../../assets/webinar/card-aura-3.svg";
import cardSparkle from "../../assets/veil/construct-sparkle-gold.svg";

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
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[115px]">
        <h2 className="text-center text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          The Three Constructs of VEIL™
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
          {CONSTRUCTS.map((card) => (
            <div
              key={card.title}
              className="relative min-h-[190px] rounded-[4px] bg-gradient-to-b from-gold to-gold-dark p-6 lg:min-h-[198px]"
            >
              {/* Clips the aura to the rounded card without clipping the
                  corner sparkle, which must straddle the corner. */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]">
                <img
                  src={card.aura}
                  alt=""
                  className="absolute right-0 bottom-1 w-[62%]"
                />
              </div>
              {/* Corner sparkle is a desktop-only flourish; the Figma mobile
                  cards (node 1434:3991) have no sparkle. */}
              <img
                src={cardSparkle}
                alt=""
                className="pointer-events-none absolute -top-[15px] -right-[15px] z-10 hidden size-[30px] lg:block"
              />
              <p className="relative z-10 text-[clamp(1.25rem,1.8vw,1.75rem)] font-bold text-white">
                {card.title}
              </p>
              <p className="relative z-10 mt-4 max-w-[85%] text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-white">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
