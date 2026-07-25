import MobileContainer from "../home-mobile/MobileContainer";
import { Sparkle } from "../ui/Icons";
import portraitPhoto from "../../assets/frameworks-mobile/why-portrait.jpg";
import goldNotch from "../../assets/frameworks-mobile/why-notch.svg";

// Node 1878:7652 — the four bullets, each marked with a 13.07px sparkle
// (nodes 1878:7644-7647) rather than a disc.
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
 * "The Why Behind StrateAura™" — Figma node 1878:8068.
 *
 * A 367x646 card, 60px clear above and below it: the gold panel (Vector 12,
 * 367x315) on top of a 367x412 photo block. The panel's foot is a 48.124px
 * scallop and the photo starts 32.9px above it, so the photo's top edge is
 * hidden behind the flat part of the panel — the gold is therefore drawn as one
 * layer (padded block + notch butted on) sitting above the photo, which is what
 * keeps a hairline of photo from showing at the seam.
 */
export default function FwWhy() {
  return (
    <section className="bg-white py-[60px]">
      <MobileContainer>
        {/* Gold panel — Figma insets the copy 20px and puts the headline 12px
            below the panel's top; the copy block ends 67px above the point
            where the scallop starts. */}
        <div className="relative z-10">
          <div className="bg-gold px-[20px] pt-[12px] pb-[67px]">
            <h2 className="text-[20.185px] leading-normal font-bold text-white">
              The Why Behind StrateAura&trade;
            </h2>

            {/* 1878:7652 — one text block at 13.841px: a Medium lead-in, a
                blank line, the bullets, a blank line, then a Regular close. */}
            <div className="mt-[16px] text-[13.841px] leading-normal text-white">
              <p className="font-medium">
                We build systems of thought that help you:
              </p>
              <ul className="mt-[1em] pl-[4.1px] font-medium">
                {POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-[3.6px]">
                    <Sparkle
                      aria-hidden
                      className="mt-[0.15em] size-[13.07px] shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[1em]">
                You don&rsquo;t need more tools. You need better systems for
                knowing yourself and leading from there.
              </p>
            </div>
          </div>
          {/* 1878:7641 — the panel's scalloped foot, 367x48.124. Butted onto
              the block with 1px of overlap so no seam can open up. */}
          <img
            src={goldNotch}
            alt=""
            aria-hidden
            className="pointer-events-none -mt-px block aspect-[367/48.124] w-full"
          />
        </div>

        {/* 1878:7638 — the image node exported straight from Figma at 2x
            (734x804 for its 370x402 box), so its crop, its rotate-180 + flip
            (a net horizontal mirror) and the 1.6px corners are all baked in and
            nothing is transformed at runtime. Pulled up so the photo's top sits
            32.88px above the scallop, i.e. 81px above the scallop's foot. */}
        <div className="relative -mt-[81px] w-full">
          <img
            src={portraitPhoto}
            alt="A StrateAura leadership executive"
            className="block w-full"
          />

          {/* 1878:7639 — black to transparent at 50%, flipped, so it darkens
              the foot of the photo behind the quote. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[4%] bottom-0 bg-gradient-to-t from-black to-transparent opacity-50"
          />

          {/* 1878:7640 — centred, 30px off the bottom, and set as the two lines
              Figma breaks it into. Its 290.7px box is an Acumin measurement;
              Inter needs the full column to hold those two lines, so the box is
              only inset far enough to keep the quote clear of the edges. */}
          <p className="absolute inset-x-[16px] bottom-[7.5%] text-center text-[12.814px] leading-normal font-bold text-white italic">
            &ldquo;A good tactic solves a surface problem. A great
            <br />
            framework reorients how you lead your life.&rdquo;
          </p>
        </div>
      </MobileContainer>
    </section>
  );
}
