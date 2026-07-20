import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import heroAura from "../../assets/home-mobile/hero-aura.svg";
import heroPhoto from "../../assets/home-mobile/hero-photo.jpg";

/**
 * Mobile hero — Figma node 1434:462.
 *
 * Navy panel (612px of the 749px frame) carrying the aura watermark, headline,
 * body and two pills; the team photo sits under it as a 333px full-bleed strip
 * with a navy 68% wash. The aura is anchored bottom-left and flipped, matching
 * the rotate-180/-scale-x-100 transform on the Figma group.
 */
export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-navy-2">
      {/* Aura watermark: Figma places it at 0..337px wide starting mid-panel. */}
      <img
        src={heroAura}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[137px] left-0 w-[84%] max-w-[337px] -scale-x-100 rotate-180 opacity-90"
      />

      <MobileContainer className="relative z-10 pt-[55px] pb-[40px]">
        <h1 className="text-[32px] leading-normal font-bold text-white">
          Where Strategy Comes to Life. Where Leaders Find Their Edge.
        </h1>
        <p className="mt-[19px] text-[16px] leading-normal text-white">
          At StrateAura™, we create spaces for elevated learning and aligned
          action. This is where ambition meets self-awareness and where
          fragmented effort becomes embodied leadership.
        </p>

        <div className="mt-[40px] flex flex-col items-start gap-[13px]">
          <MobilePill as="a" href="/veil" variant="creamFilled">
            VIEL<sup className="text-[10px]">TM</sup> Program
          </MobilePill>
          <MobilePill as="a" href="/programs" variant="creamOutline">
            Browse All Programs
          </MobilePill>
        </div>
      </MobileContainer>

      {/* Full-bleed photo strip with the navy wash from Figma (rgba 35,58,88,.68). */}
      <div className="relative h-[333px] w-full">
        <img
          src={heroPhoto}
          alt="StrateAura participants together at a leadership gathering"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(35,58,88,0.68)]" />
      </div>
    </section>
  );
}
