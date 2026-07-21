import MobileContainer from "../home-mobile/MobileContainer";
import { CARDS } from "../home-mobile/MobileMarketingPrograms";
import arrow from "../../assets/home-mobile/mkt-arrow.svg";

/**
 * "Our Marketing & Leadership Programs." tiles — Figma node 1433:131.
 *
 * The same five gradient tiles as the mobile Home page (they share the CARDS
 * definition), but here they head the page's detail sections rather than
 * standing alone, so each one anchors to its section and there is no lead-in
 * paragraph under the heading.
 */
export default function PmPreview() {
  return (
    <section className="pt-[52px] pb-[60px]">
      <MobileContainer>
        <h2 className="text-[28px] leading-normal font-bold text-navy">
          Our Marketing &amp;
          <br />
          Leadership Programs.
        </h2>

        {/* --tile-col is one column's width. Figma sets the titles at 16.483px
            Acumin Pro inside 74-85% of a 178.67px card; Inter is ~10% wider at
            this weight, so at a fixed size four of the five titles wrap a line
            early. Scaling by tile width (16.483/(178.67*1.10) = 0.084) holds
            Figma's breaks. The titles themselves stay untouched because CARDS
            is shared with the Home page. */}
        <div className="mt-[16px] grid grid-cols-2 gap-x-[18px] gap-y-[13px] [--tile-col:calc((min(100vw,430px)-50px)/2)]">
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className={`relative min-h-[154.339px] overflow-hidden rounded-[2.536px] bg-gradient-to-b from-navy to-blue transition-opacity hover:opacity-90 ${
                card.wide ? "col-span-2" : ""
              }`}
            >
              {card.decor}
              <p
                className={`relative z-10 pt-[20.5px] pl-[14.42px] text-[min(16.483px,calc(var(--tile-col)*0.084))] leading-normal font-bold text-white ${card.titleClass}`}
              >
                {card.title}
              </p>
              <img
                src={arrow}
                alt=""
                aria-hidden
                className="absolute bottom-[15.6px] left-[20px] z-10 h-[9.337px] w-[16.01px] max-w-none"
              />
            </a>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
