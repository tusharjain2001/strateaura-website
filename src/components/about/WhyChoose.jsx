import PillButton from "../ui/PillButton";
import maskedImage from "../../assets/about/maskedwhypeoplechooseus.png";
import chooseFrame from "../../assets/about/masked-vector.png";
import chooseBand from "../../assets/about/choose-band.png";
import sparkleB from "../../assets/about/sparkle-b.svg";

export default function WhyChoose() {
  return (
    <section className="relative h-[1003px] w-[1440px] overflow-hidden">
      {/* cream wash + aura band — light at top fading to cream at the bottom */}
      <div className="absolute top-0 left-1/2 h-[1003px] w-[1526px] -translate-x-1/2 bg-gradient-to-b from-white to-[#fee8a9] opacity-40" />
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

      {/* Right gold panel (gold gradient over a white base — stays opaque) */}
      <div
        className="absolute top-[375px] left-[663px] h-[375px] w-[658px] rounded-[4px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,223,133,0.7) 0%, #b3902f 100%), linear-gradient(90deg, #fff, #fff)",
        }}
      />
      <img src={sparkleB} alt="" className="absolute top-[364px] left-[646px] z-10 h-[36px] w-[36px]" />
      <h2 className="absolute top-[448px] left-[737px] w-[520px] text-[38px] font-bold whitespace-nowrap text-[#95741a]">
        Why People Choose Us
      </h2>
      <p className="absolute top-[512px] left-[737px] w-[537px] text-[18px] leading-[1.3] text-[#a78526]">
        Because they've tried the playbooks. Because they've followed the methods.
        And something still felt off. They come to us not to learn more,{" "}
        <span className="font-bold">
          But to return to what they know, and build from that place.
        </span>
      </p>
      <PillButton
        as="a"
        href="#programs"
        variant="creamFilled"
        icon="sparkle"
        className="absolute top-[627px] left-[737px] h-[61px]"
      >
        Explore Our Programs
      </PillButton>
    </section>
  );
}
