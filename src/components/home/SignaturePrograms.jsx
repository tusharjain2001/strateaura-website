import PillButton from "../ui/PillButton";

/**
 * Signature Programs — Figma node 1638:3919 (x 120, y 926, 1200x612), occupying
 * y 800-1658 of the frame. The flagship card is node 1638:1300; its children are
 * positioned in card-local coordinates.
 */
export default function SignaturePrograms() {
  return (
    <section className="relative h-[858px] w-[1440px]">
      {/* 1638:1293 — 640x116 */}
      <h2 className="absolute top-[120px] left-[120px] w-[640px] text-[48px] leading-[1.2] font-bold text-navy">
        Signature Programs
        <br />
        (KHDA-certified)
      </h2>

      {/* 1638:1294 — 312x64, bottom-aligned with the heading */}
      <PillButton
        as="a"
        href="/programs"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[178px] left-[1008px] min-w-[312px]"
      >
        View All Programs
      </PillButton>

      {/* 1638:1300 — flagship card, 1200x409 */}
      <div className="absolute top-[329px] left-[120px] h-[409px] w-[1200px] overflow-hidden rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light">
        {/* 1638:1309 — 352x86 */}
        <h3 className="absolute top-[46px] left-[52px] w-[420px] text-[36px] leading-[1.2] font-bold text-navy">
          VEIL™: Lead Without
          <br />
          Losing Yourself
        </h3>

        {/* 1638:1310 — 324x79 */}
        <p className="absolute top-[53px] left-[649px] w-[324px] text-[24px] font-bold text-gold uppercase">
          The Flagship Program
        </p>

        {/* 1638:1308 — 517x216 */}
        <div className="absolute top-[102px] left-[649px] w-[517px] text-[18.7px] leading-[24px] text-navy">
          <p>
            For women in leadership and high-demand professional roles who are
            performing well externally - and already paying a silent cost for
            how they are leading. Not a wellness program. Not resilience
            training. A flagship strategic health framework built in the GCC,
            for the GCC, grounded in internationally validated science.
          </p>
          <p className="mt-[24px]">
            <span className="font-bold">12 weeks · Live cohort · 6 phases</span>{" "}
            · Validated psychometric instruments · Measurable outcomes
          </p>
        </div>

        {/* 1638:1317 / 1638:1311 */}
        <PillButton
          as="a"
          href="/veil"
          variant="navyOutline"
          icon="arrowUp"
          className="absolute top-[211px] left-[41px]"
        >
          Explore Veil
        </PillButton>
        <PillButton
          as="a"
          href="/webinar"
          variant="navyOutline"
          icon="sparkle"
          className="absolute top-[296px] left-[41px]"
        >
          Register for the Free Webinar
        </PillButton>
      </div>
    </section>
  );
}
