import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/webinar/hero-photo.jpg";

export default function WebinarHero() {
  return (
    <section className="relative overflow-hidden bg-gold-dark">
      {/* Photo sits on the right 62% at desktop; full-bleed behind the
          gradient on smaller screens. */}
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] lg:w-[62%]"
      />
      {/* Gold wash: solid on the left where the copy sits, fading out right */}
      <div className="absolute inset-0 bg-[linear-gradient(-90deg,rgba(179,144,47,0.2)_31%,#9e7a17_61.7%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[492px] lg:py-24 xl:px-[95px]">
        {/* Inter runs wider than the design's Acumin Pro, so the cap is a bit
            wider than Figma's 672px text box to keep the headline on one line. */}
        <h1 className="max-w-[760px] text-[clamp(2rem,4.5vw,3rem)] leading-[1.2] font-bold text-white">
          Lead Without Losing Yourself
        </h1>
        <p className="mt-4 max-w-[595px] text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-normal text-white lg:mt-5">
          A free live webinar for women in leadership and high-demand
          professional roles. Hosted by Dr. Suhair Hamouri — Founder, VEIL™
        </p>
        <CtaPill as="a" href="#register" variant="creamFilled" className="mt-8 lg:mt-12">
          Reserve My Spot
        </CtaPill>
      </div>
    </section>
  );
}
