import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle, ArrowRight } from "../ui/Icons";
import conceptualisePattern from "../../assets/frameworks/fivecs-conceptualise-pattern.svg";
import curatePattern from "../../assets/frameworks/fivecs-curate-pattern.svg";
import convertPattern from "../../assets/frameworks/fivecs-convert-pattern.svg";
import cultivateLaurel from "../../assets/frameworks/fivecs-cultivate-laurel.svg";

const CARDS = [
  {
    key: "conceptualise",
    title: "Conceptualise",
    body: "Understand your context, your customers, your core essence",
    pattern: conceptualisePattern,
    patternClass: "right-0 bottom-[8%] w-[62%]",
  },
  {
    key: "curate",
    title: "Curate",
    body: "Shape strategy that reflects your full identity",
    pattern: curatePattern,
    patternClass: "-right-[10%] top-[10%] w-[70%]",
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
    patternClass: "-right-[6%] bottom-0 w-[64%] -rotate-90 origin-bottom-right",
    wide: false,
  },
  {
    key: "cultivate",
    title: "Cultivate",
    body: "Sustain loyalty, adapt with intention, and evolve without losing your essence",
    pattern: cultivateLaurel,
    patternClass: "right-0 top-0 h-full w-[46%]",
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
      <div className="relative p-6 lg:p-[38px]">
        <p className="text-[clamp(1.25rem,1.7vw,1.5rem)] font-bold text-white">
          {card.title}
        </p>
        <p
          className={`mt-3 text-[clamp(1.0625rem,1.4vw,1.3125rem)] leading-normal text-white ${
            card.wide ? "max-w-[420px]" : "max-w-[258px]"
          }`}
        >
          {card.body}
        </p>
        <ArrowRight className="mt-8 w-[40px] text-white/80 lg:mt-11" />
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
              The 5Cs of Brand Health
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
            <p className="mt-4 text-[clamp(1.0625rem,1.6vw,1.4375rem)] leading-normal text-black/60">
              <strong className="font-bold text-black/60">
                The 5Cs of Brand Health isn&rsquo;t just a marketing
                framework.
              </strong>{" "}
              It&rsquo;s a brand rhythm — a five-stage system for building
              presence that is consistent, credible, and genuinely yours.
              From concept to advocacy, it guides you through every stage of
              the brand journey without losing the essence that makes your
              organisation distinct.
            </p>
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-[21px]">
          {CARDS.map((card) => (
            <Card key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
