import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import FwTag from "./FwTag";
import { ArrowRight } from "../ui/Icons";
import assessPattern from "../../assets/frameworks/ala-assess-pattern.svg";
import leveragePattern from "../../assets/frameworks/ala-leverage-pattern.svg";
import actuatePattern from "../../assets/frameworks/ala-actuate-pattern.svg";

// Pattern boxes from Figma node 1296:4554. `left` and `w` are shares of the
// card's width; `top` is also driven by width (--card-w) rather than a share of
// height, because these cards size to their copy and so no longer match Figma's
// fixed 234/242/208px heights — a height percentage drifts as the copy reflows,
// while the width ratio holds. Each bleeds past an edge and the wrapper clips
// them to the rounded corners.
const CARDS = [
  {
    key: "assess",
    title: "Assess",
    body: "What’s really happening, in your decisions, your data, your behaviour, your energy.",
    pattern: assessPattern,
    // 178.95 / 85.66 / 190.69 wide on a 370px card; overflows the bottom by 39.
    patternClass:
      "left-[48.366%] top-[calc(var(--card-w)*0.23151)] w-[51.537%]",
  },
  {
    key: "leverage",
    title: "Leverage",
    body: "What’s working (even if hidden), strengths, patterns, underused insight.",
    pattern: leveragePattern,
    // 216.11 / 119.27 / 154.51 wide on a 371px card; sits flush to the bottom.
    patternClass:
      "left-[58.251%] top-[calc(var(--card-w)*0.32149)] w-[41.646%]",
  },
  {
    key: "actuate",
    title: "Actuate",
    body: "What needs to move, with intention, timing, and support.",
    // 185.80 / 157.44 / 184.82 wide on a 371px card, mirrored vertically as on
    // desktop; overflows the bottom by 66, which `bottom-0` was hiding.
    patternClass:
      "left-[50.081%] top-[calc(var(--card-w)*0.42437)] w-[49.817%] -scale-y-100",
    pattern: actuatePattern,
  },
];

/**
 * Framework 1 — Figma node 1296:4541.
 *
 * The bottom padding is 60px, not 84: this block ends at y=2403.5 and the 5Cs
 * band starts at 2464, so 84 pushed the band 24px below where Figma starts it.
 */
export default function FwAlaNexus() {
  return (
    <section className="bg-white pt-[120px] pb-[60px]">
      <MobileContainer className="[--pill-col:calc(min(100vw,430px)-32px)]">
        <FwTag>FRAMEWORK 1</FwTag>

        <h2 className="mt-[23px] text-[25px] leading-[30px] font-bold text-navy-2">
          ALA-Nexus&trade;
        </h2>

        <p className="mt-[26px] text-[14px] leading-[18px] font-bold tracking-[0.5px] text-gold uppercase">
          Core Concept
        </p>
        {/* Figma keeps the bold sentence and the line under it as one tight
            block — no paragraph gap between them. */}
        <div className="mt-[10px] text-[14px] leading-[18.3px] text-black/60">
          <p className="font-bold">ALA-Nexus&trade; isn&rsquo;t just a planning model.</p>
          <p>
            It&rsquo;s a recalibration system for overwhelmed leaders and
            disjointed teams.
          </p>
        </div>
        <p className="mt-[18px] text-[14px] leading-[19px] text-black/60">
          It unfolds in three deeply practical, deeply personal stages:
        </p>

        {/* --ala-col is the copy column: the card's inner width, capped at
            Figma's 300px text box. Figma sets the title at 23.469px and the
            body at 20.536px inside that box; Inter needs ~5% more room, so both
            scale off the column (20.536/(300*1.05) = 0.0652, and 0.0745 for the
            title to hold the same ratio) and the Figma line breaks survive. */}
        <div className="mt-[40px] flex flex-col gap-[16px] [--ala-col:min(calc(min(100vw,430px)-108px),300px)] [--card-w:calc(min(100vw,430px)-32px)]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="relative rounded-[4px] bg-gradient-to-b from-navy to-blue"
            >
              {/* Clips the pattern to the card's rounded corners. Unlike the
                  desktop cards, the mobile frame carries no corner sparkle. */}
              <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                <img
                  src={card.pattern}
                  alt=""
                  className={`pointer-events-none absolute h-auto ${card.patternClass}`}
                />
              </div>
              {/* Card-local geometry from node 1296:4557: title at 37.74,
                  body at 86, arrow at 195 on a 234px card. */}
              <div className="relative px-[38px] pt-[38px] pb-[36px]">
                <p className="text-[min(23.469px,calc(var(--ala-col)*0.0745))] leading-[1.25] font-bold text-white">
                  {card.title}
                </p>
                <p className="mt-[19px] max-w-[300px] text-[min(20.536px,calc(var(--ala-col)*0.0652))] leading-[1.3] text-white">
                  {card.body}
                </p>
                <ArrowRight className="mt-[12px] w-[39.58px] text-white" />
              </div>
            </div>
          ))}
        </div>

        <MobilePill
          as="a"
          href="#apply-ala-nexus"
          variant="navyOutline"
          size="smFluid"
          className="mt-[24px] max-w-full"
        >
          Apply ALA-Nexus to Your Business
        </MobilePill>
      </MobileContainer>
    </section>
  );
}
