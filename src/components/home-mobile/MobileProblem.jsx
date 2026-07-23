import { useEffect, useRef, useState } from "react";
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

// Scroll choreography, mirroring the desktop section: the deck pins below the
// sticky header while the page scrolls on for TRACK_EXTRA px; cards 2-4 ride
// up from under the deck's clip one after another, scrubbed 1:1 with the
// scroll, then the pin releases. At full progress the deck is exactly the
// resting design and the tap-accordion takes over. The heading block above
// stays in normal flow — only the deck pins.
const HEADER_H = 64; // sticky SiteHeader height below lg
const PIN_TOP = HEADER_H + 16; // where the deck pins, real px
const CARD_SCROLL = 320; // px of scroll each arriving card consumes
const TRACK_EXTRA = CARD_SCROLL * (4 - 1); // cards 2-4 arrive on scroll

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

  const trackRef = useRef(null);
  // 0..1 across TRACK_EXTRA; starts at 1 (deck fully assembled, never scrubs)
  // when the user prefers reduced motion.
  const [progress, setProgress] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0,
  );
  const [vh, setVh] = useState(0); // viewport height, for the ride-in start

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width) return; // display:none — the desktop canvas is showing
      setVh(window.innerHeight);
      const p = (PIN_TOP - rect.top) / TRACK_EXTRA;
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
  // the track. arrival = 0 parked below the screen, 1 seated at its top.
  const arrival = CARDS.map((_, i) =>
    i === 0 ? 1 : Math.min(1, Math.max(0, progress * 3 - (i - 1))),
  );

  // Each card rides in from just below the viewport (like the reference site,
  // where the cards are in normal flow and scroll in from off-screen) instead
  // of materialising at the deck's clip edge. The old below-the-clip distance
  // is the floor so the cards stay hidden before the first measure runs.
  const parkDist = (i) =>
    Math.max(vh - PIN_TOP - tops[i] + 40, DECK_H - tops[i] + 24);

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

        {/* Scroll track: taller than the deck by the distance the pin
            consumes. The sticky wrapper pins the deck below the header while
            cards 2-4 ride in, then releases. */}
        <div
          ref={trackRef}
          className="relative w-full"
          style={{ height: DECK_H + TRACK_EXTRA }}
        >
          <div className="sticky" style={{ top: PIN_TOP }}>
            {/* Deck. At rest the wrapper clips it to a constant height (when a
                card other than the last is open, the trailing card hangs past
                the bottom). While the scroll scrub is running it stays
                unclipped so the arriving cards are visible all the way up
                from the bottom of the screen. */}
            <div
              className="relative w-full"
              style={{
                height: DECK_H,
                overflow: progress < 1 ? "visible" : "hidden",
              }}
            >
              {CARDS.map((card, i) => (
                <button
                  key={card.key}
                  type="button"
                  aria-expanded={active === i}
                  onClick={() => setActive(i)}
                  style={{
                    top: tops[i],
                    height: CARD_H,
                    zIndex: i,
                    // Scrubbed by the scroll, so no transition — top keeps
                    // its 500ms ease.
                    transform:
                      arrival[i] < 1
                        ? `translateY(${(1 - arrival[i]) * parkDist(i)}px)`
                        : undefined,
                  }}
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
          </div>
        </div>
      </MobileContainer>
    </section>
  );
}
