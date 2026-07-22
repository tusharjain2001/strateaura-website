import founderScallop from "../../assets/about-mobile/founder-scallop.svg";
import founderPhoto from "../../assets/about-mobile/founder-photo.png";

/**
 * Founder band — Figma nodes 1293:3740 (panel) / 1293:3743 (scalloped photo) /
 * 1293:3751 (headline + biography).
 *
 * The panel is a navy→blue vertical gradient 1505px tall. Inside it the "Group
 * 98" scallop (#EBD28C, 479x373.94, anchored 93px left of the frame) is the
 * backdrop and the cut-out portrait (node 1414:176, 511px wide starting 81px
 * off the left edge) sits on top of it. Both are clipped by the 382x375 mask
 * window, so the offsets below are that geometry as percentages of the block.
 */
export default function MobileFounder() {
  return (
    <section className="bg-gradient-to-b from-[#233a58] to-[#4c7dbe] pt-[95px] pb-[61px]">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Mask group 1293:3743 — 382 of the 402px frame, flush to the left. */}
        <div className="relative aspect-[382/375] w-[95.02%] overflow-hidden">
          <img
            src={founderScallop}
            alt=""
            aria-hidden
            className="absolute top-[0.32%] left-[-24.35%] h-[99.72%] w-[125.39%] max-w-none"
          />
          <img
            src={founderPhoto}
            alt="Dr. Suhair Hamouri, founder of StrateAura"
            className="absolute top-[-27.2%] left-[-21.2%] w-[133.77%] max-w-none"
          />
        </div>

        {/* Node 1293:3751 */}
        <div className="px-4">
          <h2 className="mt-[29px] text-[28px] leading-normal font-bold text-white">
            A Founder Who Leads From Within
          </h2>

          <div className="mt-[12px] space-y-[25px] text-[16px] leading-[25px] font-light text-white">
            <p>
              <span className="font-bold">Dr. Suhair Hamouri</span> is the
              founder of <span className="font-bold">VEIL</span> — a flagship
              strategic health framework for women in leadership and
              high-demand professional roles, built in the GCC, for the GCC.
            </p>
            <p>
              Her authority comes from three decades at the intersection of
              health,{" "}
              <span className="font-bold">
                pharma, academia, and leadership
              </span>{" "}
              — credentialed across Jordan, Australia, the United States,
              Singapore, Ireland, and the GCC. She began her career at MSD and
              Eli Lilly, two of the world’s leading pharmaceutical companies,
              developing her understanding of the female biological system and
              what professional pressure does to it.
            </p>
            <p>
              She holds a{" "}
              <span className="font-bold">PhD in Business Management</span> from
              the University of Wollongong, Australia, an{" "}
              <span className="font-bold">MBA</span> from the American
              University of Sharjah (Most Outstanding Graduate), and a{" "}
              <span className="font-bold">BSc. in Pharmacy</span> from Jordan
              University of Science and Technology. She is a certified{" "}
              <span className="font-bold">
                Integrative Health Coach IIN, NY.
              </span>
            </p>
            <p>
              Dr. Hamouri has taught at Canadian University Dubai, the American
              University of Sharjah, Murdoch University, and King’s Business
              School. She is currently a Non-Resident Fellow at the Mohammed
              Bin Rashid School of Government, Dubai, and a Board Member of
              AcceInv-Kolortrak, Canada. She is a Certified Online Educator{" "}
              <span className="font-bold">(COE, HBMSU UAE)</span>, a Certified
              Digital Marketing Expert
              <span className="font-bold"> (CDME, DMI + AMA, Dublin)</span>, and
              a keynote speaker. She is the author of{" "}
              <span className="font-bold">
                Clicks, Leads, and Strategy Feeds (2024)
              </span>
              , a member of the American Marketing
              Association, and a graduate of the Dent Global Key Person of
              Influence Program, Dublin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
