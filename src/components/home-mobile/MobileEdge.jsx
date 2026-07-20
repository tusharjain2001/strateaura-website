import edgePortrait from "../../assets/home-mobile/edge-portrait.png";
import edgeMask from "../../assets/home-mobile/edge-mask.svg";
import edgeScallopTip from "../../assets/home-mobile/edge-scallop-tip.svg";

/**
 * Our Edge — Figma node 1434:695.
 *
 * A navy band carrying a navy→blue gradient card of copy, with the founder
 * portrait (mask group 1434:703) rising out from behind the card's lower half.
 * The portrait is cut by the scalloped alpha mask from Figma: the mask window
 * is 251.227×381 and sits at offset 132.914/21.846 inside the 530×529.5 photo
 * box, so the photo is nudged back by exactly that offset and the visible area
 * ends up flush with the 16px page gutter.
 */
export default function MobileEdge() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[108.76px] pb-[71.24px]">
      <div className="mx-auto w-full max-w-[430px] px-4">
        {/* Copy card — node 1434:698 */}
        <div className="min-h-[542px] rounded-[4px] bg-gradient-to-b from-navy to-blue px-[18px] pt-[31px] pb-[89px]">
          <h2 className="text-[32px] leading-normal font-bold text-white">
            Our Edge
          </h2>
          <p className="mt-[34px] text-[16px] leading-[27px] text-white">
            StrateAura™ brings together academic rigor, industry expertise, and
            regional relevance. With a deep understanding of both global trends
            and local business dynamics, we design programs that resonate with
            the cultural and professional aspirations of our clients in the UAE
            and beyond.
            <br />
            Each course is developed and led by experienced faculty and
            practitioners with advanced degrees and years of corporate and
            academic experience.
          </p>
        </div>
      </div>

      {/* Masked portrait — node 1434:703. Overlaps the card by 126px. */}
      <div className="mx-auto w-full max-w-[430px] px-4">
        <div className="relative -mt-[126px] h-[381px] overflow-hidden">
          <div
            className="absolute top-[-21.846px] left-[-131.914px] h-[529.499px] w-[530.056px]"
            style={{
              WebkitMaskImage: `url("${edgeMask}")`,
              maskImage: `url("${edgeMask}")`,
              WebkitMaskSize: "251.227px 381px",
              maskSize: "251.227px 381px",
              WebkitMaskPosition: "132.914px 21.846px",
              maskPosition: "132.914px 21.846px",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <img
              src={edgePortrait}
              alt="StrateAura faculty"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          {/* Node 1434:706 — the small dark tip that finishes the scallop. */}
          <img
            src={edgeScallopTip}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[342.25px] left-[4.89px] h-[39.53px] w-[21.333px]"
          />
        </div>
      </div>
    </section>
  );
}
