import TagRibbon from "./TagRibbon";
import ourProgramsBg from "../../assets/programs/ourprogramsbg.png";

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdecb8] to-white">
      {/* Horizontal row of aura ellipses behind the headline */}
      <img
        src={ourProgramsBg}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[184px] w-[76%] max-w-[1097px] -translate-x-1/2 -translate-y-1/2 object-contain lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-6 px-5 py-16 text-center sm:px-8 sm:py-20 lg:min-h-[282px] lg:py-0 xl:px-[95px]">
        <span className="relative inline-flex items-center justify-center px-7 py-2 text-navy">
          <TagRibbon className="absolute inset-0 h-full w-full" />
          <span className="relative text-[16px] font-bold text-cream">
            Our Programs
          </span>
        </span>

        <h1 className="text-[30px] leading-normal font-bold">
          <span className="block text-gold">Redefining Power,</span>
          <span className="block text-navy-2">Preserving You.</span>
        </h1>
      </div>
    </section>
  );
}
