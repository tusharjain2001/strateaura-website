import { useState } from "react";
import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import deckArcs from "../../assets/frameworks/veil-deck-arcs.svg";
import legacyArcs from "../../assets/frameworks/veil-legacy-arcs.svg";
import circleStar from "../../assets/frameworks/veil-circle-star.svg";
import cornerStar from "../../assets/frameworks/veil-corner-star.svg";

// Deck copy + per-card geometry from Figma 1755:3106 / 3120 / 3133 / 3146.
// Cards 1-3 are a single bold statement with the circle-star icon below it and
// a stack of arc outlines bleeding off the bottom-right; card 4 (open in the
// design) keeps the "Sustainable Legacy" title + mixed-weight line with the
// icon centred and an arc band along the bottom.
const CARDS = [
  {
    key: "misaligned",
    statement: "Misaligned with the work they once loved.",
    titleTop: 72,
    iconTop: 231,
  },
  {
    key: "noise",
    statement: "Surrounded by noise, but unclear about direction.",
    titleTop: 64,
    iconTop: 263,
  },
  {
    key: "accomplished",
    statement: "Accomplished on paper, but disconnected inside.",
    titleTop: 64,
    iconTop: 263,
  },
  {
    key: "legacy",
    legacy: true,
  },
];

// Deck geometry from Figma: four 442x461.34 cards stacked at y = 97, 174.35,
// 251.7, 329.05 in the section — a 77.35px step. Every card is the SAME full
// height; a collapsed card is simply overlapped by the one below it, which is
// what clips its statement mid-line in the design. Because exactly one card is
// open at a time, the deck height is constant: 3 x 77.35 + 461.34.
//
// These are FIXED pixel values by design: the deck is a constant 442px column
// inside the max-w-[1440px] page container at every width from lg (1024px)
// through 1920px+, so no viewport-relative math can make the geometry drift.
const CARD_W = 442;
const CARD_H = 461.34;
const PEEK_STEP = 77.35;
const DECK_H = PEEK_STEP * (CARDS.length - 1) + CARD_H;
// Corner star, exported from Figma at 32.8x35.3. It straddles each card's
// top-right corner (white fill + navy stroke so it reads on both the navy
// card and the white page).
const STAR_W = 32.8;
const STAR_H = 35.3;

/**
 * Decorative arc pattern. Figma authors each asset at its pre-rotation size
 * (`art`) and spins it inside a box of the post-rotation size (`box`). Safe to
 * do in CSS here precisely because the deck is fixed-px — nothing rescales
 * underneath it.
 */
function DeckArcs({ src, box, art, transform }) {
  return (
    <div className="pointer-events-none absolute" style={box}>
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{ ...art, transform }}
      />
    </div>
  );
}

/** Card 1-3 face: bold statement at x:66 with the circle-star icon below. */
function StatementCardBody({ card }) {
  return (
    <div className="relative h-full">
      {/* Arc stack: 169.7x291 box at x:309.4/y:170.4, art rotated -90 and
          flipped, bleeding past the card's right edge. */}
      <DeckArcs
        src={deckArcs}
        box={{ left: 309.4, top: 170.4, width: 169.7, height: 291 }}
        art={{ width: 290.982, height: 169.701 }}
        transform="translate(-50%, -50%) rotate(-90deg) scaleY(-1)"
      />
      <p
        className="absolute left-[66px] w-[274px] text-[24px] leading-[1.26] font-bold text-white"
        style={{ top: card.titleTop }}
      >
        {card.statement}
      </p>
      <img
        src={circleStar}
        alt=""
        className="absolute left-[66px] size-[46px]"
        style={{ top: card.iconTop }}
      />
    </div>
  );
}

/** Card 4 face (open in the design): Sustainable Legacy. */
function LegacyCardBody() {
  return (
    <div className="relative h-full">
      {/* Arc band along the bottom: 607.75x151.9 box bleeding both sides,
          art authored portrait and rotated -90. */}
      <DeckArcs
        src={legacyArcs}
        box={{ left: -82.9, top: 313.1, width: 607.75, height: 151.94 }}
        art={{ width: 151.938, height: 607.75 }}
        transform="translate(-50%, -50%) rotate(-90deg)"
      />
      <div className="absolute top-[79px] left-[59px] w-[334px] text-white">
        <p className="text-[24px] leading-[1.1] font-bold">
          Sustainable Legacy
        </p>
        {/* Figma separates these with an empty 1.1 line. */}
        <p className="mt-[26px] text-[20px] leading-[1.1]">
          <strong className="font-bold">A presence </strong>
          that outlasts titles and{" "}
          <strong className="font-bold">keeps you whole</strong>
        </p>
      </div>
      <img
        src={circleStar}
        alt=""
        className="absolute top-[344px] left-1/2 size-[46px] -translate-x-1/2"
      />
    </div>
  );
}

/**
 * Interactive stack (lg+). Card `i` sits at the running offset; the open card
 * advances it by its full height, a collapsed one by PEEK_STEP. Later cards
 * paint over earlier ones (ascending z-index), which produces the overlap-clip
 * exactly as the design file shows it. Clicking the open card is a no-op —
 * closing it would leave the deck with no expanded card and a hole.
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
          bottom at its full height. */}
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
              className="absolute left-0 cursor-pointer overflow-hidden rounded-[7px] bg-gradient-to-b from-navy to-blue text-left shadow-[0_-6px_16px_rgba(0,0,0,0.18)] transition-[top] duration-500 ease-in-out"
            >
              {card.legacy ? (
                <LegacyCardBody />
              ) : (
                <StatementCardBody card={card} />
              )}
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
    <div className="relative overflow-hidden rounded-[7px] bg-gradient-to-b from-navy to-blue px-7 py-8">
      {card.legacy ? (
        <>
          <p className="text-[22px] leading-[1.1] font-bold text-white">
            Sustainable Legacy
          </p>
          <p className="mt-4 text-[19px] leading-[1.2] text-white">
            <strong className="font-bold">A presence </strong>
            that outlasts titles and{" "}
            <strong className="font-bold">keeps you whole</strong>
          </p>
        </>
      ) : (
        <p className="text-[22px] leading-[1.2] font-bold text-white">
          {card.statement}
        </p>
      )}
      <img src={circleStar} alt="" className="mt-8 size-[42px]" />
    </div>
  );
}

// Figma 1755:3092 ("Frame 68", 1440x887): copy column 553 wide at x:159 /
// y:174.2, deck at x:825 / y:97 (77px above the copy top). The 159/173 side
// gutters scale down as vw between lg and 1440 so both columns keep fitting.
export default function VeilFrameworkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:flex lg:items-start lg:justify-between lg:pt-[97px] lg:pb-[97px] lg:pl-[clamp(2rem,11.04vw,159px)] lg:pr-[clamp(2rem,12.01vw,173px)]">
        {/* Copy column — Figma caps it at 553px. */}
        <div className="lg:mt-[77px] lg:w-[553px] lg:max-w-full lg:shrink lg:min-w-0">
          <FrameworkTag>FRAMEWORK 3</FrameworkTag>

          <h2 className="mt-6 text-[26px] leading-[1.2] font-bold text-navy sm:text-[28px] lg:mt-[38px] lg:text-[30px]">
            VEIL™ Leadership System
          </h2>
          <p className="mt-2 text-[15px] leading-[1.17] text-black/60 italic lg:mt-[17px] lg:text-[16px]">
            Lead Without Losing Yourself
          </p>
          <p className="mt-6 text-[20px] font-bold tracking-wide text-gold uppercase lg:mt-[28px]">
            Core Concept
          </p>
          {/* Figma (node 1755:3099) separates the three blocks with an empty
              16px line (~19px), but keeps the opening bold sentence and the
              line under it tight together as one block. */}
          <div className="mt-3 space-y-[19px] text-[15px] leading-[1.17] text-black/60 lg:mt-[13px] lg:text-[16px]">
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
                the online pathway
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
            size="sm44"
            className="mt-6 lg:mt-[35px]"
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

        {/* Interactive stack, desktop only — fixed 442px column, never
            stretched or shrunk by the flex row. */}
        <div className="hidden lg:block lg:shrink-0">
          <StackDeck />
        </div>
      </div>
    </section>
  );
}
