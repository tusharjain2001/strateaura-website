import hero from "../../assets/about/hero.jpg";
import heroEllipses from "../../assets/about/hero-ellipses.png";
import badge from "../../assets/about/underline.svg";
import whyArc from "../../assets/about/why-arc.svg";

/**
 * About hero — node 1638:1357, the band from the navbar (board y 74) down to
 * "What We Stand For" (board y 914), so the section is 840 tall. SiteHeader
 * renders outside the zoom canvas, hence canvas y = board y − 74.
 *
 * This is the retuned board: the type is a tier smaller throughout (heading 30
 * not 50, "The Why" 24/16 not 35/24) and the portrait is 454x455 at x 762,
 * down from 668x670.
 */
export default function AboutHero() {
  return (
    <section className="relative h-[840px] w-[1440px] overflow-hidden">
      {/* 1638:1373 — cream wash, a 90°-rotated #fee8a9 → white ramp at 40% */}
      <div className="absolute top-0 left-0 h-[645px] w-[1440px] bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />

      {/* 1638:1374 — the faint ellipse row behind the heading */}
      <img
        src={heroEllipses}
        alt=""
        className="pointer-events-none absolute top-[29px] left-[134px] h-[223.749px] w-[1162px]"
      />

      {/* 1755:1039 — badge over heading, centred on the 336px column at x 547
          with a 24px gap. The badge art is 202x37 and its label is centred. */}
      {/* gap is 21 rather than the board's 24: Inter's cap height sets the
          heading 3px lower than Acumin's at the same 30px. */}
      <div className="absolute top-[74px] left-[547px] flex w-[336px] flex-col items-center gap-[21px]">
        <div className="relative flex h-[37px] w-[202px] items-center justify-center">
          <img src={badge} alt="" className="absolute inset-0 size-full" />
          <span className="relative text-[16px] leading-[1.2] font-bold text-white">
            Our Philosophy
          </span>
        </div>
        <h1 className="w-full text-center text-[30px] leading-[1.2] font-bold text-navy">
          We Design Presence. We Uncover Power.
        </h1>
      </div>

      {/* 1638:1389 — portrait, 454x455. Figma renders the photo at 127.16%
          width pushed 13.58% left, so the frame crops in from both sides. */}
      <div className="absolute top-[282px] left-[762px] h-[455px] w-[454px] overflow-hidden rounded-[6.635px]">
        <img
          src={hero}
          alt="StrateAura founder"
          className="absolute top-[0.03%] left-[-13.58%] h-full w-[127.16%] max-w-none"
        />
      </div>

      {/* 1638:1458 — the gold arc the copy sits in. The exported path is
          605.521x346 inside a 617-wide box, flipped 180°, which puts it flush
          to the box's left edge at x 225. */}
      <img
        src={whyArc}
        alt=""
        className="pointer-events-none absolute top-[337px] left-[225px] h-[346px] w-[605.521px] rotate-180"
      />

      {/* 1755:1040 — 24px cream heading over 16px light body, 16px apart */}
      <div className="absolute top-[413px] left-[266px] flex w-[470px] flex-col gap-[14px]">
        <h2 className="text-[24px] leading-[1.2] font-bold text-cream">
          The Why Behind StrateAura™
        </h2>
        <p className="text-[16px] leading-[1.2] font-light text-white">
          StrateAura™ was born from a deeper truth: That leadership isn’t just
          about making decisions, it’s about how you carry them. That growth
          isn’t about more, it’s about what aligns. And that strategy, when done
          right, starts far before the boardroom. We don’t separate the human
          from the leader. We believe the most transformative shifts begin with
          the internal, not the external. Our work invites you to meet yourself
          before you move the world.
        </p>
      </div>
    </section>
  );
}
