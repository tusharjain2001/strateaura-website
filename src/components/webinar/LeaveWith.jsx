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
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[61px] pb-20 sm:px-8 sm:py-14 lg:py-[50px]">
        {/* Phone Figma (1296:5717): 24px heading and 16px intro, both
            LEFT-aligned; centred at the md 3-column switch as on desktop.
            Desktop (1755:1809): 30px heading. */}
        <h2 className="text-[24px] leading-[1.2] font-bold text-navy sm:text-[30px] md:text-center">
          What you will Leave with...
        </h2>
        <p className="mt-2 text-[16px] leading-normal text-navy sm:mt-[15px] sm:text-[16px] md:text-center">
          In 90 minutes, you will leave with:
        </p>

        {/* Figma (node 1222:499): three equal cards, 21.3px apart, 25.6px
            padding, 24px copy, and one 29.84px sparkle centred on EACH card's
            top-right corner (x = 385.79 / 792.89 / 1200, i.e. every card's
            right edge). The sparkles were previously pinned to the grid at
            left-1/3 and left-2/3, which lands them in the gutters rather than
            on the card corners because those fractions ignore the gap. */}
        <div className="mt-[15px] grid grid-cols-1 gap-4 sm:mt-[38px] sm:gap-[16px] md:grid-cols-3 lg:mx-auto lg:max-w-[917px]">
          {CARDS.map((card) => (
            // Hover mirrors the Home cards (MarketingPrograms): the wrapper
            // scales so the card and its corner sparkle squeeze together,
            // while the panel gains the blue glow "border".
            <div
              key={card.lead}
              className="group relative transition-[scale] duration-[400ms] hover:scale-90"
            >
              {/* overflow-hidden clips the aura to the rounded corners, so the
                  sparkle has to be its sibling to hang outside the card.
                  Phone Figma (1296:5722): compact cards that hug their copy —
                  no min-height, no aura arcs. Desktop (1755:1779): 115px cards,
                  19.5px padding, 3px radius. */}
              <div className="relative h-full overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-[26px] transition-[box-shadow] duration-[400ms] group-hover:shadow-[0_0_10px_var(--color-blue)] sm:min-h-[115px] sm:p-[20px] lg:rounded-[3px]">
                <p className="relative z-10 text-[16px] leading-normal text-white sm:text-[16px]">
                  <strong className="font-bold">{card.lead}</strong>
                  {card.rest}
                </p>
                {/* The asset is exported pre-cropped to the 63px of the arcs
                    that clear the card's bottom edge, so it sits flush. */}
                <img
                  src={card.aura}
                  alt=""
                  className="pointer-events-none absolute right-0 bottom-0 hidden w-[63.8%] sm:block"
                />
              </div>
              <img
                src={seamSparkle}
                alt=""
                className="pointer-events-none absolute -top-[15px] -right-[15px] hidden size-[30px] md:-top-[11px] md:-right-[11px] md:block md:size-[23px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
