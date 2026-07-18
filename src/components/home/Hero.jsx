import PillButton from "../ui/PillButton";
import heroBg from "../../assets/hero-bg.jpg";
import heroAura from "../../assets/hero-aura.svg";

export default function Hero() {
  return (
    <section className="relative h-[688px] w-[1440px] overflow-hidden">
      {/* Background photograph — cropped to match Figma (image scaled taller and
          shifted up so the group sits high in the frame). */}
      <img
        src={heroBg}
        alt=""
        className="pointer-events-none absolute top-[-29.37%] left-0 h-[229.65%] w-[109.72%] max-w-none"
      />
      {/* Navy gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(35,58,88,0.6)] to-navy-2" />
      {/* Decorative aura watermark on the right */}
      <img
        src={heroAura}
        alt=""
        className="pointer-events-none absolute top-[223px] right-[-30px] h-[468px] w-[540px] -scale-x-100 opacity-90"
      />

      {/* Copy + CTAs — line breaks are forced to match the Figma composition
          exactly (the Inter fallback is wider than the design's Acumin Pro,
          so it would otherwise wrap at different words). */}
      <div className="absolute top-[320px] left-[80px] flex w-[900px] flex-col gap-6 text-white">
        <h1 className="text-[44px] leading-[1.1] font-bold tracking-[-0.01em] [&>span]:block">
          <span className="whitespace-nowrap">Where Strategy Comes to Life. Where</span>
          <span className="whitespace-nowrap">Leaders Find Their Edge.</span>
        </h1>
        <p className="text-[20px] leading-[1.5] tracking-[-0.005em] [&>span]:block">
          <span className="whitespace-nowrap">
            At StrateAura™, we create spaces for elevated learning and aligned action. This
          </span>
          <span className="whitespace-nowrap">
            is where ambition meets self-awareness and where fragmented effort becomes
          </span>
          <span>embodied leadership.</span>
        </p>
        <div className="mt-1 flex items-center gap-[39px]">
          <PillButton variant="creamFilled" icon="sparkle">
            VEIL™ Program
          </PillButton>
          <PillButton variant="creamOutline" icon="sparkle">
            Browse All Programs
          </PillButton>
        </div>
      </div>
    </section>
  );
}
