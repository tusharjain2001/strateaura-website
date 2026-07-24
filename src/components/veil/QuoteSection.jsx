import quotePhoto from "../../assets/veil/quote-photo-v2.jpg";
import quoteBubble from "../../assets/veil/quote-bubble-blue.svg";
import quoteTailMobile from "../../assets/veil/why-veil-quote-tail-mobile.svg";

function QuoteText({ className = "" }) {
  return (
    <div
      className={`space-y-6 text-[clamp(1.0625rem,1.6vw,1.75rem)] leading-[1.4] font-light text-white ${className}`}
    >
      <p>You are good at what you do. Possibly excellent.</p>
      <p>
        The people around you rely on you - and you deliver, consistently, in
        ways that most of them do not fully see or understand.{" "}
        <strong className="font-bold">But your body noticed.</strong> The
        tiredness that sleep does not fully fix. The sharpness in your
        thinking that used to be effortless. The moment at the end of a long
        day when someone asks how you are - and you genuinely do not know
        what to say. You have told yourself this is temporary. That you will
        slow down when things settle.{" "}
        <strong className="font-bold">
          VEIL was built for this moment. Before a crisis forces your hand.
        </strong>
      </p>
    </div>
  );
}

export default function QuoteSection() {
  return (
    <section className="bg-gradient-to-b from-[#f1dd9e] to-[#fffdf7]">
      {/* Mobile/tablet: the quote sits on the navy->blue card, but the mobile
          Figma variant (node 1434:4194) points its tail DOWN into the photo.
          The card is split into a content-height gradient rectangle plus a
          fixed-aspect tail svg so the tail keeps its exact Figma curvature at
          any width; the card layer sits above the photo, whose negative margin
          lets the tail dip ~45% into it (Figma has the tip land mid-photo). */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-14 sm:px-8 lg:hidden">
        <div className="relative z-10">
          <div className="bg-gradient-to-r from-navy to-blue px-7 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-12">
            <QuoteText />
          </div>
          <img
            src={quoteTailMobile}
            alt=""
            className="pointer-events-none -mt-px block w-full"
          />
        </div>
        <div className="relative -mt-[32%] aspect-[663/475] w-full overflow-hidden rounded-[4px]">
          <img
            src={quotePhoto}
            alt="Dr. Suhair Hamouri presenting at Philosophy House, Fujairah"
            className="pointer-events-none absolute inset-0 size-full object-cover"
          />
        </div>
      </div>

      {/* Desktop — Figma 1755:1459 (1440x641): photo 662x475 at x:516.6/y:83
          (composite export: mirror + bottom scrim baked in); the navy bubble
          (661.7x349.5 at x:257/y:162, gradient baked into the svg) overlaps
          its left edge with the tail poking right into the photo. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[641px]">
        <div className="absolute top-[83px] left-[35.88%] aspect-[663/475] w-[46%] overflow-hidden rounded-[3px]">
          <img
            src={quotePhoto}
            alt="Dr. Suhair Hamouri presenting at Philosophy House, Fujairah"
            className="pointer-events-none absolute inset-0 size-full object-cover"
          />
        </div>

        {/* The bubble vector is drawn tail-on-the-LEFT and flipped with
            rotate-180; post-flip it spans the box's left 98.38%. */}
        <div className="absolute top-[162px] left-[17.85%] z-10 h-[349.5px] w-[45.95%]">
          <img
            src={quoteBubble}
            alt=""
            className="pointer-events-none absolute top-0 left-0 h-full w-[98.38%] rotate-180"
          />
          {/* Figma 1755:1466: 446px of 16px/22px Light at x:309 (52px into
              the bubble), y:228.3 (66px down). */}
          <div className="absolute top-[66px] left-[7.86%] w-[67.4%] text-[16px] leading-[22px] font-light text-white">
            <p>You are good at what you do. Possibly excellent.</p>
            <p>
              The people around you rely on you - and you deliver,
              consistently, in ways that most of them do not fully see or
              understand. <strong className="font-bold">But your body noticed.</strong>{" "}
              The tiredness that sleep does not fully fix. The sharpness in
              your thinking that used to be effortless. The moment at the end
              of a long day when someone asks how you are - and you genuinely
              do not know what to say. You have told yourself this is
              temporary. That you will slow down when things settle.{" "}
              <strong className="font-bold">
                VEIL was built for this moment. Before a crisis forces your
                hand.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
