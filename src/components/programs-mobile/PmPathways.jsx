import { Link } from "react-router-dom";
import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import check from "../../assets/programs/pathway-bullet-check.svg";
import pathwaysBg from "../../assets/programs/pathways-bg-mobile.svg";

// Figma nodes 1878:5829 / 5854 / 5879 — cream phase cards inside the online
// pathway card, each a title over two checklist columns. The columns are
// explicit because Figma reads down each one (3 weeks / Biological Awareness,
// then Energy Mapping / Group Calls), not across the rows.
const PHASES = [
  {
    title: ["MAP: KNOW YOUR TERRAIN"],
    left: ["3 weeks", "Biological Awareness"],
    right: ["Energy Mapping", "Group Calls"],
  },
  {
    title: ["DECODE: DESIGN YOUR ARCHITECTURE"],
    left: ["3 weeks", "Identity Gap"],
    right: ["Inner-outer Self", "Reflection"],
  },
  {
    // 1878:5880 breaks the title after "LIVE COHORT".
    title: ["UNVEIL: LIVE COHORT", "(For Online Graduates)"],
    left: ["6 weeks", "Architecture + Authority"],
    right: ["Enters at Phase 3"],
  },
];

// Figma node 1878:5910 — the institutional card's single cream panel.
const INSTITUTIONAL = {
  title: "KHDA Attested Certificate of Completion",
  points: [
    "Institutions sponsoring women in leadership roles",
    "Director level and above",
  ],
};

// One checklist row: an 11.35px tick and the 14px label Figma sets in Acumin.
function Point({ children }) {
  return (
    <li className="flex items-start gap-[4.68px]">
      <img
        src={check}
        alt=""
        aria-hidden
        className="mt-[3px] size-[11.35px] shrink-0"
      />
      <span className="text-[min(14px,calc(var(--phase-col)*0.047))] leading-[1.3] text-navy-2">
        {children}
      </span>
    </li>
  );
}

// Figma splits the panel's 283px into a 141.6 column, a 28.7 gutter and a
// 112.9 column — 50% / 10.1% / 39.9% — so the shares hold as the card narrows.
function PhaseCard({ title, left, right }) {
  return (
    <div className="rounded-[4px] bg-cream px-[16px] py-[17px]">
      <p className="text-[min(16px,calc(var(--phase-col)*0.0538))] leading-[1.09] font-bold text-navy-2">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <div className="mt-[8px] flex gap-[10.1%]">
        <ul className="flex w-[50%] flex-col gap-[5.34px]">
          {left.map((point) => (
            <Point key={point}>{point}</Point>
          ))}
        </ul>
        <ul className="flex w-[39.9%] flex-col gap-[5.34px]">
          {right.map((point) => (
            <Point key={point}>{point}</Point>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * "Two pathways are available:" — Figma node 1433:10.
 *
 * Two bordered white cards: the self-paced online pathway (MAP / DECODE /
 * UNVEIL phases plus two CTAs) and the institutional cohort.
 *
 * Figma sets this copy in a 332.89px column of Acumin Pro; Inter runs ~5% wider
 * and the column here is narrower still, so the headings and body wrapped a
 * line early. Each card publishes its own widths — --path-col for the card,
 * --phase-col for the cream phase cards inside it, --pill-col for the CTAs —
 * and the type scales off them, so the Figma line breaks hold. The
 * coefficients are size/(column * 1.05).
 */
export default function PmPathways() {
  return (
    <section className="relative pt-[60px] pb-[46px]">
      {/* 1433:11 — Frame 98: white→gold wash with white swirls behind both
          cards. Figma stretches the 584px-wide art past the 402px frame
          (19.18% off the left edge), so the img overfills the section the
          same way; the page root's overflow-x-clip crops it. */}
      <img
        src={pathwaysBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-19.18%] h-full w-[145.31%] max-w-none"
      />
      <MobileContainer className="relative">
        {/* 1433:14 — centred, Medium weight (not bold). */}
        <h2 className="text-center text-[20px] leading-normal font-medium text-navy-2">
          Two pathways are available:
        </h2>

        <div className="mt-[24px] flex flex-col gap-[32px]">
          {/* 1433:16 — the online pathway */}
          <div className="rounded-[8px] border border-gold-light bg-white px-[19px] pt-[30px] pb-[24px] [--path-col:calc(min(100vw,430px)-72px)] [--phase-col:calc(var(--path-col)-32px)] [--pill-col:var(--path-col)]">
            {/* 1433:18 — both lines are #b3902f, not just the second. */}
            <h3 className="text-[min(20px,calc(var(--path-col)*0.0572))] leading-normal font-bold text-gold">
              <span className="block">The Online Pathway -</span>
              <span className="block">MAP, DECODE, and UNVEIL</span>
            </h3>
            <p className="mt-[16px] text-[min(16px,calc(var(--path-col)*0.0458))] leading-normal text-navy-2">
              A self-funded, self-paced online journey for individual women who
              are ready to start without waiting for an institution to sponsor
              them.
              <br />
              Free Live Webinar: Lead Without Losing Yourself.
            </p>

            <div className="mt-[20px] flex flex-col gap-[15px]">
              {PHASES.map((phase) => (
                <PhaseCard key={phase.title} {...phase} />
              ))}
            </div>

            <div className="mt-[23px] flex flex-col items-start gap-[9.35px]">
              <MobilePill
                as={Link}
                to="/veil#two-pathways"
                variant="navyOutline"
                size="pathway"
                icon="arrowUp"
              >
                Learn More about MAP &amp; DECODE
              </MobilePill>
              <MobilePill
                as="a"
                href="/webinar"
                variant="navyOutline"
                size="pathway"
              >
                Register for the Free Webinar
              </MobilePill>
            </div>
          </div>

          {/* 1433:106 — the institutional cohort */}
          <div className="rounded-[8px] border border-gold-light bg-white px-[19px] pt-[30px] pb-[24px] [--path-col:calc(min(100vw,430px)-72px)] [--phase-col:calc(var(--path-col)-32px)] [--pill-col:var(--path-col)]">
            {/* 1433:108 — all gold, and Figma breaks after "UNVEIL -". */}
            <h3 className="text-[min(20px,calc(var(--path-col)*0.0572))] leading-normal font-bold text-gold">
              <span className="block">UNVEIL -</span>
              <span className="block">The Institutional Cohort Program</span>
            </h3>
            {/* 1433:109 bolds the concrete commitments inside the sentence. */}
            <p className="mt-[16px] text-[min(16px,calc(var(--path-col)*0.0458))] leading-normal text-navy-2">
              A <span className="font-bold">12-week</span>, live,
              facilitator-led cohort for{" "}
              <span className="font-bold">8–12 women.</span> Delivered
              in-person. Uses{" "}
              <span className="font-bold">
                9 internationally validated psychometric instruments
              </span>
              , all with Arabic-validated versions. Every participant exits with
              a scored record of change across{" "}
              <span className="font-bold">5 instruments.</span>
            </p>

            <div className="mt-[20px]">
              <div className="rounded-[4px] bg-cream px-[16px] py-[17px]">
                <p className="text-[16px] leading-normal font-bold text-navy-2">
                  {INSTITUTIONAL.title}
                </p>
                <ul className="mt-[10.7px] flex flex-col gap-[5.34px]">
                  {INSTITUTIONAL.points.map((point) => (
                    <Point key={point}>{point}</Point>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-[23px]">
              <MobilePill
                as={Link}
                to="/contact"
                variant="navyOutline"
                size="pathway"
              >
                Request a Cohort Proposal
              </MobilePill>
            </div>
          </div>
        </div>
      </MobileContainer>
    </section>
  );
}
