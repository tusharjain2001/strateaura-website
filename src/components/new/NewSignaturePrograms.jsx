import NewPill from "./NewPill";

/**
 * Signature Programs — Figma node 1638:3968 (x 72, y 926, 1780x667).
 *
 * Heading row at y 926 and the flagship card (node 1638:677) at y 1129, its two
 * columns anchored at x 125 and x 1259. The body copy is set 1.3px under
 * Figma's 20px so Inter keeps the design's six lines and block height.
 */
export default function NewSignaturePrograms() {
  return (
    <div className="absolute top-0 left-0 h-[3198px] w-[1920px]">
      {/* 1638:670 — 640x116 */}
      <h2 className="absolute top-[922px] left-[72px] w-[640px] text-[48px] leading-[1.2] font-bold text-navy">
        Signature Programs
        <br />
        (KHDA-certified)
      </h2>
      {/* 1638:671 — 312x64 */}
      <div className="absolute top-[978px] left-[1540px]">
        <NewPill
          href="/programs"
          variant="goldOutline"
          minWidth={312}
          pl={28}
          pr={7}
        >
          View All Programs
        </NewPill>
      </div>

      {/* 1638:677 — flagship card, 1780x464 */}
      <div className="absolute top-[1129px] left-[72px] h-[464px] w-[1780px] rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light" />

      {/* 1638:686 — 352x86 */}
      <h3 className="absolute top-[1176px] left-[125px] w-[420px] text-[36px] leading-[1.2] font-bold text-navy">
        VEIL™: Lead Without
        <br />
        Losing Yourself
      </h3>
      {/* 1638:687 — 324x79 */}
      <p className="absolute top-[1183px] left-[1259px] w-[324px] text-[24px] leading-[1.2] font-bold text-gold uppercase">
        The Flagship Program
      </p>
      {/* 1638:685 — 517x240 */}
      <div className="absolute top-[1234px] left-[1259px] w-[517px] text-[18.7px] leading-[24px] text-navy">
        <p>
          For women in leadership and high-demand professional roles who are
          performing well externally - and already paying a silent cost for how
          they are leading. Not a wellness program. Not resilience training. A
          flagship strategic health framework built in the GCC, for the GCC,
          grounded in internationally validated science.
        </p>
        <p className="mt-[24px]">
          <span className="font-bold">12 weeks · Live cohort · 6 phases</span> ·
          Validated psychometric instruments · Measurable outcomes
        </p>
      </div>

      {/* 1638:694 / 1638:688 */}
      <div className="absolute top-[1341px] left-[114px]">
        <NewPill
          href="/veil"
          variant="navyOutline"
          icon="arrowUp"
          minWidth={242}
          pl={32}
          pr={8}
        >
          Explore Veil
        </NewPill>
      </div>
      <div className="absolute top-[1426px] left-[114px]">
        <NewPill
          href="/webinar"
          variant="navyOutline"
          minWidth={437}
          pl={32}
          pr={8}
        >
          Register for the Free Webinar
        </NewPill>
      </div>
    </div>
  );
}
