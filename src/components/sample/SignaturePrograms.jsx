import CtaPill from "../ui/CtaPill";
import { ArrowUpRight } from "../ui/Icons";

/**
 * Signature Programs — KHDA-certified (Figma node 1638:3968).
 * Heading + "View All Programs" pill, then a white→gold-light flagship card:
 * left column = VEIL™ title + two navy-outline CTAs, right column = flagship
 * label + description. Faithful at 1920, stacks below lg.
 */
export default function SignaturePrograms() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-[72px] sm:px-8 lg:px-12 lg:pt-[126px] xl:px-[72px]">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[clamp(2rem,2.5vw,48px)] font-bold leading-[1.15] text-navy">
            Signature Programs
            <br />
            (KHDA-certified)
          </h2>
          <CtaPill
            as="a"
            href="#programs"
            variant="goldOutline"
            className="shrink-0 self-start sm:self-auto"
          >
            View All Programs
          </CtaPill>
        </div>

        {/* Flagship card */}
        <div className="mt-10 overflow-hidden rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light lg:mt-[87px]">
          <div className="flex flex-col gap-10 p-8 sm:p-10 lg:flex-row lg:justify-between lg:p-[52px] lg:pb-16">
            {/* Left column */}
            <div className="lg:max-w-[400px]">
              <h3 className="text-[clamp(1.5rem,1.9vw,36px)] font-bold leading-[1.2] text-navy">
                VEIL™: Lead Without Losing Yourself
              </h3>
              <div className="mt-8 flex flex-col items-start gap-5 lg:mt-[72px]">
                <CtaPill
                  as="a"
                  href="#veil"
                  variant="navyOutline"
                  icon={ArrowUpRight}
                >
                  Explore Veil
                </CtaPill>
                <CtaPill as="a" href="#webinar" variant="navyOutline">
                  Register for the Free Webinar
                </CtaPill>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:max-w-[517px]">
              <p className="text-[clamp(1.125rem,1.25vw,24px)] font-bold text-gold uppercase">
                The Flagship Program
              </p>
              <p className="mt-5 text-[clamp(1rem,1.05vw,20px)] leading-normal text-navy">
                For women in leadership and high-demand professional roles who
                are performing well externally - and already paying a silent
                cost for how they are leading. Not a wellness program. Not
                resilience training. A flagship strategic health framework built
                in the GCC, for the GCC, grounded in internationally validated
                science.
              </p>
              <p className="mt-6 text-[clamp(1rem,1.05vw,20px)] leading-normal text-navy">
                12 weeks · Live cohort · 6 phases · Validated psychometric
                instruments · Measurable outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
