import MobileContainer from "../home-mobile/MobileContainer";
import stanceBadge from "../../assets/about-mobile/stance-badge.svg";
import stance1 from "../../assets/about-mobile/stance-1.svg";
import stance2 from "../../assets/about-mobile/stance-2.svg";
import stance3 from "../../assets/about-mobile/stance-3.svg";

// Figma nodes 1293:3639 / 1293:3645 / 1293:3650 — three spiked "burst" plates
// (366.568 x 218.693) in descending navy shades, each with a centred statement.
const STATEMENTS = [
  {
    art: stance1,
    body: (
      <>
        At StrateAura™, we merge{" "}
        <span className="font-bold">insight, design, and presence</span> to help
        individuals and institutions{" "}
        <span className="font-bold">
          lead in a way that’s sustainable, and deeply theirs.
        </span>
      </>
    ),
  },
  {
    art: stance2,
    body: (
      <>
        We don’t chase trends.{" "}
        <span className="font-bold">We craft frameworks that help you think</span>{" "}
        with discernment, act with direction, and lead with a{" "}
        <span className="font-bold">presence that leaves a mark</span>.{" "}
      </>
    ),
  },
  {
    art: stance3,
    body: (
      <>
        We don&apos;t offer generic playbooks.{" "}
        <span className="font-bold">
          We guide people to see their own pattern, trust their intuition, and
          move from the inside out.{" "}
        </span>
      </>
    ),
  },
];

/**
 * Mobile "Our Stance" block — Figma node 1293:3629.
 *
 * The plates keep their Figma height as a floor and stretch vertically if the
 * copy needs more room at narrow widths; the spikes eat ~21% of the width on
 * each side, which is where the horizontal padding comes from.
 *
 * The band is node 1293:3631 — not plain white but a #4c7dbe -> white -> #4c7dbe
 * horizontal gradient at 10%, so the blue only tints the two outer edges. It
 * runs y=1117..2074 in the frame, which is where the 94px of bottom padding
 * comes from (the copy ends at 1979.65).
 */
export default function MobileStance() {
  return (
    <section className="relative overflow-hidden bg-white pt-[60px] pb-[94px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#4c7dbe_0%,#ffffff_50%,#4c7dbe_100%)] opacity-10"
      />

      <MobileContainer className="relative">
        <div className="mx-auto flex w-full max-w-[274px] flex-col items-center gap-[22px]">
          <div className="relative flex h-[37px] w-[202px] items-center justify-center">
            <img
              src={stanceBadge}
              alt=""
              aria-hidden
              className="absolute inset-0 size-full -scale-y-100"
            />
            <span className="relative text-[20px] leading-normal font-bold text-cream">
              Our Stance
            </span>
          </div>

          <h2 className="text-center text-[28px] leading-normal font-bold text-navy">
            What We Stand For
          </h2>
        </div>

        <div className="mt-[28px] flex flex-col gap-[32px]">
          {STATEMENTS.map((item, i) => (
            <div
              key={i}
              className="relative flex min-h-[218.693px] items-center justify-center px-[21.2%] py-[40px]"
            >
              <img
                src={item.art}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 size-full"
              />
              <p className="relative w-full max-w-[194.562px] text-center text-[16px] leading-normal font-light text-white">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </MobileContainer>
    </section>
  );
}
