import cloud1 from "../../assets/frameworks/hero-cloud-1.svg";
import cloud2 from "../../assets/frameworks/hero-cloud-2.svg";
import cloud3 from "../../assets/frameworks/hero-cloud-3.svg";
import cloud4 from "../../assets/frameworks/hero-cloud-4.svg";
import cloud5 from "../../assets/frameworks/hero-cloud-5.svg";
import cloud6 from "../../assets/frameworks/hero-cloud-6.svg";

// Widths taken from Figma (the six ellipses sit edge-to-edge, decreasing in
// size left to right) expressed as a fraction of their shared container so
// the cascade scales with the section instead of the viewport.
const CLOUDS = [
  { src: cloud1, flex: 426.967 },
  { src: cloud2, flex: 308.065 },
  { src: cloud3, flex: 210.781 },
  { src: cloud4, flex: 108.093 },
  { src: cloud5, flex: 70.26 },
  { src: cloud6, flex: 37.832 },
];

export default function FrameworksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fee8a9]/40 to-white">
      {/* Both the cloud band and the heading live inside the max-w-[1440px]
          container so the band's percentages resolve against the capped
          1440 width, not the raw (unbounded) viewport — otherwise the band
          keeps growing past its Figma size above 1440px (e.g. at 1536/1920). */}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center px-5 py-20 text-center sm:px-8 lg:min-h-[488px] lg:py-24 xl:px-[95px]">
        {/* Cascading gradient "cloud" band, anchored to this container. */}
        <div className="pointer-events-none absolute left-[8%] top-[25%] h-[46%] w-[81%]">
          <div className="flex h-full w-full">
            {CLOUDS.map((cloud, i) => (
              <img
                key={i}
                src={cloud.src}
                alt=""
                className="h-full"
                style={{ flex: `${cloud.flex} 0 0` }}
              />
            ))}
          </div>
        </div>

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
