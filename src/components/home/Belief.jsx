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

      {/* Alt/ Home board (1748:2): both columns start at y 94 in the band. The
          type follows the designer's page rule — 30px header, 16px sub-head. */}
      <h2 className="absolute top-[94px] left-[136px] text-[30px] leading-[1.2] font-bold text-gold">
        Our
        <br />
        Belief
      </h2>
      {/* 1728:285 — Figma's 466 box */}
      <p className="absolute top-[94px] left-[394px] w-[466px] text-[16px] leading-[1.2] font-light text-black/65">
        Real growth begins with the courage to pause. To think again, To lead
        from the inside out, with energy, intention, and presence.
      </p>
    </section>
  );
}
