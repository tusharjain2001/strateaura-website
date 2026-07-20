import { useState } from "react";
import PillButton from "../ui/PillButton";
import { Sparkle } from "../ui/Icons";
import laurelLeft from "../../assets/belief-laurel-left.svg";
import waveA from "../../assets/problem-wave-a.svg";
import waveB from "../../assets/problem-wave-b.svg";
import waveC from "../../assets/problem-wave-c.svg";
import cornerStar from "../../assets/homepageyellowstar.png";

// Deck geometry from Figma node 1136:4736 (cards 1136:4937 / 4951 / 4964 /
// 4977). Structurally identical to the VEIL deck on the Frameworks page — four
// 480x501 cards stacked at an 84px step, all the SAME height, a collapsed card
// simply overlapped by the one below it (which is what clips its headline
// mid-line). Exactly one card is open, so the deck height is constant.
const CARD_W = 480;
const CARD_H = 501;
const PEEK_STEP = 84;
const DECK_H = PEEK_STEP * 3 + CARD_H;
const STAR = 36; // corner star, straddles each card's top-right corner

// Cards 1-3 are the problem statements (gold -> gold-dark); card 4 is the
// answer (gold -> gold-light) and uses a different, left-aligned 31px layout.
const CARDS = [
  {
    key: "misaligned",
    title: "Misaligned with the work they once loved.",
    pattern: { src: waveA, rotated: true },
  },
  {
    key: "noise",
    title: "Surrounded by noise, but unclear about direction.",
    pattern: { src: waveB, rotated: true },
  },
  {
    key: "accomplished",
    title: "Accomplished on paper, but disconnected inside.",
    pattern: { src: waveB, rotated: true },
  },
  {
    key: "answer",
    solution: true,
    body: (
      <>
        These{" "}
        <span className="font-bold">aren&rsquo;t productivity problems.</span>{" "}
        They&rsquo;re misalignment patterns, and they{" "}
        <span className="font-bold">don&rsquo;t fix themselves</span> with
        tactics.
      </>
    ),
    pattern: { src: waveC },
  },
];

function IconCircle({ className = "", style }) {
  return (
    <span
      className={`flex size-[50px] items-center justify-center rounded-full bg-cream ${className}`}
      style={style}
    >
      <Sparkle className="size-[26px] text-gold" />
    </span>
  );
}

/**
 * Decorative pattern. Figma draws the card 1-3 artwork horizontally
 * (316x184.292) and applies -rotate-90 -scale-y-100; card 4's is drawn
 * vertically (176.372x480) and rotated +90. Each is spun about its own centre
 * inside a box of the post-rotation size. Safe in CSS because the deck is
 * fixed-px — nothing rescales underneath it.
 */
function CardPattern({ src, rotated }) {
  if (!rotated) {
    return (
      <div
        className="pointer-events-none absolute"
        style={{ left: 0, top: 325, width: 480, height: 176.372 }}
      >
        <img
          src={src}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: 176.372,
            height: 480,
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: 336, top: 185, width: 184.292, height: 316 }}
    >
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{
          width: 316,
          height: 184.292,
          transform: "translate(-50%, -50%) rotate(-90deg) scaleY(-1)",
        }}
      />
    </div>
  );
}

function CardBody({ card }) {
  if (card.solution) {
    return (
      <div className="relative h-full">
        <CardPattern {...card.pattern} />
        {/* Copy is left-aligned at x=64; only the icon is centred. */}
        <p className="relative w-[363px] pt-[86px] pl-[64px] text-[31px] leading-[1.1] text-white">
          {card.body}
        </p>
        <IconCircle
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 374 }}
        />
      </div>
    );
  }
  return (
    <div className="relative h-full">
      <CardPattern {...card.pattern} />
      <div className="relative pt-[70px] pl-[72px]">
        <p className="w-[298px] text-[40px] leading-[1.26] font-bold text-white">
          {card.title}
        </p>
        <IconCircle className="mt-[30px]" />
      </div>
    </div>
  );
}

export default function ProblemWeAddress() {
  const [active, setActive] = useState(CARDS.length - 1); // last card open by default

  // Stack the cards: a collapsed card advances the offset by PEEK_STEP, the
  // open one by its full height.
  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? CARD_H : PEEK_STEP;
  }

  return (
    <section className="relative h-[959px] w-[1440px] overflow-hidden">
      <img
        src={laurelLeft}
        alt=""
        className="pointer-events-none absolute top-[160px] left-[-44px] h-[703px] w-[735px] opacity-90"
      />

      <div className="absolute top-[212px] left-[222px] w-[405px] text-[35px] leading-tight font-bold text-navy">
        The Problem
        <br />
        We Address
      </div>
      <p className="absolute top-[316px] left-[222px] w-[470px] text-[24px] leading-normal font-light text-black [&>span]:block">
        <span className="whitespace-nowrap">We live in a world of constant doing,</span>
        <span className="whitespace-nowrap">chasing visibility, metrics, and</span>
        <span>motion. But too many leaders feel</span>
      </p>

      {/* Stacked accordion — click a card to bring it to full height. Clicking
          the open card is a no-op: closing it would leave no card expanded and
          a 336px hole in the stack. */}
      <div
        className="absolute top-[140px] left-[735px]"
        style={{ width: CARD_W, height: DECK_H }}
      >
        {/* Clips the deck to its constant height: when a card other than the
            last is open, the trailing card would hang past the bottom at its
            full 501px. */}
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
                  top: tops[i],
                  width: CARD_W,
                  height: CARD_H,
                  zIndex: i,
                }}
                className={`absolute left-0 cursor-pointer overflow-hidden rounded-[7.774px] text-left text-white shadow-[0_-6px_16px_rgba(0,0,0,0.12)] transition-[top] duration-500 ease-in-out ${
                  card.solution
                    ? "bg-gradient-to-b from-gold to-gold-light"
                    : "bg-gradient-to-b from-gold to-gold-dark"
                }`}
              >
                <CardBody card={card} />
              </button>
            );
          })}
        </div>

        {/* Corner stars sit outside the clipping wrapper so they can straddle
            each card's top-right corner — centred on the corner, half outside. */}
        {CARDS.map((card, i) => (
          <img
            key={`${card.key}-star`}
            src={cornerStar}
            alt=""
            className="pointer-events-none absolute z-20 max-w-none transition-[top] duration-500 ease-in-out"
            style={{
              top: tops[i] - STAR / 2,
              left: CARD_W - STAR / 2,
              width: STAR,
              height: STAR,
            }}
          />
        ))}
      </div>

      <PillButton
        as="a"
        href="#solutions"
        variant="goldOutlineWhite"
        icon="sparkle"
        className="absolute top-[500px] left-[222px]"
      >
        Our Solutions
      </PillButton>
    </section>
  );
}
