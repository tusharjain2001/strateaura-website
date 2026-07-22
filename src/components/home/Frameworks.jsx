import PillButton from "../ui/PillButton";
import frameworkBg from "../../assets/signature-framework-bg.png";
import cardOne from "../../assets/signature-framework-one.svg";
import cardTwo from "../../assets/signature-framework-two.svg";
import cardThree from "../../assets/signature-framework-three.svg";
import sparkleOne from "../../assets/framework-sparkle-1.png";
import sparkleTwo from "../../assets/framework-sparkle-2.png";
import sparkleThree from "../../assets/framework-sparkle-3.png";

const CARDS = [
  { src: cardOne, sparkle: sparkleOne, alt: "VEIL™ Framework — Energy, presence, legacy.", positionClass: "left-[152px] w-[359px]" },
  { src: cardTwo, sparkle: sparkleTwo, alt: "ALA-Nexus™ — Assess, Leverage, Actuate.", positionClass: "left-[545px] w-[350px]" },
  { src: cardThree, sparkle: sparkleThree, alt: "The 5Cs of Brand Health — from concept to advocacy.", positionClass: "left-[929px] w-[346px]" },
];

export default function Frameworks() {
  return (
    <section className="relative h-[876px] w-[1440px] overflow-hidden">
      {/* soft blue circles behind the cards */}
      <img
        src={frameworkBg}
        alt=""
        className="pointer-events-none absolute top-[386px] left-[1px] w-[1438px]"
      />

      <h2 className="absolute top-[148px] left-[152px] w-[562px] text-[35px] leading-[1.2] font-bold text-navy">
        Our Signature Frameworks
      </h2>
      <PillButton
        as="a"
        href="#models"
        variant="goldOutline"
        icon="sparkle"
        className="absolute top-[151px] left-[991px]"
      >
        Discover Models
      </PillButton>
      <p className="absolute top-[231px] left-[152px] w-[744px] text-[22.4px] leading-[30px] font-light text-black">
        We teach models you won't find in standard leadership courses. These are
        systems that make inner insight visible and sustainable.
      </p>

      {/* Cards (exported images) with the exported sparkle on each top-right corner */}
      <div className="absolute top-[343px] left-0 h-[377px] w-full">
        {CARDS.map((card) => (
          <div key={card.src} className={`absolute top-0 h-[377px] ${card.positionClass}`}>
            <img
              src={card.sparkle}
              alt=""
              className="pointer-events-none absolute -top-[18px] -right-[18px] z-10 size-[36px]"
            />
            <img src={card.src} alt={card.alt} className="h-full w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
