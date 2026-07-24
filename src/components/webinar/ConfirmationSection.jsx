import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import sparkleLg from "../../assets/webinar/confirm-sparkle-lg.svg";
import sparkleSm from "../../assets/webinar/confirm-sparkle-sm.svg";
import cardCorner from "../../assets/webinar/confirm-card-corner.svg";
import checkBadge from "../../assets/webinar/confirm-check-badge.svg";

export default function ConfirmationSection() {
  return (
    // Figma 1755:2010 (1440x556): a compact 546x375 card centred on a white
    // band, its check badge hanging 43px over the top edge. Mobile keeps its
    // own (larger) scale; only the lg values below track the desktop Figma.
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-white px-5 py-24 sm:px-8 lg:min-h-[556px] lg:py-0">
      {/* Pale gold sparkles behind the card, top-right + bottom-left pairs
          (Figma 1755:2011-2014). */}
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
        className="pointer-events-none absolute top-[400px] left-[-88px] hidden size-[490px] lg:block"
      />
      <img
        src={sparkleSm}
        alt=""
        className="pointer-events-none absolute top-[485px] left-[-88px] hidden size-[320px] lg:block"
      />

      {/* Confirmation card (Figma 1755:2015): 546x375, white→gold-light. */}
      <div className="relative w-full max-w-[800px] rounded-[12px] border border-gold-light bg-gradient-to-b from-white to-gold-light lg:h-[375px] lg:max-w-[546px] lg:rounded-[8px]">
        {/* Decorative corner flourish, clipped to the card's rounded corner */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px] lg:rounded-[8px]">
          {/* Stretch-mode svg — both dimensions required (515x428 node box) */}
          <img
            src={cardCorner}
            alt=""
            className="absolute right-[-1px] bottom-[-1px] aspect-[515/428] w-[64%] max-w-[515px]"
          />
        </div>

        {/* Check badge overlapping the card's top edge (Figma 1755:2018: 85px,
            hanging 43px above). */}
        <img
          src={checkBadge}
          alt=""
          className="absolute -top-[48px] left-1/2 size-[96px] -translate-x-1/2 lg:-top-[43px] lg:size-[85px]"
        />

        <div className="relative flex h-full flex-col items-center px-5 pt-16 pb-10 text-center sm:px-10 lg:px-[25px] lg:pt-[58px] lg:pb-[30px]">
          <h1 className="text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.2] font-bold text-navy lg:text-[30px]">
            You are on the list!
          </h1>
          <p className="mt-5 max-w-[684px] text-[clamp(1.125rem,2vw,1.75rem)] leading-[1.3] text-navy-2 lg:mt-[16px] lg:max-w-[467px] lg:text-[16px] lg:leading-[1.54]">
            Thank you for reserving your spot. You will receive an email from
            us as soon as the next webinar date is confirmed - you will be
            among the first to know. We look forward to being in the room with
            you.
          </p>
          <CtaPill
            as={Link}
            to="/veil"
            variant="navyFilled"
            size="compactLg"
            className="mt-8 lg:mt-[29px]"
          >
            Explore more about VEIL™
          </CtaPill>
          <p className="mt-6 max-w-[726px] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.4] text-navy-2 italic lg:mt-[26px] lg:max-w-[496px] lg:text-[14px] lg:leading-[1.37]">
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
