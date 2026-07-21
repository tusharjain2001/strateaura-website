import fan from "../../assets/new/mkt-fan.svg";
import poly from "../../assets/new19/mkt-poly.svg";
import arc from "../../assets/new19/mkt-arc.svg";

/**
 * Our Marketing & Leadership Programs — Figma node 1638:3961 (x 73, y 1719).
 *
 * Five cards (1638:740-776) on a 358.02px pitch from x 73, each with a cream
 * motif bleeding off an edge and clipped by the card's rounded corners. Card 3
 * gets its own title box in this frame (x 27, 282 wide) rather than sharing the
 * others' x 18.
 */
const CARDS = [
  {
    left: 0,
    width: 335,
    title: (
      <>
        Wellness-Centric
        <br />
        Leadership
      </>
    ),
    titleLeft: 18,
    titleTop: 25.67,
    titleWidth: 150,
    arrowLeft: 28.79,
    art: { src: fan, kind: "fan", left: 151.93 },
  },
  {
    left: 358.02,
    width: 334,
    title: "Strategic Marketing in Higher Education",
    titleLeft: 18,
    titleTop: 25.59,
    titleWidth: 169.526,
    arrowLeft: 27.19,
    art: { src: poly, kind: "poly", left: 120.36 },
  },
  {
    left: 716.05,
    width: 334,
    title: "Integrated Marketing Strategy masterclass",
    titleLeft: 27,
    titleTop: 25.86,
    titleWidth: 282,
    arrowLeft: 24.79,
    art: { src: fan, kind: "fan", left: 152.3 },
  },
  {
    left: 1074.07,
    width: 334,
    title: "Digital Marketing with Purpose",
    titleLeft: 18,
    titleTop: 25.59,
    titleWidth: 179.121,
    arrowLeft: 24.79,
    art: { src: poly, kind: "poly", left: 119.95 },
  },
  {
    left: 1432.09,
    width: 334,
    title: "Marketing in the Age of Digital Transformation",
    titleLeft: 18,
    titleTop: 25.59,
    titleWidth: 172.724,
    arrowLeft: 28.79,
    art: { src: arc, kind: "arc", left: 76.65 },
  },
];

/**
 * Decorative motif. Figma draws the "fan" as a stack of ellipses spanning
 * 70.812x192.716 down the card's right side; the "arc" is drawn upright and
 * flipped vertically. Safe to place with fixed px because the canvas never
 * rescales underneath it.
 */
function CardArt({ src, kind, left }) {
  if (kind === "fan") {
    return (
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute top-0"
        style={{ left, width: 70.812, height: 192.716 }}
      />
    );
  }
  if (kind === "arc") {
    return (
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute -scale-y-100"
        style={{ left, top: 110.35, width: 187.118, height: 82.364 }}
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className="pointer-events-none absolute"
      style={{ left, top: 92.76, width: 122.346, height: 124.745 }}
    />
  );
}

export default function NewMarketingPrograms() {
  return (
    <div className="absolute top-0 left-0 h-[3198px] w-[1920px]">
      {/* 1638:735 — 1126x86 */}
      <h2 className="absolute top-[1717px] left-[73px] w-[1126px] text-[36px] leading-[1.2] font-bold text-navy">
        Our Marketing &amp;
        <br />
        Leadership Programs.
      </h2>
      {/* 1638:737 — 515x72 */}
      <p className="absolute top-[1726px] left-[1332px] w-[515px] text-[18.7px] leading-[24px] text-navy">
        We also offer a suite of practical marketing and leadership programs for
        professionals, teams, and institutions. All programs carry KHDA Attested
        Attendance Certificate.
      </p>

      {/* 1638:739 — card row, 1774x193 at y 1869 */}
      <div className="absolute top-[1869px] left-[73px] h-[193px] w-[1774px]">
        {CARDS.map((card) => (
          <div
            key={card.left}
            style={{ left: card.left, width: card.width }}
            className="absolute top-0 h-[193px] overflow-hidden rounded-[3.199px] bg-gradient-to-b from-navy to-blue"
          >
            <CardArt {...card.art} />
            <h3
              style={{
                left: card.titleLeft,
                top: card.titleTop,
                width: card.titleWidth,
              }}
              className="absolute text-[19.4px] leading-[25px] font-bold text-white"
            >
              {card.title}
            </h3>
            {/* 1638:743 etc — 20px arrow rule at y 167.13 */}
            <span
              style={{ left: card.arrowLeft }}
              className="absolute top-[167.13px] block h-[1.5px] w-[19.991px] bg-white after:absolute after:top-[-3px] after:right-[-1px] after:h-[7.5px] after:w-[7.5px] after:rotate-45 after:border-t-[1.5px] after:border-r-[1.5px] after:border-white after:content-['']"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
