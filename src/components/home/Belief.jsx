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

      <h2 className="absolute top-[76px] left-[136px] text-[50px] leading-[1.2] font-bold text-gold">
        Our
        <br />
        Belief
      </h2>
      <p className="absolute top-[90px] left-[394px] w-[466px] text-[21px] leading-[30px] font-light text-black/65">
        Real growth begins with the courage to pause. To think again, To lead from
        the inside out, with energy, intention, and presence.
      </p>
    </section>
  );
}
