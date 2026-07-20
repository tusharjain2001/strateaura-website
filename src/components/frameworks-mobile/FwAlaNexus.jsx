import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import FwTag from "./FwTag";
import { ArrowRight } from "../ui/Icons";
import assessPattern from "../../assets/frameworks/ala-assess-pattern.svg";
import leveragePattern from "../../assets/frameworks/ala-leverage-pattern.svg";
import actuatePattern from "../../assets/frameworks/ala-actuate-pattern.svg";

// Pattern boxes are Figma's (node 1296:4554) expressed as a share of the 370px
// card, so each keeps its place as the column grows to the 430px cap. Every one
// bleeds past an edge; the wrapper clips them to the rounded corners.
const CARDS = [
  {
    key: "assess",
    title: "Assess",
    body: "What’s really happening, in your decisions, your data, your behaviour, your energy.",
    pattern: assessPattern,
    patternClass: "left-[48.4%] top-[36.6%] w-[51.5%]",
  },
  {
    key: "leverage",
    title: "Leverage",
    body: "What’s working (even if hidden), strengths, patterns, underused insight.",
    pattern: leveragePattern,
    patternClass: "left-[58.3%] top-[49.3%] w-[41.6%]",
  },
  {
    key: "actuate",
    title: "Actuate",
    body: "What needs to move, with intention, timing, and support.",
    // Figma flips this one vertically, as on desktop.
    patternClass: "left-[50.2%] bottom-0 w-[50%] -scale-y-100",
    pattern: actuatePattern,
  },
];

/** Framework 1 — Figma node 1296:4541. */
export default function FwAlaNexus() {
  return (
    <section className="bg-white pt-[120px] pb-[84px]">
      <MobileContainer>
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

        <div className="mt-[40px] flex flex-col gap-[16px]">
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
              <div className="relative px-[38px] pt-[29px] pb-[38px]">
                <p className="text-[22px] leading-[29px] font-bold text-white">
                  {card.title}
                </p>
                <p className="mt-[18px] max-w-[300px] text-[19px] leading-[25.5px] text-white">
                  {card.body}
                </p>
                <ArrowRight className="mt-[14px] w-[39.58px] text-white" />
              </div>
            </div>
          ))}
        </div>

        <MobilePill
          as="a"
          href="#apply-ala-nexus"
          variant="navyOutline"
          className="mt-[24px] w-[323px] max-w-full"
        >
          Apply ALA-Nexus to Your Business
        </MobilePill>
      </MobileContainer>
    </section>
  );
}
