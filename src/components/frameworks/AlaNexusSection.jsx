import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { ArrowRight } from "../ui/Icons";
import seamSparkle from "../../assets/webinar/seam-sparkle.svg";
import assessPattern from "../../assets/frameworks/ala-assess-pattern.svg";
import leveragePattern from "../../assets/frameworks/ala-leverage-pattern.svg";
import actuatePattern from "../../assets/frameworks/ala-actuate-pattern.svg";

// Pattern placement taken from Figma (node 1755:2983). Each is expressed as a
// share of its 346x256 card so it scales with the card, and each bleeds past a
// card edge — the wrapper clips it to the card box.
const CARDS = [
  {
    key: "assess",
    title: "Assess",
    body: "What’s really happening, in your decisions, your data, your behaviour, your energy.",
    pattern: assessPattern,
    patternClass: "right-[-2.1%] bottom-[-11.1%] w-[55.8%]",
  },
  {
    key: "leverage",
    title: "Leverage",
    body: "What’s working (even if hidden), strengths, patterns, underused insight.",
    pattern: leveragePattern,
    patternClass: "right-[-0.5%] bottom-[-7.9%] w-[42.2%]",
  },
  {
    key: "actuate",
    title: "Actuate",
    body: "What needs to move, with intention, timing, and support.",
    pattern: actuatePattern,
    // Figma flips this one vertically (-scale-y-100).
    patternClass: "right-[-20.3%] bottom-0 w-[70.2%] -scale-y-100",
  },
];

// Figma 1755:2983 ("Frame 63", 1440x792): content column 1175 wide at x:164
// (an asymmetric 101px right gutter — the CTA centres on the 1175 column, at
// x:751.5 of the page), vertically centred (~96px top/bottom). The gutters
// scale down as vw between lg and 1440 so the columns keep fitting.
export default function AlaNexusSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:pl-[clamp(2rem,11.39vw,164px)] lg:pr-[clamp(2rem,7.01vw,101px)] lg:py-[96px]">
        <FrameworkTag>FRAMEWORK 1</FrameworkTag>

        <div className="mt-4 lg:mt-[27px] lg:flex lg:max-w-[1114px] lg:items-start lg:justify-between lg:gap-10">
          <div className="lg:w-[266px] lg:shrink-0">
            <h2 className="text-[26px] leading-[1.2] font-bold text-navy sm:text-[28px] lg:text-[30px]">
              ALA-Nexus™
            </h2>
            <p className="mt-2 max-w-[320px] text-[15px] leading-[1.17] text-black/60 lg:mt-[9px] lg:text-[16px]">
              From Fragmented Effort to Aligned Momentum
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:max-w-[695px] lg:flex-1">
            <p className="text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            {/* Figma (node 1755:3023) keeps these as two lines of one tight
                block: the bold sentence sits alone on line 1, the recalibration
                sentence starts on line 2 with no paragraph gap between them. */}
            <div className="mt-3 text-[15px] leading-[1.17] text-black/60 lg:mt-[7px] lg:text-[16px]">
              <p className="font-bold text-black/60">
                ALA-Nexus™ isn&rsquo;t just a planning model.
              </p>
              <p>
                It&rsquo;s a recalibration system for overwhelmed leaders and
                disjointed teams.
              </p>
            </div>
            <p className="mt-3 text-[15px] leading-[1.17] font-medium text-black/60 lg:mt-[7px] lg:text-[16px]">
              It unfolds in three deeply practical, deeply personal stages:
            </p>
          </div>
        </div>

        {/* Cards: 346x256, 33px gaps, sparkle straddling each top-right.
            Figma puts the card rects 55px under the header row (39px gap +
            the 16.5px the sparkles stick up above the cards). */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-[55px] lg:max-w-[1105px] lg:gap-[33px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="relative min-h-[240px] bg-gradient-to-b from-navy to-blue lg:h-[256px] lg:min-h-0"
            >
              {/* Clips the decorative pattern to the card box without clipping
                  the corner sparkle below, which must bleed outside. */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.pattern}
                  alt=""
                  className={`pointer-events-none absolute h-auto ${card.patternClass}`}
                />
              </div>
              {/* Straddles the top-right corner (centered on the corner point,
                  half outside the card) — 33px per Figma. The OUTLINED sparkle
                  asset stays visible on both the navy card and the white page. */}
              <img
                src={seamSparkle}
                alt=""
                className="pointer-events-none absolute -top-[11px] -right-[11px] z-10 size-[22px] lg:-top-[16px] lg:-right-[16px] lg:size-[33px]"
              />
              <div className="relative flex h-full flex-col p-6 lg:pt-[35px] lg:pr-[30px] lg:pb-[31px] lg:pl-[35px]">
                <p className="text-[18px] font-bold text-white lg:text-[20px]">
                  {card.title}
                </p>
                <p className="mt-3 max-w-[275px] text-[15px] leading-[1.17] text-white lg:mt-[15px] lg:text-[16px]">
                  {card.body}
                </p>
                <ArrowRight className="mt-8 w-[37px] text-white lg:mt-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* 61px from the card rect bottom to the pill (Figma 1755:3179). */}
        <div className="mt-10 flex justify-center lg:mt-[61px]">
          <CtaPill as="a" href="#apply-ala-nexus" variant="navyOutline">
            Apply ALA-Nexus to Your Business
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
