import TagRibbon from "./TagRibbon";
import heroAuraWave from "../../assets/programs/hero-aura-wave.svg";

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdecb8] to-white">
      {/* Stepped wave aura. The source asset is a tall vertical strip in
          Figma that gets rotated -90deg to form the horizontal row of steps
          behind the headline; the outer box uses the post-rotation (wide)
          footprint so it can be positioned/sized normally. */}
      <div className="pointer-events-none absolute top-1/2 left-[12%] hidden h-[184px] w-[76%] max-w-[1097px] -translate-y-1/2 items-center justify-center overflow-hidden lg:flex">
        <div className="-rotate-90 -scale-y-100">
          <div className="relative h-[1097px] w-[184px]">
            <img src={heroAuraWave} alt="" className="absolute inset-0 size-full" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:min-h-[492px] lg:py-24 xl:px-[95px]">
        <span className="relative inline-flex items-center justify-center px-7 py-2 text-navy">
          <TagRibbon className="absolute inset-0 h-full w-full" />
          <span className="relative text-[clamp(1rem,1.6vw,1.5rem)] font-bold text-cream">
            Our Programs
          </span>
        </span>

        <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.125rem)] leading-[1.2] font-bold">
          <span className="block text-gold">Redefining Power,</span>
          <span className="block text-navy-2">Preserving You.</span>
        </h1>
      </div>
    </section>
  );
}
