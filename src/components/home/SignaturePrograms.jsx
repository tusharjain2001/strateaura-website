import PillButton from "../ui/PillButton";

/**
 * Signature Programs — "Alt/ Home" board, node 1728:532 (x 158, y 756,
 * 1123.3x435.7 in frame coords). Frame y less the 74px navbar gives the canvas
 * offset, so the section starts flush with its heading and the 120px of air
 * below the card is what separates it from the next section.
 */
export default function SignaturePrograms() {
  return (
    <section className="relative h-[556px] w-[1440px]">
      {/* 1728:534 — two forced lines. 32px per the designer's note: this is the
          one section header that isn't on the page's 30px header size. */}
      <h2 className="absolute top-0 left-[158px] w-[670px] text-[32px] leading-[1.2] font-bold text-navy">
        Signature Programs
        <br />
        (KHDA-certified)
      </h2>

      {/* 1728:535 — 238x43, right-aligned to the 1123px content column */}
      <PillButton
        as="a"
        href="/programs"
        variant="goldOutline"
        icon="sparkle"
        size="xs"
        padLeft={22}
        className="absolute top-[14.5px] right-[158.7px] min-w-[238px]"
      >
        View All Programs
      </PillButton>

      {/* 1728:541 — flagship card, 1123.3x330.6 */}
      <div className="absolute top-[105.15px] left-[158px] h-[330.6px] w-[1123.3px] overflow-hidden rounded-[10px] border border-gold-light bg-gradient-to-b from-white to-gold-light">
        {/* 1728:543 — Figma's 284.5 box is measured in Acumin Pro; Inter runs
            wider and split "VEIL™: Lead Without", so the two lines are forced
            and the box left to size itself. */}
        <h3 className="absolute top-[37.18px] left-[42.03px] text-[30px] leading-[1.2] font-bold text-navy [&>span]:block [&>span]:whitespace-nowrap">
          <span>VEIL™: Lead Without</span>
          <span>Losing Yourself</span>
        </h3>

        {/* 1728:544 — 261.4x21.8 */}
        <p className="absolute top-[42.53px] left-[524.85px] w-[261.4px] text-[18.94px] font-bold text-gold uppercase">
          The Flagship Program
        </p>

        {/* 1728:542 — 16px in Figma's 417.9 box; the copy wraps rather than
            being pinned to the board's breaks, which were measured in Acumin. */}
        <div className="absolute top-[84.06px] left-[524.58px] w-[417.9px] text-[16px] leading-[1.2] text-navy">
          <p>
            For women in leadership and high-demand professional roles who are
            performing well externally - and already paying a silent cost for
            how they are leading. Not a wellness program. Not resilience
            training. A flagship strategic health framework built in the GCC,
            for the GCC, grounded in internationally validated science.
          </p>
          <p className="mt-[18px]">
            <strong className="font-bold">
              12 weeks · Live cohort · 6 phases
            </strong>{" "}
            · Validated psychometric instruments · Measurable outcomes
          </p>
        </div>

        {/* 1728:551 / 1728:545 — 52.5 tall, stacked 68.7 apart */}
        <PillButton
          as="a"
          href="/veil"
          variant="navyOutline"
          icon="arrowUp"
          size="xs"
          padLeft={22}
          className="absolute top-[170.55px] left-[33.14px]"
        >
          Explore Veil
        </PillButton>
        <PillButton
          as="a"
          href="/webinar"
          variant="navyOutline"
          icon="sparkle"
          size="xs"
          padLeft={22}
          className="absolute top-[239.26px] left-[33.14px]"
        >
          Register for the Free Webinar
        </PillButton>
      </div>
    </section>
  );
}
