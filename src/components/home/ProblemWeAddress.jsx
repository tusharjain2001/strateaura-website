import PillButton from "../ui/PillButton";
import { Sparkle } from "../ui/Icons";
import laurelLeft from "../../assets/belief-laurel-left.svg";
import waveA from "../../assets/problem-wave-a.svg";
import waveB from "../../assets/problem-wave-b.svg";
import waveC from "../../assets/problem-wave-c.svg";

// Behind-cards of the deck (partly hidden), front-most last.
const CARDS = [
  { text: "Misaligned with the work they once loved.", wave: waveA },
  { text: "Surrounded by noise, but unclear about direction.", wave: waveB },
  { text: "Accomplished on paper, but disconnected inside.", wave: waveB },
];

function IconCircle() {
  return (
    <span className="flex size-[50px] items-center justify-center rounded-full bg-cream">
      <Sparkle className="size-[26px] text-gold" />
    </span>
  );
}

export default function ProblemWeAddress() {
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
      <p className="absolute top-[316px] left-[222px] w-[379px] text-[24px] leading-normal font-light text-black">
        We live in a world of constant doing, chasing visibility, metrics, and
        motion. But too many leaders feel
      </p>

      {/* Card deck */}
      <div className="absolute top-[140px] left-[735px] h-[600px] w-[480px]">
        {CARDS.map((card, i) => (
          <div
            key={card.text}
            style={{ top: i * 84, zIndex: i }}
            className="absolute left-0 h-[501px] w-[480px] overflow-hidden rounded-[7.774px] bg-gradient-to-b from-gold to-gold-dark"
          >
            <p className="absolute top-[78px] left-[72px] w-[297px] text-[40px] leading-[1.26] font-bold text-white">
              {card.text}
            </p>
            <img src={card.wave} alt="" className="pointer-events-none absolute right-0 bottom-0 opacity-60" />
            <div className="absolute top-[251px] left-[72px]">
              <IconCircle />
            </div>
          </div>
        ))}

        {/* Front card — the statement */}
        <div className="absolute top-[252px] left-0 z-10 h-[501px] w-[480px] overflow-hidden rounded-[7.774px] bg-gradient-to-b from-gold to-gold-light">
          <img src={waveC} alt="" className="pointer-events-none absolute right-0 bottom-0 opacity-50" />
          <p className="absolute top-[86px] left-1/2 w-[363px] -translate-x-1/2 text-[31px] leading-[1.1] text-white">
            These <span className="font-bold">aren't</span>{" "}
            <span className="font-bold">productivity problems.</span> They're
            misalignment patterns, and they{" "}
            <span className="font-bold">don't fix themselves</span> with tactics.
          </p>
          <div className="absolute top-[374px] left-1/2 -translate-x-1/2">
            <IconCircle />
          </div>
        </div>
      </div>

      {/* Pagination sparkles */}
      <div className="absolute top-[122px] left-[1197px] flex flex-col gap-[48px]">
        {[0, 1, 2, 3].map((d) => (
          <Sparkle key={d} className="size-[36px] text-gold" />
        ))}
      </div>

      <PillButton
        as="a"
        href="#solutions"
        variant="goldOutlineWhite"
        icon="sparkle"
        className="absolute top-[463px] left-[222px]"
      >
        Our Solutions
      </PillButton>
    </section>
  );
}
