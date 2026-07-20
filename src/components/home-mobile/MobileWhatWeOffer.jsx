import MobileContainer from "./MobileContainer";
import { Sparkle } from "../ui/Icons";

// Figma node 1434:594 — the four sparkle-bulleted benefits, one per 2em line.
const BENEFITS = [
  "Reconnect with your energy and purpose",
  "Make aligned decisions with lasting impact",
  "Shape your presence as power, not performance",
  "Move from mental overload to focused elevation",
];

/**
 * "What We Offer" block — Figma node 1434:572. Full-bleed cream/gold gradient
 * panel (node 1434:573 is the gradient flipped on Y at 30% opacity), with the
 * copy stack inset 16px like the rest of the page.
 */
export default function MobileWhatWeOffer() {
  return (
    <section className="relative overflow-hidden bg-white py-[72px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffdf7] to-[#c99400] opacity-30"
      />

      <MobileContainer className="relative z-10">
        <h2 className="text-[28px] leading-normal font-bold text-gold">
          What We Offer
        </h2>
        <p className="mt-[16px] text-[16px] leading-normal whitespace-pre-wrap text-black/60">
          {"We are not a content provider.  We are a learning space for those ready to design how they lead, live, and impact."}
        </p>

        <p className="mt-[25px] text-[20px] leading-normal font-bold text-gold">
          Our programs help you:
        </p>

        <ul className="mt-[8px]">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-[7px] text-[16px] leading-[2] text-black/60"
            >
              <Sparkle className="size-[12.709px] shrink-0 text-gold" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </MobileContainer>
    </section>
  );
}
