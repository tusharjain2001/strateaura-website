import { ArrowRight } from "../ui/Icons";
import fan from "../../assets/sample/mkt-fan.svg";
import poly from "../../assets/sample/mkt-poly.svg";
import arc from "../../assets/sample/mkt-arc.svg";

// Figma node 1638:3961. Five navy→blue gradient cards, each with a faint cream
// line-art motif that bleeds off an edge (clipped by the card's rounded corners).
// Pattern placement is expressed as a share of the 335x193 card so it scales.
const CARDS = [
  {
    title: "Wellness-Centric Leadership",
    pattern: fan,
    patternClass: "left-[45%] top-0 h-full w-auto",
  },
  {
    title: "Strategic Marketing in Higher Education",
    pattern: poly,
    patternClass: "left-[36%] top-[48%] w-[36.5%]",
  },
  {
    title: "Integrated Marketing Strategy masterclass",
    pattern: fan,
    patternClass: "left-[45%] top-0 h-full w-auto",
  },
  {
    title: "Digital Marketing with Purpose",
    pattern: poly,
    patternClass: "left-[36%] top-[48%] w-[36.5%]",
  },
  {
    title: "Marketing in the Age of Digital Transformation",
    pattern: arc,
    patternClass: "left-[23%] top-[57%] w-[56%]",
  },
];

export default function MarketingPrograms() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-[72px] sm:px-8 lg:px-12 lg:pt-[126px] xl:px-[72px]">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="text-[clamp(1.75rem,1.9vw,36px)] font-bold leading-[1.2] text-navy lg:max-w-[1126px]">
            Our Marketing &amp;
            <br />
            Leadership Programs.
          </h2>
          <p className="text-[clamp(1rem,1.05vw,20px)] leading-normal text-navy lg:max-w-[515px]">
            We also offer a suite of practical marketing and leadership programs
            for professionals, teams, and institutions. All programs carry KHDA
            Attested Attendance Certificate.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[64px] lg:grid-cols-5 lg:gap-[16px]">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative flex min-h-[193px] flex-col justify-between overflow-hidden rounded-[3px] bg-gradient-to-b from-navy to-blue p-[18px]"
            >
              <img
                src={card.pattern}
                alt=""
                className={`pointer-events-none absolute ${card.patternClass}`}
              />
              <h3 className="relative max-w-[200px] text-[clamp(1.05rem,1.08vw,20.79px)] font-bold leading-[1.15] text-white">
                {card.title}
              </h3>
              <ArrowRight className="relative w-[20px] text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
