import FrameworkTag from "./FrameworkTag";
import CtaPill from "../ui/CtaPill";
import { ArrowRight } from "../ui/Icons";
import cardStar from "../../assets/frameworks/5cstar.png";
import cardArrow from "../../assets/frameworks/5carrow.png";
import conceptualisePattern from "../../assets/frameworks/fivecs-conceptualise-pattern.svg";
import curatePattern from "../../assets/frameworks/fivecs-curate-pattern.png";
import convertPattern from "../../assets/frameworks/fivecs-convert-pattern.png";
import cultivateLaurel from "../../assets/frameworks/fivecs-cultivate-laurel.png";

// Pattern placement taken from Figma (node 1755:3024). Each box is expressed
// as a share of its own card — 346x204 for the single-width cards, 725x201 for
// the wide Cultivate card — so it scales with the card; several bleed past a
// card edge, which the wrapper clips.
const CARDS = [
  {
    key: "conceptualise",
    title: "Conceptualise",
    body: "Understand your context, your customers, your core essence",
    pattern: conceptualisePattern,
    // Figma flips this one vertically (-scale-y-100) and lets it bleed right.
    patternClass: "left-[46.7%] top-[68.5%] h-[55.9%] w-[73.6%] -scale-y-100",
  },
  {
    key: "curate",
    title: "Curate",
    body: "Shape strategy that reflects your full identity",
    pattern: curatePattern,
    patternClass: "left-[44.8%] top-[27%] h-[139.6%] w-[82.3%]",
  },
  {
    key: "communicate",
    title: "Communicate",
    body: "Activate across platforms, teams, and human moments",
    pattern: null,
    patternClass: "",
  },
  {
    key: "convert",
    title: "Convert",
    body: "Measure what truly matters: traction, trust, and resonance",
    pattern: convertPattern,
    patternClass: "left-[76.8%] top-0 h-[105.7%] w-[23.1%]",
    short: true,
  },
  {
    key: "cultivate",
    title: "Cultivate",
    body: "Sustain loyalty, adapt with intention, and evolve without losing your essence",
    pattern: cultivateLaurel,
    patternClass: "left-[53.8%] top-0 h-[127.2%] w-[42.3%]",
    wide: true,
    short: true,
  },
];

function Card({ card }) {
  return (
    <div
      className={`group relative min-h-[240px] transition-transform duration-[400ms] hover:scale-90 lg:min-h-0 ${
        card.wide ? "md:col-span-2" : ""
      } ${card.short ? "lg:h-[201px]" : "lg:h-[204px]"}`}
    >
      {/* Gold star straddling the top-right corner: 33x35 per Figma, centred
          on the corner point so half of it hangs outside the card. It sits on
          the scaling wrapper, outside the clipped panel. */}
      <img
        src={cardStar}
        alt=""
        className="pointer-events-none absolute -top-[15px] -right-[14px] z-10 h-[30px] w-[28px] lg:-top-[18px] lg:-right-[16px] lg:h-[35px] lg:w-[33px]"
      />
      {/* Like the Home cards, the hover splits across two elements: the
          wrapper composites the scale while this panel transitions only its
          glow shadow — one element doing both repaints every frame and
          stutters. The panel also clips the pattern. */}
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-gold to-gold-light transition-shadow duration-[400ms] group-hover:shadow-[0_0_10px_var(--color-gold)]">
        {card.pattern && (
          <img
            src={card.pattern}
            alt=""
            className={`pointer-events-none absolute ${card.patternClass}`}
          />
        )}
        {/* Figma pads 37px left / 36px top and parks the 39px arrow on the
            168px line, identical on every card — mt-auto keeps the arrows on
            one baseline instead of letting short copy float them up. */}
        <div className="relative flex h-full flex-col p-6 lg:pt-[36px] lg:pr-[30px] lg:pb-[23px] lg:pl-[37px]">
          <p className="text-[18px] leading-[1.24] font-bold text-white lg:text-[20px]">
            {card.title}
          </p>
          <p
            className={`mt-3 text-[15px] leading-[1.24] font-medium text-white lg:mt-[9px] lg:text-[16px] ${
              card.wide ? "lg:max-w-[342px]" : "lg:max-w-[236px]"
            }`}
          >
            {card.body}
          </p>
          <img
            src={cardArrow}
            alt=""
            className="mt-8 h-auto w-[39px] lg:mt-auto"
          />
        </div>
      </div>
    </div>
  );
}

// Figma 1755:3024 ("Frame 65", 1440x973): content column 1120 wide at x:160,
// y:89; the CTA pill is centred on the column between the copy and the cards.
export default function FiveCsSection() {
  return (
    <section className="relative bg-[linear-gradient(74deg,rgba(255,249,232,0)_6.2%,#edd8a1_93.8%)]">
      {/* Two small decorative white arrows in the left gutter (1755:3026/27). */}
      <div className="pointer-events-none absolute top-[424px] left-[8.06%] hidden w-[25px] text-white lg:block">
        <ArrowRight className="w-full" />
      </div>
      <div className="pointer-events-none absolute top-[645px] left-[8.06%] hidden w-[25px] text-white lg:block">
        <ArrowRight className="w-full" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[clamp(2rem,11.11vw,160px)] lg:pt-[89px] lg:pb-[110px]">
        <FrameworkTag>FRAMEWORK 2</FrameworkTag>

        <div className="mt-4 lg:mt-[40px] lg:flex lg:items-start lg:justify-between lg:gap-10">
          {/* Figma fixes this row at 151px via the left column and centres
              the Core Concept column on it (19.5px down from the top). */}
          <div className="lg:min-h-[151px] lg:flex-1">
            <h2 className="text-[26px] leading-[1.2] font-bold text-navy sm:text-[28px] lg:text-[30px]">
              {/* Figma breaks this heading after "of" (node 1755:3063). */}
              The 5Cs of <span className="lg:block">Brand Health</span>
            </h2>
            <p className="mt-2 max-w-[286px] text-[15px] leading-[1.17] font-light text-black/60 lg:mt-[14px] lg:text-[16px]">
              This is more than brand strategy. It&rsquo;s a rhythm. One that
              builds presence without burnout.
            </p>
          </div>

          <div className="mt-8 lg:mt-[19px] lg:w-[700px] lg:max-w-full lg:shrink-0">
            <p className="text-[20px] font-bold tracking-wide text-gold uppercase">
              Core Concept
            </p>
            {/* Figma (node 1755:3065) keeps these as one tight block: the bold
                sentence sits alone on line 1, the body starts on line 2 with no
                paragraph gap between them. */}
            <div className="mt-3 max-w-[662px] text-[15px] leading-[1.17] font-medium text-black/60 lg:mt-[8px] lg:text-[16px]">
              <p className="font-bold text-black/60">
                The 5Cs of Brand Health isn&rsquo;t just a marketing framework.
              </p>
              <p>
                It&rsquo;s a brand rhythm — a five-stage system for building
                presence that is consistent, credible, and genuinely yours.
                From concept to advocacy, it guides you through every stage of
                the brand journey without losing the essence that makes your
                organisation distinct.
              </p>
            </div>
          </div>
        </div>

        {/* CTA pill centred on the full column (Figma 1755:3055). */}
        <div className="mt-6 flex lg:mt-[17px] lg:justify-center">
          <CtaPill
            as="a"
            href="#brand-health-support"
            variant="goldOutline"
            size="sm39"
          >
            Explore Brand Health Support
          </CtaPill>
        </div>

        {/* Cards: 346-wide columns, 33px column gap, 28px row gap. Figma puts
            the card rects 57px under the pill (40px gap + the 17px the
            sparkles stick up above the cards). */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-[57px] lg:max-w-[1104px] lg:gap-x-[33px] lg:gap-y-[28px]">
          {CARDS.map((card) => (
            <Card key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
