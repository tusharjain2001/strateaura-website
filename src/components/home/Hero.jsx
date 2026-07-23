import PillButton from "../ui/PillButton";
import heroPhoto from "../../assets/home2/hero-photo.jpg";

/**
 * Hero — "Alt/ Home" board, node 1728:252.
 *
 * The board's frame carries the 74px navbar at y 0; SiteHeader renders that
 * outside the zoomed canvas, so every offset here is the frame value less 74.
 * That puts the photo band 26px above the canvas top — exactly the strip the
 * navbar covers in Figma — and the section's overflow clip stands in for it.
 *
 * Figma scales the square source to 1580px and crops from the top, which
 * `object-cover` can't reproduce on a 1440x688 box, hence the explicit
 * size/offset on the img.
 *
 * The board dropped the aura motif the previous hero carried and reset the type
 * to 32/20px, which pulls the whole page up by ~148px.
 */
export default function Hero() {
  return (
    <section className="relative h-[682px] w-[1440px] overflow-hidden">
      {/* The photo (frame y 48..736) and its wash (73..761) both overrun the
          636-tall board frame, which clips them — so the band stops at canvas
          562 and the remaining 120px is the gap before the next section. */}
      <div className="absolute top-0 left-0 h-[562px] w-[1440px] overflow-hidden bg-navy-2">
        {/* 1728:254 — square source scaled to 1580 and cropped from the top */}
        <img
          src={heroPhoto}
          alt=""
          className="absolute top-[-228px] left-0 h-[1580px] w-[1580px] max-w-none"
        />
        {/* 1728:255 — navy wash, 25px lower than the photo */}
        <div className="absolute top-[-1px] left-0 h-[688px] w-[1440px] bg-gradient-to-b from-[rgba(35,58,88,0.6)] to-navy-2" />
      </div>

      {/* 1728:259 — 32px bold, two lines inside a 632 box. Tops here are the
          board's less the 4/3/2px Inter sits low in its line box. */}
      <h1 className="absolute top-[251px] left-[80px] w-[632px] text-[32px] leading-[1.2] font-bold text-white">
        Where Strategy Comes to Life. Where Leaders Find Their Edge.
      </h1>
      {/* 1728:260 — 20px regular in a 700 box */}
      <p className="absolute top-[332px] left-[80px] w-[700px] text-[20px] leading-[1.2] text-white">
        At StrateAura™, we create spaces for elevated learning and aligned
        action. This is where ambition meets self-awareness and where fragmented
        effort becomes embodied leadership.
      </p>

      {/* 1728:263 / 1728:269 — 215 and 257.5 wide, 43 tall, 16 apart.
          Both hero pills sit hollow at rest and fill with cream on hover, so
          the VEIL pill reads the same as "Browse All Programs" until you
          reach for it (client request, overrides Figma's filled treatment). */}
      <PillButton
        as="a"
        href="/veil"
        variant="creamOutline"
        icon="sparkle"
        size="xs"
        className="absolute top-[446px] left-[80px]"
      >
        VEIL™ Program
      </PillButton>
      <PillButton
        as="a"
        href="/programs"
        variant="creamOutline"
        icon="sparkle"
        size="xs"
        className="absolute top-[446px] left-[311px]"
      >
        Browse All Programs
      </PillButton>
    </section>
  );
}
