import TagRibbon from "./TagRibbon";
import heroAuraWave from "../../assets/programs/hero-aura-wave.svg";

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdecb8] to-white">
      {/* Stepped wave aura, anchored to the section's right edge (desktop only) */}
      <img
        src={heroAuraWave}
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[45%] max-w-[550px] object-cover object-left lg:block"
      />

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
