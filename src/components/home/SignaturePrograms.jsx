import PillButton from "../ui/PillButton";
import flagshipAura from "../../assets/flagship-aura.svg";
import flagshipPillars from "../../assets/flagship-pillars.svg";

export default function SignaturePrograms() {
  return (
    <section className="relative h-[1078px] w-[1440px]">
      <h2 className="absolute top-[126px] left-[105px] w-[640px] text-[48px] leading-tight font-bold text-navy">
        Signature Programs
        <br />
        (KHDA-certified)
      </h2>

      <PillButton
        as="a"
        href="#programs"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[178px] left-[970px]"
      >
        View All Programs
      </PillButton>

      {/* Flagship VEIL card */}
      <div className="absolute top-[329px] left-1/2 h-[698px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light">
        <img
          src={flagshipAura}
          alt=""
          className="pointer-events-none absolute top-[360px] right-0 w-[720px] opacity-80"
        />

        <h3 className="absolute top-[46px] left-[52px] text-[36px] leading-[1.15] font-bold text-navy [&>span]:block">
          <span className="whitespace-nowrap">VEIL™: Lead Without</span>
          <span className="whitespace-nowrap">Losing Yourself</span>
        </h3>

        <p className="absolute top-[53px] left-[649px] w-[324px] text-[24px] font-bold text-gold uppercase">
          The Flagship Program
        </p>

        <div className="absolute top-[104px] left-[649px] w-[540px] space-y-[14px] text-[20px] leading-[1.4] text-navy">
          <p>
            For women in leadership and high-demand professional roles who are
            performing well externally - and already paying a silent cost for how
            they are leading. Not a wellness program. Not resilience training. A
            flagship strategic health framework built in the GCC, for the GCC,
            grounded in internationally validated science.
          </p>
          <p>
            <span className="font-bold">12 weeks · Live cohort · 6 phases</span> ·
            Validated psychometric instruments · Measurable outcomes
          </p>
          <p className="whitespace-nowrap">
            Online pathway also available:{" "}
            <span className="font-bold">MAP · DECODE · UNVEIL</span>
          </p>
        </div>

        <PillButton
          as="a"
          href="#map-decode"
          variant="navyOutline"
          icon="arrowUp"
          className="absolute top-[211px] left-[41px]"
        >
          Learn More about MAP &amp; DECODE
        </PillButton>
        <PillButton
          as="a"
          href="#webinar"
          variant="navyOutline"
          icon="sparkle"
          className="absolute top-[296px] left-[41px]"
        >
          Register for the Free Webinar
        </PillButton>

        {/* Three pillars + star accents as a single exported graphic */}
        <img
          src={flagshipPillars}
          alt="VEIL pillars: Capacity Regulation, Identity Coherence, Authority Execution"
          className="absolute top-[433px] left-1/2 w-[1131px] -translate-x-1/2"
        />
      </div>
    </section>
  );
}
