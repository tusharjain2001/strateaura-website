import PillButton from "../ui/PillButton";
import { ArrowRight, Sparkle } from "../ui/Icons";
import auraBand from "../../assets/aura-band.svg";
import cardVeil from "../../assets/card-veil.svg";
import cardAla from "../../assets/card-ala.svg";
import card5cs from "../../assets/card-5cs.svg";

function FrameworkCard({
  title,
  subtitle,
  tone,
  art,
  artClass,
  arrowClass,
  className,
}) {
  const bg =
    tone === "navy"
      ? "from-navy to-blue"
      : "from-gold to-gold-light";
  return (
    <div
      className={`absolute top-0 h-[377px] overflow-hidden rounded-[4px] bg-gradient-to-b ${bg} ${className}`}
    >
      <img src={art} alt="" className={`pointer-events-none absolute ${artClass}`} />
      <h3 className="absolute top-[43px] left-[43px] w-[290px] text-[30px] leading-[1.24] text-white">
        <span className="font-bold">{title}</span>
        <br />
        <span className="font-medium">{subtitle}</span>
      </h3>
      <ArrowRight className={`absolute top-[328px] left-[43px] w-[47px] ${arrowClass}`} />
    </div>
  );
}

export default function Frameworks() {
  return (
    <section className="relative h-[876px] w-[1440px] overflow-hidden">
      <img
        src={auraBand}
        alt=""
        className="pointer-events-none absolute top-[386px] left-0 w-[1440px] opacity-40"
      />

      <h2 className="absolute top-[151px] left-[152px] w-[562px] text-[35px] font-bold text-navy">
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
      <p className="absolute top-[234px] left-[152px] w-[744px] text-[24px] leading-normal font-light text-black">
        We teach models you won't find in standard leadership courses. These are
        systems that make inner insight visible and sustainable.
      </p>

      {/* Cards */}
      <div className="absolute top-[343px] left-0 h-[377px] w-full">
        {/* sparkle accents between cards */}
        <Sparkle className="absolute top-[-18px] left-[493px] size-[36px] text-gold" />
        <Sparkle className="absolute top-[-18px] left-[877px] size-[36px] text-gold" />
        <Sparkle className="absolute top-[-18px] left-[1257px] size-[36px] text-gold" />

        <FrameworkCard
          className="left-[152px] w-[359px]"
          tone="navy"
          title="VEIL™ Framework"
          subtitle="Energy, presence, legacy."
          art={cardVeil}
          artClass="bottom-[-40px] right-[-60px] w-[330px] opacity-80"
          arrowClass="text-cream"
        />
        <FrameworkCard
          className="left-[545px] w-[350px]"
          tone="gold"
          title="ALA-Nexus™"
          subtitle="Assess, Leverage, Actuate."
          art={cardAla}
          artClass="top-[156px] left-[159px] w-[225px] opacity-80"
          arrowClass="text-navy"
        />
        <FrameworkCard
          className="left-[929px] w-[346px]"
          tone="gold"
          title="The 5Cs of Brand Health"
          subtitle="from concept to advocacy."
          art={card5cs}
          artClass="top-[189px] left-[103px] w-[407px] opacity-80"
          arrowClass="text-navy"
        />
      </div>
    </section>
  );
}
