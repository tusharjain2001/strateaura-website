import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import bgLineArt from "../../assets/insights/tools-bg-lineart.png";
import cardAura from "../../assets/cta-aura.svg";
import toolsCircles from "../../assets/insights/tools-circles.png";
import toolsArcs from "../../assets/insights/tools-arcs.png";
import cardSparkle from "../../assets/insights/gold-card-sparkle.png";

function CardMark() {
  return (
    <span className="absolute bottom-[70px] left-1/2 z-10 flex size-[42px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:bottom-[86px] lg:size-[50px]">
      <Sparkle className="size-[18px] text-gold lg:size-[22px]" />
    </span>
  );
}

const CARDS = [
  {
    title: "ALA-Nexus™ Diagnostic Tool",
    desc: "Quick audit: Are your actions aligned with your intent?",
    decor: (
      <img
        src={cardAura}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] w-full object-cover object-top opacity-70"
      />
    ),
  },
  {
    title: "Brand Health Self-Assessment",
    desc: "Is your brand just active or actually alive?",
    decor: (
      <img
        src={toolsCircles}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] w-full object-cover opacity-80"
      />
    ),
  },
  {
    title: "VEIL™ Energy Alignment Prompt",
    desc: "A one-page guide to restoring your presence",
    decor: (
      <img
        src={toolsArcs}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] w-full object-cover opacity-80"
      />
    ),
  },
];

export default function ToolsFrameworks() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[70px] lg:py-[110px]">
        {/* Heading column, with a faint watermark line-art behind it (desktop only) */}
        <div className="relative">
          <img
            src={bgLineArt}
            alt=""
            className="pointer-events-none absolute top-[-60px] -left-[110px] hidden w-[600px] opacity-60 lg:block"
          />
          <div className="relative max-w-[610px]">
            <h2 className="text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
              Tools &amp; Self-Guided Frameworks
            </h2>
            <p className="mt-4 text-[clamp(1.0625rem,1.7vw,1.5rem)] leading-normal font-light text-black/60 lg:mt-6">
              This isn’t DIY this is strategic self-reflection.
            </p>
            <CtaPill as="a" href="#access-tools" variant="goldOutline" size="md" className="mt-6 lg:mt-9">
              Access Tools
            </CtaPill>
          </div>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-[40px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative min-h-[300px] overflow-hidden rounded-[8px] bg-gradient-to-b from-gold to-gold-light p-8 pb-[110px] text-white lg:min-h-[420px] lg:p-[54px_40px_130px]"
            >
              <img
                src={cardSparkle}
                alt=""
                className="pointer-events-none absolute -top-[10px] right-[10px] w-8 lg:top-[-14px] lg:right-[18px] lg:w-9"
              />
              <p className="relative z-10 text-[24px] leading-[1.15] font-bold lg:text-[28px]">
                {card.title}
              </p>
              <p className="relative z-10 mt-4 text-[19px] leading-[1.3] lg:mt-6 lg:text-[22px]">
                {card.desc}
              </p>
              {card.decor}
              <CardMark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
