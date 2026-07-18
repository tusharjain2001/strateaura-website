import PillButton from "../ui/PillButton";
import choose from "../../assets/about/choose.png";
import chooseMask from "../../assets/about/choose-mask.svg";
import chooseFrame from "../../assets/about/different-frame.svg";
import chooseBand from "../../assets/about/choose-band.svg";
import sparkleB from "../../assets/about/sparkle-b.svg";

export default function WhyChoose() {
  return (
    <section className="relative h-[1003px] w-[1440px] overflow-hidden">
      {/* cream wash + aura band */}
      <div className="absolute top-[110px] left-1/2 h-[599px] w-[1526px] -translate-x-1/2 bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />
      <img
        src={chooseBand}
        alt=""
        className="pointer-events-none absolute top-[554px] left-0 h-[302px] w-[1440px] opacity-90"
      />

      {/* Group photo in ornate gold frame with dark bottom fade */}
      <div
        className="absolute top-[173px] left-[109px] h-[640px] w-[880px]"
        style={{
          maskImage: `url(${chooseMask})`,
          WebkitMaskImage: `url(${chooseMask})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      >
        <img src={choose} alt="StrateAura community" className="size-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-[352px] bg-gradient-to-b from-transparent to-black/70" />
      </div>
      <img
        src={chooseFrame}
        alt=""
        className="pointer-events-none absolute top-[171px] left-[108px] h-[645px] w-[881px]"
      />

      {/* Right gold panel (gold gradient over a white base — stays opaque) */}
      <div
        className="absolute top-[375px] left-[663px] h-[375px] w-[658px] rounded-[4px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #b3902f 0%, rgba(255,223,133,0.7) 100%), linear-gradient(90deg, #fff, #fff)",
        }}
      />
      <img src={sparkleB} alt="" className="absolute top-[364px] left-[646px] z-10 h-[36px] w-[36px]" />
      <h2 className="absolute top-[448px] left-[737px] w-[520px] text-[38px] font-bold whitespace-nowrap text-[#95741a]">
        Why People Choose Us
      </h2>
      <p className="absolute top-[512px] left-[737px] w-[537px] text-[18px] leading-normal text-[#a78526]">
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
