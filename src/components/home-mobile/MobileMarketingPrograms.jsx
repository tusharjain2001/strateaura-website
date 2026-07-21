import MobileContainer from "./MobileContainer";
import arrow from "../../assets/home-mobile/mkt-arrow.svg";
import decorRingsA from "../../assets/home-mobile/mkt-rings-a.svg";
import decorRingsB from "../../assets/home-mobile/mkt-rings-b.svg";
import decorBlob from "../../assets/home-mobile/mkt-blob.svg";
import decorWave from "../../assets/home-mobile/mkt-wave.svg";

// Figma nodes 1434:801 / 812 / 818 / 829 / 834 — five navy→blue gradient cards.
// Each carries one line-art watermark bleeding off its own right edge, so the
// decor is described here as an absolutely positioned overlay per card.
//
// Exported because the mobile Programs page (Figma node 1433:133) repeats the
// same five tiles; only the surrounding copy differs.
export const CARDS = [
  {
    id: "wellness",
    // 1434:803 splits this across two lines explicitly.
    title: (
      <>
        Wellness-Centric
        <br />
        Leadership
      </>
    ),
    titleClass: "max-w-[74.2%]",
    decor: (
      // 1434:805: the ellipse stack is rotated -90° and mirrored, flush right.
      <span className="pointer-events-none absolute inset-y-0 right-0 flex w-[56.139px] items-center justify-center">
        <img
          src={decorRingsA}
          alt=""
          aria-hidden
          className="h-[56.139px] w-[152.783px] max-w-none -rotate-90 -scale-y-100"
        />
      </span>
    ),
  },
  {
    id: "higher-education",
    title: "Strategic Marketing in Higher Education",
    titleClass: "max-w-[76.3%]",
    decor: (
      // 1434:816
      <img
        src={decorBlob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-16.18px] bottom-[-19.66px] h-[98.897px] w-[96.995px] max-w-none"
      />
    ),
  },
  {
    id: "integrated-marketing",
    title: "Integrated Marketing Strategy masterclass",
    titleClass: "max-w-[84.5%]",
    decor: (
      // 1434:822
      <span className="pointer-events-none absolute inset-y-0 right-0 flex w-[56.139px] items-center justify-center">
        <img
          src={decorRingsB}
          alt=""
          aria-hidden
          className="h-[56.139px] w-[152.782px] max-w-none -rotate-90 -scale-y-100"
        />
      </span>
    ),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing with Purpose",
    titleClass: "max-w-[80.5%]",
    decor: (
      // 1434:833
      <img
        src={decorBlob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-15.75px] bottom-[-19.66px] h-[98.897px] w-[96.995px] max-w-none"
      />
    ),
  },
  {
    id: "digital-transformation",
    title: "Marketing in the Age of Digital Transformation",
    // The wide card is 371px, so the copy only needs ~37% of it.
    titleClass: "max-w-[36.9%]",
    wide: true,
    decor: (
      // 1434:838 — mirrored vertically, sitting on the card's bottom edge.
      <img
        src={decorWave}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-14.35px] bottom-0 h-[65.297px] w-[148.346px] max-w-none -scale-y-100"
      />
    ),
  },
];

/**
 * "Our Marketing & Leadership Programs." — Figma node 1434:795.
 *
 * Heading + body, then the five gradient programme cards laid out 2 / 2 / 1.
 * The Figma grid is 176.87px columns with an 17.9px gutter inside the 371px
 * content column; here that becomes a two-column grid so it stays fluid, with
 * the last card spanning both columns.
 */
export default function MobileMarketingPrograms() {
  return (
    <section className="bg-white pt-[66px]">
      <MobileContainer>
        <div className="flex flex-col gap-[16px] text-navy">
          <h2 className="text-[28px] leading-normal font-bold">
            Our Marketing &amp;
            <br />
            Leadership Programs.
          </h2>
          <p className="text-[16px] leading-normal">
            We also offer a suite of practical marketing and leadership programs
            for professionals, teams, and institutions. All programs carry KHDA
            Attested Attendance Certificate.
          </p>
        </div>

        <div className="mt-[20px] grid grid-cols-2 gap-x-[18px] gap-y-[20px]">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className={`relative min-h-[152.783px] overflow-hidden rounded-[2.536px] bg-gradient-to-b from-navy to-blue ${
                card.wide ? "col-span-2" : ""
              }`}
            >
              {card.decor}
              <p
                className={`relative z-10 pt-[20.3px] pl-[14.27px] text-[16.483px] leading-normal font-bold text-white ${card.titleClass}`}
              >
                {card.title}
              </p>
              <img
                src={arrow}
                alt=""
                aria-hidden
                className="absolute bottom-[15.6px] left-[20px] z-10 h-[9.337px] w-[15.849px] max-w-none"
              />
            </article>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
