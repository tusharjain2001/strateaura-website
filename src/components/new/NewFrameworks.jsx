import NewPill from "./NewPill";
import { ArrowRight } from "../ui/Icons";
import bgEllipses from "../../assets/new19/fw-bg.svg";
import veilStar from "../../assets/new19/fw-veil-star.svg";
import alaShape from "../../assets/new19/fw-ala-shape.svg";
import fivecsShape from "../../assets/new19/fw-5cs-shape.svg";
import diamond from "../../assets/new19/fw-diamond.svg";

/**
 * Our Signature Frameworks — Figma node 1638:3966 (x 2, y 2188, 1918x569).
 *
 * The card row (node 1638:3965) starts at y 2362: the corner diamonds sit on
 * that seam, the cards hang 18px below it and the ellipse wash 61px below it.
 * Each card's motif is positioned in card-local coordinates.
 */
const CARDS = [
  {
    left: 73,
    width: 580,
    title1: "VEIL™ Framework",
    title2: "Energy, presence, legacy.",
    br: true,
    grad: "from-navy to-blue",
    arrow: "text-white",
    titleLeft: 43,
    titleWidth: 309.6,
    arrowLeft: 41,
    motif: veilStar,
    motifStyle: { left: 253.1, top: 118, width: 441.96, height: 329 },
  },
  {
    left: 669,
    width: 582,
    title1: "ALA-Nexus™",
    title2: "Assess, Leverage, Actuate.",
    br: true,
    grad: "from-gold to-gold-light",
    arrow: "text-gold-dark",
    titleLeft: 44,
    titleWidth: 259,
    arrowLeft: 50,
    motif: alaShape,
    motifStyle: { left: 291, top: 156, width: 308, height: 231 },
  },
  {
    left: 1268,
    width: 580,
    title1: "The 5Cs of Brand Health ",
    title2: "from concept to advocacy.",
    br: false,
    grad: "from-gold to-gold-light",
    arrow: "text-gold-dark",
    titleLeft: 40,
    titleWidth: 282,
    arrowLeft: 39,
    motif: fivecsShape,
    motifStyle: { left: 248, top: 189, width: 349, height: 183 },
    flipMotif: true,
  },
];

const DIAMONDS = [635, 1233, 1829];

export default function NewFrameworks() {
  return (
    <div className="absolute top-0 left-0 h-[3198px] w-[1920px]">
      {/* 1638:3926 — 992x83 */}
      <h2 className="absolute top-[2184px] left-[78px] w-[992px] text-[35px] leading-[1.2] font-bold text-navy">
        Our Signature Frameworks
      </h2>
      {/* 1638:3925 — 992 wide, two lines */}
      <p className="absolute top-[2267px] left-[78px] w-[992px] text-[22.4px] leading-[30px] font-light text-black">
        We teach models you won’t find in standard leadership courses. These are
        systems that make inner insight visible and sustainable.
      </p>
      {/* 1638:3927 — 378.69x65 */}
      <div className="absolute top-[2188px] left-[1466px]">
        <NewPill
          href="/frameworks"
          variant="goldOutline"
          minWidth={378.69}
          pl={28}
          pr={13}
        >
          Discover Models
        </NewPill>
      </div>

      {/* 1638:3920 — full-bleed ellipse wash behind the cards. Figma draws it
          upright (301x1918) and lays it down with -rotate-90 + a vertical flip,
          so it is spun about its own centre inside the landscape box. */}
      <div
        className="pointer-events-none absolute top-[2423px] left-[2px] h-[301.18px] w-[1918px]"
        aria-hidden
      >
        <img
          src={bgEllipses}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: 301.181,
            height: 1918.004,
            transform: "translate(-50%, -50%) rotate(-90deg) scaleY(-1)",
          }}
        />
      </div>

      {CARDS.map((card) => (
        <div
          key={card.title1}
          style={{ left: card.left, width: card.width }}
          className="absolute top-[2380px] h-[377px] overflow-hidden rounded-[4px]"
        >
          <div
            className={`absolute inset-0 rounded-[4px] bg-gradient-to-b ${card.grad}`}
          />
          <img
            src={card.motif}
            alt=""
            style={card.motifStyle}
            className={`pointer-events-none absolute max-w-none ${
              card.flipMotif ? "-scale-y-100" : ""
            }`}
          />
          <h3
            style={{ left: card.titleLeft, width: card.titleWidth }}
            className="absolute top-[40px] text-[28px] leading-[37.2px] text-white"
          >
            <span className="font-bold">{card.title1}</span>
            {card.br ? <br /> : " "}
            <span className="font-medium">{card.title2}</span>
          </h3>
          {/* Figma draws the arrow as a 47px rule at y 328; ArrowRight is
              centred on its own box, so it hangs 14px above that baseline. */}
          <span
            style={{ left: card.arrowLeft }}
            className={`absolute top-[314px] block w-[47px] ${card.arrow}`}
          >
            <ArrowRight className="w-[47px]" />
          </span>
        </div>
      ))}

      {/* 1638:3943 / 3944 / 3950 — 35x36 diamonds straddling the card seam */}
      {DIAMONDS.map((left) => (
        <img
          key={left}
          src={diamond}
          alt=""
          style={{ left }}
          className="pointer-events-none absolute top-[2362px] z-10 h-[36px] w-[35px]"
        />
      ))}
    </div>
  );
}
