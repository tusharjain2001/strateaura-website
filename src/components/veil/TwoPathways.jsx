import CtaPill from "../ui/CtaPill";
import bgLaurel from "../../assets/veil/pathways-bg-v2.svg";
import subcardDeco1 from "../../assets/programs/construct-card-deco-1.svg";
import subcardDeco2 from "../../assets/programs/construct-card-deco-2.svg";
import subcardDeco3 from "../../assets/programs/construct-card-deco-3.svg";
import subcardSparkle from "../../assets/programs/construct-card-sparkle.svg";

// Figma 1755:1503 (1440x917): 1126px column at x:157, vertically centred
// (73px top/bottom). The Institutional card is 188px tall, the Online card
// 489px with three 322x203 phase cards at y:248. Body copy wraps naturally at
// the new 16px sizes.
const PHASES = [
  {
    prefix: "MAP -",
    title: "Know Your Terrain:",
    items: [
      "3 weeks",
      "Biological awareness",
      "Sleep and energy data",
      "Depletion pattern named",
    ],
    deco: subcardDeco1,
  },
  {
    prefix: "DECODE -",
    title: "Design Your Architecture:",
    items: [
      "3 weeks",
      "The way your system responds",
      "The gap between who you are at your strongest and how you have been showing up.",
    ],
    deco: subcardDeco2,
  },
  {
    prefix: "UNVEIL -",
    title: "Claim Your Ground:",
    items: [
      "6 weeks",
      "Live cohort from Phase 3",
      "Architecture, authority, the closing ceremony",
    ],
    deco: subcardDeco3,
  },
];

export default function TwoPathways() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#e6c464]">
      {/* Background laurel (Figma 1755:1504): 1440x1181 centred, top at 27px,
          the overflow clipped by the section. */}
      <img
        src={bgLaurel}
        alt=""
        className="pointer-events-none absolute top-[27px] left-1/2 hidden h-[1181px] w-[1440px] max-w-none -translate-x-1/2 lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[157px] lg:pt-[73px] lg:pb-[73px]">
        <h2 className="text-center text-[30px] leading-[1.2] font-bold text-navy">
          The Two Pathways of VEIL™
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-[28px] lg:gap-[28px]">
          {/* UNVEIL Institutional — Figma 1755:1506: white 12px-radius card,
              188px tall; title+pill at x:48/y:44, summary column at x:574
              vertically centred. */}
          <div className="rounded-[12px] bg-white shadow-[0_0_27px_-11px_#b3902f] lg:relative lg:h-[188px] lg:overflow-hidden">
            <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:static lg:grid-cols-2 lg:gap-x-16 lg:p-0">
              <div className="lg:absolute lg:top-[44px] lg:left-[48px] lg:w-[368px]">
                <h3 className="text-[clamp(1.5rem,2.083vw,1.875rem)] leading-[1.2] font-bold text-gold">
                  UNVEIL: Institutional
                </h3>
                <div className="mt-6 lg:mt-[19px]">
                  <CtaPill as="a" href="/contact" variant="navyOutline" size="xs">
                    Request a Cohort Proposal
                  </CtaPill>
                </div>
              </div>
              <div className="text-[16px] leading-normal text-navy-2 lg:absolute lg:top-[40px] lg:left-[574px] lg:w-[483px] lg:leading-[1.17]">
                <p className="font-bold">
                  For institutions · 12 weeks · 8–12 women · In-person
                </p>
                <p className="mt-4 lg:mt-[17px]">
                  Internationally validated instruments · Pre/post measurement ·
                  KHDA Attested Certificate · Cohort reporting
                </p>
                <p className="mt-4 lg:mt-[17px]">Led by Dr. Suhair Hamouri</p>
              </div>
            </div>
          </div>

          {/* Online Pathway — Figma 1755:1524: white card, gold-light hairline,
              489px tall; header row at x:47/y:50, phase cards at y:248. */}
          <div className="rounded-[11px] border border-gold-light bg-white shadow-[0_0_27px_-11px_#b3902f] lg:relative lg:h-[489px] lg:overflow-hidden">
            <div className="p-6 sm:p-8 lg:static lg:p-0">
              <div className="grid grid-cols-1 gap-6 lg:static lg:grid-cols-2 lg:gap-x-16">
                <div className="lg:absolute lg:top-[50px] lg:left-[47px] lg:w-[358px]">
                  <h3 className="text-[clamp(1.5rem,2.083vw,1.875rem)] leading-[1.2] font-bold text-gold">
                    UNVEIL: Online
                  </h3>
                  <div className="mt-6 lg:mt-[18px]">
                    <CtaPill as="a" href="/webinar" variant="navyOutline" size="xs">
                      Join the Free Webinar
                    </CtaPill>
                  </div>
                </div>
                <div className="text-[16px] leading-normal text-navy-2 lg:absolute lg:top-[50px] lg:left-[565px] lg:w-[450px] lg:leading-[1.17]">
                  <p className="font-bold">
                    For individuals · Self-funded · Live virtual
                  </p>
                  <p className="mt-4 lg:mt-[19px]">
                    <strong className="font-bold">Part 1:</strong> 6 weeks ·
                    Biological awareness + Identity work + Architecture ·
                    Investment TBC
                  </p>
                  <p className="mt-4 lg:mt-[19px]">
                    <strong className="font-bold">Part 2:</strong> 6 weeks ·
                    Authority + Integration + Closing Event in person
                  </p>
                </div>
              </div>

              {/* Phase cards: 322x203 at x:51/y:248, 30px gaps. */}
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:absolute lg:top-[248px] lg:left-[51px] lg:mt-0 lg:w-[1026px] lg:gap-[30px]">
                {PHASES.map((phase, i) => (
                  <div
                    key={i}
                    className="group/phase relative min-h-[190px] transition-transform duration-[400ms] hover:scale-90 lg:h-[203px] lg:min-h-0"
                  >
                    {/* Corner sparkle straddles the corner, outside the
                        clipped panel; desktop-only like the Figma file. */}
                    <img
                      src={subcardSparkle}
                      alt=""
                      className="pointer-events-none absolute -top-[11px] -right-[11px] z-10 hidden size-[23px] lg:block"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-[3.3px] bg-gradient-to-b from-navy to-blue p-6 transition-shadow duration-[400ms] group-hover/phase:shadow-[0_0_10px_var(--color-blue)] lg:p-[20px]">
                      <img
                        src={phase.deco}
                        alt=""
                        className="pointer-events-none absolute right-0 bottom-2 w-[62%] opacity-80 lg:top-[39.4%] lg:left-[33.4%] lg:bottom-auto lg:right-auto lg:w-[58.6%]"
                      />
                      <p className="relative z-10 font-bold text-white">
                        <span className="block text-[clamp(1.25rem,1.59vw,22.85px)] leading-[1.17]">
                          {phase.prefix}
                        </span>
                        <span className="block text-[clamp(1.125rem,1.36vw,19.59px)] leading-[1.17] font-normal">
                          {phase.title}
                        </span>
                      </p>
                      <ul className="relative z-10 mt-4 list-[square] space-y-1 pl-5 text-[16px] leading-normal text-white lg:mt-[13px] lg:list-disc lg:space-y-0 lg:pl-[24px] lg:text-[16.3px] lg:leading-[1.17]">
                        {phase.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
