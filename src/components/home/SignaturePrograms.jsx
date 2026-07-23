import PillButton from "../ui/PillButton";

/**
 * Signature Programs — "Alt/ Home" board, node 1728:532 (x 158, y 881,
 * 1123.3x457.5 in frame coords). The board sets the hero band at y 73, so
 * canvas offsets here are the frame values less 73, and the section itself
 * starts at canvas 688 — hence the 120px of lead-in above the heading.
 *
 * The copy is unchanged from the previous board; everything below is geometry,
 * redrawn at the new ~80% scale.
 */
export default function SignaturePrograms() {
  return (
    <section className="relative h-[698px] w-[1440px]">
      {/* 1728:534 — 670x94, two forced lines */}
      <h2 className="absolute top-[120px] left-[158px] w-[670px] text-[34px] leading-normal font-bold text-navy">
        Signature Programs
        <br />
        (KHDA-certified)
      </h2>

      {/* 1728:535 — 252.5x51.7, right-aligned to the 1123px content column */}
      <PillButton
        as="a"
        href="/programs"
        variant="goldOutline"
        icon="sparkle"
        size="sm"
        className="absolute top-[141px] left-[1029px]"
      >
        View All Programs
      </PillButton>

      {/* 1728:541 — flagship card, 1123.3x330.6 */}
      <div className="absolute top-[247px] left-[158px] h-[331px] w-[1123px] overflow-hidden rounded-[10px] border border-gold-light bg-gradient-to-b from-white to-gold-light">
        {/* 1728:543 — Figma's 284.5 box is measured in Acumin Pro; Inter runs
            wider and split "VEIL™: Lead Without", so the two lines are forced
            and the box left to size itself. */}
        <h3 className="absolute top-[37px] left-[42px] text-[30px] leading-normal font-bold text-navy [&>span]:block [&>span]:whitespace-nowrap">
          <span>VEIL™: Lead Without</span>
          <span>Losing Yourself</span>
        </h3>

        {/* 1728:544 — 261.4x21.8 */}
        <p className="absolute top-[43px] left-[525px] w-[261px] text-[19px] font-bold text-gold uppercase">
          The Flagship Program
        </p>

        {/* 1728:542 — line breaks forced to the board's; the box is 440 rather
            than Figma's 417.9 so Inter's longest line still fits on one line. */}
        <div className="absolute top-[84px] left-[525px] w-[440px] text-[15px] leading-normal text-navy">
          <p>
            <span className="block whitespace-nowrap">For women in leadership and high-demand professional roles</span>
            <span className="block whitespace-nowrap">who are performing well externally - and already paying a</span>
            <span className="block whitespace-nowrap">silent cost for how they are leading. Not a wellness program.</span>
            <span className="block whitespace-nowrap">Not resilience training. A flagship strategic health framework</span>
            <span className="block whitespace-nowrap">built in the GCC, for the GCC, grounded in internationally</span>
            <span className="block whitespace-nowrap">validated science.</span>
          </p>
          <p className="mt-[18px]">
            <span className="block whitespace-nowrap">
              <strong className="font-bold">12 weeks · Live cohort · 6 phases</strong>{" "}
              · Validated psychometric
            </span>
            <span className="block whitespace-nowrap">instruments · Measurable outcomes</span>
          </p>
        </div>

        {/* 1728:551 / 1728:545 — 52.5 tall, stacked 68.7 apart */}
        <PillButton
          as="a"
          href="/veil"
          variant="navyOutline"
          icon="arrowUp"
          size="sm"
          className="absolute top-[171px] left-[33px]"
        >
          Explore Veil
        </PillButton>
        <PillButton
          as="a"
          href="/webinar"
          variant="navyOutline"
          icon="sparkle"
          size="sm"
          className="absolute top-[239px] left-[33px]"
        >
          Register for the Free Webinar
        </PillButton>
      </div>
    </section>
  );
}
