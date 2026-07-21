import MobileContainer from "../home-mobile/MobileContainer";
import philBadge from "../../assets/about-mobile/phil-badge.svg";
import philSwirl from "../../assets/about-mobile/phil-swirl.svg";
import philArch from "../../assets/about-mobile/phil-arch.svg";
import philPhoto from "../../assets/about-mobile/phil-photo.jpg";

/**
 * Mobile "Our Philosophy" hero — Figma node 1293:3544.
 *
 * A cream-to-white wash (the rotated #fee8a9 gradient at 40%) carries the
 * notched navy badge and the navy headline, with the faint ellipse swirl
 * (node 1293:3547) sitting behind the headline. Below that the gold panel
 * (Vector 12) holds the copy and drops a centre scallop over the photo, which
 * Figma tucks 10px up behind the panel so the two read as one card.
 */
export default function MobilePhilosophy() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(254,232,169,0.4)_0%,rgba(255,255,255,0.4)_100%)] pt-[39px] pb-[77px]">
      {/* Swirl watermark: Figma anchors it 6.7px below the headline top, full column width. */}
      <div className="pointer-events-none absolute inset-x-0 top-[115px] mx-auto w-full max-w-[430px] px-4">
        <img src={philSwirl} alt="" aria-hidden className="block w-full" />
      </div>

      <MobileContainer className="relative z-10">
        {/* Figma's headline box is 325px, but Inter runs wider than Acumin Pro
            and wraps to three lines there; the box is widened and the break
            made explicit so it reads as the two lines the design shows. */}
        <div className="mx-auto flex w-full flex-col items-center gap-[32px]">
          <div className="relative flex h-[37px] w-[202px] items-center justify-center">
            <img
              src={philBadge}
              alt=""
              aria-hidden
              className="absolute inset-0 size-full -scale-y-100"
            />
            <span className="relative text-[16px] leading-normal font-medium text-white">
              Our Philosophy
            </span>
          </div>

          <h1 className="text-center text-[32px] leading-normal font-bold text-navy">
            We Design Presence.
            <br />
            We Uncover Power.
          </h1>
        </div>

        <div className="mt-[59px]">
          {/* Gold panel — the flat part of Vector 12 (337px of its 419px), so
              37px above the copy and 28px below it (Figma's text frame is
              271.82 tall: 37 + 271.82 + 28 = 337).

              --phil-col is the panel's inner width. The body copy scales off it
              so Inter reproduces Figma's line breaks: the column is 307px of
              16px Acumin Pro, and Inter runs ~5% wider, hence 16/(307*1.05). */}
          <div className="rounded-t-[8px] bg-gold px-[31px] pt-[37px] pb-[28px] [--phil-col:calc(min(100vw,430px)-94px)]">
            <p className="text-[24px] leading-normal font-bold text-cream">
              The Why Behind StrateAura™
            </p>
            <p className="mt-[16px] text-[min(16px,calc(var(--phil-col)*0.0496))] leading-normal font-light text-white">
              StrateAura™ was born from a deeper truth: That leadership isn’t
              just about making decisions, it’s about how you carry them. That
              growth isn’t about more, it’s about what aligns. And that
              strategy, when done right, starts far before the boardroom. We
              don’t separate the human from the leader. We believe the most
              transformative shifts begin with the internal, not the external.
              Our work invites you to meet yourself before you move the world.
            </p>
          </div>

          {/* Photo, with the panel's centre scallop overlaid on its top edge. */}
          <div className="relative">
            <img
              src={philPhoto}
              alt="Aura Al Ramahi, founder of StrateAura™"
              className="block aspect-[369/407] w-full rounded-b-[8px] object-cover"
            />
            <img
              src={philArch}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 block aspect-[369/82] w-full"
            />
          </div>
        </div>
      </MobileContainer>
    </section>
  );
}
