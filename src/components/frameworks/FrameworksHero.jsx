import heroBand from "../../assets/frameworks/hero-ellipse-band.png";

// Figma 1755:2954 ("Frame 72", 1440x282): a short gradient strip with the
// two-line 30px heading centred on it and a soft band of gold ellipse "clouds"
// (exported as one PNG, 20% opacity baked in) floating behind the text.
export default function FrameworksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center px-5 py-14 text-center sm:px-8 lg:h-[282px] lg:py-0">
        {/* Ellipse band, 1116x215 at x:162 y:56.7 of the 1440x282 frame —
            percentages so it scales with the capped container. */}
        <img
          src={heroBand}
          alt=""
          className="pointer-events-none absolute top-[20.1%] left-[11.25%] h-[76.2%] w-[77.5%] object-fill"
        />

        {/* Figma breaks the heading after "Not Theories." (two paragraphs). */}
        <h1 className="relative text-[22px] leading-[1.2] font-bold sm:text-[26px] lg:text-[30px]">
          <span className="block text-gold">Not Templates. Not Theories.</span>
          <span className="block text-navy">
            Living Systems That Rewire the Way You Lead.
          </span>
        </h1>
      </div>
    </section>
  );
}
