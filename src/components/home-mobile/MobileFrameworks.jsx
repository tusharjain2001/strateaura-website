import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import { ArrowRight } from "../ui/Icons";
import veilDecor from "../../assets/home-mobile/fw-veil-decor.svg";
import alaDecor from "../../assets/home-mobile/fw-ala-decor.svg";
import fiveCsDecor from "../../assets/home-mobile/fw-5cs-decor.svg";

// Figma nodes 1434:607 / 1434:612 / 1434:617 — each card clips a much taller
// gradient (only its top third shows) plus one oversized decorative vector.
const CARDS = [
  {
    title: "VEIL™ Framework",
    subtitle: "Energy, presence, legacy.",
    breakBefore: true,
    href: "/veil",
    card: "min-h-[208px] rounded-[4.123px]",
    gradient: "h-[389px] bg-gradient-to-b from-navy to-blue",
    arrow: "text-[#fffdf8]",
    decor: veilDecor,
    decorClass: "top-[121px] left-[104px] h-[339.081px] w-[339.081px]",
  },
  {
    title: "ALA-Nexus™",
    subtitle: "Assess, Leverage, Actuate.",
    breakBefore: true,
    href: "/frameworks",
    card: "min-h-[212px] rounded-[4.229px]",
    gradient: "h-[399px] bg-gradient-to-b from-gold to-gold-light",
    arrow: "text-gold",
    decor: alaDecor,
    decorClass: "top-[164.43px] left-[168.09px] h-[244.2px] w-[237.857px]",
  },
  {
    title: "The 5Cs of Brand Health ",
    subtitle: "from concept to advocacy.",
    breakBefore: false,
    href: "/frameworks",
    card: "min-h-[210px] rounded-[4.277px]",
    gradient: "h-[403px] bg-gradient-to-b from-gold to-gold-light",
    arrow: "text-gold",
    decor: fiveCsDecor,
    decorClass: "top-[145px] left-[110.14px] h-[195.694px] w-[435.231px] -scale-y-100",
  },
];

/**
 * "Our Signature Frameworks" block — Figma node 1434:595.
 */
export default function MobileFrameworks() {
  return (
    <section className="bg-white pt-[66px]">
      <MobileContainer>
        <h2 className="text-[28px] leading-normal font-bold text-navy">
          Our Signature Frameworks
        </h2>
        <p className="mt-[16px] text-[16px] leading-normal font-light text-black">
          We teach models you won&rsquo;t find in standard leadership courses.
          These are systems that make inner insight visible and sustainable.
        </p>

        <div className="mt-[16px]">
          <MobilePill as="a" href="/frameworks" variant="goldOutline">
            Discover Models
          </MobilePill>
        </div>

        <div className="mt-[32px] flex flex-col gap-[12px]">
          {CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className={`group relative block overflow-hidden px-[44px] pt-[32px] pb-[24px] ${card.card}`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 ${card.gradient}`}
              />
              <img
                src={card.decor}
                alt=""
                aria-hidden
                className={`pointer-events-none absolute max-w-none ${card.decorClass}`}
              />

              <p className="relative z-10 text-[28px] leading-[1.24] font-bold text-white">
                {card.title}
                {card.breakBefore && <br />}
                <span className="font-medium">{card.subtitle}</span>
              </p>

              <ArrowRight
                className={`relative z-10 mt-[16px] w-[31.941px] transition-transform motion-safe:group-hover:translate-x-1 ${card.arrow}`}
              />
            </a>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
