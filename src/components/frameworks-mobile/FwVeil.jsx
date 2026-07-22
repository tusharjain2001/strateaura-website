import { useState } from "react";
import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import FwTag from "./FwTag";
import { Sparkle } from "../ui/Icons";
import energyPattern from "../../assets/frameworks/veil-energy-pattern.svg";
import emotionalPattern from "../../assets/frameworks/veil-emotional-pattern.svg";
import innerPattern from "../../assets/frameworks/veil-inner-pattern.svg";
import legacyPattern from "../../assets/frameworks/veil-legacy-pattern.svg";
import cornerStar from "../../assets/frameworks/framework3bluestar.png";

// The mobile deck (Figma node 1296:4671) is the desktop deck at 0.771 scale:
// 370x386.19 cards on a 64.75px peek step, and every pattern box below is the
// desktop box multiplied by that same factor — Figma's own numbers for the
// Legacy card (-69.375, 508.75x127.19) confirm the ratio exactly.
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
      box: { left: 0, top: 250.5, width: 370, height: 135.95 },
      art: { width: 135.95, height: 370 },
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
      box: { left: -32.4, top: 293.3, width: 435.6, height: 83.3 },
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
      box: { left: -0.4, top: 273.3, width: 370.8, height: 124.1 },
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
      box: { left: -69.375, top: 262.1, width: 508.75, height: 127.19 },
      art: { width: 127.19, height: 508.75 },
      rotate: -90,
    },
  },
];

const CARD_H = 386.19;
const PEEK_STEP = 64.75;
const DECK_H = PEEK_STEP * (CARDS.length - 1) + CARD_H;
// Exported from Figma at 27.47x29.52 (not square) and centred on the card's
// top-right corner, so half of it hangs over the white page — which is why the
// asset is navy rather than the white of the in-card icon.
const STAR_W = 27.47;
const STAR_H = 29.52;

/**
 * Decorative pattern. Where Figma rotates the asset it is authored at the
 * pre-rotation size (`art`) and spun about its own centre inside a box of the
 * post-rotation size (`box`).
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

/**
 * VEIL deck — same interaction as the desktop stack: card `i` sits at the
 * running offset, the open card advances it by its full height and a collapsed
 * one by PEEK_STEP, so later cards paint over earlier ones and clip their
 * headlines mid-line exactly as the design file shows.
 */
function Deck() {
  const [active, setActive] = useState(CARDS.length - 1); // Legacy open by default

  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? CARD_H : PEEK_STEP;
  }

  return (
    <div className="relative" style={{ height: `${DECK_H}px` }}>
      {/* Keeps the deck at its constant height when a card other than the last
          one is open. */}
      <div className="absolute inset-0 overflow-hidden">
        {CARDS.map((card, i) => (
          <button
            key={card.key}
            type="button"
            aria-expanded={active === i}
            onClick={() => setActive(i)}
            style={{ top: `${tops[i]}px`, height: `${CARD_H}px`, zIndex: i }}
            className="absolute inset-x-0 cursor-pointer overflow-hidden rounded-[8px] bg-gradient-to-b from-navy to-blue text-left shadow-[0_-6px_16px_rgba(0,0,0,0.18)] transition-[top] duration-500 ease-in-out"
          >
            <div className="relative h-full">
              <DeckPattern {...card.pattern} />
              {/* The open card's copy sits at Figma's 66px. A collapsed card
                  lifts its copy to 44px so the top of its headline peeks out of
                  the 64.75px sliver and gets clipped by the card below it —
                  which is what the design file shows at every fold. */}
              <div
                className={`relative pr-[40px] pl-[49px] transition-[padding] duration-500 ease-in-out ${
                  active === i ? "pt-[66px]" : "pt-[54px]"
                }`}
              >
                <p className="text-[22px] leading-[1.1] font-bold text-white">
                  {card.title}
                </p>
                {/* Figma separates these with one empty line. */}
                <p className="mt-[24px] max-w-[275px] text-[22px] leading-[1.1] text-white">
                  {card.body}
                </p>
              </div>
              <span
                className="absolute left-1/2 flex size-[38.54px] -translate-x-1/2 items-center justify-center rounded-full bg-white"
                style={{ top: 288.29 }}
              >
                <Sparkle className="size-[21px] text-navy" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Outside the clipping wrapper so each star can straddle its card's
          top-right corner. */}
      {CARDS.map((card, i) => (
        <img
          key={`${card.key}-star`}
          src={cornerStar}
          alt=""
          className="pointer-events-none absolute z-20 max-w-none transition-[top] duration-500 ease-in-out"
          style={{
            top: `${tops[i] - STAR_H / 2}px`,
            right: `${-STAR_W / 2}px`,
            width: `${STAR_W}px`,
            height: `${STAR_H}px`,
          }}
        />
      ))}
    </div>
  );
}

/** Framework 3 — Figma node 1296:4654. */
export default function FwVeil() {
  return (
    <section className="bg-white pt-[61px]">
      <MobileContainer className="[--pill-col:calc(min(100vw,430px)-32px)]">
        {/* Figma's mobile frame labels this "FRAMEWORK 2" (node 1296:4658),
            same as the 5Cs section above it. That is a typo in the file — this
            is the third framework and the desktop page says FRAMEWORK 3. */}
        <FwTag>FRAMEWORK 3</FwTag>

        <h2 className="mt-[16px] text-[25px] leading-[29px] font-bold text-navy-2">
          VEIL&trade; Leadership System
        </h2>
        <p className="mt-[16px] text-[18px] leading-normal text-black/60 italic">
          Lead Without Losing Yourself
        </p>

        <p className="mt-[38px] text-[14px] leading-[18px] font-bold tracking-[0.5px] text-gold uppercase">
          Core Concept
        </p>
        <div className="mt-[10px] space-y-[18px] text-[15px] leading-[20px] text-black/60">
          <div>
            <p className="font-bold">
              The VEIL Leadership System is not a mindset model.
            </p>
            <p>
              It is a strategic health architecture - a scientifically grounded
              framework that addresses what sustained professional pressure
              does to women&rsquo;s biological, cognitive, and identity systems,
              and builds the internal infrastructure that makes sustainable
              leadership possible.
            </p>
          </div>
          <p>
            VEIL operates through three interconnected constructs:{" "}
            <strong className="font-bold">
              Capacity Regulation, Identity Coherence, Authority Execution.
            </strong>
          </p>
          <p>
            The VEIL framework is delivered through{" "}
            <strong className="font-bold">
              UNVEIL, a 12-week cohort program
            </strong>{" "}
            for institutions, and through{" "}
            <strong className="font-bold">the online pathway</strong>{" "}
            for individual women. All instruments used in VEIL are
            internationally validated with Arabic-validated versions for Gulf
            professional populations.
          </p>
        </div>

        <MobilePill
          as="a"
          href="/veil"
          variant="navyOutline"
          size="smFluid"
          className="mt-[16px] max-w-full"
        >
          Explore VEIL&trade; — The Full Program
        </MobilePill>

        <div className="mt-[36px]">
          <Deck />
        </div>
      </MobileContainer>
    </section>
  );
}
