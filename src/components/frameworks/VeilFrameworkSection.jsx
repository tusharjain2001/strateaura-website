import { useState } from "react";
import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import card1Pattern from "../../assets/frameworks/veil-card1-pattern.svg";
import card23Pattern from "../../assets/frameworks/veil-card23-pattern.svg";
import legacyPattern from "../../assets/frameworks/veil-legacy-pattern.svg";

const CARDS = [
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
  {
    key: "legacy",
    legacy: true,
    pattern: legacyPattern,
  },
];

// Deck geometry pulled from Figma node 1434:3021 ("Group 112"): four 480px
// wide cards, each 501px tall, stacked at y = 126, 210, 294, 378 — an 84px
// step between each. Figma only depicts one state (Legacy open, the other
// three peeking); COLLAPSED_H is sized so a peek of each card's heading
// stays readable, following the interactive accordion pattern from
// src/components/home/ProblemWeAddress.jsx (absolute cards, tops advancing
// by a peek step, expanded card taller, click to toggle with a transition).
const PEEK_STEP = 84;
const COLLAPSED_H = 132;
const EXPANDED_H = 501;
const CARD_W = 480;

function CircleSparkle({ className = "" }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gradient-to-b from-navy to-blue ${className}`}
    >
      <Sparkle className="size-[60%] text-white" />
    </span>
  );
}

function CardBody({ card }) {
  if (card.legacy) {
    return (
      <div className="relative flex h-full flex-col items-center justify-center px-7 pt-10 pb-8 text-center lg:px-9">
        <p className="text-[clamp(1.5rem,2.5vw,1.9375rem)] leading-[1.1] font-bold text-white">
          Sustainable Legacy
        </p>
        <p className="mt-3 max-w-[363px] text-[clamp(1.5rem,2.5vw,1.9375rem)] leading-[1.1] text-white">
          A presence <span className="font-bold">that outlasts titles and</span>{" "}
          keeps you whole
        </p>
        <CircleSparkle className="mt-8 size-[44px] lg:mt-10 lg:size-[50px]" />
        <img
          src={card.pattern}
          alt=""
          className="pointer-events-none absolute -bottom-6 left-1/2 h-[48%] w-auto -translate-x-1/2 rotate-90 opacity-70"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full px-7 pt-7 pb-7 lg:px-9 lg:pt-9">
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

/** Plain, always-expanded card used in the stacked list below lg. */
function StaticCard({ card }) {
  return (
    <div className="relative min-h-[240px] overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue">
      <Sparkle className="pointer-events-none absolute top-4 right-4 size-[22px] text-white/70" />
      <CardBody card={card} />
    </div>
  );
}

// Each card's *top* advances by its own step (PEEK_STEP if collapsed,
// EXPANDED_H if open); the deck's total height is the last card's top plus
// its own *rendered* height (COLLAPSED_H or EXPANDED_H). Kept as a plain
// function (not inline in the component) so the running total is a local
// variable inside its own call frame, not a render-scoped mutation.
function computeDeckLayout(active) {
  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? EXPANDED_H : PEEK_STEP;
  }
  const lastIsOpen = active === CARDS.length - 1;
  const deckHeight = tops[CARDS.length - 1] + (lastIsOpen ? EXPANDED_H : COLLAPSED_H);
  return { tops, deckHeight };
}

/**
 * Interactive stacked deck (desktop, lg+): the open card sits at full
 * height, the rest collapse to a peeking band. Mirrors ProblemWeAddress:
 * each collapsed card advances the running offset by PEEK_STEP, the open
 * one by EXPANDED_H; height/position animate on toggle.
 */
function StackDeck() {
  const [active, setActive] = useState(CARDS.length - 1); // Legacy open by default
  const { tops, deckHeight } = computeDeckLayout(active);

  return (
    <div className="relative" style={{ width: CARD_W, height: deckHeight }}>
      {CARDS.map((card, i) => {
        const isOpen = active === i;
        return (
          <button
            key={card.key}
            type="button"
            aria-expanded={isOpen}
            onClick={() => setActive(isOpen ? null : i)}
            style={{
              top: tops[i],
              height: isOpen ? EXPANDED_H : COLLAPSED_H,
              width: CARD_W,
              zIndex: i,
            }}
            className="absolute left-0 overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue text-left shadow-[0_-6px_16px_rgba(0,0,0,0.18)] transition-all duration-500 ease-in-out"
          >
            <Sparkle className="pointer-events-none absolute top-4 right-4 size-[22px] text-white/70 lg:size-[28px]" />
            <CardBody card={card} />
          </button>
        );
      })}
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

          {/* Plain stacked list below lg */}
          <div className="mt-10 flex flex-col gap-5 lg:hidden">
            {CARDS.map((card) => (
              <StaticCard key={card.key} card={card} />
            ))}
          </div>

          {/* Interactive peek-stack, desktop only */}
          <div className="hidden lg:block">
            <StackDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
