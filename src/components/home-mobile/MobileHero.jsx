import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import heroAura from "../../assets/home-mobile/hero-aura.png";
import heroPhoto from "../../assets/home-mobile/hero-photo.jpg";

/**
 * Mobile hero — Figma node 1434:462.
 *
 * Navy panel (612px of the 749px frame) carrying the aura watermark, headline,
 * body and two pills; the team photo sits under it as a 333px full-bleed strip
 * with a navy 68% wash. The aura is pinned to the top-left corner (Figma inset
 * 0.03% / 16.17% / 53.14% / 0) and flipped, matching the rotate-180/-scale-x-100
 * transform on the Figma group.
 */
export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-navy-2">
      {/* Aura watermark: 337x351 box hugging the top-left of the navy panel. */}
      <img
        src={heroAura}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[83.8%] max-w-[337px] -scale-x-100 rotate-180"
      />

      {/* Copy — line breaks are forced to the Figma composition, and the type
          scales with the column so they hold. Figma's 370px column is set in
          Acumin Pro; the site renders in Inter, which runs ~5% wider, so a line
          that fills 370px there needs 370 x 1.05 here. The coefficients below
          are 32/(370*1.05) and 16/(370*1.05) — at a 402px viewport (the Figma
          frame) that lands just under 32/16px, and it shrinks from there so a
          narrower phone re-flows nothing. */}
      <MobileContainer className="relative z-10 pt-[55px] pb-[25px] [--hero-col:calc(min(100vw,430px)-32px)]">
        <h1 className="text-[min(32px,calc(var(--hero-col)*0.0824))] leading-normal font-bold text-white [&>span]:block">
          <span>Where Strategy Comes</span>
          <span>to Life. Where Leaders</span>
          <span>Find Their Edge.</span>
        </h1>
        <p className="mt-[19px] text-[min(16px,calc(var(--hero-col)*0.0412))] leading-normal text-white [&>span]:block">
          <span>At StrateAura™, we create spaces for elevated</span>
          <span>learning and aligned action. This is where ambition</span>
          <span>meets self-awareness and where fragmented effort</span>
          <span>becomes embodied leadership.</span>
        </p>

        <div className="mt-[40px] flex flex-col items-start gap-[12.87px]">
          {/* Hollow like "Browse All Programs", matching the desktop hero. */}
          <MobilePill as="a" href="/veil" variant="creamOutline" size="hero">
            VEIL<sup className="text-[10.32px]">TM</sup> Program
          </MobilePill>
          <MobilePill
            as="a"
            href="/programs"
            variant="creamOutline"
            size="hero"
          >
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
        {/* Figma node 1434:887 — a 402x98 rect rotated 180 over the photo's top
            edge, so its `180deg, transparent -> #233A58` fill renders navy at
            the top. Fades the photo out of the navy panel above it. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[98px] bg-[linear-gradient(180deg,rgba(35,58,88,1)_0%,rgba(35,58,88,0)_100%)]" />
      </div>
    </section>
  );
}
