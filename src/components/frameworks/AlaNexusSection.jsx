import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { ArrowRight } from "../ui/Icons";
import seamSparkle from "../../assets/webinar/seam-sparkle.svg";
import assessPattern from "../../assets/frameworks/ala-assess-pattern.svg";
import leveragePattern from "../../assets/frameworks/ala-leverage-pattern.svg";
import actuatePattern from "../../assets/frameworks/ala-actuate-pattern.svg";

// Pattern placement taken from Figma (node 1434:2913). Each is expressed as a
// share of its 379x280 card so it scales with the card, and each bleeds past a
// card edge — the wrapper clips it to the rounded corners.
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

export default function AlaNexusSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[116px] lg:py-[100px]">
        <FrameworkTag>FRAMEWORK 1</FrameworkTag>

        <div className="mt-4 lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-navy-2">
              ALA-Nexus™
            </h2>
            <p className="mt-2 max-w-[320px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal text-black/60">
              From Fragmented Effort to Aligned Momentum
            </p>
          </div>

          <div className="mt-8 max-w-[722px] lg:mt-0">
            <p className="text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            {/* Figma (node 1434:2952) keeps these as two lines of one tight
                block: the bold sentence sits alone on line 1, the recalibration
                sentence starts on line 2 with no paragraph gap between them. */}
            <div className="mt-5 text-[clamp(1.0625rem,1.6vw,1.4375rem)] leading-normal text-black/60">
              <p className="font-bold text-black/60">
                ALA-Nexus™ isn&rsquo;t just a planning model.
              </p>
              <p>
                It&rsquo;s a recalibration system for overwhelmed leaders and
                disjointed teams.
              </p>
            </div>
            <p className="mt-7 text-[clamp(1.125rem,1.7vw,1.5rem)] leading-normal text-black/60">
              It unfolds in three deeply practical, deeply personal stages:
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-[21px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="relative min-h-[240px] rounded-[4px] bg-gradient-to-b from-navy to-blue lg:min-h-[280px]"
            >
              {/* Clips the decorative pattern to the card's rounded corners
                  without clipping the corner sparkle below, which must
                  bleed outside the card. */}
              <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                <img
                  src={card.pattern}
                  alt=""
                  className={`pointer-events-none absolute h-auto ${card.patternClass}`}
                />
              </div>
              {/* Straddles the top-right corner (centered on the corner
                  point, half outside the card). The OUTLINED sparkle asset
                  (white fill + navy stroke) stays visible on both the navy
                  card and the white page — a solid white glyph vanishes on
                  the half that hangs over the white background. */}
              <img
                src={seamSparkle}
                alt=""
                className="pointer-events-none absolute -top-[11px] -right-[11px] z-10 size-[22px] lg:-top-[14px] lg:-right-[14px] lg:size-[28px]"
              />
              <div className="relative p-6 lg:p-[38px]">
                <p className="text-[clamp(1.25rem,1.7vw,1.5rem)] font-bold text-white">
                  {card.title}
                </p>
                <p className="mt-3 max-w-[258px] text-[clamp(1.0625rem,1.4vw,1.3125rem)] leading-normal text-white">
                  {card.body}
                </p>
                <ArrowRight className="mt-8 w-[40px] text-white lg:mt-11" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <CtaPill as="a" href="#apply-ala-nexus" variant="navyOutline">
            Apply ALA-Nexus to Your Business
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
