import { useState } from "react";
import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import { Sparkle } from "../ui/Icons";
import wave1 from "../../assets/home-mobile/prob-wave-1.svg";
import wave2 from "../../assets/home-mobile/prob-wave-2.svg";
import wave3 from "../../assets/home-mobile/prob-wave-3.svg";
import wave4 from "../../assets/home-mobile/prob-wave-4.svg";

// Deck geometry from Figma node 1434:640 (cards 1434:641 / 655 / 668 / 681).
// Four cards of the SAME height stacked at a 64.82px step: a collapsed card is
// simply overlapped by the one below it, which is what clips its headline
// mid-line in the Figma render. Exactly one card is open, so the deck height
// never changes. Same accordion the desktop section uses, at mobile sizes.
const CARD_H = 386.593;
const PEEK_STEP = 64.82;
const DECK_H = PEEK_STEP * 3 + CARD_H;

// The card column is 370.389px wide in the 402px frame, so every horizontal
// measurement below is expressed as a share of that width and every type size
// as `calc(<share>vw - <share>*32px)` — the container is `100vw - 32px` until
// it caps at 430px, where the clamp takes over at the Figma value.
const TITLE_SIZE = "clamp(23px, calc(8.333vw - 2.67px), 30.866px)";
const BODY_SIZE = "clamp(18px, calc(6.458vw - 2.07px), 23.921px)";

const CARDS = [
  {
    key: "misaligned",
    title: "Misaligned with the work they once loved.",
    wave: wave1,
  },
  {
    key: "noise",
    title: "Surrounded by noise, but unclear about direction.",
    wave: wave2,
  },
  {
    key: "accomplished",
    title: "Accomplished on paper, but disconnected inside.",
    wave: wave3,
  },
  { key: "answer", solution: true, wave: wave4 },
];

// 38.582px cream disc with a gold sparkle (Figma nodes 1434:644/657/670/682).
function IconCircle({ className = "" }) {
  return (
    <span
      className={`flex size-[38.582px] shrink-0 items-center justify-center rounded-full bg-cream ${className}`}
    >
      <Sparkle className="size-[20px] text-gold" />
    </span>
  );
}

/**
 * Decorative ellipse-swirl artwork. Cards 1-3 draw it horizontally
 * (243.837x142.206) and apply -rotate-90 -scale-y-100, parking the box 47.09px
 * past the card's right edge at y=142.75. Card 4 draws it vertically
 * (136.096x370.387) rotated +90, spanning the full card width at y=250.79.
 * Each image spins about its own centre inside a box of the post-rotation size.
 */
function CardWave({ src, solution }) {
  if (solution) {
    return (
      <div
        className="pointer-events-none absolute left-[16px] w-full"
        style={{ top: 250.79, height: 136.096 }}
      >
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: 136.096,
            height: 370.387,
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="pointer-events-none absolute"
      style={{ right: -47.09, top: 142.75, width: 142.206, height: 243.837 }}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{
          width: 243.837,
          height: 142.206,
          transform: "translate(-50%, -50%) rotate(-90deg) scaleY(-1)",
        }}
      />
    </div>
  );
}

function CardBody({ card }) {
  if (card.solution) {
    // Node 1434:693 — 75.62% wide, centred, regular weight with bold phrases.
    return (
      <div className="relative h-full pt-[66px]">
        <CardWave src={card.wave} solution />
        <p
          className="relative mx-auto w-[75.62%] leading-[1.1] text-white"
          style={{ fontSize: BODY_SIZE }}
        >
          These <span className="font-bold">aren&rsquo;t productivity problems.</span>{" "}
          They&rsquo;re misalignment patterns, and they{" "}
          <span className="font-bold">don&rsquo;t fix themselves</span> with
          tactics.
        </p>
        <IconCircle className="relative mx-auto mt-[36px]" />
      </div>
    );
  }
  return (
    <div className="relative h-full pt-[54px] pl-[19.3%]">
      <CardWave src={card.wave} />
      <p
        className="relative w-[61.95%] leading-[1.26] font-bold text-white"
        style={{ fontSize: TITLE_SIZE }}
      >
        {card.title}
      </p>
      <IconCircle className="relative mt-[24px]" />
    </div>
  );
}

/**
 * "The Problem We Address" — Figma node 1434:629.
 *
 * Heading + intro + "Our Solutions" pill, then the stacked card deck. The
 * fourth card (the answer) is open by default, exactly as the Figma render
 * shows it; tapping a collapsed card brings it forward.
 */
export default function MobileProblem() {
  const [active, setActive] = useState(CARDS.length - 1);

  // A collapsed card advances the offset by PEEK_STEP, the open one by its
  // full height — so the deck's total height is constant.
  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? CARD_H : PEEK_STEP;
  }

  return (
    <section className="bg-white py-[48px]">
      <MobileContainer className="flex flex-col items-center gap-[24px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <div className="flex w-full flex-col items-start gap-[8px]">
            <h2 className="text-[28px] leading-normal font-bold text-navy">
              The Problem
              <br />
              We Address
            </h2>
            <p className="text-[16px] leading-normal text-black">
              We live in a world of constant doing, chasing visibility, metrics,
              and motion. But too many leaders feel
            </p>
          </div>

          <MobilePill as="a" href="#solutions" variant="goldOutline" className="bg-white">
            Our Solutions
          </MobilePill>
        </div>

        {/* Deck. The wrapper clips it to a constant height: when a card other
            than the last is open, the trailing card hangs past the bottom. */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: DECK_H }}
        >
          {CARDS.map((card, i) => (
            <button
              key={card.key}
              type="button"
              aria-expanded={active === i}
              onClick={() => setActive(i)}
              style={{ top: tops[i], height: CARD_H, zIndex: i }}
              className={`absolute left-0 w-full cursor-pointer overflow-hidden rounded-[5.999px] text-left shadow-[0_-6px_16px_rgba(0,0,0,0.12)] transition-[top] duration-500 ease-in-out ${
                card.solution
                  ? "bg-gradient-to-b from-gold to-gold-light"
                  : "bg-gradient-to-b from-gold to-gold-dark"
              }`}
            >
              <CardBody card={card} />
            </button>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
