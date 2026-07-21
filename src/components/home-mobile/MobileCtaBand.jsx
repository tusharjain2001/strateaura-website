import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import ctaSwoosh from "../../assets/home-mobile/cta-swoosh.svg";
import ctaPhoto from "../../assets/home-mobile/cta-photo-new.png";

/**
 * Closing CTA band — Figma node 1434:560 (photo is the sibling node 1434:839).
 *
 * Three stacked pieces on white: the gold double-lobed swoosh pinned to the
 * top-left (195.48 x 392.83 in a 402px frame), the arch-topped speaker photo
 * starting 196px below the swoosh and bleeding 17px off the left edge, and a
 * full-bleed 172px gold band flush against the bottom of the photo.
 *
 * The swoosh/photo geometry is expressed as percentages of the 402px frame so
 * the composition keeps its proportions from 320px up to the 430px cap.
 */
export default function MobileCtaBand() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto w-full max-w-[430px] overflow-hidden">
        {/* 1434:562 — gold swoosh, 195.48/402 wide, anchored to the frame edge. */}
        <img
          src={ctaSwoosh}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 aspect-[195.48/392.83] w-[48.63%] max-w-none"
        />

        {/* 1434:839 — arch-topped photo, left edge 17px outside the frame. */}
        <div className="relative pt-[48.76%]">
          <div className="relative ml-[-4.23%] aspect-[385/518] w-[95.77%] overflow-hidden rounded-t-[312.5px]">
            <img
              src={ctaPhoto}
              alt="A StrateAura facilitator speaking at a leadership session"
              className="absolute inset-0 size-full object-cover object-[38.6%_50%]"
            />
          </div>
        </div>
      </div>

      {/* 1434:563 — full-bleed gold band, flush with the bottom of the photo. */}
      <div className="bg-gold">
        <MobileContainer className="flex min-h-[172px] flex-col items-center justify-center pt-[26px] pb-[21px]">
          <div className="flex w-full max-w-[351px] flex-col items-center gap-[15px]">
            <p className="text-center text-[16px] leading-normal text-white">
              Whether you&rsquo;re navigating leadership fatigue, career
              transitions, or team dissonance, StrateAura&trade; equips you to
              rise from within.
            </p>
            <MobilePill
              as="a"
              href="/contact"
              variant="creamOutline"
              size="ctaBand"
              className="max-w-full text-cream [&>span:last-child]:bg-cream"
            >
              Book a Strategic Conversation
            </MobilePill>
          </div>
        </MobileContainer>
      </div>
    </section>
  );
}
