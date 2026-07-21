import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import photo from "../../assets/about-mobile/belowcorevalues.png";
import band from "../../assets/about-mobile/choose-band.svg";

/**
 * "Why People Choose Us" block of the mobile About Us page — Figma nodes
 * 1293:3701 (scalloped photo + gold panel) sitting on the 1293:3566 backdrop
 * (white-to-#fee8a9 wash with the ellipse band along the bottom edge).
 *
 * The photo ships as a flat pre-masked PNG rather than being composed at
 * runtime from a CSS mask plus two frame SVGs.
 */
export default function MobileWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white pt-[56px] pb-[64px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#fee8a9] opacity-40"
      />
      {/* 1293:3568 — ellipse band, flush with the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 flex h-[96.827px] w-[399.019px] -translate-x-1/2 items-center justify-center"
      >
        <div className="h-[399.019px] w-[96.827px] flex-none rotate-90 -scale-y-100">
          <img src={band} alt="" className="block size-full" />
        </div>
      </div>

      <MobileContainer className="relative">
        {/* 1414:237 — pre-masked export (369x268, scallop crop and both gold
            frames already baked in), so no runtime mask is needed. */}
        <img
          src={photo}
          alt="StrateAura community"
          className="block w-full"
        />

        {/* 1293:3706 — gold panel */}
        <div
          className="mt-[28px] rounded-[2.056px] px-[39px] pt-[37px] pb-[37px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,223,133,0.7) 0%, #b3902f 100%), linear-gradient(90deg, #fff, #fff)",
          }}
        >
          <h2 className="text-[20px] leading-normal font-bold text-[#95741a]">
            Why People Choose Us{" "}
          </h2>
          <p className="mt-[9px] text-[16px] leading-normal text-[#a78526]">
            Because they’ve tried the playbooks. Because they’ve followed the
            methods. And something still felt off. They come to us not to learn
            more,{" "}
            <span className="font-bold">
              But to return to what they know, and build from that place.{" "}
            </span>
          </p>
          <MobilePill
            as="a"
            href="#programs"
            variant="creamFilled"
            className="mt-[18px]"
          >
            Explore Our Programs
          </MobilePill>
        </div>
      </MobileContainer>
    </section>
  );
}
