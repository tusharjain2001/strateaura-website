import CtaPill from "../ui/CtaPill";
import newsletterBg from "../../assets/insights/newsletter-bg.png";

export default function NewsletterCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={newsletterBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[429px_1fr] lg:gap-[77px] lg:px-[143px] lg:py-[123px]">
        <h2 className="text-[clamp(1.75rem,3.2vw,3.125rem)] leading-[1.2] font-bold text-white">
          Don’t Miss the Insight That Changes Everything.
        </h2>
        <div>
          <p className="max-w-[439px] text-[clamp(1.0625rem,1.6vw,1.5rem)] leading-normal text-white">
            Every month, we share one idea, one resource, and one reflection,
            carefully chosen to support clarity and growth. No inbox
            flooding. No fluff. Just one message that makes you stop,
            breathe, and move with purpose.
          </p>
          <CtaPill as="a" href="#join-inner-circle" variant="whiteOutline" className="mt-8">
            Join the Inner Circle
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
