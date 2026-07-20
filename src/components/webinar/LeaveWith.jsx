import cardAura1 from "../../assets/webinar/card-aura-1.png";
import cardAura2 from "../../assets/webinar/card-aura-1.png";
import cardAura3 from "../../assets/webinar/card-aura-1.png";
import seamSparkle from "../../assets/webinar/seam-sparkle.png";

const CARDS = [
  {
    lead: "A biological explanation",
    rest: " for what you have been experiencing, and why it is not a character flaw",
    aura: cardAura1,
  },
  {
    lead: "A name for the gap",
    rest: " between who you are at your strongest and how you have been showing up under pressure",
    aura: cardAura2,
  },
  {
    lead: "A clear, honest map",
    rest: " of what comes next, and where VEIL fits in your journey",
    aura: cardAura3,
  },
];

export default function LeaveWith() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[115px]">
        <h2 className="text-center text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          What you will Leave with...
        </h2>
        <p className="mt-4 text-center text-[clamp(1.25rem,2.2vw,2rem)] leading-normal text-navy lg:mt-8">
          In 90 minutes, you will leave with:
        </p>

        {/* Figma (node 1222:499): three equal cards, 21.3px apart, 25.6px
            padding, 24px copy, and one 29.84px sparkle centred on EACH card's
            top-right corner (x = 385.79 / 792.89 / 1200, i.e. every card's
            right edge). The sparkles were previously pinned to the grid at
            left-1/3 and left-2/3, which lands them in the gutters rather than
            on the card corners because those fractions ignore the gap. */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-[57px] lg:gap-[21px]">
          {CARDS.map((card) => (
            <div key={card.lead} className="relative">
              {/* overflow-hidden clips the aura to the rounded corners, so the
                  sparkle has to be its sibling to hang outside the card. */}
              <div className="relative h-full min-h-[190px] overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-6 lg:min-h-[167px] lg:p-[26px]">
                <p className="relative z-10 text-[clamp(1.125rem,1.667vw,1.5rem)] leading-normal text-white">
                  <strong className="font-bold">{card.lead}</strong>
                  {card.rest}
                </p>
                {/* The asset is exported pre-cropped to the 63px of the arcs
                    that clear the card's bottom edge, so it sits flush. */}
                <img
                  src={card.aura}
                  alt=""
                  className="pointer-events-none absolute right-0 bottom-0 w-[63.8%]"
                />
              </div>
              <img
                src={seamSparkle}
                alt=""
                className="pointer-events-none absolute -top-[15px] -right-[15px] hidden size-[30px] md:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
