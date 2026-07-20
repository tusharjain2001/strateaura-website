import MobileContainer from "../home-mobile/MobileContainer";
import { Sparkle } from "../ui/Icons";
import portraitPhoto from "../../assets/frameworks-mobile/why-photo.jpg";
import goldCurve from "../../assets/frameworks-mobile/why-gold-curve.svg";

const POINTS = [
  <>
    <strong className="font-bold">Access wisdom</strong> already inside you
  </>,
  "Turn noise into signal",
  <>
    Move with <strong className="font-bold">presence instead of panic</strong>
  </>,
  "And align action with who you actually are",
];

/**
 * "The Why Behind StrateAura" — Figma node 1296:4977.
 *
 * A gold copy panel sitting directly on top of the portrait, with the panel's
 * bottom edge dipping into the photo as a shallow cusp ("Vector 12"). The cusp
 * is drawn as an overlay pinned to the top of the photo so the photo itself
 * stays a plain rectangle.
 */
export default function FwWhy() {
  return (
    <section className="bg-white pt-[60px]">
      <MobileContainer>
        <div className="relative bg-gold px-[20px] pt-[31px] pb-[24px]">
          {/* 1296:4967 — three decorative sparkles stacked down the left edge,
              overlapping the copy (13x61.5 at x:24, y:62 in the panel). */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[25px] flex flex-col justify-between text-white"
            style={{ top: 62, height: 61.5 }}
          >
            <Sparkle className="size-[13px]" />
            <Sparkle className="size-[13px]" />
            <Sparkle className="size-[13px]" />
          </div>

          <h2 className="text-[19px] leading-[23px] font-bold text-white">
            The Why Behind StrateAura&trade;
          </h2>
          <div className="mt-[16px] text-[13px] leading-[17px] text-white">
            <p>We build systems of thought that help you:</p>
            {/* Figma marks these with a small filled square, not a sparkle. */}
            <ul className="mt-[17px] pl-[11px]">
              {POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-[9px]">
                  <span className="mt-[0.5em] size-[3.5px] shrink-0 bg-white" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-[17px]">
              You don&rsquo;t need more tools. You need better systems for
              knowing yourself and leading from there.
            </p>
          </div>
        </div>

        <div className="relative aspect-[367/405] overflow-hidden">
          <img
            src={portraitPhoto}
            alt="A StrateAura leadership executive"
            className="absolute inset-0 size-full object-cover object-center"
          />
          {/* Vector 12 — the gold panel's cusped bottom edge, overlapping the
              top of the photo. */}
          <img
            src={goldCurve}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 w-full"
          />
          <p className="absolute inset-x-[24px] bottom-[10px] text-center text-[12.5px] leading-[15px] font-bold text-white italic">
            &ldquo;A good tactic solves a surface problem. A great framework
            reorients how you lead your life.&rdquo;
          </p>
        </div>
      </MobileContainer>
    </section>
  );
}
