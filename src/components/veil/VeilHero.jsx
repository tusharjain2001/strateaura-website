import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/veil/hero-photo.jpg";

export default function VeilHero() {
  return (
    <section className="relative overflow-hidden bg-navy-2">
      {/* Photo: a block on top for mobile (Figma stacks it above a solid navy
          text block); on desktop it bleeds full-bleed behind the copy. */}
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none block h-[400px] w-full object-cover object-[68%_center] lg:absolute lg:inset-0 lg:h-full"
      />
      {/* Mobile: fade the photo's lower edge into the navy text block below. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(to_bottom,transparent_58%,#233a58_100%)] lg:hidden" />
      {/* Desktop: navy wash, solid on the left where the copy sits. */}
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(-90deg,rgba(35,58,88,0.2)_43.681%,#233a58_85.938%)] lg:block" />

      {/* Text block sits at Figma's x=58 with forced 3-line heading and
          3-line subcopy wraps, matching the reference exactly. On mobile it
          flows below the photo on the navy background. */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-5 pt-8 pb-14 sm:px-8 lg:min-h-[800px] lg:py-24 xl:px-[58px]">
        <h1 className="text-[clamp(2rem,3.75vw,3.375rem)] leading-[1.22] font-bold text-white lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
          <span>VEIL™ - Lead </span>
          <span>Without Losing </span>
          <span>Yourself</span>
        </h1>
        <p className="mt-4 max-w-[560px] text-[clamp(1.0625rem,1.35vw,1.21875rem)] leading-normal text-white lg:mt-5 lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
          <span>For women in leadership and high-demand professional </span>
          <span>roles who are still performing well - and already paying a </span>
          <span>silent cost.</span>
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 lg:mt-12 lg:gap-6">
          <CtaPill as="a" href="/contact" variant="creamFilled">
            Request a Cohort Proposal
          </CtaPill>
          <CtaPill as="a" href="/webinar" variant="whiteOutline">
            Join the Free Webinar
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
