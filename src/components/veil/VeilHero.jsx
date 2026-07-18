import CtaPill from "../ui/CtaPill";
import heroPhoto from "../../assets/veil/hero-photo.jpg";

export default function VeilHero() {
  return (
    <section className="relative overflow-hidden bg-navy-2">
      {/* Photo bleeds full-bleed behind a navy wash that goes solid on the
          left (where the copy sits) and fades out toward the right. */}
      <img
        src={heroPhoto}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(-90deg,rgba(35,58,88,0.2)_43.681%,#233a58_85.938%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[800px] lg:py-24 xl:px-[95px]">
        <h1 className="max-w-[620px] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.2] font-bold text-white">
          VEIL™ - Lead Without Losing Yourself
        </h1>
        <p className="mt-4 max-w-[560px] text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-normal text-white lg:mt-5">
          For women in leadership and high-demand professional roles who are
          still performing well - and already paying a silent cost.
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
