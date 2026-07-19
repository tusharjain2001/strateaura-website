import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import sparkleLg from "../../assets/webinar/confirm-sparkle-lg.svg";
import sparkleSm from "../../assets/webinar/confirm-sparkle-sm.svg";
import cardCorner from "../../assets/webinar/confirm-card-corner.svg";
import checkBadge from "../../assets/webinar/confirm-check-badge.svg";

export default function ConfirmationSection() {
  return (
    // Height caps to one viewport under the sticky header; the design's
    // 800px band is the tall-screen reference.
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-white px-5 py-24 sm:px-8 lg:h-[min(800px,calc(100svh-120px))] lg:py-0">
      {/* Pale gold sparkles behind the card, top-right + bottom-left pairs */}
      <img
        src={sparkleLg}
        alt=""
        className="pointer-events-none absolute top-[-38px] left-[72%] hidden size-[490px] lg:block"
      />
      <img
        src={sparkleSm}
        alt=""
        className="pointer-events-none absolute top-[47px] left-[84%] hidden size-[320px] lg:block"
      />
      <img
        src={sparkleLg}
        alt=""
        className="pointer-events-none absolute bottom-[-90px] left-[-88px] hidden size-[490px] lg:block"
      />
      <img
        src={sparkleSm}
        alt=""
        className="pointer-events-none absolute bottom-[-5px] left-[-88px] hidden size-[320px] lg:block"
      />

      {/* Confirmation card */}
      <div className="relative w-full max-w-[800px] rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light lg:h-[550px]">
        {/* Decorative corner flourish, clipped to the card's rounded corner */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
          {/* Stretch-mode svg — both dimensions required (515x428 node box) */}
          <img
            src={cardCorner}
            alt=""
            className="absolute right-[-1px] bottom-[-1px] aspect-[515/428] w-[64%] max-w-[515px]"
          />
        </div>

        {/* Check badge overlapping the card's top edge */}
        <img
          src={checkBadge}
          alt=""
          className="absolute -top-[48px] left-1/2 size-[96px] -translate-x-1/2 lg:-top-[63px] lg:size-[124px]"
        />

        <div className="relative flex h-full flex-col items-center px-5 pt-16 pb-10 text-center sm:px-10 lg:px-[58px] lg:pt-[85px] lg:pb-[36px]">
          <h1 className="text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy">
            You are on the list!
          </h1>
          <p className="mt-5 max-w-[684px] text-[clamp(1.125rem,2vw,1.75rem)] leading-[1.3] text-navy-2 lg:mt-6">
            Thank you for reserving your spot. You will receive an email from
            us as soon as the next webinar date is confirmed - you will be
            among the first to know. We look forward to being in the room with
            you.
          </p>
          <CtaPill as={Link} to="/veil" variant="navyFilled" className="mt-8 lg:mt-10">
            Explore more about VEIL™
          </CtaPill>
          <p className="mt-6 max-w-[726px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-navy-2 italic lg:mt-auto">
            If something from this page is already resonating - you might want
            to read this:{" "}
            <Link to="/insights" className="underline">
              ‘Why High-Performing Women Are Quietly Exhausted’
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
