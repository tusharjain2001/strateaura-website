import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/webinar/hero-photo.jpg";

export default function WebinarHero({ onReserve }) {
  return (
    <section className="relative overflow-hidden bg-gold-dark">
      {/* Figma (node 1222:470) puts the photo in an 887x493 box at the right
          edge, and the source is 1248x693 — the same 1.80 ratio — so the design
          crops nothing. The width is therefore capped at 887px, not left at a
          bare 61.6%: this <img> is positioned against the full-width <section>,
          so on a viewport wider than 1440 an uncapped percentage stretches the
          box far wider than 887 while the height stays ~493, and object-cover
          answers by scaling up and slicing the top and bottom off the photo.
          Full-bleed behind the gradient below lg. */}
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] lg:w-[61.6%] lg:max-w-[887px]"
      />
      {/* Gold wash: solid on the left where the copy sits, fading out right.
          Figma measures its stops from the RIGHT edge (-90deg): opaque #9e7a17
          at 61.7% (x=552) down to 20% alpha at 31% (x=993), with the photo
          starting at x=553 — so the fade begins exactly on the photo's left
          edge and dissolves across its first half, which is what blends the two
          together. Those stops are restated at lg as px from the right (888 and
          447) so they stay locked to the photo, which is itself right-anchored
          and capped at 887px. Left as viewport percentages they drift away from
          the photo edge as the screen widens and leave a hard seam. Below lg
          the photo is full-bleed, where the percentage fade is correct. */}
      <div className="absolute inset-0 bg-[linear-gradient(-90deg,rgba(179,144,47,0.2)_31%,#9e7a17_61.7%)] lg:bg-[linear-gradient(to_left,rgba(179,144,47,0.2)_447px,#9e7a17_888px)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[492px] lg:py-24 xl:px-[95px]">
        {/* Inter runs wider than the design's Acumin Pro, so the cap is a bit
            wider than Figma's 672px text box to keep the headline on one line. */}
        <h1 className="max-w-[760px] text-[clamp(2rem,4.5vw,3rem)] leading-[1.2] font-bold text-white">
          Lead Without Losing Yourself
        </h1>
        {/* Figma's exact 2-line wrap, forced (font scales with viewport so
            the breaks hold up to the 1440 cap). */}
        <p className="mt-4 text-[clamp(1.0625rem,1.39vw,1.25rem)] leading-normal text-white lg:mt-5 lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
          <span>A free live webinar for women in leadership and high-demand </span>
          <span>professional roles. Hosted by Dr. Suhair Hamouri — Founder, VEIL™</span>
        </p>
        <CtaPill onClick={onReserve} variant="creamFilled" className="mt-8 lg:mt-12">
          Reserve My Spot
        </CtaPill>
      </div>
    </section>
  );
}
