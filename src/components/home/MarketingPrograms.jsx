import fan from "../../assets/home2/mkt-fan.svg";
import poly from "../../assets/home2/mkt-poly.svg";
import arc from "../../assets/home2/mkt-arc.svg";
import CardArrow from "../ui/CardArrow";

/**
 * Our Marketing & Leadership Programs — "Alt/ Home" board, node 1728:210
 * (x 158, y 1458.5, 1123.3x270.5 in frame coords, i.e. canvas y 1385.5).
 *
 * The five cards (1728:215-251) are absolutely placed at their Figma x offsets
 * rather than laid out with a flex gap: Figma's widths differ by fractions of a
 * pixel and a gap would drift the row off the 1123px box. Note the rescale is
 * not uniform — the cards keep ~96% of their old width but only ~81% of their
 * height, so the row is markedly shallower than the previous board.
 */
const CARDS = [
  {
    left: 0,
    lines: ["Wellness-", "Centric", "Leadership"],
    arrowLeft: 23.27,
    art: { src: fan, kind: "fan", left: 156.82 },
  },
  {
    left: 227.265,
    lines: ["Strategic", "Marketing in", "Higher Education"],
    arrowLeft: 21.98,
    art: { src: poly, kind: "poly" },
  },
  {
    left: 454.529,
    lines: ["Integrated", "Marketing Strategy", "masterclass"],
    arrowLeft: 20.04,
    art: { src: fan, kind: "fan", left: 156.91 },
  },
  {
    left: 681.794,
    lines: ["Digital Marketing", "with Purpose"],
    arrowLeft: 20.04,
    art: { src: poly, kind: "poly" },
  },
  {
    left: 909.059,
    lines: ["Marketing in the", "Age of Digital", "Transformation"],
    arrowLeft: 23.27,
    art: { src: arc, kind: "arc" },
  },
];

const CARD_W = 214.052;
const CARD_H = 155.771;
const ARROW_W = 16.159;

/**
 * Decorative motif. Figma draws the "fan" horizontally (155.771x57.237) and
 * rotates it -90 with a vertical flip; the "arc" is only flipped. Each is spun
 * about its own centre inside a box of the post-rotation size, which is safe
 * here because the canvas is fixed-px and nothing rescales underneath it.
 */
function CardArt({ src, kind, left }) {
  if (kind === "fan") {
    return (
      <div
        className="pointer-events-none absolute top-0"
        style={{ left, width: 57.237, height: CARD_H }}
      >
        <img
          src={src}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: CARD_H,
            height: 57.237,
            transform: "translate(-50%, -50%) rotate(-90deg) scaleY(-1)",
          }}
        />
      </div>
    );
  }
  if (kind === "arc") {
    return (
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute right-0 -scale-y-100"
        style={{ top: 89.2, width: 151.246, height: 66.574 }}
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className="pointer-events-none absolute right-0"
      style={{ top: 74.98, width: 98.892, height: 100.831 }}
    />
  );
}

export default function MarketingPrograms() {
  return (
    <section className="relative h-[390px] w-[1440px]">
      {/* 1728:212 — 490x69.5 */}
      <h2 className="absolute top-0 left-[158px] w-[490px] text-[30px] leading-normal font-bold text-navy">
        Our Marketing &amp;
        <br />
        Leadership Programs.
      </h2>

      {/* 1728:213 — 416.3 wide, sitting 6.3 below the heading's cap line */}
      <p className="absolute top-[6px] left-[865px] w-[430px] text-[14px] leading-[1.55] text-navy [&>span]:block [&>span]:whitespace-nowrap">
        <span>StrateAura offers a suite of practical marketing and leadership</span>
        <span>programs for professionals, teams, and institutions. All programs</span>
        <span>carry KHDA Attested Attendance Certificate.</span>
      </p>

      {/* 1728:214 — card row, 1123.3x155.8 at y 114.8 */}
      <div className="absolute top-[115px] left-[158px] h-[155.771px] w-[1123.3px]">
        {CARDS.map((card) => (
          <div
            key={card.left}
            style={{ left: card.left, width: CARD_W, height: CARD_H }}
            className="absolute top-0 overflow-hidden rounded-[2.585px] bg-gradient-to-b from-navy to-blue"
          >
            <CardArt {...card.art} />
            <h3 className="absolute top-[20.7px] left-[14.55px] w-[175px] text-[16.8px] leading-[23px] font-bold text-white">
              {card.lines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h3>
            {/* 1728:218 etc — 16px arrow rule centred on y 135.8 */}
            <CardArrow
              length={ARROW_W}
              left={card.arrowLeft}
              centerY={135.84}
              className="text-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
