import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import veilLaurel from "../../assets/insights/veil-card-laurel.svg";

export default function ThinkingBehindVeil() {
  return (
    <section className="bg-white">
      {/* Mobile metrics from Figma 1878:9166 (370x372 card at y942): 20px gap
          to the tone card above, 23px insets, header at y50, 51px bottom. */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-5 pb-14 lg:px-[255px] lg:py-[63px]">
        <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-b from-gold to-gold-dark px-[23px] pt-[50px] pb-[51px] lg:px-[48px] lg:py-[54px]">
          {/* Figma (node 1159:2280): 567x487, bleeding 9px past the card's
              right edge and 24px above/below it. The asset carries its own
              opacity="0.1" — the previous opacity-40 on top of that left it at
              roughly 4% and nearly invisible. */}
          <img
            src={veilLaurel}
            alt=""
            className="pointer-events-none absolute -top-[24px] -right-[9px] hidden aspect-[567/487] w-[47%] max-w-[567px] lg:block"
          />

          {/* Mobile type from Figma 1878:9164/8681/8682: header 16/20 bold,
              VEIL™ 32/38 starting 14px below it, body 16px Acumin on a 21.3px
              pitch (14px in Inter to keep the 6-line wrap) 8px under VEIL™. */}
          <p className="relative text-[16px] leading-[20px] font-bold text-white/65 lg:text-[20px] lg:[line-height:normal]">
            The thinking behind
          </p>
          <h2 className="relative mt-[14px] text-[32px] leading-[38px] font-bold text-white lg:mt-0 lg:text-[30px] lg:leading-[1.24]">
            VEIL™
          </h2>
          {/* Figma's exact 4-line wrap, forced (Inter reflows differently);
              font scales with the container so the breaks hold. */}
          {/* Figma stacks these with no gap: the VEIL™ line box ends at 255.73
              and the body starts at exactly 255.73 (nodes 1159:2277 / 2278). */}
          <p className="relative mt-2 max-w-[626px] text-[14px] leading-[21px] text-white lg:max-w-[482px] lg:text-[16px] lg:leading-[1.24] lg:[&>span]:inline">
            <span>These articles explore the research, the patterns, and the </span>
            <span>realities that shaped the VEIL framework. If something you </span>
            <span>read here lands - if you find yourself thinking </span>
            <span>
              <strong className="font-bold">‘I can relate to every word of this’</strong>{" "}
              - that is the signal
            </span>
          </p>

          {/* Body ends at 299.78, CTA sits at 327 — a 27px gap, not 44. */}
          <CtaPill as={Link} to="/webinar" variant="whiteOutline" size="compact37Lg" className="relative mt-[26px] lg:mt-6">
            Join the Free Live Webinar
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
