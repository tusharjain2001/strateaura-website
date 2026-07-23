import PillButton from "../ui/PillButton";
import maskedImage from "../../assets/about/maskedwhypeoplechooseus.png";
import chooseFrame from "../../assets/about/masked-vector.png";
import chooseBand from "../../assets/about/choose-band.png";
import chooseWatermark from "../../assets/about/choose-watermark.svg";
import sparkleB from "../../assets/about/sparkle-b.svg";

export default function WhyChoose() {
  return (
    <section className="relative h-[1003px] w-[1440px] overflow-hidden">
      {/* cream wash + aura band — light at top fading to cream at the bottom */}
      <div className="absolute top-0 left-1/2 h-[1003px] w-[1526px] -translate-x-1/2 bg-gradient-to-b from-white to-[#fee8a9] opacity-40" />
      {/* Faint logo watermark, top-right (Figma node 1638:1381) — the design
          stretches the 549px mark to 1040px and lets the section edge clip it */}
      <img
        src={chooseWatermark}
        alt=""
        className="pointer-events-none absolute top-[3px] left-[947px] h-[480px] w-[1040px] max-w-none"
      />
      <img
        src={chooseBand}
        alt=""
        className="pointer-events-none absolute top-[705px] left-0 h-[302px] w-[1440px] opacity-90"
      />

      {/* Group photo — pre-masked to the scalloped frame with dark bottom fade */}
      <img
        src={maskedImage}
        alt="StrateAura community"
        className="pointer-events-none absolute top-[154px] left-[79px] h-[683px] w-[941px]"
      />
      <img
        src={chooseFrame}
        alt=""
        className="pointer-events-none absolute top-[173px] left-[109px] h-[644px] w-[881px]"
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
