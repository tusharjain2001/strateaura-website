import CtaPill from "../ui/CtaPill";
import auraTrail from "../../assets/insights/hero-aura-trail.png";
import badgeRibbon from "../../assets/insights/hero-badge-ribbon.png";

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      {/* Fading ellipse trail behind the headline. Figma (node 1136:5676) puts
          it at top:123 in the 1440x449 hero — behind the heading — not against
          the bottom edge, and horizontally centred (139px clear either side of
          its 1162px width). The asset is already exported at that exact
          1162x224, so w-auto height keeps it undistorted. */}
      <img
        src={auraTrail}
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 h-[45%] w-[90%] max-w-[1162px] -translate-x-1/2 object-contain object-bottom opacity-90 mix-blend-multiply lg:top-[123px] lg:bottom-auto lg:h-auto lg:w-[80.7%] lg:max-w-[1162px]"
      />

      {/* Figma stacks the badge, heading and CTA 29px apart, starting 142px
          down, with 27px below the CTA — which adds up to the hero's 449px. */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center sm:px-8 lg:pt-[69px] lg:pb-[69px] xl:px-[95px]">
        <div className="relative inline-flex h-[30px] items-center justify-center sm:h-[34px] lg:h-[37px]">
          <img
            src={badgeRibbon}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <span className="relative px-4 text-[15px] font-bold text-cream sm:text-[18px] lg:text-[16px]">
            Insights &amp; Resources
          </span>
        </div>

        <h1 className="mt-6 text-[clamp(2rem,5vw,3.125rem)] leading-[1.2] font-bold text-navy lg:mt-6 lg:text-[30px]">
          Less Content.
          <br />
          More Clarity.
        </h1>

        <CtaPill as="a" href="/veil" variant="goldOutline" className="mt-8 lg:mt-6">
          Explore the VEIL™ Program
        </CtaPill>
      </div>
    </section>
  );
}
