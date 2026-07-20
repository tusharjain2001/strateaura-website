import CtaPill from "../ui/CtaPill";
import veilLaurel from "../../assets/insights/veil-card-laurel.svg";

export default function ThinkingBehindVeil() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[80px]">
        <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-b from-gold to-gold-dark px-8 py-10 sm:px-12 lg:px-[62px] lg:py-[60px]">
          {/* Figma (node 1159:2280): 567x487, bleeding 9px past the card's
              right edge and 24px above/below it. The asset carries its own
              opacity="0.1" — the previous opacity-40 on top of that left it at
              roughly 4% and nearly invisible. */}
          <img
            src={veilLaurel}
            alt=""
            className="pointer-events-none absolute -top-[24px] -right-[9px] hidden aspect-[567/487] w-[47%] max-w-[567px] lg:block"
          />

          <p className="relative text-[20px] font-bold text-white/65 sm:text-[24px] lg:text-[32px]">
            The thinking behind
          </p>
          <h2 className="relative text-[44px] leading-[1.24] font-bold text-white sm:text-[52px] lg:text-[64px]">
            VEIL™
          </h2>
          {/* Figma's exact 4-line wrap, forced (Inter reflows differently);
              font scales with the container so the breaks hold. */}
          {/* Figma stacks these with no gap: the VEIL™ line box ends at 255.73
              and the body starts at exactly 255.73 (nodes 1159:2277 / 2278). */}
          <p className="relative mt-4 max-w-[626px] text-[18px] leading-normal text-white sm:text-[20px] lg:mt-0 lg:text-[min(1.67vw,24px)] lg:leading-[1.24] lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
            <span>These articles explore the research, the patterns, and the </span>
            <span>realities that shaped the VEIL framework. If something you </span>
            <span>read here lands - if you find yourself thinking </span>
            <span>
              <strong className="font-bold">‘I can relate to every word of this’</strong>{" "}
              - that is the signal
            </span>
          </p>

          {/* Body ends at 299.78, CTA sits at 327 — a 27px gap, not 44. */}
          <CtaPill as="a" href="/webinar" variant="whiteOutline" className="relative mt-8 lg:mt-[27px]">
            Join the Free Live Webinar
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
