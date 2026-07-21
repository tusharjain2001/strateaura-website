import wheat from "../../assets/new/belief-wheat.svg";

/**
 * Our Belief — Figma nodes 1638:3954-3958. A full-bleed gold band at y 2922
 * (276px tall) with the wheat motif rising above it from y 2883.
 */
export default function NewBelief() {
  return (
    <div className="absolute top-0 left-0 h-[3198px] w-[1920px]">
      {/* 1638:3954 — band, 1920x276 at 40% */}
      <div className="absolute top-[2922px] left-0 h-[276px] w-[1920px] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffedbd_0%,#cd9700_100%)] opacity-40" />
      </div>

      {/* 1638:3957 — 384x315, overlapping the band's top edge */}
      <img
        src={wheat}
        alt=""
        className="pointer-events-none absolute top-[2883px] left-[1449px] h-[315px] w-[384px]"
      />

      {/* 1638:3955 — 538x120 */}
      <h2 className="absolute top-[2996px] left-[136px] w-[538px] text-[50px] leading-[1.2] font-bold text-gold">
        Our
        <br />
        Belief
      </h2>
      {/* 1638:3956 — 798x58 */}
      <p className="absolute top-[3027px] left-[394px] w-[798px] text-[22.4px] leading-[30px] font-light text-black/65">
        Real growth begins with the courage to pause. To think again, To lead
        from the inside out, with energy, intention, and presence.
      </p>
    </div>
  );
}
