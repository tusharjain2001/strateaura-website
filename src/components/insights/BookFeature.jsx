import CtaPill from "../ui/CtaPill";
import bookLaurel from "../../assets/insights/book-laurel.svg";

export default function BookFeature() {
  // Figma's wash (node 1136:5740) starts at rgba(255,249,232,0) — the cream
  // token at ZERO alpha, so the left of the band is the white page showing
  // through and only the right fades to #ecd79e. The opaque `cream` token
  // tinted the whole section.
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cream/0 to-[#ecd79e]">
      {/* Laurel mark — Figma node 1136:5741 is 847x695 running from x600 to
          x1447: it spans the section's full 696px height and bleeds 7px off the
          page's right edge. It belongs to the full-bleed section, NOT the
          max-w-[1440px] content box — pinned inside that box it stops short of
          the right edge on any viewport wider than 1440.
          Height comes from inset-y-0 rather than a fixed 695px so it always
          reaches the section's base as Figma has it. The section runs taller
          than 696 whenever Inter pushes the copy past its Acumin height, and a
          fixed height would leave a gap at the bottom. The asset's artwork
          fills its viewBox edge to edge and is preserveAspectRatio="none", so
          it stretches to fit cleanly. */}
      {/* The insets go on a wrapper, not the <img>: Tailwind's preflight sets
          `height: auto` on images, which beats the height implied by top/bottom
          and collapses it to a squashed strip. size-full on the image restores
          it (same fix as SiteFooter.jsx). */}
      <span className="pointer-events-none absolute inset-y-0 -right-[7px] z-0 hidden w-[847px] lg:block">
        <img src={bookLaurel} alt="" className="size-full" />
      </span>
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:min-h-[696px] lg:px-[156px] lg:py-[81px]">

        {/* Explicit stacking context above the (absolutely-positioned) laurel
            so the copy always reads clearly over it, matching Figma's paint
            order (the laurel sits behind the text there too). */}
        <div className="relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-gold">
            Book Feature
          </h2>
          {/* Figma tops: heading 81, subtitle 160, body 241, CTAs 450 — which
              is 19px, 52px and 64px of clear space between them. */}
          <p className="mt-2 text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-black/65 lg:mt-[19px]">
            Clicks, Leads, and Strategy Feeds
          </p>
          <p className="mt-6 max-w-[616px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-black/60 lg:mt-[52px]">
            Your Guide to Cutting Through the Noise and Building Marketing
            That Matters. This isn’t a textbook. It’s a field guide. Built
            for decision-makers who want more than metrics, and are ready to
            stop outsourcing strategic thinking.
          </p>
          {/* Figma stacks the two CTAs vertically, left-aligned, ~36px gap. */}
          <div className="mt-8 flex flex-col items-start gap-6 lg:mt-16 lg:gap-9">
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
