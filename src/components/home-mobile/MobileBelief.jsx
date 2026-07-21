import beliefLaurel from "../../assets/home-mobile/belief-laurel-mobile.png";

/**
 * "Our Belief" band — Figma node 1434:622.
 *
 * A 304px golden band: the fill is linear-gradient(270deg, #CD9700, #FFEDBD)
 * knocked back to 40% opacity (node 1434:623), with the laurel vector
 * (node 1434:624) anchored at 29.35% / 36px and bleeding off the right edge.
 * The copy is inset 35px rather than the page's usual 16px, so this section
 * carries its own container.
 *
 * The 76px of white above the band is Figma's gap between the Frameworks cards
 * (they end at y=5332.5) and the band itself (y=5409). It lives on the section
 * while the gradient is scoped to the inner wrapper, so the gold does not bleed
 * up into the gap.
 */
export default function MobileBelief() {
  return (
    <section className="bg-white pt-[76px]">
      <div className="relative overflow-hidden">
        {/* Gold band, Figma opacity 40%. */}
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#CD9700_0%,#FFEDBD_100%)] opacity-40" />

        {/* Laurel: 283x268 at left 118 / top 36, its artwork overflowing 5.23%
            past the right edge of that box (Figma inset [0 -5.23% 0 0]). */}
        <img
          src={beliefLaurel}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[36px] left-[29.35%] w-[74.08%] max-w-none opacity-30"
        />

        <div className="relative z-10 mx-auto flex min-h-[304px] w-full max-w-[430px] flex-col justify-center px-[35px] py-[72px]">
          <div className="flex max-w-[298px] flex-col gap-[10px]">
            <h2 className="text-[28px] leading-normal font-bold text-gold">
              Our
              <br />
              Belief
            </h2>
            <p className="text-[16px] leading-normal text-black/65">
              Real growth begins with the courage to pause. To think again, To
              lead from the inside out, with energy, intention, and presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
