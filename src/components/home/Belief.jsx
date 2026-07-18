import beliefLaurel from "../../assets/belief-laurel-right.svg";

export default function Belief() {
  return (
    <section className="relative h-[276px] w-[1440px]">
      {/* faint golden band */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#ffedbd] to-[#cd9700] opacity-40" />

      <img
        src={beliefLaurel}
        alt=""
        className="pointer-events-none absolute top-[-39px] left-[976px] h-[315px] w-[384px] opacity-90"
      />

      <h2 className="absolute top-[81px] left-[136px] text-[50px] leading-tight font-bold text-gold">
        Our
        <br />
        Belief
      </h2>
      <p className="absolute top-[94px] left-[394px] w-[466px] text-[24px] leading-normal font-light text-black/65">
        Real growth begins with the courage to pause. To think again, To lead from
        the inside out, with energy, intention, and presence.
      </p>
    </section>
  );
}
