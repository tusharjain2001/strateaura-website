import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import FwTag from "./FwTag";
import cardArrow from "../../assets/frameworks/5carrow.png";
import conceptualisePattern from "../../assets/frameworks/fivecs-conceptualise-pattern.svg";
import curatePattern from "../../assets/frameworks/fivecs-curate-pattern.png";
import convertPattern from "../../assets/frameworks/fivecs-convert-pattern.png";

// Pattern boxes from Figma node 1296:4907, as a share of the card they sit on
// (179.63x132.71 for the five half-width cards). Communicate and Cultivate have
// empty artwork frames in the mobile file, so they carry no pattern.
const CARDS = [
  {
    key: "conceptualise",
    title: "Conceptualise",
    body: "Understand your context, your customers, your core essence",
    pattern: conceptualisePattern,
    // Bleeds off the bottom edge, flipped vertically as on desktop.
    patternClass: "left-[46.7%] bottom-[-32.5%] w-[53.3%] -scale-y-100",
  },
  {
    key: "curate",
    title: "Curate",
    body: "Shape strategy that reflects your full identity",
    pattern: curatePattern,
    patternClass: "left-[55.7%] top-[40%] w-[44.3%]",
  },
  {
    key: "convert",
    title: "Convert",
    body: "Measure what truly matters: traction, trust, and resonance",
    pattern: convertPattern,
    patternClass: "left-[76.9%] top-0 h-full w-[23.1%]",
  },
  {
    key: "communicate",
    title: "Communicate",
    body: "Activate across platforms, teams, and human moments",
  },
  {
    key: "cultivate",
    title: "Cultivate",
    body: "Sustain loyalty, adapt with intention, and evolve without losing your essence",
    wide: true,
  },
];

function Card({ card }) {
  return (
    <div
      className={`relative flex flex-col rounded-[2px] bg-gradient-to-b from-gold to-gold-light ${
        card.wide ? "col-span-2 h-[110.55px]" : "h-[132.71px]"
      }`}
    >
      {card.pattern && (
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img
            src={card.pattern}
            alt=""
            className={`pointer-events-none absolute ${card.patternClass}`}
          />
        </div>
      )}
      <div className="relative flex h-full flex-col pt-[18.5px] pl-[19.43px]">
        <p className="text-[12px] leading-[14.2px] font-bold text-white">
          {card.title}
        </p>
        <p
          className={`mt-[7px] text-[10px] leading-[11.4px] font-medium text-white ${
            card.wide ? "max-w-[250px]" : "max-w-[122px]"
          }`}
        >
          {card.body}
        </p>
        <img
          src={cardArrow}
          alt=""
          className="mt-auto mb-[17px] h-[10px] w-[20.4px]"
        />
      </div>
    </div>
  );
}

/** Framework 2 — Figma nodes 1296:4587 (band) and 1296:4588 (content). */
export default function FwFiveCs() {
  return (
    <section className="bg-[linear-gradient(100deg,rgba(255,249,232,0)_0%,#EDD8A1_100%)] py-[60px]">
      <MobileContainer>
        <FwTag>FRAMEWORK 2</FwTag>

        <h2 className="mt-[23px] text-[25px] leading-[30px] font-bold text-navy-2">
          The 5Cs of Brand Health
        </h2>

        <p className="mt-[26px] text-[14px] leading-[18px] font-bold tracking-[0.5px] text-gold uppercase">
          Core Concept
        </p>
        <div className="mt-[10px] text-[14px] leading-[21.5px] text-black/60">
          <p className="font-bold">
            The 5Cs of Brand Health isn&rsquo;t just a marketing framework.
          </p>
          <p>
            It&rsquo;s a brand rhythm — a five-stage system for building
            presence that is consistent, credible, and genuinely yours. From
            concept to advocacy, it guides you through every stage of the brand
            journey without losing the essence that makes your organisation
            distinct.
          </p>
        </div>
        <p className="mt-[18px] text-[14px] leading-[19px] text-black/60">
          This is more than brand strategy. It&rsquo;s a rhythm. One that builds
          presence without burnout.
        </p>

        <MobilePill
          as="a"
          href="#brand-health-support"
          variant="goldOutline"
          className="mt-[24px] w-[290px] max-w-full"
        >
          Explore Brand Health Support
        </MobilePill>

        {/* 1296:4907 — 2-up grid with the wide Cultivate card closing it out. */}
        <div className="mt-[36px] grid grid-cols-2 gap-[9.74px]">
          {CARDS.map((card) => (
            <Card key={card.key} card={card} />
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
