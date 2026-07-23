import PillButton from "../ui/PillButton";
import choosePhoto from "../../assets/about/choose.png";
import chooseMask from "../../assets/about/choose-mask.svg";
import chooseFrame from "../../assets/about/masked-vector.png";
import chooseBand from "../../assets/about/choose-band.png";
import chooseWatermark from "../../assets/about/choose-watermark.svg";
import sparkleB from "../../assets/about/sparkle-b.svg";

/**
 * "Why People Choose Us" — node 1638:1461 on the retuned About board.
 *
 * Figma draws the frame 1003 tall but every element inside ends by y 708, where
 * the Founder band begins; the section is therefore 708 in flow and clips the
 * wash/aura tails that Figma hides behind the next section.
 */
export default function WhyChoose() {
  return (
    <section className="relative h-[708px] w-[1440px] overflow-hidden">
      {/* 1638:1462 — cream wash, 1526x599 centred at y 109 */}
      <div className="absolute top-[109px] left-1/2 h-[599px] w-[1526px] -translate-x-1/2 bg-gradient-to-b from-white to-[#fee8a9] opacity-40" />
      {/* 1638:1381 — faint logo watermark, 549x480 at (888, 223), mirrored.
          It sits above the wash: in Figma the tint only starts below it, so
          washing over the mark would over-lighten it. */}
      <img
        src={chooseWatermark}
        alt=""
        className="pointer-events-none absolute top-[223px] left-[888px] h-[480px] w-[549px] max-w-none -scale-x-100"
      />
      {/* 1638:1463 — the ellipse band across the foot of the section */}
      <img
        src={chooseBand}
        alt=""
        className="pointer-events-none absolute top-[405px] left-0 h-[302.077px] w-[1440px] opacity-90"
      />

      {/* 1638:1468-1471 — group photo, mirrored per Figma and clipped live by
          the scalloped mask. The mask canvas is 757.88x549.94 anchored at
          (201, 84) in section coords, i.e. (-24.374, -15.996) relative to this
          709.13x515.66 box. */}
      <div
        className="pointer-events-none absolute top-[100px] left-[225.37px] h-[515.663px] w-[709.132px]"
        style={{
          maskImage: `url("${chooseMask}")`,
          maskSize: "757.88px 549.939px",
          maskPosition: "-24.374px -15.996px",
          maskRepeat: "no-repeat",
        }}
      >
        <img
          src={choosePhoto}
          alt="StrateAura community"
          className="h-full w-full object-cover -scale-x-100"
        />
        {/* 1638:1471 — dark fade over the photo's lower third; the same mask
            clips it, so it may extend past the photo's bottom edge */}
        <div className="absolute top-[234.6px] left-0 h-[283.348px] w-[700.754px] bg-gradient-to-b from-transparent to-black opacity-70" />
      </div>
      {/* 1638:1472 — gold frame. The path is 709.51x519.85 at (224.61, 98.47);
          with its stroke bleed the image spans 722.57x529.73 at (219.64, 93.53). */}
      <img
        src={chooseFrame}
        alt=""
        className="pointer-events-none absolute top-[93.53px] left-[219.64px] h-[529.73px] w-[722.57px] max-w-none"
      />

      {/* 1638:1473 — gold panel, 530.14x302.39 at (671.72, 262.24). The gold
          gradient rides a white base layer so it stays opaque. */}
      <div
        className="absolute top-[262.24px] left-[671.72px] h-[302.391px] w-[530.136px] overflow-hidden rounded-[3.047px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,223,133,0.7) 0%, #b3902f 100%), linear-gradient(90deg, #fff, #fff)",
        }}
      >
        <div className="absolute top-[43.58px] left-[41.52px] flex w-[455.869px] flex-col gap-[7.249px]">
          <h2 className="text-[30.468px] leading-[1.2] font-bold whitespace-nowrap text-[#95741a]">
            Why People Choose Us
          </h2>
          <div className="text-[15px] leading-[16.914px] text-[#8d7021]">
            <p>
              StrateAura™ brings together academic rigor, industry expertise,
              and regional relevance. With a deep understanding of both global
              trends and local business dynamics, we design programs that
              resonate with the cultural and professional aspirations of our
              clients in the UAE and beyond.
            </p>
            <p>
              Each course is developed and led by experienced faculty and
              practitioners with advanced degrees and years of corporate and
              academic experience.
            </p>
          </div>
          <PillButton
            as="a"
            href="#programs"
            variant="creamFilled"
            icon="sparkle"
            size="xxs"
            className="mt-[3.7px] w-[173.751px]"
          >
            Explore Our Programs
          </PillButton>
        </div>
      </div>
      {/* 1638:1483 — sparkle on the panel's top-left corner */}
      <img
        src={sparkleB}
        alt=""
        className="absolute top-[244px] left-[1184px] z-10 h-[36.402px] w-[35.64px]"
      />
    </section>
  );
}
