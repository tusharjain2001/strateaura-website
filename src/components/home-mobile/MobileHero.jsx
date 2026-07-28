import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import heroPhoto from "../../assets/home-mobile/hero-photo-v2.jpg";

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
        {/* Flows naturally: the forced Figma breaks assumed Acumin's metrics, and
            in Inter the third line overran the column and dropped "effort" onto a
            line of its own. */}
        <p className="mt-[19px] text-[min(16px,calc(var(--hero-col)*0.0412))] leading-normal text-pretty text-white">
          At StrateAura™, we create spaces for elevated learning and aligned
          action. This is where ambition meets self-awareness and where
          fragmented effort becomes embodied leadership.
        </p>

        <div className="mt-[40px] flex flex-col items-start gap-[12.87px]">
          <MobilePill as="a" href="/veil" variant="creamFilled" size="hero">
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

      {/* Full-bleed photo strip — node 1878:4576: the CLEAN 1960x1348 raw
          (saved at 2x, 804x662) cover-cropped by the browser, with the node's
          0.7 navy overlay as a separate layer. Never bake the tint into the
          asset — stacking it with this wash double-darkens the photo. */}
      <div className="relative h-[333px] w-full">
        <img
          src={heroPhoto}
          alt="StrateAura participants together at a leadership gathering"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(35,58,88,0.7)]" />
        {/* Figma node 1434:887 — a 402x98 rect rotated 180 over the photo's top
            edge, so its `180deg, transparent -> #233A58` fill renders navy at
            the top. Fades the photo out of the navy panel above it. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[98px] bg-[linear-gradient(180deg,rgba(35,58,88,1)_0%,rgba(35,58,88,0)_100%)]" />
      </div>
    </section>
  );
}
