import { ArrowRight } from "../ui/Icons";
import thoughtDecor1 from "../../assets/insights/thought-decor-1.png";
import thoughtDecor2 from "../../assets/insights/thought-decor-2.png";
// Card 3's Figma decor node is "Group 69" — the same circle-cluster aura the
// webinar cards use (the insights export of it shipped as a blank PNG).
import thoughtDecor3 from "../../assets/webinar/card-aura-1.svg";
import thoughtDecor4 from "../../assets/insights/thought-decor-4.png";
import seamSparkle from "../../assets/insights/thought-seam-sparkle.png";

const CARDS = [
  {
    title: "The Hidden Cost of Tactic Addiction.",
    desc: "Why your marketing feels busy but broken.",
    decor: thoughtDecor2,
  },
  {
    title: "From Brand Activity to Brand Health.",
    desc: "How to stop performing and start building resonance.",
    decor: thoughtDecor1,
  },
  {
    title: "Why Strategy is the Real Self-Care.",
    desc: "Leadership, energy, and the truth behind VEIL™.",
    decor: thoughtDecor3,
    decorClass: "aspect-[238.6/87.7] w-[78%] opacity-70",
  },
  {
    title: "The AI Dilemma in Higher Ed Marketing.",
    desc: "Reclaiming relevance in a world of automation.",
    decor: thoughtDecor4,
  },
];

export default function FeaturedThoughtPieces() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[70px] lg:py-[100px]">
        <h2 className="text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          Featured Thought Pieces
        </h2>
        <p className="mt-4 max-w-[944px] text-[clamp(1.0625rem,1.7vw,1.5rem)] leading-normal font-light text-black lg:mt-4">
          Each one is designed to surface hidden truths and offer a better
          lens, not just a new tactic.
        </p>

        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[21px]">
          {CARDS.map((card) => (
            <a
              key={card.title}
              href="#"
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-8 transition-transform motion-safe:hover:-translate-y-1 lg:min-h-[280px] lg:p-[38px_39px]"
            >
              {/* Fully-opaque source asset — used only as a very faint corner
                  wash, kept below the text via -z-10 and a low opacity so it
                  can never obscure copy. */}
              <img
                src={card.decor}
                alt=""
                className={`pointer-events-none absolute right-0 bottom-0 -z-10 ${card.decorClass ?? "max-w-[55%] opacity-10"}`}
              />
              <p className="relative z-10 text-[22px] leading-normal font-bold text-white lg:text-[24px]">
                {card.title}
              </p>
              <p className="relative z-10 mt-3 text-[19px] leading-normal text-white lg:text-[21px]">
                {card.desc}
              </p>
              <ArrowRight className="relative z-10 mt-auto w-9 pt-6 text-white" />
            </a>
          ))}

          {/* Sparkles pinned to the top seams between the cards (desktop only) */}
          <img src={seamSparkle} alt="" className="pointer-events-none absolute -top-[15px] left-1/4 hidden size-[30px] -translate-x-1/2 lg:block" />
          <img src={seamSparkle} alt="" className="pointer-events-none absolute -top-[15px] left-1/2 hidden size-[30px] -translate-x-1/2 lg:block" />
          <img src={seamSparkle} alt="" className="pointer-events-none absolute -top-[15px] left-3/4 hidden size-[30px] -translate-x-1/2 lg:block" />
          <img src={seamSparkle} alt="" className="pointer-events-none absolute -top-[15px] -right-[15px] hidden size-[30px] lg:block" />
        </div>
      </div>
    </section>
  );
}
