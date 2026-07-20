import MobilePill from "../home-mobile/MobilePill";
import diffMask from "../../assets/about-mobile/diff-mask.svg";
import diffPhoto from "../../assets/about-mobile/diff-photo.jpg";

/**
 * "What Makes This Different" — Figma nodes 1293:3719 (copy + pill) and
 * 1433:2 (the 379x379 star-cornered photo below it).
 *
 * The band (node 1293:3720) is a #c99400 → #fffdf7 gradient flipped vertically
 * and dropped to 30% over white; the from/to below are those composited values.
 * The photo is inset 12px rather than the usual 16px, so it gets its own row.
 */
export default function MobileDifferent() {
  return (
    <section className="bg-gradient-to-b from-[#fffefc] to-[#efdeb3] pt-[72px] pb-[72px]">
      <div className="mx-auto w-full max-w-[430px] px-4">
        <h2 className="text-[28px] leading-normal font-bold text-gold">
          What Makes This Different
        </h2>

        <p className="mt-[7px] text-[16px] leading-normal text-black/60">
          We’re not here to fix you. We’re here to show you how your power was
          always there, just hidden under noise.
        </p>

        <p className="mt-[20px] text-[16px] leading-normal font-bold text-black/60">
          StrateAura isn’t a training firm. It’s a strategic re-alignment space
          for those who are ready to stop performing and start leading with
          presence.
        </p>

        <p className="mt-[20px] text-[20px] leading-normal font-bold text-navy">
          If that’s you, you’re already home.
        </p>

        <MobilePill
          as="a"
          href="/frameworks"
          variant="goldOutline"
          className="mt-[21px]"
        >
          Discover Our Signature Models
        </MobilePill>
      </div>

      {/* Mask group 1433:2 — 379px wide on a 402px frame, so a 12px inset. */}
      <div className="mx-auto mt-[36px] w-full max-w-[430px] px-[12px]">
        <div
          className="relative aspect-square w-full"
          style={{
            maskImage: `url("${diffMask}")`,
            WebkitMaskImage: `url("${diffMask}")`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <img
            src={diffPhoto}
            alt="StrateAura community members together at a session"
            className="absolute inset-0 size-full rounded-[15px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
