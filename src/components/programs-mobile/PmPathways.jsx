import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import check from "../../assets/programs/pathway-bullet-check.svg";

// Figma nodes 1433:36 / 1433:61 / 1433:86 — cream phase cards inside the online
// pathway card, each a title over a two-column checklist.
const PHASES = [
  {
    title: "MAP: KNOW YOUR TERRAIN",
    points: ["3 weeks", "Biological Awareness", "Energy Mapping", "Group Calls"],
  },
  {
    title: "DECODE: DESIGN YOUR ARCHITECTURE",
    points: ["3 weeks", "Identity Gap", "Inner-outer Self", "Reflection"],
  },
  {
    title: "UNVEIL: LIVE COHORT (For Online Graduates)",
    points: ["6 weeks", "Architecture + Authority", "Enters at Phase 3"],
  },
];

// Figma node 1433:117 — the institutional card's single cream panel.
const INSTITUTIONAL = {
  title: "KHDA Attested Certificate of Completion",
  points: [
    "Institutions sponsoring women in leadership roles",
    "Director level and above",
  ],
};

function PhaseCard({ title, points }) {
  return (
    <div className="rounded-[4px] bg-cream px-[16px] py-[17px]">
      <p className="text-[min(16px,calc(var(--phase-col)*0.0538))] leading-normal font-bold text-navy-2">
        {title}
      </p>
      <ul className="mt-[10px] grid grid-cols-2 gap-x-[12px] gap-y-[5px]">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-[5px]">
            <img
              src={check}
              alt=""
              aria-hidden
              className="mt-[3px] size-[11.35px] shrink-0"
            />
            <span className="text-[min(13px,calc(var(--phase-col)*0.0437))] leading-[1.3] text-navy-2">
              {point}
            </span>
          </li>
        ))}
      </ul>
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
    <section className="pt-[60px] pb-[46px]">
      <MobileContainer>
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

            <div className="mt-[23px] flex flex-col items-start gap-[9px]">
              <MobilePill
                as="a"
                href="/veil"
                variant="navyOutline"
                size="veil"
                icon="arrowUp"
              >
                Learn More about MAP &amp; DECODE
              </MobilePill>
              <MobilePill
                as="a"
                href="/webinar"
                variant="navyOutline"
                size="veil"
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
                <ul className="mt-[10px] flex flex-col gap-[5px]">
                  {INSTITUTIONAL.points.map((point) => (
                    <li key={point} className="flex items-start gap-[5px]">
                      <img
                        src={check}
                        alt=""
                        aria-hidden
                        className="mt-[3px] size-[11.35px] shrink-0"
                      />
                      <span className="text-[13px] leading-[1.3] text-navy-2">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-[23px]">
              <MobilePill
                as="a"
                href="/contact"
                variant="navyOutline"
                size="veil"
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
