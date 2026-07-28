import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/veil/hero-photo-v2.jpg";
import heroPhotoWide from "../../assets/veil/hero-photo-v3.jpg";

// Figma 1755:1439 re-cut (1440x607, was 800): full-bleed photo with the navy
// wash solid on the left; the copy block sits at x:53 / y:199 — 39.35px
// two-line title, 19.7px two-line subcopy, then the two pills 50px below.
// The board draws the raw 1672x940 photo width-fit and shifted up 6.69%
// (crop: h 133.37%, top -6.69%); object-cover keeps that exact framing at
// 1440 and degrades to side-cropping (not stretching) on narrower desktops.
// Pills stay `xs` — the board's 55.5px pill nodes are unchanged from the cut
// the client already downsized (977cf22).
export default function VeilHero() {
  return (
    <section className="relative overflow-hidden bg-navy-2">
      {/* Mobile photo: a block on top (Figma stacks it above a solid navy
          text block) — unchanged from the previous board. */}
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none block h-[400px] w-full object-cover object-[68%_center] lg:hidden"
      />
      {/* Mobile: fade the photo's lower edge into the navy text block below. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(to_bottom,transparent_58%,#233a58_100%)] lg:hidden" />
      {/* Desktop photo: the re-cut board's crop of the raw export. */}
      <img
        src={heroPhotoWide}
        alt=""
        className="pointer-events-none absolute inset-x-0 top-[-6.69%] hidden h-[133.37%] w-full object-cover lg:block"
      />
      {/* Desktop: navy wash, solid on the left where the copy sits. */}
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(-90deg,rgba(35,58,88,0.2)_43.681%,#233a58_85.938%)] lg:block" />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[607px]">
        {/* Copy block — mobile flows below the photo on navy; at lg it sits
            at Figma's exact x:53 / y:199 with forced two-line wraps. */}
        <div className="flex flex-col items-start px-5 pt-8 pb-14 sm:px-8 lg:absolute lg:top-[199px] lg:left-[53px] lg:w-[632px] lg:p-0">
          <h1 className="text-[clamp(2rem,2.733vw,39.35px)] leading-[1.19] font-bold text-white lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
            <span>VEIL™ - Lead Without </span>
            <span>Losing Yourself</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-[clamp(1.0625rem,1.367vw,19.68px)] leading-[1.22] text-white lg:mt-[20px] lg:max-w-none lg:[&>span]:block lg:[&>span]:whitespace-nowrap">
            <span>For women in leadership and high-demand professional roles </span>
            <span>who are still performing well - and already paying a silent cost.</span>
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 lg:mt-[50px] lg:gap-[20px]">
            <CtaPill as={Link} to="/contact" variant="creamFilled" size="xs">
              Request a Cohort Proposal
            </CtaPill>
            <CtaPill as="a" href="/webinar" variant="creamOutline" size="xs">
              Join the Free Webinar
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
  );
}
