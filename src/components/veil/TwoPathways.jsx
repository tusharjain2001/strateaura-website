import CtaPill from "../ui/CtaPill";
import bgSwirl from "../../assets/veil/pathways-bg-swirl.svg";
import subcardDeco1 from "../../assets/programs/construct-card-deco-1.svg";
import subcardDeco2 from "../../assets/programs/construct-card-deco-2.svg";
import subcardDeco3 from "../../assets/programs/construct-card-deco-3.svg";
import subcardSparkle from "../../assets/programs/construct-card-sparkle.svg";

// Titles and bullets carry Figma's exact line breaks (node 1220:224): the
// bold prefix sits alone on line 1, and the two long bullets break where the
// design does. Inter wraps differently than the design font, so the breaks
// are forced (block + whitespace-nowrap at lg) rather than left to reflow.
const PHASES = [
  {
    title: (
      <>
        <span className="block">MAP -</span>
        <span className="block font-normal">Know Your Terrain:</span>
      </>
    ),
    items: [
      "3 weeks",
      "Biological awareness",
      "Sleep and energy data",
      "Depletion pattern named",
    ],
    deco: subcardDeco1,
  },
  {
    title: (
      <>
        <span className="block">DECODE -</span>
        <span className="block font-normal">Design Your Architecture:</span>
      </>
    ),
    items: [
      "3 weeks",
      "The way your system responds",
      [
        "The gap between who you are",
        "at your strongest and how you",
        "have been showing up.",
      ],
    ],
    deco: subcardDeco2,
  },
  {
    title: (
      <>
        <span className="block">
          UNVEIL - <span className="font-normal">Live Cohort</span>
        </span>
        <span className="block font-normal">(for online graduates):</span>
      </>
    ),
    items: [
      "6 weeks",
      "Live cohort from Phase 3",
      ["Architecture, authority, the", "closing ceremony"],
    ],
    deco: subcardDeco3,
  },
];

function SubcardList({ items }) {
  return (
    <ul className="relative z-10 mt-4 list-[square] space-y-1 pl-5 text-[clamp(1rem,1.28vw,1.125rem)] leading-normal text-white lg:[&_span]:block lg:[&_span]:whitespace-nowrap">
      {items.map((item, i) => (
        <li key={i}>
          {Array.isArray(item) ? (
            // Trailing space so the lines read as one sentence when they run
            // inline on mobile; the spans only become forced line breaks at lg.
            item.map((line, j) => <span key={j}>{line}{" "}</span>)
          ) : (
            <span>{item}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function TwoPathways() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#e6c464]">
      <img
        src={bgSwirl}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[82%] w-full object-cover object-bottom opacity-60 lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[115px]">
        <h2 className="text-center text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
          The Two Pathways of VEIL™
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:gap-10">
          {/* UNVEIL Institutional */}
          <div className="rounded-xl bg-white p-6 shadow-[0_0_27px_-11px_#b3902f] sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              {/* Heading, body, then CTA — on mobile the CTA drops below the
                  body (Figma); on desktop grid placement keeps it bottom-left. */}
              <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.25] font-bold text-gold lg:col-start-1 lg:row-start-1 lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
                <span>UNVEIL - </span>
                <span>The Institutional </span>
                <span>Cohort Program</span>
              </h3>
              <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <p className="text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-navy-2">
                  A <strong className="font-bold">12-week</strong>, live, facilitator-led
                  cohort for <strong className="font-bold">8–12 women.</strong> Delivered
                  in-person. Uses{" "}
                  <strong className="font-bold">
                    9 internationally validated psychometric instruments
                  </strong>
                  , all with Arabic-validated versions. Every participant exits with a
                  scored record of change across{" "}
                  <strong className="font-bold">5 instruments.</strong>
                </p>
                <div className="mt-6">
                  <p className="text-[clamp(1.125rem,1.6vw,1.5rem)] font-bold text-navy-2">
                    KHDA Attested Certificate of Completion.
                  </p>
                  <ul className="mt-2 list-[square] space-y-1 pl-5 text-[clamp(1rem,1.4vw,1.25rem)] text-navy-2">
                    <li>Institutions sponsoring women in leadership roles</li>
                    <li>Director level and above</li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
                <CtaPill as="a" href="/contact" variant="navyOutline" size="md">
                  Request a Cohort Proposal
                </CtaPill>
              </div>
            </div>
          </div>

          {/* Online Pathway */}
          <div className="rounded-xl border border-gold-light bg-white p-6 shadow-[0_0_27px_-11px_#b3902f] sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.25] font-bold text-gold lg:col-start-1 lg:row-start-1 lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
                <span>The Online Pathway - </span>
                <span>MAP, DECODE, and </span>
                <span>UNVEIL</span>
              </h3>
              <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <p className="text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-navy-2">
                  A self-funded, self-paced online journey for individual women who are
                  ready to start without waiting for an institution to sponsor them. No
                  commitments required.
                </p>
                <p className="mt-3 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal font-bold text-navy-2">
                  Free Live Webinar: Lead Without Losing Yourself.
                </p>
              </div>
              <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
                <CtaPill as="a" href="/webinar" variant="navyOutline" size="md">
                  Register for the Free Webinar
                </CtaPill>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-10">
              {PHASES.map((phase, i) => (
                <div
                  key={i}
                  className="relative min-h-[190px] rounded-[4px] bg-gradient-to-b from-navy to-blue p-6"
                >
                  {/* Clip wrapper keeps the deco inside the rounded card
                      without clipping the corner sparkle, which straddles
                      the corner half-outside. */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]">
                    <img
                      src={phase.deco}
                      alt=""
                      className="absolute right-0 bottom-2 w-[62%] opacity-80"
                    />
                  </div>
                  <img
                    src={subcardSparkle}
                    alt=""
                    className="pointer-events-none absolute -top-[14px] -right-[14px] z-10 size-[28px]"
                  />
                  <p className="relative z-10 text-[clamp(1.25rem,1.8vw,1.5rem)] font-bold text-white">
                    {phase.title}
                  </p>
                  <SubcardList items={phase.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
