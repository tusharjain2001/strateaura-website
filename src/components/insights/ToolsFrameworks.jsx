import { useEffect, useRef } from "react";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import bgSwirls from "../../assets/insights/tools-bg-lineart.png";
import cornerStar from "../../assets/insights/card-corner-star.svg";
import cardAura from "../../assets/cta-aura.svg";
import toolsCircles from "../../assets/insights/tools-circles.png";
import toolsArcs from "../../assets/insights/tools-arcs.png";

const CARDS = [
  {
    title: ["ALA-Nexus™", "Diagnostic Tool"],
    desc: "Quick audit: Are your actions aligned with your intent?",
    decor: (
      <img
        src={cardAura}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] w-full object-cover object-top opacity-70"
      />
    ),
  },
  {
    title: ["Brand Health", "Self-Assessment"],
    desc: "Is your brand just active or actually alive?",
    decor: (
      <img
        src={toolsCircles}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] w-full object-cover opacity-80"
      />
    ),
  },
  {
    title: ["VEIL™ Energy Alignment Prompt"],
    desc: "A one-page guide to restoring your presence",
    decor: (
      <img
        src={toolsArcs}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] w-full object-cover opacity-80"
      />
    ),
  },
];

/**
 * Drag-to-scroll + wheel-to-horizontal on the card rail. The Figma design hides
 * the scrollbar (the peeking card is the only affordance), so without this a
 * mouse user cannot move the rail at all. Trackpad/touch already scroll
 * natively; this adds click-drag and vertical-wheel translation, releasing the
 * wheel back to the page once the rail hits an end so the page never traps.
 */
function useDragScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;

    const onDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      down = true;
      moved = false;
      startX = e.pageX;
      startLeft = el.scrollLeft;
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 3) moved = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      down = false;
    };
    // Swallow the click that fires right after a drag so the CTA/links inside
    // a card don't activate when the user was only scrolling.
    const onClick = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    const onWheel = (e) => {
      if (!e.deltaY) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= max - 1;
      if ((e.deltaY < 0 && !atStart) || (e.deltaY > 0 && !atEnd)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);
  return ref;
}

function Card({ card }) {
  return (
    <div className="relative shrink-0">
      {/* Card body — clipped so the bottom decoration stays inside the rounded
          corners. The corner star is a sibling (outside this clip) so it can
          straddle the top-right corner as in Figma. */}
      <div className="relative h-[420px] w-[80vw] max-w-[480px] overflow-hidden rounded-[8px] bg-gradient-to-b from-gold to-gold-light text-white sm:w-[420px] lg:h-[501px] lg:w-[480px]">
        <div className="absolute top-8 right-7 left-7 lg:top-[86px] lg:left-[64px] lg:w-[363px]">
          <p className="text-[clamp(1.375rem,2.1vw,1.9375rem)] leading-[1.12] font-bold">
            {card.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-[1.1em] text-[clamp(1.375rem,2.1vw,1.9375rem)] leading-[1.12] font-normal">
            {card.desc}
          </p>
        </div>
        {card.decor}
        {/* Sparkle badge — Figma centres a 50px white disc near the bottom. */}
        <span className="absolute bottom-[64px] left-1/2 z-10 flex size-[46px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:bottom-[77px] lg:size-[50px]">
          <Sparkle className="size-[20px] text-gold" />
        </span>
      </div>
      {/* Corner star — centred on the top-right corner (Figma: 36x38 straddling
          the corner). Sits above the clipped body. */}
      <img
        src={cornerStar}
        alt=""
        className="pointer-events-none absolute top-0 right-0 z-20 w-[30px] translate-x-1/2 -translate-y-1/2 lg:w-[36px]"
      />
    </div>
  );
}

function HeadingBlock({ className = "" }) {
  return (
    <div className={className}>
      <h2 className="max-w-[470px] text-[clamp(1.875rem,3.5vw,3.125rem)] leading-[1.15] font-bold text-navy">
        <span className="block">Tools &amp;</span>
        <span className="block">Self-Guided Frameworks</span>
      </h2>
      <p className="mt-4 max-w-[560px] text-[clamp(1.0625rem,1.7vw,1.5rem)] leading-normal font-light text-black/60 lg:mt-[42px]">
        This isn’t DIY this is strategic self-reflection.
      </p>
      <CtaPill
        as="a"
        href="#access-tools"
        variant="goldOutline"
        size="md"
        className="pointer-events-auto mt-6 lg:mt-[42px]"
      >
        Access Tools
      </CtaPill>
    </div>
  );
}

export default function ToolsFrameworks() {
  const mobileRail = useDragScroll();
  const desktopRail = useDragScroll();

  return (
    <section className="overflow-hidden bg-white">
      {/* Mobile / tablet — heading stacked above the scrolling rail. */}
      <div className="relative px-5 py-14 sm:px-8 lg:hidden">
        <img
          src={bgSwirls}
          alt=""
          className="pointer-events-none absolute -top-6 -left-10 w-[380px] opacity-70 mix-blend-multiply select-none"
        />
        <HeadingBlock className="relative max-w-[560px]" />
        <div
          ref={mobileRail}
          className="mt-9 flex cursor-grab gap-6 overflow-x-auto pt-4 pr-5 pb-1 select-none [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((card) => (
            <Card key={card.title.join(" ")} card={card} />
          ))}
        </div>
      </div>

      {/* Desktop — Figma Frame 54 (1440x818). The rail spans the full width and
          scrolls; a white gradient panel fades the left cards out behind the
          heading, which sits over the decorative swirl emblem. */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[818px]">
        {/* Card rail — base layer. Starts 224px in (Figma) and scrolls. The
            fade/swirls/heading above are pointer-events-none, so a drag anywhere
            reaches this rail. */}
        <div
          ref={desktopRail}
          className="absolute top-[120px] right-0 left-0 flex cursor-grab gap-[40px] overflow-x-auto pt-5 pl-[224px] select-none [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((card) => (
            <Card key={card.title.join(" ")} card={card} />
          ))}
          {/* trailing spacer so the last card can scroll clear of the edge */}
          <div className="shrink-0 pr-[64px]" aria-hidden />
        </div>

        {/* White fade panel — cards scroll behind it (Figma node 1136:5821). */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[875px] bg-[linear-gradient(to_right,#ffffff_68.12%,rgba(255,255,255,0.68)_81.08%,rgba(255,255,255,0)_100%)]" />

        {/* Swirl emblem behind the heading (Figma node 1136:5822). Multiply so
            the baked white ground drops out and only the faint lines show. */}
        <img
          src={bgSwirls}
          alt=""
          className="pointer-events-none absolute top-[15px] left-[-35px] z-20 h-[788px] w-[824px] object-contain opacity-80 mix-blend-multiply select-none"
        />

        {/* Heading — pointer-events-none so drags pass through to the rail; the
            CTA re-enables pointer events on itself. */}
        <HeadingBlock className="pointer-events-none absolute top-[229px] left-[143px] z-30 w-[580px]" />
      </div>
    </section>
  );
}
