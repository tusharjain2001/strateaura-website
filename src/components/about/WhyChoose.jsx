import PillButton from "../ui/PillButton";
import choosePhoto from "../../assets/about/choose.png";
import chooseMask from "../../assets/about/choose-mask.svg";
import chooseFrame from "../../assets/about/masked-vector.png";
import chooseBand from "../../assets/about/choose-band.png";
import chooseWatermark from "../../assets/about/choose-watermark.svg";
import sparkleB from "../../assets/about/sparkle-b.svg";

export default function WhyChoose() {
  return (
    <section className="relative h-[1003px] w-[1440px] overflow-hidden">
      {/* cream wash + aura band — light at top fading to cream at the bottom */}
      <div className="absolute top-0 left-1/2 h-[1003px] w-[1526px] -translate-x-1/2 bg-gradient-to-b from-white to-[#fee8a9] opacity-40" />
      {/* Faint logo watermark, top-right (Figma node 1638:1381): 549×480 at
          (888, 3), mirrored. Sits above the wash — in Figma the wash's tint
          only starts below it, so washing over it would over-lighten the mark */}
      <img
        src={chooseWatermark}
        alt=""
        className="pointer-events-none absolute top-[3px] left-[888px] h-[480px] w-[549px] max-w-none -scale-x-100"
      />
      <img
        src={chooseBand}
        alt=""
        className="pointer-events-none absolute top-[705px] left-0 h-[302px] w-[1440px] opacity-90"
      />

      {/* Group photo, mirrored per Figma, clipped live by the scalloped mask.
          The mask canvas is 941×683 anchored at (79, 154) in section coords,
          i.e. (-30, -20) relative to this 880×640 box (nodes 1638:1468-1470). */}
      <div
        className="pointer-events-none absolute top-[173px] left-[109px] h-[640px] w-[880px]"
        style={{
          maskImage: `url("${chooseMask}")`,
          maskSize: "941px 683px",
          maskPosition: "-30px -20px",
          maskRepeat: "no-repeat",
        }}
      >
        <img
          src={choosePhoto}
          alt="StrateAura community"
          className="h-full w-full object-cover -scale-x-100"
        />
        {/* Dark fade over the photo's lower third (Figma node 1638:1471);
            same mask clips it, so it may extend past the photo's bottom edge */}
        <div className="absolute top-[292px] left-0 h-[352px] w-[870px] bg-gradient-to-b from-transparent to-black opacity-70" />
      </div>
      {/* Gold frame asset includes its stroke bleed: node 1638:1472 is
          881×645 at (108, 172); with bleed the image spans 898×658 at (102, 165). */}
      <img
        src={chooseFrame}
        alt=""
        className="pointer-events-none absolute top-[165px] left-[102px] h-[658px] w-[898px] max-w-none"
      />

      {/* Right gold panel (gold gradient over a white base — stays opaque).
          Width is content-driven (w-max) so the 42px padding is identical on
          both sides no matter how wide the longest copy line renders. */}
      <div
        className="absolute top-[375px] left-[640px] w-max rounded-[4px] px-[42px] pt-[50px] pb-[50px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,223,133,0.7) 0%, #b3902f 100%), linear-gradient(90deg, #fff, #fff)",
        }}
      >
        <h2 className="text-[38px] font-bold whitespace-nowrap text-[#95741a]">
          Why People Choose Us
        </h2>
        {/* Line breaks are hard-coded so the copy wraps exactly as in Figma. */}
        <div className="mt-[15px] text-[17px] leading-[1.3] text-[#a78526]">
          <p>
            StrateAura™ brings together academic rigor, industry expertise, and regional
            <br />
            relevance. With a deep understanding of both global trends and local
            <br />
            business dynamics, we design programs that resonate with the cultural and
            <br />
            professional aspirations of our clients in the UAE and beyond.
          </p>
          <p>
            Each course is developed and led by experienced faculty and practitioners
            <br />
            with advanced degrees and years of corporate and academic experience.
          </p>
        </div>
        <PillButton
          as="a"
          href="#programs"
          variant="creamFilled"
          icon="sparkle"
          className="mt-[31px] h-[61px]"
        >
          Explore Our Programs
        </PillButton>
      </div>
      <img src={sparkleB} alt="" className="absolute top-[364px] left-[623px] z-10 h-[36px] w-[36px]" />
    </section>
  );
}
