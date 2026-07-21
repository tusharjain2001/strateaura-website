import fan from "../../assets/home2/mkt-fan.svg";
import poly from "../../assets/home2/mkt-poly.svg";
import arc from "../../assets/home2/mkt-arc.svg";

/**
 * Our Marketing & Leadership Programs — Figma node 1638:3916 (x 131, y 1658,
 * 1178x334.7), occupying y 1658-1999 of the frame.
 *
 * The five cards (1638:1256-1292) are absolutely placed at their Figma x
 * offsets rather than laid out with a flex gap: Figma's widths differ by
 * fractions of a pixel and a gap would drift the row off the 1178px box.
 */
const CARDS = [
  {
    left: 0,
    width: 223.102,
    title: (
      <>
        Wellness-Centric
        <br />
        Leadership
      </>
    ),
    titleWidth: 165.527,
    titleTop: 23.67,
    arrowLeft: 28.79,
    art: { src: fan, kind: "fan", left: 151.93 },
  },
  {
    left: 239.215,
    width: 222.302,
    title: "Strategic Marketing in Higher Education",
    titleWidth: 169.526,
    titleTop: 23.59,
    arrowLeft: 27.19,
    art: { src: poly, kind: "poly", left: 120.36 },
  },
  {
    left: 477.63,
    width: 222.302,
    title: "Integrated Marketing Strategy masterclass",
    titleWidth: 188,
    titleTop: 23.67,
    arrowLeft: 24.79,
    art: { src: fan, kind: "fan", left: 152.3 },
  },
  {
    left: 716.164,
    width: 222.302,
    title: "Digital Marketing with Purpose",
    titleWidth: 179.121,
    titleTop: 23.59,
    arrowLeft: 24.79,
    art: { src: poly, kind: "poly", left: 119.95 },
  },
  {
    left: 954.698,
    width: 222.302,
    title: "Marketing in the Age of Digital Transformation",
    titleWidth: 172.724,
    titleTop: 23.59,
    arrowLeft: 28.79,
    art: { src: arc, kind: "arc", left: 76.65 },
  },
];

/**
 * Decorative motif. Figma draws the "fan" horizontally (192.716x70.812) and
 * rotates it -90 with a vertical flip; the "arc" is only flipped. Each is spun
 * about its own centre inside a box of the post-rotation size, which is safe
 * here because the canvas is fixed-px and nothing rescales underneath it.
 */
function CardArt({ src, kind, left }) {
  if (kind === "fan") {
    return (
      <div
        className="pointer-events-none absolute top-0"
        style={{ left, width: 70.812, height: 192.716 }}
      >
        <img
          src={src}
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none"
          style={{
            width: 192.716,
            height: 70.812,
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

export default function MarketingPrograms() {
  return (
    <section className="relative h-[341px] w-[1440px]">
      {/* 1638:1253 — 394x86 */}
      <h2 className="absolute top-[-4px] left-[131px] w-[394px] text-[36px] leading-[1.2] font-bold text-navy">
        Our Marketing &amp;
        <br />
        Leadership Programs.
      </h2>

      {/* 1638:1254 — 515x72 */}
      <p className="absolute top-[5px] left-[793px] w-[515px] text-[18.7px] leading-[24px] text-navy">
        We offer a suite of practical marketing and leadership programs for
        professionals, teams, and institutions. All programs carry KHDA Attested
        Attendance Certificate.
      </p>

      {/* 1638:1255 — card row, 1178x192.7 at y 142 */}
      <div className="absolute top-[142px] left-[131px] h-[192.715px] w-[1178px]">
        {CARDS.map((card) => (
          <div
            key={card.art.left}
            style={{ left: card.left, width: card.width }}
            className="absolute top-0 h-[192.715px] overflow-hidden rounded-[3.199px] bg-gradient-to-b from-navy to-blue"
          >
            <CardArt {...card.art} />
            <h3
              style={{ top: card.titleTop, width: card.titleWidth }}
              className="absolute left-[18px] text-[19.4px] leading-[25px] font-bold text-white"
            >
              {card.title}
            </h3>
            {/* 1638:1259 etc — 20px arrow rule at y 167.13 */}
            <span
              style={{ left: card.arrowLeft }}
              className="absolute top-[167.13px] block h-[1.5px] w-[19.991px] bg-white after:absolute after:top-[-3px] after:right-[-1px] after:h-[7.5px] after:w-[7.5px] after:rotate-45 after:border-t-[1.5px] after:border-r-[1.5px] after:border-white after:content-['']"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
