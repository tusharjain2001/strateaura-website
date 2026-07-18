import { useState } from "react";
import PillButton from "../ui/PillButton";
import { Sparkle } from "../ui/Icons";
import laurelLeft from "../../assets/belief-laurel-left.svg";
import waveA from "../../assets/problem-wave-a.svg";
import waveB from "../../assets/problem-wave-b.svg";
import waveC from "../../assets/problem-wave-c.svg";

// Each card shows its own statement when expanded. Line breaks on cards 1-3 are
// forced to match the Figma wrap exactly (the Inter fallback wraps differently).
const CARDS = [
  {
    body: (
      <>
        Misaligned with
        <br />
        the work they
        <br />
        once loved.
      </>
    ),
    bold: true,
    wave: waveA,
  },
  {
    body: (
      <>
        Surrounded by
        <br />
        noise, but
        <br />
        unclear about
        <br />
        direction.
      </>
    ),
    bold: true,
    wave: waveB,
  },
  {
    body: (
      <>
        Accomplished
        <br />
        on paper, but
        <br />
        disconnected
        <br />
        inside.
      </>
    ),
    bold: true,
    wave: waveC,
  },
  {
    centered: true,
    body: (
      <>
        These <span className="font-bold">aren't</span> productivity{" "}
        <span className="font-bold">problems.</span> They're misalignment
        patterns, and they{" "}
        <span className="font-bold">don't fix themselves</span> with tactics.
      </>
    ),
    wave: waveB,
  },
];

// Deck geometry (px)
const PEEK = 72; // vertical step for a collapsed card → cards overlap into a stack
const COLLAPSED_H = 96; // rendered height of a collapsed card
const EXPANDED_H = 440;

function IconCircle() {
  return (
    <span className="flex size-[50px] items-center justify-center rounded-full bg-cream">
      <Sparkle className="size-[26px] text-gold" />
    </span>
  );
}

export default function ProblemWeAddress() {
  const [active, setActive] = useState(CARDS.length - 1); // last card open by default

  // Stack the cards: each collapsed card advances by PEEK, the open one by EXPANDED_H.
  const tops = CARDS.map((_, i) =>
    CARDS.slice(0, i).reduce(
      (top, _card, j) => top + (j === active ? EXPANDED_H : PEEK),
      0,
    ),
  );

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

      {/* Stacked accordion — click a card to expand/collapse it */}
      <div className="absolute top-[140px] left-[735px] h-[690px] w-[480px]">
        {CARDS.map((card, i) => {
          const isOpen = active === i;
          return (
            <button
              key={i}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActive(isOpen ? null : i)}
              style={{ top: tops[i], height: isOpen ? EXPANDED_H : COLLAPSED_H, zIndex: i }}
              className={`absolute left-0 w-[480px] overflow-hidden rounded-[7.774px] text-left text-white shadow-[0_-6px_16px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out ${
                isOpen ? "bg-gradient-to-b from-gold to-gold-light" : "bg-gradient-to-b from-gold to-gold-dark"
              }`}
            >
              <img
                src={card.wave}
                alt=""
                className="pointer-events-none absolute right-0 bottom-0 opacity-50"
              />
              {/* Expanded content (collapsed cards stay plain — no text shown).
                  Last card: statement centred, 24px, icon at bottom-centre.
                  Others: title top-left, 30px bold, icon below. */}
              {card.centered ? (
                <div
                  className={`transition-opacity duration-300 ${isOpen ? "opacity-100 delay-200" : "opacity-0"}`}
                >
                  <p className="absolute top-[86px] left-1/2 w-[320px] -translate-x-1/2 text-[24px] leading-[1.35]">
                    {card.body}
                  </p>
                  <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2">
                    <IconCircle />
                  </div>
                </div>
              ) : (
                <div
                  className={`absolute top-[40px] left-[44px] flex w-[300px] flex-col items-start gap-[28px] transition-opacity duration-300 ${
                    isOpen ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  <p className={`text-[30px] leading-[1.2] ${card.bold ? "font-bold" : ""}`}>
                    {card.body}
                  </p>
                  <IconCircle />
                </div>
              )}
            </button>
          );
        })}
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
