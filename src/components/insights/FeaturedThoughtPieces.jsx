import { ArrowRight } from "../ui/Icons";
import thoughtDecor1 from "../../assets/insights/thought-decor-1.png";
import thoughtDecor2 from "../../assets/insights/thought-decor-2.png";
import thoughtDecor3 from "../../assets/insights/thought-decor-3.png";
import thoughtDecor4 from "../../assets/insights/thought-decor-4.png";
import seamSparkle from "../../assets/insights/thought-seam-sparkle.png";

// Decor placement from Figma (node 1136:5694). Each asset is already exported
// at exactly its Figma size with its own opacity baked in, so it is placed at
// full strength and sized by width alone — the natural aspect gives the height.
// All four bleed past the card's right and/or bottom edge, which overflow-hidden
// clips. Offsets are anchored to the bottom-right so they hold as the card grows.
const CARDS = [
  {
    title: "The Hidden Cost of Tactic Addiction.",
    desc: "Why your marketing feels busy but broken.",
    decor: thoughtDecor2, // 211x223
    decorClass: "-right-[22px] -bottom-[31px] w-[69.2%]",
  },
  {
    title: "From Brand Activity to Brand Health.",
    desc: "How to stop performing and start building resonance.",
    decor: thoughtDecor1, // 160x164
    decorClass: "-right-[33px] -bottom-[33px] w-[52.1%]",
  },
  {
    title: "Why Strategy is the Real Self-Care.",
    desc: "Leadership, energy, and the truth behind VEIL™.",
    decor: thoughtDecor3, // 239x88
    decorClass: "-right-[50px] bottom-0 w-[78.2%]",
  },
  {
    title: "The AI Dilemma in Higher Ed Marketing.",
    desc: "Reclaiming relevance in a world of automation.",
    decor: thoughtDecor4, // 159x125
    decorClass: "right-0 bottom-[2px] w-[51.5%]",
  },
];

export default function FeaturedThoughtPieces() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[70px] lg:py-[100px]">
        <h2 className="text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          Featured Thought Pieces
        </h2>
        {/* Figma holds this on one line in a 944px box (node 1136:5672), but
            Inter needs ~1116px for the same 24px sentence and so wrapped. The
            cap is lifted at lg — the 1300px content column has room — and the
            clamp keeps it on one line further down as the font scales with the
            viewport. */}
        <p className="mt-4 max-w-[944px] text-[clamp(1.0625rem,1.7vw,1.5rem)] leading-normal font-light text-black lg:mt-4 lg:max-w-none">
          Each one is designed to surface hidden truths and offer a better
          lens, not just a new tactic.
        </p>

        {/* Figma spaces the four cards 26px apart and puts one 35.8x36 sparkle
            centred on EACH card's top-right corner. They were previously pinned
            to the grid at left-1/4, left-1/2 and left-3/4, which lands them in
            the gutters rather than on the corners, because those fractions
            ignore the gaps. */}
        {/* Mobile keeps Figma's 2x2 grid; it opens to a single row of four at lg. */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:mt-[57px] lg:grid-cols-4 lg:gap-[26px]">
          {CARDS.map((card) => (
            <div key={card.title} className="relative">
              {/* overflow-hidden clips the decor to the rounded corners, so the
                  sparkle has to be its sibling to hang outside the card. */}
              <a
                href="#"
                className="group relative flex h-full min-h-[185px] flex-col overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-4 transition-transform motion-safe:hover:-translate-y-1 sm:min-h-[260px] sm:p-7 lg:min-h-[280px] lg:p-[39px]"
              >
                <img
                  src={card.decor}
                  alt=""
                  className={`pointer-events-none absolute ${card.decorClass}`}
                />
                <p className="relative z-10 text-[15px] leading-[1.2] font-bold text-white sm:text-[22px] sm:leading-normal lg:text-[24px]">
                  {card.title}
                </p>
                <p className="relative z-10 mt-2 text-[12.5px] leading-snug text-white sm:mt-3 sm:text-[18px] sm:leading-normal lg:text-[21px]">
                  {card.desc}
                </p>
                <ArrowRight className="relative z-10 mt-auto w-7 pt-4 text-white sm:w-9 sm:pt-6" />
              </a>
              <img
                src={seamSparkle}
                alt=""
                className="pointer-events-none absolute -top-[18px] -right-[18px] hidden size-[36px] lg:block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
