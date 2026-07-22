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
      <div className="relative mx-auto w-full max-w-[1440px] pt-10 lg:h-[459px] lg:px-[75px] lg:pt-0">
        {/* Founder photo — overlaps the card on desktop, sits above the white
            text block on mobile. Figma 1638:3980 masks the shot to 332x504 at
            (81, 14); the export is already that crop, cut off by the 459px
            band, so it is 333x445 and goes in at natural size — scaling or
            object-cover only re-crops it. */}
        <img
          src={founderCutout}
          alt="Dr. Suhair Hamouri"
          className="relative mx-auto block w-[300px] sm:w-[320px] lg:absolute lg:top-[14px] lg:left-[81px] lg:mx-0 lg:h-[445px] lg:w-[333px]"
        />

        {/* Text block: white and full-width on mobile (Figma 1296:5736 sets
            the copy 42px from the left edge); the cream gradient card
            geometry is desktop-only. */}
        <div className="relative bg-white px-[42px] pt-7 pb-[75px] sm:px-12 lg:absolute lg:top-1/2 lg:right-[75px] lg:left-[326px] lg:h-[360px] lg:-translate-y-1/2 lg:rounded-[4px] lg:bg-[linear-gradient(153.5deg,#fffdf8_31.62%,#427bba_212.02%)] lg:p-0">
          <div className="lg:absolute lg:top-[66px] lg:left-[223px] lg:w-[calc(100%-260px)] lg:max-w-[697px]">
            <h2 className="text-[24px] leading-[1.3] font-bold text-navy-2 sm:text-[clamp(1.5rem,2.5vw,2.25rem)]">
              Dr. Suhair Hamouri
            </h2>
            <p className="text-[16px] leading-[23px] text-navy-2 sm:text-[clamp(1.125rem,2vw,1.75rem)] sm:leading-[1.3]">
              A Founder and Host Who Leads From Within
            </p>
            <p className="mt-[23px] text-[16px] leading-[23px] text-navy-2 sm:mt-5 sm:text-[clamp(1.125rem,2vw,1.75rem)] sm:leading-[1.3] lg:mt-9">
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
