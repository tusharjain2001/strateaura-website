import MobilePill from "./MobilePill";
import cardDecor1 from "../../assets/home-mobile/veil-card-1.svg";
import cardDecor2 from "../../assets/home-mobile/veil-card-2.svg";
import cardDecor3 from "../../assets/home-mobile/veil-card-3.svg";

// Figma nodes 1434:529 / 1434:539 / 1434:549 — gold-gradient cards, each with
// the same ellipse-swirl decor anchored at left 131.67 / top 98 (231x84.9).
const CARDS = [
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
 * VEIL™ flagship block — Figma node 1434:509. Unlike the rest of the page this
 * one is inset 34px rather than 16px, so it uses its own container.
 */
export default function MobileVeil() {
  return (
    <section className="bg-white pt-[66px]">
      <div className="mx-auto w-full max-w-[430px] px-[34px]">
        <h2 className="text-[28px] leading-normal font-bold text-navy">
          VEIL™: Lead Without
          <br />
          Losing Yourself
        </h2>

        <div className="mt-[24px] flex flex-col items-start gap-[14px]">
          <MobilePill
            as="a"
            href="/veil"
            variant="navyOutline"
            icon="arrowUp"
            className="w-full"
          >
            Learn More about MAP &amp; DECODE
          </MobilePill>
          <MobilePill as="a" href="/webinar" variant="navyOutline">
            Register for the Free Webinar
          </MobilePill>
        </div>

        <p className="mt-[37px] text-[20px] leading-normal font-bold text-gold uppercase">
          The Flagship Program
        </p>

        <div className="mt-[16px] space-y-[1em] text-[16px] leading-normal text-navy">
          <p>
            For women in leadership and high-demand professional roles who are
            performing well externally - and already paying a silent cost for
            how they are leading. Not a wellness program. Not resilience
            training. A flagship strategic health framework built in the GCC,
            for the GCC, grounded in internationally validated science.
          </p>
          <p>
            <span className="font-bold">
              12 weeks · Live cohort · 6 phases
            </span>{" "}
            · Validated psychometric instruments · Measurable outcomes
          </p>
          <p>
            Online pathway also available:
            <span className="font-bold"> MAP · DECODE · UNVEIL</span>
          </p>
        </div>

        <div className="mt-[37px] flex flex-col gap-[16px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative min-h-[213px] overflow-hidden rounded-[4px] bg-gradient-to-b from-gold to-gold-dark p-[24px]"
            >
              <img
                src={card.decor}
                alt=""
                aria-hidden
                className="pointer-events-none absolute top-[98px] left-[131.67px] h-[84.879px] w-[231px] max-w-none"
              />
              <p className="relative z-10 text-[24px] leading-normal font-bold text-white">
                {card.title}
              </p>
              <p className="relative z-10 mt-[16px] text-[20px] leading-normal text-white">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
