import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import card1Pattern from "../../assets/frameworks/veil-card1-pattern.svg";
import card23Pattern from "../../assets/frameworks/veil-card23-pattern.svg";
import legacyPattern from "../../assets/frameworks/veil-legacy-pattern.svg";

const PROBLEM_CARDS = [
  {
    key: "misaligned",
    text: "Misaligned with the work they once loved.",
    pattern: card1Pattern,
  },
  {
    key: "noise",
    text: "Surrounded by noise, but unclear about direction.",
    pattern: card23Pattern,
  },
  {
    key: "accomplished",
    text: "Accomplished on paper, but disconnected inside.",
    pattern: card23Pattern,
  },
];

function CircleSparkle({ className = "" }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gradient-to-b from-navy to-blue ${className}`}
    >
      <Sparkle className="size-[60%] text-white" />
    </span>
  );
}

function ProblemCard({ card, className = "", style }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue p-7 lg:p-9 ${className}`}
      style={style}
    >
      <Sparkle className="pointer-events-none absolute top-4 right-4 size-[22px] text-white/70 lg:size-[28px]" />
      <img
        src={card.pattern}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 h-[70%] w-auto -rotate-90 opacity-90"
      />
      <p className="relative max-w-[300px] text-[clamp(1.375rem,2.6vw,2.5rem)] leading-[1.26] font-bold text-white">
        {card.text}
      </p>
      <CircleSparkle className="relative mt-6 size-[44px] lg:mt-8 lg:size-[50px]" />
    </div>
  );
}

function LegacyCard({ className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue px-7 py-10 text-center lg:p-9 ${className}`}
    >
      <p className="relative text-[clamp(1.5rem,2.5vw,1.9375rem)] leading-[1.1] font-bold text-white">
        Sustainable Legacy
      </p>
      <p className="relative mt-3 max-w-[363px] text-[clamp(1.5rem,2.5vw,1.9375rem)] leading-[1.1] text-white">
        A presence <span className="font-bold">that outlasts titles and</span>{" "}
        keeps you whole
      </p>
      <CircleSparkle className="relative mt-8 size-[44px] lg:mt-10 lg:size-[50px]" />
      <img
        src={legacyPattern}
        alt=""
        className="pointer-events-none absolute -bottom-6 left-1/2 h-[48%] w-auto -translate-x-1/2 rotate-90 opacity-70"
      />
    </div>
  );
}

export default function VeilFrameworkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[100px]">
        <FrameworkTag>FRAMEWORK 3</FrameworkTag>

        <div className="mt-10 lg:grid lg:grid-cols-[1fr_480px] lg:items-start lg:gap-[75px]">
          {/* Copy column */}
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-navy-2">
              VEIL™ Leadership System
            </h2>
            <p className="mt-3 max-w-[323px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal text-black/60 italic">
              Lead Without Losing Yourself
            </p>
            <p className="mt-8 text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            <div className="mt-4 max-w-[645px] space-y-5 text-[clamp(1.0625rem,1.6vw,1.4375rem)] leading-normal text-black/60">
              <p>
                <strong className="font-bold text-black/60">
                  The VEIL Leadership System is not a mindset model.
                </strong>{" "}
                It is a strategic health architecture - a scientifically
                grounded framework that addresses what sustained professional
                pressure does to women&rsquo;s biological, cognitive, and
                identity systems, and builds the internal infrastructure that
                makes sustainable leadership possible.
              </p>
              <p>
                VEIL operates through three interconnected constructs:{" "}
                <strong className="font-bold text-black/60">
                  Capacity Regulation, Identity Coherence, Authority
                  Execution.
                </strong>
              </p>
              <p>
                The VEIL framework is delivered through{" "}
                <strong className="font-bold text-black/60">
                  UNVEIL, a 12-week cohort program
                </strong>{" "}
                for institutions, and through{" "}
                <strong className="font-bold text-black/60">
                  MAP and DECODE, a self-paced online pathway
                </strong>{" "}
                for individual women. All instruments used in VEIL are
                internationally validated with Arabic-validated versions for
                Gulf professional populations.
              </p>
            </div>
            <CtaPill
              as="a"
              href="#veil-program"
              variant="navyOutline"
              className="mt-8 lg:mt-10"
            >
              Explore VEIL™ — The Full Program
            </CtaPill>
          </div>

          {/* Stacked problem/legacy cards */}
          <div className="mt-10 flex flex-col gap-5 lg:mt-0 lg:hidden">
            {PROBLEM_CARDS.map((card) => (
              <ProblemCard key={card.key} card={card} className="min-h-[220px]" />
            ))}
            <LegacyCard className="min-h-[260px]" />
          </div>

          {/* Desktop peek-stack: each card overlaps the next, only its top
              edge showing, until the fully-visible Legacy card on top. */}
          <div className="relative hidden lg:block lg:aspect-[480/753]">
            {PROBLEM_CARDS.map((card, i) => (
              <ProblemCard
                key={card.key}
                card={card}
                className="absolute inset-x-0 h-[66.5%]"
                style={{ top: `${(i * 84 * 100) / 753}%` }}
              />
            ))}
            <LegacyCard className="absolute inset-x-0 top-[33.47%] h-[66.5%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
