import { useState } from "react";
import TagRibbon from "./TagRibbon";
import CtaPill from "../ui/CtaPill";
import RequestBrochureModal from "./RequestBrochureModal";
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
    <li className="flex items-center gap-[7px] text-[16px] leading-normal text-navy-2">
      <img src={pathwayCheck} alt="" className="size-[17px] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function PathwaySubcard({ title, columns }) {
  return (
    <div className="flex flex-col gap-3 bg-cream p-6">
      <p className="text-[20px] font-bold text-navy-2">{title}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-[43px]">
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
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <>
    <section
      id="veil"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdf3d9] to-[#eccf7e] scroll-mt-[80px] lg:scroll-mt-[120px]"
    >
      <img
        src={leafWatermark}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden w-full lg:block"
      />

      {/* Figma insets this section to x157 (content 1118 wide, centred). */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[158px]">
        {/* Core Concept */}
        <div className="pt-14 lg:pt-[76px]">
          <span className="relative inline-flex items-center justify-center px-6 py-1.5 text-gold">
            <TagRibbon className="absolute inset-0 h-full w-full" />
            <span className="relative text-[16px] font-light tracking-wide text-white uppercase">
              Featured
            </span>
          </span>

          {/* Headline + Request Brochure button on one row (Figma 1810:145). */}
          <div className="mt-4 flex flex-col items-start gap-5 lg:mt-[30px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
            <h2 className="text-[30px] leading-normal font-bold text-navy lg:flex-1">
              VEIL™ - Strategic Health Framework for Women Leaders - The Flagship Program of Strateaura™
            </h2>
            <CtaPill
              as="button"
              type="button"
              onClick={() => setBrochureOpen(true)}
              variant="goldOutline"
              size="compact"
              className="shrink-0"
            >
              Request Brochure
            </CtaPill>
          </div>

          <p className="mt-6 text-[20px] font-medium text-navy lg:mt-4">Core Concept</p>

          {/* Two 545px justified columns, 28px apart, set at 16/24 (Figma 1805:3). */}
          <div className="mt-2 flex flex-col gap-8 lg:flex-row lg:gap-[28px]">
            <p className="flex-1 text-justify text-[16px] leading-[1.5] text-black/60 xl:w-[545px] xl:flex-none">
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
            <p className="flex-1 text-justify text-[16px] leading-[1.5] text-black/60 xl:w-[545px] xl:flex-none">
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
          <p className="text-[20px] text-black">
            The <span className="font-bold">VEIL</span> Framework addresses three constructs:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CONSTRUCTS.map((c) => (
              // Wrapper is unclipped so the corner sparkle can overhang; it also
              // carries the Home-board hover (squeeze to 90% + blue glow, 400ms).
              <div
                key={c.title}
                className="group relative h-full transition-[scale,box-shadow] duration-[400ms] motion-safe:hover:scale-90 motion-safe:hover:shadow-[0_0_10px_var(--color-blue)]"
              >
                <div className="relative h-full overflow-hidden rounded-[4px] bg-gradient-to-b from-navy to-blue p-6">
                  <p className="text-[20px] font-bold text-white">{c.title}</p>
                  {/* Copy runs the full 314px of the padded card, over the artwork. */}
                  <p className="relative z-10 mt-4 text-[16px] leading-normal text-white">
                    {c.body}
                  </p>
                  <img
                    src={c.deco}
                    alt=""
                    className="pointer-events-none absolute right-0 bottom-2 w-[62%]"
                  />
                </div>
                <img
                  src={constructSparkle}
                  alt=""
                  className="pointer-events-none absolute -top-[14px] -right-[14px] size-[28px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two pathways */}
        <div className="mt-16 pb-14 lg:mt-[76px] lg:pb-[92px]">
          <p className="text-center text-[30px] font-medium text-navy-2">
            Two pathways are available:
          </p>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:mt-[57px] lg:grid-cols-2 lg:gap-10">
            {/* Online Pathway */}
            <div className="rounded-xl border border-gold-light bg-white p-8 shadow-[0_0_27px_-11px_#b3902f]">
              <h3 className="text-[30px] leading-normal font-bold text-gold">
                The Online Pathway -<br />
                MAP, DECODE, and UNVEIL
              </h3>
              <p className="mt-[30px] text-[16px] leading-normal text-navy-2">
                A self-funded, self-paced online journey for individual women who are ready to
                start without waiting for an institution to sponsor them.
                <br />
                Free Live Webinar: Lead Without Losing Yourself.
              </p>

              <div className="mt-6 flex flex-col gap-3.5">
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
                  size="compact"
                >
                  Learn More about MAP &amp; DECODE
                </CtaPill>
                <CtaPill
                  as="a"
                  href="/webinar"
                  variant="navyOutline"
                  icon={Sparkle}
                  size="compact"
                >
                  Register for the Free Webinar
                </CtaPill>
              </div>
            </div>

            {/* UNVEIL Institutional */}
            <div className="rounded-xl border border-gold-light bg-white p-8 shadow-[0_0_27px_-11px_#b3902f]">
              <h3 className="text-[30px] leading-normal font-bold text-gold">
                UNVEIL -<br />
                The Institutional Cohort Program
              </h3>
              <p className="mt-[30px] text-[16px] leading-normal text-navy-2">
                A <span className="font-bold">12-week</span>, live, facilitator-led cohort for{" "}
                <span className="font-bold">8–12 women.</span> Delivered in-person. Uses{" "}
                <span className="font-bold">
                  9 internationally validated psychometric instruments
                </span>
                , all with Arabic-validated versions. Every participant exits with a scored record
                of change across <span className="font-bold">5 instruments.</span>
              </p>

              <div className="mt-6">
                <div className="flex flex-col gap-3 bg-cream p-6">
                  <p className="text-[20px] font-bold text-navy-2">
                    KHDA Attested Certificate of Completion
                  </p>
                  <ul className="flex flex-col gap-2">
                    <ChecklistItem>Institutions sponsoring women in leadership roles</ChecklistItem>
                    <ChecklistItem>Director level and above</ChecklistItem>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <CtaPill as="a" href="#contact" variant="navyOutline" icon={Sparkle} size="compact">
                  Request a Cohort Proposal
                </CtaPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {brochureOpen && (
      <RequestBrochureModal
        onClose={() => setBrochureOpen(false)}
        program="VEIL™ - Strategic Health Framework for Women Leaders - The Flagship Program of Strateaura™"
      />
    )}
    </>
  );
}
