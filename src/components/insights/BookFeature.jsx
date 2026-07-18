import CtaPill from "../ui/CtaPill";
import bookLaurel from "../../assets/belief-laurel-right.svg";

export default function BookFeature() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cream to-[#ecd79e]">
      {/* Content container is the positioning root for the laurel mark too,
          so its exact Figma px offset stays pinned to the 1440 reference
          (never rescales above 1440) instead of the full-bleed section. */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-[156px] lg:py-[81px]">
        {/* Large laurel mark — Figma node 1136:5741 sits at x600/y0, 847x695
            (roughly the section's full height) within the 1439-wide frame.
            Centred vertically so it reads as "section-height" regardless of
            how tall the copy makes the section at other breakpoints. */}
        <img
          src={bookLaurel}
          alt=""
          className="pointer-events-none absolute top-1/2 left-[42%] z-0 hidden w-[59%] max-w-[847px] -translate-y-1/2 opacity-95 lg:left-[600px] lg:block lg:w-[847px]"
        />

        {/* Explicit stacking context above the (absolutely-positioned) laurel
            so the copy always reads clearly over it, matching Figma's paint
            order (the laurel sits behind the text there too). */}
        <div className="relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-gold">
            Book Feature
          </h2>
          <p className="mt-2 text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-black/65">
            Clicks, Leads, and Strategy Feeds
          </p>
          <p className="mt-6 max-w-[616px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-black/60">
            Your Guide to Cutting Through the Noise and Building Marketing
            That Matters. This isn’t a textbook. It’s a field guide. Built
            for decision-makers who want more than metrics, and are ready to
            stop outsourcing strategic thinking.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 lg:mt-11">
            <CtaPill as="a" href="#preview-chapter" variant="goldOutline">
              Download a Preview Chapter
            </CtaPill>
            <CtaPill as="a" href="#order" variant="goldFilled">
              Order Now
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
  );
}
