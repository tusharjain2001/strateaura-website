import MobileContainer from "../home-mobile/MobileContainer";
import { Sparkle } from "../ui/Icons";
import heroAura from "../../assets/frameworks-mobile/hero-aura.svg";
import speakerPhoto from "../../assets/frameworks/mean-speaker-photo.jpg";

/**
 * Mobile Frameworks hero + "What Frameworks Mean" — Figma nodes 1296:4514 to
 * 1296:4539 inside the 402px frame.
 *
 * Both live in one component because they share a single background: Figma's
 * "Rectangle 102" is a 1185px cream-to-white wash that starts under the navbar
 * and fades out just below the gold quote card.
 *
 * Geometry (frame y, minus the 66px the wash starts at):
 *   sparkle   x 376  y 81   9.94px
 *   headline  x 38   y 104  325x151, centred
 *   aura      x 16   y 162  370x62, behind the 3rd/4th headline lines
 *   photo     x 16   y 315  370x452 arch
 *   heading   x 16   y 828  370x58
 *   body      x 16   y 894  370x105
 *   gold card x 16   y 1023 370x195
 */
export default function FwHero() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#FEF5DC_0%,#FFFFFF_100%)] bg-[length:100%_1185px] bg-no-repeat">
      <MobileContainer className="relative">
        {/* 1296:4514 — small gold sparkle in the top-right corner. */}
        <Sparkle className="absolute top-[15px] right-4 size-[10px] text-gold" />

        <div className="relative pt-[38px]">
          {/* 1296:4515 — pale gold aura band, six overlapping ellipses that
              taper to the right. It sits behind the last two headline lines. */}
          <img
            src={heroAura}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[109px] w-full"
          />
          <h1 className="relative mx-auto max-w-[325px] text-center text-[30px] leading-[37.75px] font-bold">
            <span className="text-gold">Not Templates. Not Theories. </span>
            <span className="text-navy-2">
              Living Systems That Rewire the Way You Lead.
            </span>
          </h1>
        </div>

        {/* 1296:4523 — arch-topped photo. "Vector 15" is the gold panel that
            shows through the arch's top-left shoulder as a crescent. */}
        <div className="relative mt-[60px] aspect-[370/452]">
          <div className="pointer-events-none absolute top-0 left-0 h-[45.1%] w-[49.6%] bg-gold" />
          <img
            src={speakerPhoto}
            alt="A StrateAura facilitator leading a live workshop session"
            className="absolute inset-0 size-full rounded-t-[185px] object-cover"
          />
        </div>

        {/* 1296:4527 — "What Frameworks Mean at StrateAura" */}
        <h2 className="mt-[61px] text-[24px] leading-[29px] font-bold">
          <span className="text-gold">What Frameworks Mean at </span>
          <span className="text-navy-2">StrateAura</span>
        </h2>
        {/* 15px, not Figma's 16: the site renders in Inter, which is wider than
            the Acumin Pro the file was drawn in, and 16px pushes this to six
            lines instead of the design's five. */}
        <p className="mt-[8px] text-[14px] leading-[21px] text-black/60">
          At StrateAura&trade;, frameworks aren&rsquo;t diagrams. They&rsquo;re
          deeper than that. They are mirrors. Maps. Systems of awareness. They
          help you see what&rsquo;s been running underneath your decisions, and
          give you language, direction, and rhythm to move differently.
        </p>

        {/* 1296:4531 — gold quote card */}
        <div className="mt-[24px] rounded-[4px] bg-gold px-[24px] pt-[30px] pb-[26px]">
          <p className="text-[15px] leading-[20.75px] text-white">
            These models weren&rsquo;t created to &ldquo;fix&rdquo; your
            leadership. They were built to reveal the inner logic that already
            exists in you, and elevate it into lasting presence.
          </p>
          <a
            href="#signature-models"
            className="group mt-[14px] flex h-[43.67px] w-[301px] max-w-full items-center justify-between rounded-full border border-cream pr-[5px] pl-[18px] text-[15px] leading-none font-bold whitespace-nowrap text-white"
          >
            <span>Discover Our Signature Models</span>
            <span className="flex size-[33.6px] shrink-0 items-center justify-center rounded-full bg-white transition-transform motion-safe:group-hover:scale-105">
              <Sparkle className="size-[18px] text-gold" />
            </span>
          </a>
        </div>
      </MobileContainer>
    </section>
  );
}
