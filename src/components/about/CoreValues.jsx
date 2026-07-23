import { ArrowRight } from "../ui/Icons";
import sparkle from "../../assets/about/sparkle-sm.svg";
import cardAlign from "../../assets/about/card-align.svg";
import cardElevation from "../../assets/about/card-elevation.svg";
import cardIntegrity from "../../assets/about/card-integrity.svg";
import cardEmpower from "../../assets/about/card-empower.svg";

/**
 * "Our Core Values" — node 1755:1049 on the retuned About board, board y
 * 1654..2357, so the section is 703 tall (it was 916).
 *
 * The copy column and the 2x2 card grid are one flex row in Figma (454 + 139
 * gap + cards) anchored at (158, 129); the cards themselves are 242.86x203.6,
 * roughly 72% of their previous size, so every inset below is Figma's own.
 */
const CARDS = [
  {
    title: "Alignment",
    desc: "Grounding leaders in clarity and purpose.",
    // Alignment is the one card Figma draws a hair wider (244.3 vs 242.9).
    box: "top-[140.78px] left-[751px] w-[244.314px]",
    inset: "left-[29.81px]",
    descWidth: "w-[187.598px]",
    art: cardAlign,
    artClass: "top-[60.35px] left-[123.61px] h-[239.224px] w-[239.224px]",
    sparkle: "top-[129px] left-[982.23px]",
  },
  {
    title: "Elevation",
    desc: "Raising the standard of how presence and power are lived.",
    box: "top-[140.63px] left-[1025.85px] w-[242.859px]",
    inset: "left-[29.81px]",
    descWidth: "w-[187.598px]",
    // The ellipse fan is exported upright (94.4x257) and laid on its side.
    art: cardElevation,
    artBox: "top-[122.88px] left-[18.91px] h-[94.414px] w-[256.951px]",
    artClass: "h-[256.951px] w-[94.414px] -rotate-90 -scale-y-100",
    sparkle: "top-[129px] left-[1255.62px]",
  },
  {
    title: "Integrity",
    desc: "Delivering evidence-based, disciplined guidance you can trust.",
    box: "top-[370.4px] left-[751px] w-[242.859px]",
    inset: "left-[30.54px]",
    descWidth: "w-[187.598px]",
    art: cardIntegrity,
    artClass:
      "top-[119.98px] left-[114.89px] h-[92.345px] w-[205.776px] -scale-y-100",
    sparkle: "top-[358.77px] left-[980.77px]",
  },
  {
    title: "Empowerment",
    desc: "Creating spaces where leaders lead without losing themselves.",
    box: "top-[370.4px] left-[1025.85px] w-[242.859px]",
    inset: "left-[30.54px]",
    descWidth: "w-[176.691px]",
    art: cardEmpower,
    artClass: "top-[101.8px] left-[157.79px] h-[111.977px] w-[109.069px]",
    sparkle: "top-[358.77px] left-[1255.62px]",
  },
];

function ValueCard({ title, desc, box, inset, descWidth, art, artBox, artClass }) {
  return (
    <div
      className={`absolute h-[203.595px] overflow-hidden rounded-[2.908px] bg-gradient-to-b from-gold to-gold-dark ${box}`}
    >
      {artBox ? (
        <div
          className={`pointer-events-none absolute flex items-center justify-center ${artBox}`}
        >
          <img src={art} alt="" className={`max-w-none ${artClass}`} />
        </div>
      ) : (
        <img
          src={art}
          alt=""
          className={`pointer-events-none absolute max-w-none ${artClass}`}
        />
      )}
      <h3
        className={`absolute top-[28.36px] w-[187.598px] text-[17.451px] leading-[1.24] font-bold text-white ${inset}`}
      >
        {title}
      </h3>
      <p
        className={`absolute top-[60.35px] text-[14.5px] leading-[1.24] font-medium text-white ${inset} ${descWidth}`}
      >
        {desc}
      </p>
      <ArrowRight
        className={`absolute top-[172.07px] w-[18.905px] text-white ${inset}`}
      />
    </div>
  );
}

export default function CoreValues() {
  return (
    <section className="relative h-[703px] w-[1440px] overflow-hidden">
      {/* 1638:1388 — golden wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf7] to-[#c99400] opacity-30" />

      {/* 1755:1047 — copy column, 454 wide with an 18px gap under the heading */}
      <h2 className="absolute top-[129px] left-[158px] w-[454px] text-[30px] leading-[1.2] font-bold text-navy">
        Our Core Values
      </h2>
      <p className="absolute top-[180px] left-[158px] w-[454px] text-[15px] leading-[19.2px] font-light text-black/60">
        At <span className="text-navy-2">StrateAura™</span>, our values are lived
        through a dual lens — rooted in Arabic heritage and cultural depth, yet
        shaped by global perspectives and modern leadership practice.
        <br />
        <br />
        This balance ensures that the leaders we work with{" "}
        <span className="font-medium text-navy-2">
          grow in relevance, authenticity, and impact,
        </span>{" "}
        locally and worldwide.
      </p>

      {CARDS.map((card) => (
        <ValueCard key={card.title} {...card} />
      ))}
      {/* The sparkles overhang each card's top-right corner, so they live
          outside the (clipped) card boxes. */}
      {CARDS.map((card) => (
        <img
          key={`s${card.title}`}
          src={sparkle}
          alt=""
          className={`pointer-events-none absolute z-10 h-[23.664px] w-[25.915px] ${card.sparkle}`}
        />
      ))}
    </section>
  );
}
