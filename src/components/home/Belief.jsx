import beliefLaurel from "../../assets/belief-laurel-right.svg";

export default function Belief() {
  return (
    <section className="relative h-[276px] w-[1440px]">
      {/* golden band — linear-gradient(270deg, #CD9700, #FFEDBD) at 40% (Figma) */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(270deg,#CD9700_0%,#FFEDBD_100%)]" />

      <img
        src={beliefLaurel}
        alt=""
        className="pointer-events-none absolute top-[-39px] left-[976px] h-[315px] w-[384px] opacity-90"
      />

      {/* Alt/ Home board (1728:282): both columns start at y 94 in the band,
          the heading is 32px and the body 24px. */}
      <h2 className="absolute top-[94px] left-[136px] text-[32px] leading-normal font-bold text-gold">
        Our
        <br />
        Belief
      </h2>
      {/* Figma sets this in 3 lines inside a 466 box, but Inter runs wider than
          the board's face and reflows it to 4. The breaks are pinned to Figma's
          and the box widened to hold them — it still clears the laurel, which
          starts at x 976. */}
      <p className="absolute top-[94px] left-[394px] w-[560px] text-[24px] leading-normal font-light text-black/65 [&>span]:block [&>span]:whitespace-nowrap">
        <span>Real growth begins with the courage to</span>
        <span>pause. To think again, To lead from the inside</span>
        <span>out, with energy, intention, and presence.</span>
      </p>
    </section>
  );
}
