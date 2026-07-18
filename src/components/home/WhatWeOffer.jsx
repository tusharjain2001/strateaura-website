import PillButton from "../ui/PillButton";
import { Sparkle } from "../ui/Icons";
import offerWoman from "../../assets/offer-woman.png";
import auraLeft from "../../assets/aura-left-frameworks.svg";

const BENEFITS = [
  "Reconnect with your energy and purpose",
  "Make aligned decisions with lasting impact",
  "Shape your presence as power, not performance",
  "Move from mental overload to focused elevation",
];

export default function WhatWeOffer() {
  return (
    <section className="relative h-[859px] w-[1440px] overflow-hidden">
      {/* soft golden wash + left aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c99400]/25 to-[#fffdf7]" />
      <img
        src={auraLeft}
        alt=""
        className="pointer-events-none absolute top-[-318px] left-[-316px] size-[636px] opacity-60"
      />

      {/* Arched portrait */}
      <div className="absolute top-0 left-0 h-[859px] w-[625px] overflow-hidden rounded-t-[312px]">
        <img src={offerWoman} alt="A StrateAura participant" className="size-full object-cover" />
      </div>

      {/* Copy column */}
      <h2 className="absolute top-[77px] left-[744px] text-[35px] font-bold text-gold">
        What We Offer
      </h2>
      <p className="absolute top-[136px] left-[744px] w-[550px] text-[23px] leading-normal text-black/60">
        We are not a content provider. We are a learning space for those ready to
        design how they lead, live, and impact.
      </p>
      <h3 className="absolute top-[266px] left-[744px] w-[550px] text-[24px] font-bold text-gold">
        Our programs help you:
      </h3>

      <ul className="absolute top-[315px] left-[749px]">
        {BENEFITS.map((item) => (
          <li key={item} className="flex h-[48px] items-center gap-[11px]">
            <Sparkle className="size-[19px] shrink-0 text-gold" />
            <span className="text-[24px] text-black/60">{item}</span>
          </li>
        ))}
      </ul>

      {/* Golden CTA band */}
      <div className="absolute top-[561px] left-[418px] flex h-[233px] w-[948px] flex-col justify-center gap-6 rounded-[4px] bg-gold px-[58px]">
        <Sparkle className="absolute top-[-18px] left-[-18px] size-[36px] text-gold" />
        <p className="w-[813px] text-[24px] leading-normal text-white">
          Whether you're navigating leadership fatigue, career transitions, or
          team dissonance, StrateAura™ equips you to rise from within.
        </p>
        <PillButton
          as="a"
          href="#book"
          variant="creamOutline"
          icon="sparkle"
          className="w-fit"
        >
          Book a Strategic Conversation
        </PillButton>
      </div>
    </section>
  );
}
