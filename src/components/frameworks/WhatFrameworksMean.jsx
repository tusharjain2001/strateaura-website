import CtaPill from "../ui/CtaPill";
import useCanvasScale from "../../hooks/useCanvasScale";
import speakerPhoto from "../../assets/frameworks/mean-speaker-photo.png";

export default function WhatFrameworksMean() {
  // The section is designed at Figma's 1440px width. Up to 1440 it reflows
  // responsively; beyond 1440 we zoom the whole 1440 layout up so it fills the
  // viewport exactly like Figma (instead of sitting centred with side gaps).
  const scale = Math.max(1, useCanvasScale());
  const zoomed = scale > 1;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,#e8d9ae_100%)]">
      <div
        style={zoomed ? { zoom: scale } : undefined}
        className={`relative flex flex-col lg:min-h-[776px] lg:flex-row ${
          zoomed ? "w-[1440px]" : "mx-auto w-full max-w-[1440px]"
        }`}
      >
        {/* Arch photo — sits flush to the container's left edge (which is the
            screen edge, since the section fills the width at every size). */}
        <div className="relative h-[280px] shrink-0 sm:h-[380px] lg:h-auto lg:w-[44.1%] lg:self-stretch">
          {/* Gold panel behind the photo (Figma "Vector 15"): shows through the
              arch's rounded top-left corner as a gold arc/crescent. */}
          <div className="pointer-events-none absolute left-0 top-0 h-[45%] w-1/2 bg-gold" />
          <img
            src={speakerPhoto}
            alt="A StrateAura facilitator leading a live workshop session"
            className="absolute inset-0 h-full w-full rounded-t-[999px] object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Copy column */}
        <div className="flex flex-1 flex-col justify-center gap-6 px-5 py-10 sm:px-8 lg:gap-8 lg:px-[66px] lg:py-16 lg:pb-[260px] xl:pr-[95px]">
          <h2 className="text-[clamp(1.75rem,3vw,2.1875rem)] leading-[1.2] font-bold">
            <span className="text-gold">What Frameworks Mean at </span>
            <span className="text-navy-2">StrateAura</span>
          </h2>
          <p className="-mt-2 max-w-[580px] text-[clamp(1.0625rem,1.7vw,1.4375rem)] leading-normal text-black/60">
            At StrateAura™, frameworks aren&rsquo;t diagrams. They&rsquo;re
            deeper than that. They are mirrors. Maps. Systems of awareness.
            They help you see what&rsquo;s been running underneath your
            decisions, and give you language, direction, and rhythm to move
            differently.
          </p>
        </div>

        {/* Gold quote card — Figma node 1434:2902 (x:554 w:757 within the
            1440-wide/776-tall section): overlaps the photo column (right edge
            x:635) and ends at 91% (x:1311). Below lg it stacks in normal flow. */}
        <div className="mx-5 mb-10 rounded-[4px] bg-gold px-6 py-7 sm:mx-8 sm:px-8 sm:py-8 lg:absolute lg:top-[56.6%] lg:left-[38.47%] lg:z-10 lg:mx-0 lg:mb-0 lg:w-[52.57%] lg:px-[56px] lg:py-[52px]">
          <p className="text-[clamp(1.0625rem,1.6vw,1.4375rem)] leading-normal text-white">
            These models weren&rsquo;t created to &ldquo;fix&rdquo; your
            leadership.{" "}
            <span className="font-medium">
              They were built to reveal the inner logic that already exists
              in you, and elevate it into lasting presence.
            </span>
          </p>
          <CtaPill
            as="a"
            href="#signature-models"
            variant="whiteOutline"
            className="mt-6 lg:mt-8"
          >
            Discover Our Signature Models
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
