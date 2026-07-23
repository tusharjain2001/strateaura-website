import fan from "../../assets/home2/mkt-fan.svg";
import poly from "../../assets/home2/mkt-poly.svg";
import arc from "../../assets/home2/mkt-arc.svg";

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
    title: (
      <>
        Wellness-Centric
        <br />
        Leadership
      </>
    ),
    titleWidth: 133.795,
    titleTop: 20.75,
    arrowLeft: 23.27,
    art: { src: fan, kind: "fan", left: 156.82 },
  },
  {
    left: 227.265,
    title: "Strategic Marketing in Higher Education",
    titleWidth: 137.026,
    titleTop: 20.69,
    arrowLeft: 21.98,
    art: { src: poly, kind: "poly" },
  },
  {
    left: 454.529,
    title: "Integrated Marketing Strategy masterclass",
    titleWidth: 151.959,
    titleTop: 20.75,
    arrowLeft: 20.04,
    art: { src: fan, kind: "fan", left: 156.91 },
  },
  {
    left: 681.794,
    title: "Digital Marketing with Purpose",
    titleWidth: 144.783,
    titleTop: 20.69,
    arrowLeft: 20.04,
    art: { src: poly, kind: "poly" },
  },
  {
    left: 909.059,
    title: "Marketing in the Age of Digital Transformation",
    titleWidth: 139.612,
    titleTop: 20.69,
    arrowLeft: 23.27,
    art: { src: arc, kind: "arc" },
  },
];

const CARD_W = 214.052;
const CARD_H = 155.771;

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
      <p className="absolute top-[6px] left-[865px] w-[417px] text-[16px] leading-normal text-navy">
        We offer a suite of practical marketing and leadership programs for
        professionals, teams, and institutions. All programs carry KHDA Attested
        Attendance Certificate.
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
            <h3
              style={{ top: card.titleTop, width: card.titleWidth }}
              className="absolute left-[14.55px] text-[16.8px] leading-[23px] font-bold text-white"
            >
              {card.title}
            </h3>
            {/* 1728:218 etc — 16px arrow rule at y 135.1 */}
            <span
              style={{ left: card.arrowLeft }}
              className="absolute top-[135.09px] block h-[1.5px] w-[16.159px] bg-white after:absolute after:top-[-2.5px] after:right-[-1px] after:h-[6.5px] after:w-[6.5px] after:rotate-45 after:border-t-[1.5px] after:border-r-[1.5px] after:border-white after:content-['']"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
