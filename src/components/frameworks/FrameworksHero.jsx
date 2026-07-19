import heroBg from "../../assets/frameworks/frameworksherobg.png";

export default function FrameworksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      {/* Both the cloud band and the heading live inside the max-w-[1440px]
          container so the band's percentages resolve against the capped
          1440 width, not the raw (unbounded) viewport — otherwise the band
          keeps growing past its Figma size above 1440px (e.g. at 1536/1920). */}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center px-5 py-20 text-center sm:px-8 lg:min-h-[488px] lg:py-24 xl:px-[95px]">
        {/* Single Figma-exported cloud band (pale wash + opacity baked in),
            anchored to this container so it scales with the section. */}
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none absolute left-[8%] top-[25%] h-[46%] w-[81%] object-fill"
        />

        {/* Figma's box is 936px, but Inter renders wider than the design's
            Acumin Pro (see WebinarHero), so the cap is widened to keep the
            break after "Living" like Figma at 1440px. */}
        <h1 className="relative max-w-[1050px] text-[clamp(2rem,4.3vw,3.125rem)] leading-[1.2] font-bold">
          <span className="text-gold">Not Templates. Not Theories.</span>{" "}
          <span className="text-navy-2">
            Living Systems That Rewire the Way You Lead.
          </span>
        </h1>
      </div>
    </section>
  );
}
