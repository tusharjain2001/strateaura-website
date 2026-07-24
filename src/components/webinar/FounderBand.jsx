import founderCutout from "../../assets/webinar/founder-cutout.png";
import bandSparkle from "../../assets/webinar/band-sparkle.png";

export default function FounderBand() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(-89.78deg,#233a58_0%,#427bba_99.94%)]">
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
  );
}
