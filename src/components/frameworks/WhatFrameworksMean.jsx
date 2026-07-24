import CtaPill from "../ui/CtaPill";
import speakerPhoto from "../../assets/frameworks/mean-speaker-photo.png";

// Figma 1755:2967 ("Frame 62", 1440x823). The arch photo sits inset at x:162
// (551x675), the heading column at x:827.7/y:191, and the gold quote card
// (592.6x184 at x:581.3/y:458) overlaps the photo's lower-right. Positions are
// % of the 1440x823 frame so the composition scales between lg and the 1440
// cap; above 1440 the container caps and centres (never zooms).
export default function WhatFrameworksMean() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,#e8d9ae_100%)]">
      {/* Vertical rhythm lives on the container as PADDING (not margins on
          the photo) so the absolute copy/card children resolve their % tops
          against the full 823px frame — child margins would collapse through
          the container and shrink its box. */}
      <div className="relative mx-auto w-full max-w-[1440px] pt-10 lg:pt-[75px] lg:pb-[75px]">
        {/* Arch photo — 551x675 at x:162/y:75 */}
        <div className="relative mx-5 h-[280px] sm:mx-8 sm:h-[380px] lg:mx-0 lg:ml-[11.25%] lg:aspect-[551/673] lg:h-auto lg:w-[38.26%]">
          {/* Gold panel behind the arch (Figma "Vector 15" is a plain 273x304
              gold rectangle): shows through the rounded top-left corner as a
              gold arc/crescent. */}
          <div className="pointer-events-none absolute top-0 left-0 h-[45%] w-[49.6%] bg-gold" />
          <img
            src={speakerPhoto}
            alt="A StrateAura facilitator leading a live workshop session"
            className="absolute inset-0 h-full w-full rounded-t-[999px] object-cover"
          />
          {/* Bottom scrim (Figma "Rectangle 99"): 365 of 675 = 54.1% tall. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54.1%] bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Copy column — x:827.7 (57.48%), y:191 (23.2%), 451 wide (31.34%).
            Figma breaks the heading before "StrateAura". */}
        <div className="mx-5 mt-8 sm:mx-8 lg:absolute lg:top-[23.2%] lg:left-[57.48%] lg:m-0 lg:w-[31.34%]">
          <h2 className="text-[26px] leading-[1.2] font-bold sm:text-[28px] lg:text-[30px]">
            <span className="text-gold">What Frameworks Mean at</span>
            <span className="block text-navy-2">StrateAura</span>
          </h2>
          <p className="mt-[9px] max-w-[400px] text-[15px] leading-[1.17] text-black/60 lg:text-[16px]">
            At StrateAura™, frameworks aren&rsquo;t diagrams. They&rsquo;re
            deeper than that. They are mirrors. Maps. Systems of awareness.
            They help you see what&rsquo;s been running underneath your
            decisions, and give you language, direction, and rhythm to move
            differently.
          </p>
        </div>

        {/* Gold quote card — 592.6x184 at x:581.3 (40.36%) / y:458 (55.65%),
            text inset 42/38 with the pill 16px below the paragraph. */}
        <div className="mx-5 my-10 rounded-[4px] bg-gold px-6 py-7 sm:mx-8 lg:absolute lg:top-[55.65%] lg:left-[40.36%] lg:z-10 lg:m-0 lg:min-h-[184px] lg:w-[41.15%] lg:py-[38px] lg:pr-[40px] lg:pl-[42px]">
          <p className="max-w-[511px] text-[15px] leading-[1.17] text-white lg:text-[16px]">
            These models weren&rsquo;t created to &ldquo;fix&rdquo; your
            leadership.{" "}
            <span className="font-medium">
              They were built to reveal the inner logic that already exists in
              you, and elevate it into lasting presence.
            </span>
          </p>
          <CtaPill
            as="a"
            href="#signature-models"
            variant="whiteOutline"
            size="sm36"
            className="mt-[16px]"
          >
            Discover Our Signature Models
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
