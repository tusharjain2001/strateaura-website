import MobileContainer from "../home-mobile/MobileContainer";
import MobilePill from "../home-mobile/MobilePill";
import photo from "../../assets/about-mobile/choose-photo.jpg";
import photoMask from "../../assets/about-mobile/choose-mask.svg";
import frameA from "../../assets/about-mobile/choose-frame-a.svg";
import frameB from "../../assets/about-mobile/choose-frame-b.svg";
import band from "../../assets/about-mobile/choose-band.svg";

// Figma node 1414:242 — the scalloped "Subtract" shape. Stretched to the photo
// box with maskSize 100% 100% (same technique as the desktop About page) so the
// crop stays fluid instead of pinned to the 369x267.757 Figma frame.
const MASK = {
  maskImage: `url("${photoMask}")`,
  WebkitMaskImage: `url("${photoMask}")`,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
};

/**
 * "Why People Choose Us" block of the mobile About Us page — Figma nodes
 * 1293:3701 (scalloped photo + gold panel) sitting on the 1293:3566 backdrop
 * (white-to-#fee8a9 wash with the ellipse band along the bottom edge).
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
        {/* 1414:237 — group photo masked to the scalloped frame */}
        <div className="relative aspect-[369/267.757] w-full">
          <div className="absolute inset-0 overflow-hidden" style={MASK}>
            <img
              src={photo}
              alt="StrateAura community"
              className="size-full -scale-x-100 object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[51.52%] bg-gradient-to-t from-black to-transparent opacity-70"
            />
          </div>
          <img
            src={frameA}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[1.538%] left-[2.124%] h-[96.31%] w-[95.12%] max-w-none"
          />
          <img
            src={frameB}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[1.538%] left-[3.03%] h-[96.31%] w-[95.12%] max-w-none -scale-x-100"
          />
        </div>

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
