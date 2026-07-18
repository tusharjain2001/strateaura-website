import cardAura1 from "../../assets/webinar/card-aura-1.svg";
import cardAura2 from "../../assets/webinar/card-aura-2.svg";
import cardAura3 from "../../assets/webinar/card-aura-3.svg";
import seamSparkle from "../../assets/webinar/seam-sparkle.svg";

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

        <div className="relative mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-[57px] lg:gap-[21px]">
          {CARDS.map((card) => (
            <div
              key={card.lead}
              className="relative min-h-[190px] overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-6 lg:min-h-[212px]"
            >
              <p className="relative z-10 text-[clamp(1.125rem,1.5vw,1.5rem)] leading-normal text-white">
                <strong className="font-bold">{card.lead}</strong>
                {card.rest}
              </p>
              <img
                src={card.aura}
                alt=""
                className="pointer-events-none absolute right-0 bottom-1 w-[64%]"
              />
            </div>
          ))}

          {/* Sparkles pinned to the top seams between the cards (desktop only) */}
          <img
            src={seamSparkle}
            alt=""
            className="pointer-events-none absolute -top-[15px] left-1/3 hidden size-[30px] -translate-x-1/2 md:block"
          />
          <img
            src={seamSparkle}
            alt=""
            className="pointer-events-none absolute -top-[15px] left-2/3 hidden size-[30px] -translate-x-1/2 md:block"
          />
          <img
            src={seamSparkle}
            alt=""
            className="pointer-events-none absolute -top-[15px] -right-[15px] hidden size-[30px] md:block"
          />
        </div>
      </div>
    </section>
  );
}
