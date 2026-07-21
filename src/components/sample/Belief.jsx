import wheat from "../../assets/sample/belief-wheat.svg";

/**
 * Our Belief footer band (Figma nodes 1638:3954-3958). Full-bleed gold gradient
 * (light→dark, 40% opacity) with the "Our Belief" heading, the belief statement,
 * and a white wheat motif bleeding from the right edge.
 */
export default function Belief() {
  return (
    <section className="relative mt-[100px] overflow-hidden lg:mt-[165px]">
      {/* Band background: light-gold → dark-gold at 40% */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffedbd_0%,#cd9700_100%)] opacity-40" />

      {/* Wheat motif, bottom-right */}
      <img
        src={wheat}
        alt=""
        className="pointer-events-none absolute right-[2%] bottom-0 z-0 h-[180px] w-auto max-w-none sm:h-[240px] md:h-[300px] lg:h-[315px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[276px] w-full max-w-[1920px] flex-col justify-center gap-6 px-6 py-14 sm:px-8 md:flex-row md:items-center md:gap-16 lg:px-[136px] lg:py-0 xl:gap-[100px]">
        <h2 className="shrink-0 text-[clamp(2.25rem,2.6vw,50px)] font-bold leading-[1.05] text-gold">
          Our
          <br />
          Belief
        </h2>
        <p className="max-w-[798px] text-[clamp(1rem,1.25vw,24px)] leading-normal font-light text-black/65">
          Real growth begins with the courage to pause. To think again, To lead
          from the inside out, with energy, intention, and presence.
        </p>
      </div>
    </section>
  );
}
