import beliefLaurel from "../../assets/belief-laurel-right.svg";

export default function Belief() {
  return (
    // The band itself is 276 tall (1728:283); the rest of the section is the
    // 136px of air the board leaves before the Problem deck starts.
    <section className="relative h-[412px] w-[1440px]">
      {/* golden band — linear-gradient(270deg, #CD9700, #FFEDBD) at 40% (Figma) */}
      <div className="absolute top-0 left-0 h-[276px] w-[1440px] opacity-40 bg-[linear-gradient(270deg,#CD9700_0%,#FFEDBD_100%)]" />

      <img
        src={beliefLaurel}
        alt=""
        className="pointer-events-none absolute top-[-39px] left-[976px] h-[315px] w-[384px] opacity-90"
      />

      {/* 1748:2 — a 724x87 row at y 94, gap 145, items-center. The centring is
          what keeps the two columns optically flush: at the designer's 16px the
          body block is shorter than the 30px heading, so top-aligning them left
          it floating ~9px high. The heading box is pinned to Figma's 113 so the
          body keeps its distance from it despite Inter's narrower "Belief".

          Left inset is 158, not the board's 136: the client wants this column
          flush with the framework cards in the section above. The whole row
          shifts, so the 145 gap holds and the body starts at 416. */}
      <div className="absolute top-[87px] left-[158px] flex h-[87px] w-[724px] items-center gap-[145px]">
        <h2 className="w-[113px] shrink-0 text-[30px] leading-[1.2] font-bold text-gold">
          Our
          <br />
          Belief
        </h2>
        {/* 1728:285 — Figma's 466 box */}
        <p className="w-[466px] text-[16px] leading-[1.2] font-light text-black/65">
          Real growth begins with the courage to pause. To think again, To lead
          from the inside out, with energy, intention, and presence.
        </p>
      </div>
    </section>
  );
}
