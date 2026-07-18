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
// step between each. These are FIXED pixel values by design: the deck
// column is a constant 480px inside the max-w-[1440px] page container at
// every width from the lg breakpoint (1024px) up through 1920px+, so there
// is no viewport-relative math (%, vw, aspect-ratio) anywhere in this
// component for the geometry to drift or collapse at in-between widths
// (1280/1366/1440/1536/1920 all render identically).
const PEEK_STEP = 84;
const COLLAPSED_H = 132;
const EXPANDED_H = 501;
const CARD_W = 480;
const SPARKLE = 28; // corner sparkle size (px), straddles the card corner

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
      <div className="relative flex h-full flex-col items-center px-7 pt-9 text-center lg:px-10 lg:pt-[70px]">
        <p className="text-[26px] leading-[1.15] font-bold text-white lg:text-[31px]">
          Sustainable Legacy
        </p>
        <p className="mt-4 max-w-[300px] text-[26px] leading-[1.15] text-white lg:text-[31px]">
          A presence <span className="font-bold">that outlasts titles and</span>{" "}
          keeps you whole
        </p>
        <CircleSparkle className="mt-8 size-[44px] lg:mt-10 lg:size-[50px]" />
        <img
          src={card.pattern}
          alt=""
          className="pointer-events-none absolute -bottom-6 left-1/2 h-[40%] w-auto -translate-x-1/2 rotate-90 opacity-70"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full px-7 pt-7 pb-7 lg:px-10 lg:pt-10">
      <img
        src={card.pattern}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 h-[70%] w-auto -rotate-90 opacity-90"
      />
      <p className="relative max-w-[300px] text-[28px] leading-[1.26] font-bold text-white lg:text-[36px]">
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
      <CardBody card={card} />
    </div>
  );
}

/**
 * Interactive stacked deck (desktop, lg+): the open card sits at full
 * height (EXPANDED_H), the rest collapse to a peeking band (COLLAPSED_H).
 * Mirrors ProblemWeAddress.jsx: each collapsed card advances the running
 * offset by PEEK_STEP, the open one by EXPANDED_H; height/position animate
 * on toggle. All geometry is fixed px (see constants above).
 */
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

function StackDeck() {
  const [active, setActive] = useState(CARDS.length - 1); // Legacy open by default
  const { tops, deckHeight } = computeDeckLayout(active);

  return (
    <div
      className="relative shrink-0"
      style={{ width: `${CARD_W}px`, height: `${deckHeight}px` }}
    >
      {CARDS.map((card, i) => {
        const isOpen = active === i;
        return (
          <button
            key={card.key}
            type="button"
            aria-expanded={isOpen}
            onClick={() => setActive(isOpen ? null : i)}
            style={{
              top: `${tops[i]}px`,
              height: `${isOpen ? EXPANDED_H : COLLAPSED_H}px`,
              width: `${CARD_W}px`,
              zIndex: i,
            }}
            className="absolute left-0 overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue text-left shadow-[0_-6px_16px_rgba(0,0,0,0.18)] transition-all duration-500 ease-in-out"
          >
            <CardBody card={card} />
          </button>
        );
      })}

      {/* Corner sparkles rendered as siblings of the (overflow-hidden)
          buttons so they can straddle each card's top-right corner without
          being clipped — centered on the corner point, half outside. */}
      {CARDS.map((card, i) => (
        <span
          key={`${card.key}-sparkle`}
          className="pointer-events-none absolute z-20 transition-all duration-500 ease-in-out"
          style={{
            top: `${tops[i] - SPARKLE / 2}px`,
            left: `${CARD_W - SPARKLE / 2}px`,
            width: `${SPARKLE}px`,
            height: `${SPARKLE}px`,
          }}
        >
          <Sparkle className="size-full text-white" />
        </span>
      ))}
    </div>
  );
}

export default function VeilFrameworkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[100px]">
        <FrameworkTag>FRAMEWORK 3</FrameworkTag>

        <div className="mt-10 lg:flex lg:items-start lg:gap-[75px]">
          {/* Copy column */}
          <div className="lg:min-w-0 lg:flex-1">
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

          {/* Interactive peek-stack, desktop only — fixed 480px column,
              never stretched or shrunk by the flex row. */}
          <div className="hidden lg:block lg:shrink-0">
            <StackDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
