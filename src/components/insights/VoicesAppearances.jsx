import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import voicesPhoto from "../../assets/insights/voices-photo.png";

export default function VoicesAppearances() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] lg:relative lg:h-[1002px]">
        {/* Photo — the asset is 1010x832 with Figma's mask (the concave curve
            at the top right) already baked into its alpha, so it is placed at
            its native size, NOT stretched. Verified against a render of the
            Figma node: the asset's opaque right edge matches the design's photo
            boundary row for row at offset 0 (740px at the top, bulging to 870
            through the curve, 739px at the bottom), with the photo top at y=93.
            The Figma node tree's 1110px-wide image at x:-64 is the pre-mask
            source, not the visible shape — sizing to that made it ~300px too
            wide.
            The box is anchored by BOTH edges: its right stays at container
            x=1010 so it keeps overlapping the card (which is also positioned
            off the container), while its left reaches the viewport edge so no
            white gap opens up above 1440. Anchoring only the left made the two
            drift apart as the screen widened. At exactly 1440 the box is the
            asset's native 1010x832 and object-cover is a no-op, so it stays
            pixel-exact; wider, it zooms uniformly with the curve pinned right. */}
        <div className="relative lg:absolute lg:top-[93px] lg:left-[calc(50%-50vw)] lg:right-[calc(100%-1010px)] lg:h-[832px]">
          <img
            src={voicesPhoto}
            alt="Dr. Suhair Hamouri speaking with attendees at a conference"
            className="aspect-[1010/832] w-full object-cover lg:aspect-auto lg:h-full lg:w-full lg:object-right"
          />
        </div>

        {/* Card — overlaps the photo's bottom-right corner on desktop */}
        <div className="relative z-10 mx-auto -mt-10 w-[calc(100%-40px)] max-w-[700px] rounded-[4px] bg-gradient-to-b from-navy to-blue px-8 py-10 text-white sm:px-10 lg:absolute lg:top-[338px] lg:left-[39.44%] lg:mx-0 lg:mt-0 lg:min-h-[523px] lg:w-[55.21%] lg:max-w-none lg:px-[70px] lg:pt-[76px] lg:pb-[62px]">
          <h2 className="text-[clamp(1.75rem,3.5vw,3.125rem)] leading-[1.2] font-bold">
            Voices &amp; Appearances
          </h2>
          {/* Figma tops inside the card: heading 76, sub 167, bullets 218,
              CTA 396 — i.e. 31px, 24px and (after two blank lines) 52px/20px
              of clear space. */}
          <p className="mt-4 text-[clamp(1.125rem,1.6vw,1.4375rem)] leading-normal lg:mt-[31px]">
            Explore live clips and curated reflections from:
          </p>
          {/* Figma marks each bullet with the site's 4-point sparkle glyph. */}
          {/* Figma runs these as three consecutive single lines with no gap
              (the 20x78 marker strip covers exactly 3 x 26px). At Figma's 24px
              the first bullet wraps to a second line in Inter, which alone
              pushed the card ~30px over its 523px height — so the list is held
              at 22px to keep all three on one line each. */}
          <ul className="mt-4 space-y-1 text-[clamp(1.0625rem,1.5vw,1.375rem)] leading-normal font-light lg:mt-6 lg:space-y-0">
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>
                <strong className="font-bold">Keynotes &amp; panel events</strong>{" "}
                (GITEX, AMA Symposium, etc.)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>
                Podcast conversations on{" "}
                <strong className="font-bold">modern leadership</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkle className="mt-[0.55em] size-[11px] shrink-0 text-white" />
              <span>Upcoming public dialogues and future events</span>
            </li>
          </ul>
          {/* Figma separates this from the list with two blank lines. */}
          <p className="mt-4 text-[clamp(1.0625rem,1.5vw,1.375rem)] leading-normal font-light lg:mt-13">
            When insight meets voice, transformation follows.
          </p>
          <CtaPill as="a" href="#watch-listen" variant="whiteOutline" className="mt-6 lg:mt-5">
            Watch &amp; Listen
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
