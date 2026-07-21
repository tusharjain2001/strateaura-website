import MobileContainer from "../home-mobile/MobileContainer";
import arrowA from "../../assets/about-mobile/val-arrow-a.svg";
import arrowB from "../../assets/about-mobile/val-arrow-b.svg";
import decorAlignment from "../../assets/about-mobile/val-decor-alignment.svg";
import decorElevation from "../../assets/about-mobile/val-decor-elevation.png";
import decorIntegrity from "../../assets/about-mobile/val-decor-integrity.svg";
import decorEmpowerment from "../../assets/about-mobile/val-decor-empowerment.svg";

// Figma nodes 1295:3898 / 1295:3906 / 1295:3940 / 1295:3948 — four gold-gradient
// tiles in a 2x2 grid. Each carries its own decorative vector, bled off the card
// edge; the Figma pixel offsets are kept as percentages of the 179.4x149.5 card
// so the tiles can flex between 320px and the 430px cap.
const CARDS = [
  {
    title: "Alignment ",
    body: "Grounding leaders in clarity and purpose.",
    arrow: arrowA,
    decor: decorAlignment,
    // 1295:3904 — sparkle bloom, anchored past the right edge.
    decorStyle: { left: "50.6%", top: "29.64%", width: "97.91%", height: "117.5%" },
  },
  {
    title: "Elevation",
    body: "Raising the standard of how presence and power are lived.",
    arrow: arrowA,
    decor: decorElevation,
    // 1295:3912 — ellipse row, rotated a quarter turn in Figma.
    decorStyle: { left: "7.69%", top: "60.5%", width: "104.63%", height: "46.49%" },
  },
  {
    title: "Integrity",
    body: "Delivering evidence-based, disciplined guidance you can trust.",
    arrow: arrowB,
    decor: decorIntegrity,
    // 1295:3946 — swirl, mirrored vertically.
    decorStyle: { left: "46.78%", top: "58.88%", width: "83.79%", height: "45.32%" },
    decorClassName: "-scale-y-100",
  },
  {
    title: "Empowerment",
    body: "Creating spaces where leaders lead without losing themselves.",
    arrow: arrowB,
    decor: decorEmpowerment,
    // 1295:3954 — quarter-arc corner mark.
    decorStyle: { left: "64.25%", top: "49.96%", width: "44.41%", height: "54.95%" },
  },
];

/**
 * "Our Core Values" block of the mobile About Us page — Figma node 1293:3656.
 *
 * The section paints its own top-to-bottom wash (white fading into #c99400 at
 * 30%) full-bleed behind the 370px content column.
 */
export default function MobileCoreValues() {
  return (
    <section className="relative overflow-hidden bg-white pt-[61px] pb-[60px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffdf7] to-[#c99400] opacity-30"
      />

      <MobileContainer className="relative">
        <h2 className="text-[28px] leading-normal font-bold text-navy">
          Our Core Values
        </h2>
        <p className="mt-[6px] text-[16px] leading-normal font-light text-black/60">
          At <span className="font-normal text-navy-2">StrateAura™</span>, our
          values are lived through a dual lens — rooted in Arabic heritage and
          cultural depth, yet shaped by global perspectives and modern
          leadership practice.
          <br />
          <br />
          This balance ensures that the leaders we work with{" "}
          <span className="font-medium text-navy-2">
            grow in relevance, authenticity, and impact,
          </span>{" "}
          locally and worldwide.
        </p>

        <div className="mt-[42px] grid grid-cols-2 gap-[12px_10.237px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative flex min-h-[149.5px] flex-col overflow-hidden rounded-[2.136px] bg-gradient-to-b from-gold to-gold-dark px-[15px] pt-[21px] pb-[15px]"
            >
              <img
                src={card.decor}
                alt=""
                aria-hidden
                className={`pointer-events-none absolute max-w-none ${card.decorClassName ?? ""}`}
                style={card.decorStyle}
              />
              <p className="relative text-[13.799px] leading-[1.24] font-bold text-white">
                {card.title}
              </p>
              <p className="relative mt-[8px] text-[12.075px] leading-[1.24] font-normal text-white">
                {card.body}
              </p>
              <img
                src={card.arrow}
                alt=""
                aria-hidden
                className="relative mt-auto ml-[7px] h-[7.865px] w-[13.885px]"
              />
            </div>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
