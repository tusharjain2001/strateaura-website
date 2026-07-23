import { useEffect, useRef, useState } from "react";
import PillButton from "../ui/PillButton";
import { Sparkle } from "../ui/Icons";
import laurelLeft from "../../assets/belief-laurel-left.svg";
import waveA from "../../assets/problem-wave-a.svg";
import waveB from "../../assets/problem-wave-b.svg";
import waveC from "../../assets/problem-wave-c.svg";
import cornerStar from "../../assets/homepageyellowstar.png";

// Deck geometry from the "Alt/ Home" board (cards 1728:298 / 312 / 325 / 338):
// four 430.9x449.7 cards stacked at a 75.4px step, all the SAME height, a
// collapsed card simply overlapped by the one below it (which is what clips its
// headline mid-line). Exactly one card is open, so the deck height is constant.
const CARD_W = 430.881;
const CARD_H = 449.732;
const PEEK_STEP = 75.4;
const DECK_H = PEEK_STEP * 3 + CARD_H;
const STAR = 32; // corner star, straddles each card's top-right corner

// Scroll choreography (mirrors the sticky card stack on strateaura.com): the
// section pins below the sticky SiteHeader while the page scrolls on for
// TRACK_EXTRA canvas-px; cards 2-4 ride up from under the deck's clip one
// after another, scrubbed 1:1 with the scroll, then the pin releases. At full
// progress every card sits at its Figma position, so the resting design is
// untouched.
const SECTION_H = 796; // the section's designed height, unchanged
const HEADER_H = 74; // sticky SiteHeader height in real (unzoomed) px
const CARD_SCROLL = 400; // canvas px of scroll each arriving card consumes
const TRACK_EXTRA = CARD_SCROLL * (4 - 1); // cards 2-4 arrive on scroll

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
        These <strong className="font-bold">aren&rsquo;t productivity problems.</strong>{" "}
        They&rsquo;re misalignment patterns, and they{" "}
        <strong className="font-bold">don&rsquo;t fix themselves</strong> with
        tactics.
      </>
    ),
    pattern: { src: waveC },
  },
];

function IconCircle({ className = "", style }) {
  return (
    <span
      className={`flex size-[44.88px] items-center justify-center rounded-full bg-cream ${className}`}
      style={style}
    >
      <Sparkle className="size-[32px] text-gold" />
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
        style={{ left: 0, top: 291.74, width: 430.881, height: 158.324 }}
      >
        <img
          src={src}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: 158.324,
            height: 430.881,
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: 301.62, top: 166.07, width: 165.433, height: 283.661 }}
    >
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none"
        style={{
          width: 283.661,
          height: 165.433,
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
        <p className="relative ml-[57.45px] w-[325.85px] pt-[77.2px] text-[22px] leading-[1.1] text-white">
          {card.body}
        </p>
        <IconCircle
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 336 }}
        />
      </div>
    );
  }
  return (
    <div className="relative h-full">
      <CardPattern {...card.pattern} />
      <div className="relative pt-[63px] pl-[64.6px]">
        <p className="w-[267px] text-[35.9px] leading-[1.26] font-bold text-white">
          {card.title}
        </p>
        <IconCircle className="mt-[27px]" />
      </div>
    </div>
  );
}

export default function ProblemWeAddress() {
  const [active, setActive] = useState(CARDS.length - 1); // last card open by default

  const trackRef = useRef(null);
  // 0..1 across TRACK_EXTRA; starts at 1 (deck fully assembled, never scrubs)
  // when the user prefers reduced motion.
  const [progress, setProgress] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0,
  );
  const [scale, setScale] = useState(1); // the canvas zoom factor

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect(); // real px, zoom applied
      if (!rect.width) return; // display:none — the mobile tree is showing
      const s = rect.width / 1440;
      setScale(s);
      const p = (HEADER_H - rect.top) / (TRACK_EXTRA * s);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    queue();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, []);

  // Card 1 is on stage from the start; card i of 2-4 rises during its third of
  // the track. arrival = 0 fully below the deck's clip, 1 seated at its top.
  const arrival = CARDS.map((_, i) =>
    i === 0 ? 1 : Math.min(1, Math.max(0, progress * 3 - (i - 1))),
  );

  // Stack the cards: a collapsed card advances the offset by PEEK_STEP, the
  // open one by its full height.
  const tops = [];
  let y = 0;
  for (let i = 0; i < CARDS.length; i++) {
    tops.push(y);
    y += i === active ? CARD_H : PEEK_STEP;
  }

  return (
    // The scroll track: taller than the section by the distance the pin
    // consumes. The sticky wrapper holds the designed 796px section, which
    // pins below the SiteHeader (74 real px ÷ zoom = canvas px) while the
    // cards arrive, then releases.
    <section
      ref={trackRef}
      className="relative w-[1440px]"
      style={{ height: SECTION_H + TRACK_EXTRA }}
    >
      <div className="sticky" style={{ top: HEADER_H / scale }}>
        {/* The board hangs everything off the top card (1728:298), so the
            section starts flush with the deck and the copy column hangs
            below it. */}
        <div className="relative h-[796px] w-[1440px] overflow-hidden">
          <img
            src={laurelLeft}
            alt=""
            className="pointer-events-none absolute top-[17px] left-[-44px] h-[631px] w-[660px] opacity-90"
          />

          <div className="absolute top-[64.63px] left-[195px] w-[364px] text-[30px] leading-[1.2] font-bold text-navy">
            The Problem
            <br />
            We Address
          </div>
          {/* 1728:296 — 16px light in Figma's 340.2 box */}
          <p className="absolute top-[157.99px] left-[195px] w-[340.2px] text-[16px] leading-[1.2] font-light text-black">
            We live in a world of constant doing, chasing visibility, metrics,
            and motion. But too many leaders feel
          </p>

          {/* Stacked accordion — click a card to bring it to full height.
              Clicking the open card is a no-op: closing it would leave no card
              expanded and a 336px hole in the stack. */}
          <div
            className="absolute top-0 left-[655.28px]"
            style={{ width: CARD_W, height: DECK_H }}
          >
            {/* Clips the deck to its constant height: when a card other than
                the last is open, the trailing card would hang past the bottom
                at its full 501px. */}
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
                      // Ride in from just below the deck's clip (the extra
                      // 24px keeps the card's upward shadow clipped too);
                      // scrubbed by the scroll, so no transition — top keeps
                      // its 500ms ease.
                      transform:
                        arrival[i] < 1
                          ? `translateY(${(1 - arrival[i]) * (DECK_H - tops[i] + 24)}px)`
                          : undefined,
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

            {/* Corner stars sit outside the clipping wrapper so they can
                straddle each card's top-right corner — centred on the corner,
                half outside. */}
            {CARDS.map((card, i) => (
              <img
                key={`${card.key}-star`}
                src={cornerStar}
                alt=""
                className="pointer-events-none absolute z-20 max-w-none transition-[top,opacity] duration-500 ease-in-out"
                style={{
                  top: tops[i] - STAR / 2,
                  left: CARD_W - STAR / 2,
                  width: STAR,
                  height: STAR,
                  // The stars sit outside the deck's clip, so they can't ride
                  // in with their card — they fade in once it lands instead.
                  opacity: arrival[i] < 1 ? 0 : 1,
                }}
              />
            ))}
          </div>

          <PillButton
            as="a"
            href="#solutions"
            variant="goldOutlineWhite"
            icon="sparkle"
            size="xs"
            className="absolute top-[289.95px] left-[195px]"
          >
            Our Solutions
          </PillButton>
        </div>
      </div>
    </section>
  );
}
