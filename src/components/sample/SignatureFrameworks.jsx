import CtaPill from "../ui/CtaPill";
import { ArrowRight } from "../ui/Icons";
import bgEllipses from "../../assets/sample/fw-bg.svg";
import veilStar from "../../assets/sample/fw-veil-star.svg";
import alaShape from "../../assets/sample/fw-ala-shape.svg";
import fivecsShape from "../../assets/sample/fw-5cs-shape.svg";
import diamond from "../../assets/sample/fw-diamond.svg";

// Figma node 1638:3966. Three framework cards under faint full-bleed ellipses,
// each with a bleeding interior motif and a corner diamond at the top-right seam.
const CARDS = [
  {
    title1: "VEIL™ Framework",
    title2: "Energy, presence, legacy.",
    br: true,
    grad: "from-navy to-blue",
    arrow: "text-white",
    motif: veilStar,
    motifClass: "left-[43.6%] top-[31%] w-[76%]",
  },
  {
    title1: "ALA-Nexus™",
    title2: "Assess, Leverage, Actuate.",
    br: true,
    grad: "from-gold to-gold-light",
    arrow: "text-navy",
    motif: alaShape,
    motifClass: "left-[50%] top-[41%] w-[53%]",
  },
  {
    title1: "The 5Cs of Brand Health ",
    title2: "from concept to advocacy.",
    br: false,
    grad: "from-gold to-gold-light",
    arrow: "text-navy",
    motif: fivecsShape,
    motifClass: "left-[43%] top-[50%] w-[60%]",
  },
];

export default function SignatureFrameworks() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-[72px] sm:px-8 lg:px-12 lg:pt-[126px] xl:px-[72px]">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:max-w-[992px]">
            <h2 className="text-[clamp(1.75rem,1.82vw,35px)] font-bold leading-[1.2] text-navy">
              Our Signature Frameworks
            </h2>
            <p className="mt-3 text-[clamp(1.125rem,1.25vw,24px)] leading-normal font-light text-black">
              We teach models you won’t find in standard leadership courses.
              These are systems that make inner insight visible and sustainable.
            </p>
          </div>
          <CtaPill
            as="a"
            href="#frameworks"
            variant="goldOutline"
            className="shrink-0 self-start lg:self-auto"
          >
            Discover Models
          </CtaPill>
        </div>

        {/* Cards group */}
        <div className="relative mt-10 lg:mt-[61px]">
          <img
            src={bgEllipses}
            alt=""
            className="pointer-events-none absolute left-1/2 top-[8%] w-screen max-w-none -translate-x-1/2"
          />
          <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[16px]">
            {CARDS.map((c, i) => (
              <div key={i} className="relative h-[377px] rounded-[4px]">
                {/* gradient + bleeding motif, clipped to the card */}
                <div
                  className={`absolute inset-0 overflow-hidden rounded-[4px] bg-gradient-to-b ${c.grad}`}
                >
                  <img
                    src={c.motif}
                    alt=""
                    className={`pointer-events-none absolute ${c.motifClass}`}
                  />
                </div>
                {/* corner diamond straddles the top-right corner (not clipped) */}
                <img
                  src={diamond}
                  alt=""
                  className="pointer-events-none absolute -top-[17px] right-[-17px] z-10 w-[35px]"
                />
                {/* content */}
                <div className="relative flex h-full flex-col justify-between p-8 lg:p-[43px]">
                  <h3 className="text-[clamp(1.5rem,1.56vw,30px)] leading-[1.24] text-white">
                    <span className="font-bold">{c.title1}</span>
                    {c.br ? <br /> : " "}
                    <span className="font-medium">{c.title2}</span>
                  </h3>
                  <ArrowRight className={`w-[47px] ${c.arrow}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
