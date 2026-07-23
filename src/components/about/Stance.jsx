import badge from "../../assets/about/underline.svg";
import stance1 from "../../assets/about/stance-1.svg";
import stance2 from "../../assets/about/stance-2.svg";
import stance3 from "../../assets/about/stance-3.svg";

/**
 * "What We Stand For" — node 1638:1421 on the retuned About board (1638:1357),
 * board y 914..1654, so the section is 740 tall.
 *
 * The bursts keep their original geometry; the type dropped a tier (heading 30
 * not 50, badge 16 not 18, body 16 not 19).
 */
const COLUMNS = [
  {
    art: stance3,
    left: "left-[102px]",
    width: "w-[219px]",
    body: (
      <>
        At StrateAura™, we merge{" "}
        <span className="font-bold">insight, design, and presence</span> to help
        individuals and institutions{" "}
        <span className="font-bold">
          lead in a way that’s sustainable, and deeply theirs.
        </span>
      </>
    ),
  },
  {
    art: stance2,
    left: "left-[513px]",
    width: "w-[220px]",
    body: (
      <>
        We don’t chase trends.{" "}
        <span className="font-bold">We craft frameworks that help you think</span>{" "}
        with discernment, act with direction, and lead with a{" "}
        <span className="font-bold">presence that leaves a mark</span>.
      </>
    ),
  },
  {
    art: stance1,
    left: "left-[920px]",
    width: "w-[219px]",
    body: (
      <>
        We don't offer generic playbooks.{" "}
        <span className="font-bold">
          We guide people to see their own pattern, trust their intuition, and
          move from the inside out.
        </span>
      </>
    ),
  },
];

export default function Stance() {
  return (
    <section className="relative h-[740px] w-[1440px] overflow-hidden">
      {/* 1638:1422 — faint blue wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4c7dbe] via-white to-[#4c7dbe] opacity-10" />

      {/* 1755:1046 — badge over heading, centred on a 269px column at x 585 */}
      <div className="absolute top-[120px] left-[585px] flex w-[269px] flex-col items-center gap-[18px]">
        <div className="relative flex h-[37px] w-[202px] items-center justify-center">
          <img src={badge} alt="" className="absolute inset-0 size-full" />
          <span className="relative text-[16px] leading-[1.2] font-semibold text-cream">
            Our Stance
          </span>
        </div>
        {/* Inter sets this wider than Acumin, so it would wrap inside Figma's
            269px column; nowrap keeps it on one line, centred as designed. */}
        <h2 className="w-full text-center text-[30px] leading-[1.2] font-bold whitespace-nowrap text-navy">
          What We Stand For
        </h2>
      </div>

      {/* 3 burst columns (1638:1423 / 1427 / 1430) */}
      {COLUMNS.map((col, i) => (
        <img
          key={i}
          src={col.art}
          alt=""
          className={`pointer-events-none absolute top-[313px] ${col.left} h-[246.903px] w-[413.852px]`}
        />
      ))}
      {/* The copy is centred in its burst rather than pinned to Figma's y, so
          Inter's extra line in column 1 stays balanced inside the shape. */}
      {COLUMNS.map((col, i) => (
        <div
          key={`t${i}`}
          className={`absolute top-[313px] ${col.left} flex h-[246.903px] w-[413.852px] items-center justify-center`}
        >
          <p
            className={`${col.width} text-center text-[15px] leading-[19.2px] font-light text-white`}
          >
            {col.body}
          </p>
        </div>
      ))}
    </section>
  );
}
