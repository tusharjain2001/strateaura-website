import { useState } from "react";
import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import energyPattern from "../../assets/frameworks/veil-energy-pattern.svg";
import emotionalPattern from "../../assets/frameworks/veil-emotional-pattern.svg";
import innerPattern from "../../assets/frameworks/veil-inner-pattern.svg";
import legacyPattern from "../../assets/frameworks/veil-legacy-pattern.svg";
import cornerStar from "../../assets/frameworks/framework3bluestar.png";

// All four cards share one layout (Figma 1136:6665 / 6712 / 6722 and
// 1434:3074): a 31px/1.1 title, a blank line, then a mixed-weight paragraph —
// all in a 363px column at x:64, y:86 — with the star icon centred at y:374.
// Only the artwork differs. `pattern.box` is the on-card rectangle; `art` and
// `rotate` are only needed where Figma rotates the asset, in which case `art`
// is its pre-rotation size.
const CARDS = [
  {
    key: "energy",
    title: "Energy Alignment",
    body: (
      <>
        What your <strong className="font-bold">body tells</strong> you before
        your <strong className="font-bold">mind can process it.</strong>
      </>
    ),
    pattern: {
      src: energyPattern,
      box: { left: 0, top: 325, width: 480, height: 176.372 },
      art: { width: 176.372, height: 480 },
      rotate: 90,
    },
  },
  {
    key: "emotional",
    title: "Emotional Intelligence",
    body: (
      <>
        The <strong className="font-bold">capacity</strong> to respond without{" "}
        <strong className="font-bold">over-performing</strong>.
      </>
    ),
    pattern: {
      src: emotionalPattern,
      box: { left: -42, top: 380.5, width: 565.045, height: 108 },
    },
  },
  {
    key: "inner",
    title: "Inner Leadership",
    body: (
      <>
        <strong className="font-bold">Quiet authority</strong> that comes from
        within, <strong className="font-bold">not role.</strong>
      </>
    ),
    pattern: {
      src: innerPattern,
      box: { left: -0.5, top: 354.5, width: 481, height: 161 },
    },
  },
  {
    key: "legacy",
    title: "Sustainable Legacy",
    body: (
      <>
        <strong className="font-bold">A presence</strong> that outlasts titles
        and <strong className="font-bold">keeps you whole</strong>
      </>
    ),
    pattern: {
      src: legacyPattern,
      box: { left: -90, top: 340, width: 660, height: 165 },
      art: { width: 165, height: 660 },
      rotate: -90,
    },
  },
];

// Deck geometry from Figma node 1434:3021. Four 480x501 cards stacked at
// y = 126, 210, 294, 378 — an 84px step. Every card is the SAME full height;
// a collapsed card is simply overlapped by the one below it, which is what
// clips its headline mid-line in the design. Because exactly one card is open
// at a time, the deck height is constant: 3 x 84 + 501.
//
// These are FIXED pixel values by design: the deck is a constant 480px column
// inside the max-w-[1440px] page container at every width from lg (1024px)
// through 1920px+, so no viewport-relative math can make the geometry drift.
const CARD_W = 480;
const CARD_H = 501;
const PEEK_STEP = 84;
const DECK_H = PEEK_STEP * (CARDS.length - 1) + CARD_H;
// Corner star, exported from Figma at 36x39 (not square). It straddles each
// card's top-right corner, so it must be navy — the half that hangs over the
// white page would be invisible if it were white like the in-card icon.
const STAR_W = 36;
const STAR_H = 39;

/** White disc with a navy star — Figma draws this at 50px on every card. */
function CircleStar({ className = "", style }) {
  return (
    <span
      className={`flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white ${className}`}
      style={style}
    >
      <Sparkle className="size-[28px] text-navy" />
    </span>
  );
}

/**
 * Decorative pattern. Where Figma rotates the asset, it is authored at the
 * pre-rotation size (`art`) and spun about its own centre inside a box of the
 * post-rotation size (`box`). Safe to do in CSS here precisely because the deck
 * is fixed-px — nothing rescales underneath it.
 */
function DeckPattern({ src, box, art, rotate }) {
  if (!rotate) {
    return (
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute max-w-none"
        style={box}
      />
    );
  }
  return (
    <div className="pointer-events-none absolute" style={box}>
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{
          ...art,
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}

/** Every card: copy left-aligned at x=64, only the star centred. */
function DeckCardBody({ card }) {
  return (
    <div className="relative h-full">
      <DeckPattern {...card.pattern} />
      <div className="relative pt-[86px] pr-[53px] pl-[64px]">
        <p className="text-[31px] leading-[1.1] font-bold text-white">
          {card.title}
        </p>
        {/* Figma separates these with an empty line, i.e. one 1.1 line-height. */}
        <p className="mt-[34px] max-w-[363px] text-[31px] leading-[1.1] text-white">
          {card.body}
        </p>
      </div>
      <CircleStar
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: 374 }}
      />
    </div>
  );
}

/**
 * Interactive stack (lg+). Card `i` sits at the running offset; the open card
 * advances it by its full height, a collapsed one by PEEK_STEP. Later cards
 * paint over earlier ones (ascending z-index), which produces the overlap-clip
 * exactly as the design file shows it. Clicking the open card is a no-op —
 * closing it would leave the deck with no expanded card and a 336px hole.
 */
function StackDeck() {
  const [active, setActive] = useState(CARDS.length - 1); // Legacy open by default

  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? CARD_H : PEEK_STEP;
  }

  return (
    <div
      className="relative"
      style={{ width: `${CARD_W}px`, height: `${DECK_H}px` }}
    >
      {/* Clips the deck to its constant height: when a card other than the
          last one is open, the trailing card would otherwise hang past the
          bottom at its full 501px. */}
      <div className="absolute inset-0 overflow-hidden">
        {CARDS.map((card, i) => {
          const isOpen = active === i;
          return (
            <button
              key={card.key}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActive(i)}
              style={{
                top: `${tops[i]}px`,
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                zIndex: i,
              }}
              className="absolute left-0 cursor-pointer overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue text-left shadow-[0_-6px_16px_rgba(0,0,0,0.18)] transition-[top] duration-500 ease-in-out"
            >
              <DeckCardBody card={card} />
            </button>
          );
        })}
      </div>

      {/* Corner stars live outside the clipping wrapper so they can straddle
          each card's top-right corner — centred on the corner, half outside. */}
      {CARDS.map((card, i) => (
        <img
          key={`${card.key}-star`}
          src={cornerStar}
          alt=""
          className="pointer-events-none absolute z-20 max-w-none transition-[top] duration-500 ease-in-out"
          style={{
            top: `${tops[i] - STAR_H / 2}px`,
            left: `${CARD_W - STAR_W / 2}px`,
            width: `${STAR_W}px`,
            height: `${STAR_H}px`,
          }}
        />
      ))}
    </div>
  );
}

/** Fluid, always-expanded card for the simple stacked list below lg. */
function StaticCard({ card }) {
  return (
    <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue px-7 py-8">
      <p className="text-[26px] leading-[1.1] font-bold text-white">
        {card.title}
      </p>
      <p className="mt-5 text-[26px] leading-[1.1] text-white">{card.body}</p>
      <CircleStar className="mt-8" />
    </div>
  );
}

export default function VeilFrameworkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[100px]">
        <FrameworkTag>FRAMEWORK 3</FrameworkTag>

        <div className="mt-10 lg:flex lg:items-start lg:gap-[64px]">
          {/* Copy column — Figma caps the headline at 575px (so it breaks
              after "Leadership") and the body at 645px. */}
          <div className="lg:min-w-0 lg:flex-1">
            <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-navy-2 lg:max-w-[575px]">
              VEIL™ Leadership System
            </h2>
            <p className="mt-3 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal text-black/60 italic">
              Lead Without Losing Yourself
            </p>
            <p className="mt-8 text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            {/* Figma (node 1434:3027) separates the three blocks with an empty
                line (~28px), but keeps the opening bold sentence and the line
                under it tight together as one block. */}
            <div className="mt-4 max-w-[645px] space-y-7 text-[17px] leading-normal text-black/60 lg:text-[23px]">
              <div>
                <p className="font-bold text-black/60">
                  The VEIL Leadership System is not a mindset model.
                </p>
                <p>
                  It is a strategic health architecture - a scientifically
                  grounded framework that addresses what sustained professional
                  pressure does to women&rsquo;s biological, cognitive, and
                  identity systems, and builds the internal infrastructure that
                  makes sustainable leadership possible.
                </p>
              </div>
              <p>
                VEIL operates through three interconnected constructs:{" "}
                <strong className="font-bold text-black/60">
                  Capacity Regulation, Identity Coherence, Authority Execution.
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
              className="mt-8"
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

          {/* Interactive stack, desktop only — fixed 480px column, never
              stretched or shrunk by the flex row. */}
          <div className="hidden lg:block lg:shrink-0">
            <StackDeck />
          </div>
        </div>
      </div>
    </section>
  );
}
