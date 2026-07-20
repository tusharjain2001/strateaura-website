import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle, ArrowRight } from "../ui/Icons";
import conceptualisePattern from "../../assets/frameworks/fivecs-conceptualise-pattern.svg";
import curatePattern from "../../assets/frameworks/fivecs-curate-pattern.png";
import convertPattern from "../../assets/frameworks/fivecs-convert-pattern.png";
import cultivateLaurel from "../../assets/frameworks/fivecs-cultivate-laurel.png";

// Pattern placement taken from Figma (node 1434:2953). Each box is expressed as
// a share of its own card — 379x280 for the single-width cards, 794x280 for the
// wide Cultivate card — so it scales with the card, and several bleed past a
// card edge, which the wrapper clips to the rounded corners. The assets are all
// preserveAspectRatio="none", so width AND height are set to pin the exact box.
const CARDS = [
  {
    key: "conceptualise",
    title: "Conceptualise",
    body: "Understand your context, your customers, your core essence",
    pattern: conceptualisePattern,
    // Figma flips this one vertically (-scale-y-100) and lets it bleed right.
    patternClass: "left-[46.7%] top-[54.6%] h-[44.6%] w-[73.6%] -scale-y-100",
  },
  {
    key: "curate",
    title: "Curate",
    body: "Shape strategy that reflects your full identity",
    pattern: curatePattern,
    patternClass: "left-[44.9%] top-[21.4%] h-[111.4%] w-[82.3%]",
  },
  {
    key: "communicate",
    title: "Communicate",
    body: "Activate across platforms, teams, and human moments",
    pattern: null,
    patternClass: "",
  },
  {
    key: "convert",
    title: "Convert",
    body: "Measure what truly matters: traction, trust, and resonance",
    pattern: convertPattern,
    patternClass: "left-[76.8%] top-0 h-full w-[23.1%]",
    wide: false,
  },
  {
    key: "cultivate",
    title: "Cultivate",
    body: "Sustain loyalty, adapt with intention, and evolve without losing your essence",
    pattern: cultivateLaurel,
    patternClass: "left-[53.8%] -top-[5.4%] h-[110.7%] w-[47%]",
    wide: true,
  },
];

function Card({ card }) {
  return (
    <div
      className={`relative min-h-[240px] rounded-[4px] bg-gradient-to-b from-gold to-gold-light lg:min-h-[280px] ${
        card.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Clips the decorative pattern to the card's rounded corners without
          clipping the corner sparkle below, which must bleed outside. */}
      {card.pattern && (
        <div className="absolute inset-0 overflow-hidden rounded-[4px]">
          <img
            src={card.pattern}
            alt=""
            className={`pointer-events-none absolute h-auto ${card.patternClass}`}
          />
        </div>
      )}
      {/* Straddles the top-right corner (centered on the corner point, half
          outside the card) — see LeaveWith.jsx. */}
      <Sparkle className="pointer-events-none absolute -top-[11px] -right-[11px] z-10 size-[22px] text-white lg:-top-[14px] lg:-right-[14px] lg:size-[28px]" />
      {/* Figma pads 41px left / 39px top and parks the arrow 36px off the card
          bottom, identical on every card — mt-auto keeps them on one baseline
          instead of letting short copy float the arrow up. */}
      <div className="relative flex h-full flex-col p-6 lg:pt-[39px] lg:pr-[41px] lg:pb-[23px] lg:pl-[41px]">
        <p className="text-[20px] leading-[1.24] font-bold text-white lg:text-[24px]">
          {card.title}
        </p>
        <p
          className={`mt-[14px] text-[17px] leading-[1.24] font-medium text-white lg:text-[21px] ${
            card.wide ? "lg:max-w-[374px]" : "lg:max-w-[258px]"
          }`}
        >
          {card.body}
        </p>
        <ArrowRight className="mt-8 w-[43px] text-white lg:mt-auto" />
      </div>
    </div>
  );
}

export default function FiveCsSection() {
  return (
    <section className="bg-[linear-gradient(77deg,rgba(255,249,232,0)_6%,#edd8a1_94%)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[100px]">
        <FrameworkTag>FRAMEWORK 2</FrameworkTag>

        <div className="mt-4 lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-navy-2">
              {/* Figma breaks this heading after "of" (node 1434:2992). */}
              The 5Cs of <span className="lg:block">Brand Health</span>
            </h2>
            <p className="mt-2 max-w-[366px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal text-black/60">
              This is more than brand strategy. It&rsquo;s a rhythm. One that
              builds presence without burnout.
            </p>
          </div>

          <div className="mt-8 max-w-[742px] lg:mt-0">
            <p className="text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            {/* Figma (node 1434:2994) keeps these as one tight block: the bold
                sentence sits alone on line 1, the body starts on line 2 with no
                paragraph gap between them. */}
            <div className="mt-5 text-[clamp(1.0625rem,1.6vw,1.4375rem)] leading-normal text-black/60">
              <p className="font-bold text-black/60">
                The 5Cs of Brand Health isn&rsquo;t just a marketing framework.
              </p>
              <p>
                It&rsquo;s a brand rhythm — a five-stage system for building
                presence that is consistent, credible, and genuinely yours.
                From concept to advocacy, it guides you through every stage of
                the brand journey without losing the essence that makes your
                organisation distinct.
              </p>
            </div>
            <CtaPill
              as="a"
              href="#brand-health-support"
              variant="goldOutline"
              className="mt-6"
            >
              Explore Brand Health Support
            </CtaPill>
          </div>
        </div>

        {/* Figma: 36px between columns, 42px between rows, 80px below the CTA. */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-20 lg:gap-x-9 lg:gap-y-[42px]">
          {CARDS.map((card) => (
            <Card key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
