import auraBand from "../../assets/cta-aura.svg";
import ribbonBadge from "../../assets/contact/work-with-us-ribbon.svg";

/**
 * "Let's Build What Lasts. Together." band directly under the header.
 * The pale aura flourish reuses the same decorative asset as the footer CTA
 * (src/assets/cta-aura.svg) — Figma stretches it non-uniformly per section,
 * so it's rotated/re-boxed here into the wide horizontal band this design
 * calls for instead of the footer's tall fan.
 */
export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      {/* Aura band, anchored to the 1440 content center so it lines up with
          Figma at any viewport width, hidden below lg where there isn't
          room for it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[88px] hidden h-[184px] w-[1097px] -translate-x-[548px] items-center justify-center lg:flex"
      >
        <div className="h-[1097px] w-[184px] -rotate-90 -scale-y-100">
          <img src={auraBand} alt="" className="block h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 text-center sm:px-8 lg:min-h-[360px] lg:justify-center lg:py-0 xl:px-[95px]">
        <div className="relative inline-flex aspect-[204.087/39] w-[clamp(150px,16vw,204px)] items-center justify-center lg:w-[202px]">
          <img
            src={ribbonBadge}
            alt=""
            className="pointer-events-none absolute inset-0 size-full"
          />
          {/* Figma 1816:723 — 16px badge label at desktop. */}
          <span className="relative text-[clamp(0.9375rem,1.4vw,1.375rem)] font-bold text-cream lg:text-[16px]">
            Work With Us
          </span>
        </div>

        {/* Figma 1816:724 — two stacked centred lines, 30px at desktop. */}
        <h2 className="mt-4 max-w-[900px] text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.3] font-bold lg:mt-6 lg:text-[30px] lg:leading-normal [&>span]:block">
          <span className="text-gold">Let’s Build</span>
          <span className="text-navy-2">What Lasts. Together.</span>
        </h2>
      </div>
    </section>
  );
}
