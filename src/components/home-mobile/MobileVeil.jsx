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
 * VEIL™ flagship block — Figma nodes 1434:500 (card) / 1434:509 (content).
 *
 * The whole block sits inside a 370px rounded card (12px radius, 1px #ffdf85
 * border, white -> #ffdf85 vertical gradient) that starts 46px below Signature
 * Programs. The card is inset 16px like every other section; its own 18px
 * padding is what puts the content at Figma's 34px page inset. The card also
 * holds a decor swirl (node 1434:502), but it lands at left ~676px inside a
 * 370px overflow-clipped box, so it never renders — it is omitted here.
 */
export default function MobileVeil() {
  return (
    <section className="pt-[46px] pb-[53px]">
      <div className="mx-auto w-full max-w-[430px] px-4">
        {/* --veil-col is the card's inner content width; the body copy below is
            sized off it so Inter reproduces the Figma line breaks. Figma's
            column is 334px of Acumin Pro, and Inter runs ~5% wider. */}
        <div className="overflow-hidden rounded-xl border border-gold-light bg-linear-to-b from-white to-gold-light px-[18px] pt-[19px] pb-[14px] [--veil-col:calc(min(100vw,430px)-70px)]">
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
              size="veil"
              icon="arrowUp"
              className="w-full"
            >
              Learn More about MAP &amp; DECODE
            </MobilePill>
            <MobilePill
              as="a"
              href="/webinar"
              variant="navyOutline"
              size="veil"
            >
              Register for the Free Webinar
            </MobilePill>
          </div>

          <p className="mt-[37px] text-[20px] leading-normal font-bold text-gold uppercase">
            The Flagship Program
          </p>

          <div className="mt-[16px] space-y-[1em] text-[min(16px,calc(var(--veil-col)*0.0456))] leading-normal text-navy">
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
      </div>
    </section>
  );
}
