import CtaPill from "../ui/CtaPill";
import auraTrail from "../../assets/insights/hero-aura-trail.png";
import badgeRibbon from "../../assets/insights/hero-badge-ribbon.png";

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      {/* Fading dot-trail decoration behind the headline */}
      <img
        src={auraTrail}
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 h-[45%] w-[90%] max-w-[1162px] -translate-x-1/2 object-contain object-bottom opacity-90"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center sm:px-8 lg:py-24 xl:px-[95px]">
        <div className="relative inline-flex h-[30px] items-center justify-center sm:h-[34px] lg:h-[37px]">
          <img
            src={badgeRibbon}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <span className="relative px-4 text-[15px] font-bold text-cream sm:text-[18px] lg:text-[24px]">
            Insights &amp; Resources
          </span>
        </div>

        <h1 className="mt-6 text-[clamp(2rem,5vw,3.125rem)] leading-[1.2] font-bold text-navy lg:mt-8">
          Less Content.
          <br />
          More Clarity.
        </h1>

        <CtaPill as="a" href="/veil" variant="goldOutline" className="mt-8 lg:mt-11">
          Explore the VEIL™ Program
        </CtaPill>
      </div>
    </section>
  );
}
