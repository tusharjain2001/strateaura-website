import founderCutout from "../../assets/webinar/founder-cutout.png";
import founderCutoutM from "../../assets/webinar/founder-cutout-m.png";
import founderMaskM from "../../assets/webinar/founder-mask-m.svg";
import bandSparkle from "../../assets/webinar/band-sparkle.png";
import bandSparkleVector from "../../assets/webinar/band-sparkle.svg";

// Phone Figma 1878:10361 — a 402x682 band: the sparkle bleeds off the left
// edge at 336x262.968 (the square band-sparkle.svg stretched, which is exactly
// how the file draws it), the founder cutout is masked to a 273.645x415 window
// at (64,35), and a white 370x230 card sits at y390 with a single text block
// inset 26px. The card is laid out in flow (390 above, 62 below) so it can
// grow if Inter wraps the paragraph past Acumin's five lines.
function FounderBandMobile() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(-89.96deg,#233a58_0%,#427bba_99.94%)] lg:hidden">
      <img
        src={bandSparkleVector}
        alt=""
        className="pointer-events-none absolute top-0 -left-[112px] h-[262.97px] w-[336px]"
      />

      {/* Figma masks a 577.357x576.751 cutout down to the window; the window is
          centred in the 402 frame, so the cutout is pinned to the band's centre
          (50% − 279.07px) instead of a fixed left offset, keeping it centred on
          narrower phones. */}
      <div
        className="pointer-events-none absolute top-[18.06px] left-1/2 h-[576.751px] w-[577.357px] -translate-x-[279.07px]"
        style={{
          maskImage: `url("${founderMaskM}")`,
          WebkitMaskImage: `url("${founderMaskM}")`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "273.645px 415px",
          WebkitMaskSize: "273.645px 415px",
          maskPosition: "142.244px 16.941px",
          WebkitMaskPosition: "142.244px 16.941px",
        }}
      >
        <img
          src={founderCutoutM}
          alt="Dr. Suhair Hamouri"
          className="size-full object-cover"
        />
      </div>

      {/* One text node in Figma on a 23px pitch: the name, the tagline a hair
          below it (the file pads that line with a 36px space), then a blank
          line before the credentials. 16px Acumin is set at 15px so Inter
          keeps the tagline on one line inside the 318px measure. */}
      <div className="relative z-10 mx-4 mt-[390px] mb-[62px] min-h-[230px] bg-white px-[26px] pt-[26px] pb-[14px]">
        <h2 className="text-[24px] leading-[23px] font-bold text-navy-2">
          Dr. Suhair Hamouri
        </h2>
        {/* The tagline fills 314 of the card's 318px measure in Figma itself,
            so it only fits at the 402px frame — the copy scales with the
            viewport below that (capped at 15px) to keep "Within" on line one,
            and the credentials follow the same size so the two match. */}
        <p className="mt-[6px] text-[min(15px,4.7vw_-_4px)] leading-[23px] text-navy-2">
          A Founder and Host Who Leads From Within
        </p>
        <p className="mt-[23px] text-[min(15px,4.7vw_-_4px)] leading-[23px] text-navy-2">
          Pharmacist · PhD · MBA · Certified Integrative Health Coach (IIN-NY)
          Adjunct Faculty · Non-Resident Fellow, MBRSG Dubai She built VEIL
          because no one built it when she needed it.
        </p>
      </div>
    </section>
  );
}

export default function FounderBand() {
  return (
    <>
      <FounderBandMobile />
      <section className="relative hidden overflow-hidden bg-[linear-gradient(-89.78deg,#233a58_0%,#427bba_99.94%)] lg:block">
      {/* Decorative blue sparkle peeking from behind the photo (desktop) */}
      <img
        src={bandSparkle}
        alt=""
        className="pointer-events-none absolute -top-[14px] -left-[66px] hidden w-[336px] lg:block"
      />

      {/* Phone Figma (1296:5729): the photo rides on the navy gradient at the
          TOP of the band and a full-bleed white block with navy text sits
          under it, flush to the band's bottom — so the container drops its
          horizontal padding below lg and the text block carries Figma's 42px
          inset itself. On desktop both children are absolutely positioned, so
          the mobile-first DOM order (photo, then text) changes nothing. */}
      <div className="relative mx-auto w-full max-w-[1440px] pt-10 lg:h-[357px] lg:px-[75px] lg:pt-0">
        {/* Founder photo — overlaps the card on desktop, sits above the white
            text block on mobile. Figma 1755:1815 masks the shot ~274 wide, its
            top 7px in and cut off by the 357px band, so it is scaled by height
            (~350px) and left where it overlaps the card's left edge. */}
        <img
          src={founderCutout}
          alt="Dr. Suhair Hamouri"
          className="relative mx-auto block w-[300px] sm:w-[320px] lg:absolute lg:top-[7px] lg:left-[156px] lg:z-10 lg:mx-0 lg:h-[350px] lg:w-auto"
        />

        {/* Text block: white and full-width on mobile (Figma 1296:5736 sets
            the copy 42px from the left edge); the cream gradient card
            geometry is desktop-only (Figma 1755:1812 — 1007x236 at left 270). */}
        <div className="relative bg-white px-[42px] pt-7 pb-[75px] sm:px-12 lg:absolute lg:top-1/2 lg:right-[163px] lg:left-[270px] lg:min-h-[236px] lg:-translate-y-1/2 lg:rounded-[4px] lg:bg-[linear-gradient(161.36deg,#fffdf8_31.62%,#427bba_212.02%)] lg:py-[61px] lg:pr-[57px] lg:pl-[253px]">
          <div className="lg:max-w-[697px]">
            <h2 className="text-[24px] leading-[1.3] font-bold text-navy-2 sm:text-[20px] sm:leading-[21px]">
              Dr. Suhair Hamouri
            </h2>
            <p className="text-[16px] leading-[23px] text-navy-2 sm:mt-[21px] sm:text-[16px] sm:leading-[21px]">
              A Founder and Host Who Leads From Within
            </p>
            <p className="mt-[23px] text-[16px] leading-[23px] text-navy-2 sm:mt-[21px] sm:text-[16px] sm:leading-[21px]">
              Pharmacist · PhD · MBA · Certified Integrative Health Coach
              (IIN-NY) Adjunct Faculty · Non-Resident Fellow, MBRSG Dubai She
              built VEIL because no one built it when she needed it.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
