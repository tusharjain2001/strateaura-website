import { useState } from "react";
import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import card1Pattern from "../../assets/frameworks/veil-card1-pattern.svg";
import card23Pattern from "../../assets/frameworks/veil-card23-pattern.svg";
import legacyPattern from "../../assets/frameworks/veil-legacy-pattern.svg";
import cornerStar from "../../assets/frameworks/framework3bluestar.png";

const CARDS = [
  {
    key: "misaligned",
    text: "Misaligned with the work they once loved.",
    pattern: card1Pattern,
    // body: awaiting copy from the client — renders between the headline and
    // the star icon once supplied. Figma has no body text for cards 1-3.
    body: null,
  },
  {
    key: "noise",
    text: "Surrounded by noise, but unclear about direction.",
    pattern: card23Pattern,
    body: null,
  },
  {
    key: "accomplished",
    text: "Accomplished on paper, but disconnected inside.",
    pattern: card23Pattern,
    body: null,
  },
  {
    key: "legacy",
    legacy: true,
    pattern: legacyPattern,
    body: null,
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
 * Decorative pattern. Figma rotates both assets -90deg (and mirrors the card
 * ones), so the artwork is authored at the pre-rotation size and rotated about
 * its own centre inside a box of the post-rotation size. Safe to do in CSS
 * here precisely because the deck is fixed-px — nothing rescales underneath it.
 */
function DeckPattern({ src, box, art, mirrored }) {
  return (
    <div className="pointer-events-none absolute" style={box}>
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{
          ...art,
          transform: `translate(-50%, -50%) rotate(-90deg)${
            mirrored ? " scaleY(-1)" : ""
          }`,
        }}
      />
    </div>
  );
}

/** Cards 1-3, at Figma's exact offsets (72px gutter, headline at y=70). */
function DeckCardBody({ card }) {
  return (
    <div className="relative h-full">
      <DeckPattern
        src={card.pattern}
        box={{ left: 336, top: 185, width: 184.292, height: 316 }}
        art={{ width: 316, height: 184.292 }}
        mirrored
      />
      <div className="relative px-[72px] pt-[70px]">
        <p className="max-w-[298px] text-[40px] leading-[1.26] font-bold text-white">
          {card.text}
        </p>
        {card.body && (
          <p className="mt-5 max-w-[298px] text-[21px] leading-[1.3] text-white/90">
            {card.body}
          </p>
        )}
        <CircleStar className="mt-6" />
      </div>
    </div>
  );
}

/** Card 4. Copy is left-aligned at x=64; only the star is centred. */
function DeckLegacyBody({ card }) {
  return (
    <div className="relative h-full">
      <DeckPattern
        src={card.pattern}
        box={{ left: -90, top: 340, width: 660, height: 165 }}
        art={{ width: 165, height: 660 }}
      />
      <div className="relative pt-[86px] pr-[53px] pl-[64px]">
        <p className="text-[31px] leading-[1.1] font-bold text-white">
          Sustainable Legacy
        </p>
        {/* Figma separates these with an empty line, i.e. one 1.1 line-height. */}
        <p className="mt-[34px] max-w-[363px] text-[31px] leading-[1.1] text-white">
          <span className="font-bold">A presence</span> that outlasts titles and{" "}
          <span className="font-bold">keeps you whole</span>
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
              {card.legacy ? (
                <DeckLegacyBody card={card} />
              ) : (
                <DeckCardBody card={card} />
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
    <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue px-7 py-8">
      {card.legacy ? (
        <>
          <p className="text-[26px] leading-[1.1] font-bold text-white">
            Sustainable Legacy
          </p>
          <p className="mt-5 text-[26px] leading-[1.1] text-white">
            <span className="font-bold">A presence</span> that outlasts titles
            and <span className="font-bold">keeps you whole</span>
          </p>
          <CircleStar className="mt-8" />
        </>
      ) : (
        <>
          <p className="text-[28px] leading-[1.26] font-bold text-white">
            {card.text}
          </p>
          {card.body && (
            <p className="mt-4 text-[18px] leading-[1.3] text-white/90">
              {card.body}
            </p>
          )}
          <CircleStar className="mt-6" />
        </>
      )}
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
