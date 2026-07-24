import CtaPill from "../ui/CtaPill";
import newsletterBg from "../../assets/insights/newsletter-bg.png";

export default function NewsletterCta() {
  return (
    <section className="relative bg-gradient-to-b from-[#1f3a58] to-[#3a6296]">
      {/* The bg asset carries a white curved cut-out for the desktop composition;
          on mobile object-cover reveals that white mid-section and hides the
          copy, so it is desktop-only — the navy gradient covers mobile. */}
      <img
        src={newsletterBg}
        alt=""
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-top lg:block"
      />

      {/* Figma 1638:1914 is a boolean union of the 1440x548 band and a 705px
          sparkle at x=-444, y=195.5 — i.e. centred 91.5px outside the left edge
          and exactly on the band's foot — so the navy carries on past the band
          in the sparkle's silhouette. The band already covers its top half; this
          draws the bottom half, clipped 130px down as the Figma frame does. */}
      <div className="pointer-events-none absolute top-full left-0 hidden h-[130px] w-full overflow-hidden lg:block">
        <svg
          viewBox="0 0 35.65 35.65"
          fill="currentColor"
          aria-hidden
          className="absolute top-[-352px] left-[-444px] size-[705px] text-[#3a6296]"
        >
          <path d="M17.82 35.65C17.82 25.81 9.84 17.83 0 17.83C9.84 17.83 17.82 9.85 17.82 0.01C17.82 9.85 25.8 17.83 35.64 17.83C25.8 17.83 17.82 25.81 17.82 35.65Z" />
        </svg>
      </div>
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[490px_1fr] lg:gap-[188px] lg:px-[161px] lg:py-[90px]">
        <h2 className="text-[clamp(1.75rem,3.2vw,3.125rem)] leading-[1.2] font-bold text-white lg:text-[30px]">
          Don’t Miss the Insight That Changes Everything.
        </h2>
        <div>
          <p className="max-w-[439px] text-[clamp(1.0625rem,1.6vw,1.5rem)] leading-normal text-white lg:text-[16px]">
            Every month, we share one idea, one resource, and one reflection,
            carefully chosen to support clarity and growth. No inbox
            flooding. No fluff. Just one message that makes you stop,
            breathe, and move with purpose.
          </p>
          <CtaPill as="a" href="#join-inner-circle" variant="whiteOutline" size="compactLg" className="mt-8 lg:mt-6">
            Join the Inner Circle
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
