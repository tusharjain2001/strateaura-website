import PillButton from "../ui/PillButton";
import CardArrow from "../ui/CardArrow";
import frameworkBg from "../../assets/signature-framework-bg.png";
import cardOneArt from "../../assets/home2/fw-card1-art.svg";
import cardTwoArt from "../../assets/home2/fw-card2-art.svg";
import cardThreeArt from "../../assets/home2/fw-card3-art.svg";
import sparkleOne from "../../assets/framework-sparkle-1.png";
import sparkleTwo from "../../assets/framework-sparkle-2.png";
import sparkleThree from "../../assets/framework-sparkle-3.png";

/**
 * Our Signature Frameworks — "Alt/ Home" board, node 1728:502 (x 158,
 * y 1849 in frame coords, i.e. canvas 1776), 1123.3 wide.
 *
 * The previous board shipped each card as one flattened SVG with its text baked
 * in. This one draws them: a gradient panel, a two-weight title and a decorative
 * vector clipped to the panel — so the cards are now real markup and the art is
 * the only exported asset.
 */
const CARDS = [
  {
    left: 0,
    panel: "from-[#1f3a58] to-[#437dbe]",
    title: "VEIL™ Framework",
    subtitle: "Energy, presence, legacy.",
    breakLine: true,
    titleLeft: 34.76,
    titleWidth: 250.248,
    arrowLeft: 33.14,
    arrow: "text-white",
    sparkle: sparkleOne,
    // inset[31.3% -19.78% -18.57% 28.13%] of the 356.1x304.7 panel
    art: { src: cardOneArt, left: 100.18, top: 95.38, width: 326.38, height: 265.94 },
  },
  {
    left: 383.594,
    panel: "from-[#b3902f] to-[#ffdf85]",
    title: "ALA-Nexus™",
    subtitle: "Assess, Leverage, Actuate.",
    breakLine: true,
    titleLeft: 35.56,
    // Figma's 209.3 box is measured in Acumin; Inter needs ~240 to keep the
    // subtitle on the board's two lines.
    titleWidth: 240,
    arrowLeft: 40.41,
    // The two gold cards draw the arrow in gold (#b3902f), not white.
    arrow: "text-gold",
    sparkle: sparkleTwo,
    art: { src: cardTwoArt, left: 128.52, top: 126.09, width: 181.866, height: 186.716 },
  },
  {
    left: 767.188,
    panel: "from-[#b3902f] to-[#ffdf85]",
    title: "The 5Cs of Brand Health",
    // 1728:528 is the one card whose subtitle runs on from the title rather
    // than starting a new line.
    subtitle: "from concept to advocacy.",
    titleLeft: 32.33,
    titleWidth: 245,
    arrowLeft: 31.52,
    arrow: "text-gold",
    sparkle: sparkleThree,
    art: {
      src: cardThreeArt,
      left: 83.25,
      top: 152.77,
      width: 328.975,
      height: 147.918,
      flipY: true,
    },
  },
];

const CARD_W = 356.122;
const CARD_H = 304.727;
const ARROW_W = 37.99;

export default function Frameworks() {
  return (
    <section className="relative h-[581px] w-[1440px] overflow-hidden">
      {/* Pale fan behind the card row — 1728:497, canvas y 1980 */}
      <img
        src={frameworkBg}
        alt=""
        className="pointer-events-none absolute top-[204px] left-[2px] w-[1438px]"
      />

      {/* 1728:505 — 30.3px, and the pill right-aligned to the content column */}
      <h2 className="absolute top-0 left-[158px] w-[670px] text-[30px] leading-normal font-bold text-navy">
        Our Signature Frameworks
      </h2>
      <PillButton
        as="a"
        href="#models"
        variant="goldOutline"
        icon="sparkle"
        size="xs"
        padLeft={22}
        className="absolute top-0 right-[158.7px]"
      >
        Discover Models
      </PillButton>

      {/* 1728:512 — 601.4 wide, directly under the 53px heading box */}
      <p className="absolute top-[53px] left-[158px] w-[601.37px] text-[16px] leading-normal font-light text-black">
        We teach models you won’t find in standard leadership courses. These are
        systems that make inner insight visible and sustainable.
      </p>

      {/* 1728:513 — three 356x305 cards, 27.5 apart, at y 132.2 */}
      <div
        className="absolute top-[132.22px] left-[158px] w-[1123.3px]"
        style={{ height: CARD_H }}
      >
        {CARDS.map((card) => (
          <div
            key={card.left}
            style={{ left: card.left, width: CARD_W, height: CARD_H }}
            className="absolute top-0"
          >
            <img
              src={card.sparkle}
              alt=""
              className="pointer-events-none absolute -top-[13px] -right-[14px] z-10 size-[29px]"
            />
            <div
              className={`relative h-full w-full overflow-hidden rounded-[3.233px] bg-gradient-to-b ${card.panel}`}
            >
              <img
                src={card.art.src}
                alt=""
                className={`pointer-events-none absolute max-w-none ${card.art.flipY ? "-scale-y-100" : ""}`}
                style={{
                  left: card.art.left,
                  top: card.art.top,
                  width: card.art.width,
                  height: card.art.height,
                }}
              />
              <p
                style={{ left: card.titleLeft, width: card.titleWidth }}
                className="absolute top-[34.76px] text-[24px] leading-[1.24] text-white"
              >
                <span className="font-bold">{card.title}</span>
                {card.breakLine ? <br /> : " "}
                <span className="font-medium">{card.subtitle}</span>
              </p>
              {/* 1728:518 etc — 38px arrow rule centred on y 265.9 */}
              <CardArrow
                length={ARROW_W}
                left={card.arrowLeft}
                centerY={265.92}
                className={card.arrow}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
