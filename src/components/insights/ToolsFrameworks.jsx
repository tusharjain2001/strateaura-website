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
    <section className="overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] py-14 lg:py-[110px]">
        <div className="lg:flex lg:items-center lg:gap-[40px]">
          {/* Heading column — on the left at desktop, on top on mobile
              (Figma node 1136:5782 puts the heading beside the card rail). */}
          <div className="relative shrink-0 px-5 sm:px-8 lg:w-[500px] lg:pr-0 lg:pl-[70px]">
            <img
              src={bgLineArt}
              alt=""
              className="pointer-events-none absolute top-[-60px] -left-[110px] hidden w-[600px] opacity-60 lg:block"
            />
            <div className="relative">
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

          {/* Card rail — scrolls horizontally; the next card peeks off the
              right edge as the scroll affordance (Figma runs the third card
              past the frame). Snap points make it click into place. The native
              scrollbar is hidden to match Figma — the peeking card is the cue. */}
          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-[40px] sm:px-8 lg:mt-0 lg:min-w-0 lg:flex-1 lg:pr-[70px] lg:pl-0">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="relative min-h-[380px] w-[78vw] max-w-[480px] shrink-0 snap-start overflow-hidden rounded-[8px] bg-gradient-to-b from-gold to-gold-light p-8 pb-[110px] text-white sm:w-[400px] lg:h-[501px] lg:min-h-0 lg:w-[480px] lg:p-[54px_40px_130px]"
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
      </div>
    </section>
  );
}
