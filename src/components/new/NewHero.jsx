import NewPill from "./NewPill";
import heroPhoto from "../../assets/home2/hero-photo.jpg";
import heroAura from "../../assets/new19/hero-aura.svg";

/**
 * Hero — Figma node 1638:631, spanning y 0-800 of the 1920 frame.
 *
 * The photo runs y -3 to 800 and the navy wash starts at y 85, so the band sits
 * directly under the navbar rather than behind it. Figma scales the square
 * source to ~2107px and crops from the top (node 1638:633), which `object-cover`
 * can't reproduce on a 1920x803 box — hence the explicit size/offset on the img.
 *
 * Copy line breaks are forced: the Inter fallback runs wider than the design's
 * Acumin Pro and would otherwise wrap at different words.
 */
export default function NewHero() {
  return (
    <div className="absolute top-0 left-0 h-[800px] w-[1920px] overflow-hidden bg-navy-2">
      {/* 1638:633 — photo, y -3 to 800 */}
      <div className="absolute top-[-3px] left-0 h-[803px] w-[1920px] overflow-hidden">
        <img
          src={heroPhoto}
          alt=""
          className="absolute top-[-269.6px] left-0 h-[2108.2px] w-[2106.6px] max-w-none"
        />
      </div>
      {/* 1638:634 — navy wash, y 85 to 800 */}
      <div className="absolute top-[85px] left-0 h-[715px] w-[1920px] bg-gradient-to-b from-[rgba(35,58,88,0.6)] to-navy-2" />

      {/* 1638:662 — aura motif, 540x180.52 anchored to the right edge at y 129 */}
      <img
        src={heroAura}
        alt=""
        className="pointer-events-none absolute top-[129px] left-[1380px] h-[180.52px] w-[540px]"
      />

      {/* 1638:638 — 789x106 */}
      <h1 className="absolute top-[429px] left-[77px] w-[789px] text-[44px] leading-[1.2] font-bold text-white [&>span]:block">
        <span className="whitespace-nowrap">
          Where Strategy Comes to Life. Where
        </span>
        <span>Leaders Find Their Edge.</span>
      </h1>
      {/* 1638:639 — 700x89 */}
      <p className="absolute top-[541px] left-[77px] w-[700px] text-[20px] leading-[1.2] text-white [&>span]:block">
        <span className="whitespace-nowrap">
          At StrateAura™, we create spaces for elevated learning and aligned
          action.
        </span>
        <span className="whitespace-nowrap">
          This is where ambition meets self-awareness and where fragmented
          effort
        </span>
        <span>becomes embodied leadership.</span>
      </p>

      {/* 1638:641 / 1638:648 — 272px and 335px pills on the y 655 baseline */}
      <div className="absolute top-[655px] left-[77px]">
        <NewPill
          href="/veil"
          variant="creamFilled"
          minWidth={272}
          pl={22}
          pr={9}
        >
          VEIL™ Program
        </NewPill>
      </div>
      <div className="absolute top-[655px] left-[388px]">
        <NewPill
          href="/programs"
          variant="creamOutline"
          minWidth={335}
          pl={30}
          pr={8}
        >
          Browse All Programs
        </NewPill>
      </div>
    </div>
  );
}
