import TagRibbon from "./TagRibbon";
import CtaPill from "../ui/CtaPill";
import { Sparkle, ArrowUpRight } from "../ui/Icons";
import leafWatermark from "../../assets/programs/section-leaf-watermark.png";
import constructDeco1 from "../../assets/programs/construct-card-deco-1.png";
import constructDeco2 from "../../assets/programs/construct-card-deco-1.png";
import constructDeco3 from "../../assets/programs/construct-card-deco-1.png";
import constructSparkle from "../../assets/programs/construct-card-sparkle.svg";
import pathwayCheck from "../../assets/programs/pathway-bullet-check.svg";

const CONSTRUCTS = [
  {
    title: "Capacity Regulation",
    body: "the biological and physiological foundation of sustained performance",
    deco: constructDeco1,
  },
  {
    title: "Identity Coherence",
    body: "the internal sense of self that remains stable under institutional pressure",
    deco: constructDeco2,
  },
  {
    title: "Authority Execution",
    body: "the practiced capacity to act from clarity, hold boundaries without apology, and lead from a grounded place",
    deco: constructDeco3,
  },
];

function ChecklistItem({ children }) {
  return (
    <li className="flex items-center gap-[7px] text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-navy-2">
      <img src={pathwayCheck} alt="" className="size-[17px] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function PathwaySubcard({ title, columns }) {
  return (
    <div className="flex flex-col gap-3 bg-cream px-4 py-5 sm:px-6 sm:py-6">
      <p className="text-[clamp(1rem,1.4vw,1.25rem)] font-bold text-navy-2">{title}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
        {columns.map((col, i) => (
          <ul key={i} className="flex flex-1 flex-col gap-2">
            {col.map((item) => (
              <ChecklistItem key={item}>{item}</ChecklistItem>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function VeilFrameworkSection() {
  return (
    <section
      id="veil"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdf3d9] to-[#eccf7e] scroll-mt-[80px] lg:scroll-mt-[120px]"
    >
      <img
        src={leafWatermark}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden w-full lg:block"
      />

      {/* The board insets this section further than the rest of the page: the
          headline starts at x157 and the two text columns span 157-1298, i.e.
          the 1141px block is centred in the 1440. 149px of padding reproduces
          that and leaves the left and right margins equal. */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[149px]">
        {/* Core Concept */}
        <div className="pt-14 lg:pt-[76px]">
          <span className="relative inline-flex items-center justify-center px-6 py-1.5 text-gold">
            <TagRibbon className="absolute inset-0 h-full w-full" />
            <span className="relative text-[clamp(0.875rem,1.4vw,1.25rem)] font-light tracking-wide text-white uppercase">
              Featured
            </span>
          </span>

          {/* 1638:2881 — two lines breaking after "Women". The board sets 50px
              in a 1126 box, but Inter runs wider than its Acumin Pro, so those
              words need ~1210px: the cap comes down to 46px and the box is left
              at the full content column, or line one wraps a third time. The
              break is forced rather than left to the box width, which is what
              kept pulling "Leaders -" up. */}
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.875rem)] leading-[1.2] font-bold text-navy lg:mt-[30px]">
            VEIL™ - Strategic Health Framework for Women{" "}
            <br className="hidden lg:inline" />
            Leaders - The Flagship Program of Strateaura™
          </h2>

          {/* 1638:2880 — 24px medium, 48px under the headline */}
          <p className="mt-8 text-[clamp(1.125rem,1.67vw,1.5rem)] font-medium text-navy lg:mt-[48px]">
            Core Concept
          </p>

          {/* Figma 1638:3972 / 1638:2884 — two 545px justified columns, 51px
              apart, set 24/36. Both the width and the size drive the line
              breaks, so the type is pinned to 1.67vw (24px at the board's
              1440) rather than the 1.4vw used elsewhere, which only reached
              24px at ~1714 and packed extra words onto every line.

              The pair is fixed at 545 only from xl up, where 1141px fits the
              content column. It stays flush left so the first column lines up
              with the headline and "Core Concept" above it, as on the board
              (all three start at x157); the slack falls on the right, exactly
              as it does there. Between lg and xl the columns share the row
              instead, since two 545s would overflow at 1024. */}
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:gap-[51px]">
            <p className="flex-1 text-justify text-[clamp(1rem,1.67vw,1.5rem)] leading-[1.5] text-black/60 xl:w-[545px] xl:flex-none">
              VEIL™ is designed for women in leadership and high-demand professional roles who
              are performing well externally - and already paying a silent cost for how they are
              leading. They are capable, trusted, and accomplished often the strongest person in
              the room but quietly navigating changes they cannot fully explain. VEIL is not a
              wellness programme. It is not resilience training. It is a strategic health
              framework that helps women understand what is happening beneath sustained
              performance, reconnect with themselves, and continue leading without losing who they
              are. VEIL is a strategic health framework grounded in validated science and designed
              specifically for
            </p>
            <p className="flex-1 text-justify text-[clamp(1rem,1.67vw,1.5rem)] leading-[1.5] text-black/60 xl:w-[545px] xl:flex-none">
              women carrying sustained leadership responsibility. The woman VEIL serves is not in
              crisis. She is still succeeding. What she needs is
              not another programme that teaches her how to perform. She needs a framework that
              helps her understand herself, preserve her internal architecture, and sustain her
              leadership without paying an invisible personal cost. Through the VEIL Framework you
              will explore the biological and physiological foundation of sustained performance,
              Identify the internal sense of self that remains stable under pressure, and learn
              the practiced capacity to act from clarity, hold boundaries without apology, and
              lead from a grounded place.
            </p>
          </div>
        </div>

        {/* The VEIL Framework addresses three constructs */}
        <div className="mt-14 lg:mt-[57px]">
          <p className="text-[clamp(1.125rem,1.6vw,1.5rem)] text-black">
            The <span className="font-bold">VEIL</span> Framework addresses three constructs:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CONSTRUCTS.map((c) => (
              <div
                key={c.title}
                className="relative overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-6"
              >
                <img
                  src={constructSparkle}
                  alt=""
                  className="pointer-events-none absolute -top-[14px] -right-[14px] size-[28px]"
                />
                <p className="text-[clamp(1.125rem,1.8vw,1.5rem)] font-bold text-white">
                  {c.title}
                </p>
                {/* 1638:2895 — the copy runs the full 314px of the padded card
                    and sits over the artwork; capping it at 85% wrapped every
                    line a word or two early. */}
                <p className="relative z-10 mt-4 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-white">
                  {c.body}
                </p>
                <img
                  src={c.deco}
                  alt=""
                  className="pointer-events-none absolute right-0 bottom-2 w-[62%]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two pathways */}
        <div className="mt-16 pb-14 lg:mt-[76px] lg:pb-[92px]">
          <p className="text-center text-[clamp(1.5rem,2.4vw,2rem)] font-medium text-navy-2">
            Two pathways are available:
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:mt-[57px] lg:grid-cols-2 lg:gap-10">
            {/* Online Pathway */}
            <div className="rounded-xl border border-gold-light bg-white p-6 shadow-[0_0_27px_-11px_#b3902f] sm:p-8">
              <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] font-bold text-gold">
                The Online Pathway -<br />
                MAP, DECODE, and UNVEIL
              </h3>
              <p className="mt-4 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-navy-2">
                A self-funded, self-paced online journey for individual women who are ready to
                start without waiting for an institution to sponsor them.
                <br />
                Free Live Webinar: Lead Without Losing Yourself.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <PathwaySubcard
                  title="MAP: KNOW YOUR TERRAIN"
                  columns={[
                    ["3 weeks", "Biological Awareness"],
                    ["Energy Mapping", "Group Calls"],
                  ]}
                />
                <PathwaySubcard
                  title="DECODE: DESIGN YOUR ARCHITECTURE"
                  columns={[
                    ["3 weeks", "Identity Gap"],
                    ["Inner-outer Self", "Reflection"],
                  ]}
                />
                <PathwaySubcard
                  title={
                    <>
                      UNVEIL: LIVE COHORT
                      <br />
                      (For Online Graduates)
                    </>
                  }
                  columns={[
                    ["6 weeks", "Architecture + Authority"],
                    ["Enters at Phase 3"],
                  ]}
                />
              </div>

              <div className="mt-6 flex flex-col items-start gap-3.5">
                <CtaPill
                  as="a"
                  href="#map-decode"
                  variant="navyOutline"
                  icon={ArrowUpRight}
                  size="md"
                >
                  Learn More about MAP &amp; DECODE
                </CtaPill>
                <CtaPill as="a" href="/webinar" variant="navyOutline" icon={Sparkle} size="md">
                  Register for the Free Webinar
                </CtaPill>
              </div>
            </div>

            {/* UNVEIL Institutional */}
            <div className="rounded-xl border border-gold-light bg-white p-6 shadow-[0_0_27px_-11px_#b3902f] sm:p-8">
              <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] font-bold text-gold">
                UNVEIL -<br />
                The Institutional Cohort Program
              </h3>
              <p className="mt-4 text-[clamp(1rem,1.4vw,1.25rem)] leading-normal text-navy-2">
                A <span className="font-bold">12-week</span>, live, facilitator-led cohort for{" "}
                <span className="font-bold">8–12 women.</span> Delivered in-person. Uses{" "}
                <span className="font-bold">
                  9 internationally validated psychometric instruments
                </span>
                , all with Arabic-validated versions. Every participant exits with a scored record
                of change across <span className="font-bold">5 instruments.</span>
              </p>

              <div className="mt-6">
                <div className="flex flex-col gap-3 bg-cream px-4 py-5 sm:px-6 sm:py-6">
                  <p className="text-[clamp(1rem,1.4vw,1.25rem)] font-bold text-navy-2">
                    KHDA Attested Certificate of Completion
                  </p>
                  <ul className="flex flex-col gap-2">
                    <ChecklistItem>Institutions sponsoring women in leadership roles</ChecklistItem>
                    <ChecklistItem>Director level and above</ChecklistItem>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <CtaPill as="a" href="#contact" variant="navyOutline" icon={Sparkle} size="md">
                  Request a Cohort Proposal
                </CtaPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
