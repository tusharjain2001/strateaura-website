import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/sample/hero.jpg";

/**
 * Hero (Figma node 1638:631). Full-bleed team photo under a navy gradient
 * (rgba(35,58,88,.6) → #233a58), with heading, sub-copy and two CTAs anchored
 * to the lower-left. Faithful to the 1920 frame; reflows fluidly below it.
 */
export default function SampleHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-navy-2">
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_32%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-2/60 to-navy-2" />

      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1920px] flex-col justify-end px-6 pb-14 sm:px-8 lg:min-h-[715px] lg:px-12 lg:pb-20 xl:px-[72px]">
        <div className="max-w-[789px]">
          <h1 className="text-[clamp(2rem,2.29vw,44px)] font-bold leading-[1.12] text-white">
            Where Strategy Comes to Life. Where Leaders Find Their Edge.
          </h1>
          <p className="mt-1 max-w-[700px] text-[clamp(1rem,1.05vw,20px)] leading-normal text-white">
            At StrateAura™, we create spaces for elevated learning and aligned
            action. This is where ambition meets self-awareness and where
            fragmented effort becomes embodied leadership.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 lg:mt-6 lg:gap-[39px]">
          <CtaPill as="a" href="#veil" variant="creamFilled">
            VEIL™ Program
          </CtaPill>
          <CtaPill as="a" href="#programs" variant="creamOutline">
            Browse All Programs
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
