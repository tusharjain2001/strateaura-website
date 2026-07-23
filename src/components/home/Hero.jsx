import PillButton from "../ui/PillButton";
import heroPhoto from "../../assets/home2/hero-photo.jpg";
import heroAura from "../../assets/home2/hero-aura.svg";

/**
 * Hero — Figma node 1638:875, y 120-800 of the 1440 frame.
 *
 * The photo and its navy wash start at y 112, i.e. 8px behind the 120px navbar,
 * so both are drawn from -8px inside this section. Figma scales the square
 * source to 1580px and crops from the top, which `object-cover` can't reproduce
 * on a 1440x688 box — hence the explicit size/offset on the img.
 *
 * Line breaks in the copy are forced: the Inter fallback runs wider than the
 * design's Acumin Pro and would otherwise wrap at different words.
 *
 * Updated to the "Alt/ Home" board (node 1728:252): the photo band is 688 tall
 * and the copy sits at 320 / 430 / 543, measured from the band's top (the
 * board places them at 393 / 503 / 616 with the band starting at y 73).
 */
export default function Hero() {
  return (
    <section className="relative h-[688px] w-[1440px] overflow-hidden bg-navy-2">
      <div className="absolute top-0 left-0 h-[688px] w-[1440px] overflow-hidden">
        <img
          src={heroPhoto}
          alt=""
          className="absolute top-[-202px] left-0 h-[1580px] w-[1580px] max-w-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(35,58,88,0.6)] to-navy-2" />
      </div>

      {/* 1638:898 — aura motif, mirrored and bleeding past the right edge */}
      <img
        src={heroAura}
        alt=""
        className="pointer-events-none absolute top-[223px] left-[930px] h-[468px] w-[540px] -scale-x-100"
      />

      {/* 1638:882 — 789x106 */}
      <h1 className="absolute top-[320px] left-[80px] w-[789px] text-[44px] leading-[1.2] font-bold text-white [&>span]:block">
        <span className="whitespace-nowrap">
          Where Strategy Comes to Life. Where
        </span>
        <span>Leaders Find Their Edge.</span>
      </h1>
      {/* 1638:883 — 700x89 */}
      <p className="absolute top-[430px] left-[80px] w-[700px] text-[20px] leading-[1.2] text-white [&>span]:block">
        <span className="whitespace-nowrap">
          At StrateAura™, we create spaces for elevated learning and aligned
          action. This
        </span>
        <span className="whitespace-nowrap">
          is where ambition meets self-awareness and where fragmented effort
          becomes
        </span>
        <span>embodied leadership.</span>
      </p>

      {/* 1638:886 / 1638:892 — 272px and 335px pills on the y 655 baseline */}
      <PillButton
        as="a"
        href="/veil"
        variant="creamFilled"
        icon="sparkle"
        className="absolute top-[543px] left-[80px] min-w-[272px]"
      >
        VEIL™ Program
      </PillButton>
      <PillButton
        as="a"
        href="/programs"
        variant="creamOutline"
        icon="sparkle"
        className="absolute top-[543px] left-[391px] min-w-[335px]"
      >
        Browse All Programs
      </PillButton>
    </section>
  );
}
