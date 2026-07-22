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

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-10 pb-0 sm:px-8 lg:h-[459px] lg:px-[75px] lg:py-0">
        {/* Cream card */}
        <div className="relative rounded-[4px] bg-[linear-gradient(153.5deg,#fffdf8_31.62%,#427bba_212.02%)] p-6 sm:p-8 lg:absolute lg:top-1/2 lg:right-[75px] lg:left-[326px] lg:h-[360px] lg:-translate-y-1/2 lg:p-0">
          <div className="lg:absolute lg:top-[66px] lg:left-[223px] lg:w-[calc(100%-260px)] lg:max-w-[697px]">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.3] font-bold text-navy-2">
              Dr. Suhair Hamouri
            </h2>
            <p className="text-[clamp(1.125rem,2vw,1.75rem)] leading-[1.3] text-navy-2">
              A Founder and Host Who Leads From Within
            </p>
            <p className="mt-5 text-[clamp(1.125rem,2vw,1.75rem)] leading-[1.3] text-navy-2 lg:mt-9">
              Pharmacist · PhD · MBA · Certified Integrative Health Coach
              (IIN-NY) Adjunct Faculty · Non-Resident Fellow, MBRSG Dubai She
              built VEIL because no one built it when she needed it.
            </p>
          </div>
        </div>

        {/* Founder photo — overlaps the card on desktop, stacks below on mobile.
            Figma 1638:3980 masks the shot to 332x504 at (81, 14); the export is
            already that crop, cut off by the 459px band, so it is 333x445 and
            goes in at natural size — scaling or object-cover only re-crops it. */}
        <img
          src={founderCutout}
          alt="Dr. Suhair Hamouri"
          className="relative mx-auto -mt-2 block w-[240px] sm:w-[280px] lg:absolute lg:top-[14px] lg:left-[81px] lg:mx-0 lg:mt-0 lg:h-[445px] lg:w-[333px]"
        />
      </div>
    </section>
  );
}
