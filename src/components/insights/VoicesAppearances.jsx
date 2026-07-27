import { Link } from "react-router-dom";
import CtaPill from "../ui/CtaPill";
import { Sparkle } from "../ui/Icons";
import voicesPhoto from "../../assets/insights/voices-photo.png";
import voicesPhotoMobile from "../../assets/insights/voices-photo-mobile.png";

export default function VoicesAppearances() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] lg:relative lg:h-[736px]">
        {/* Mobile photo — the Figma mobile design (node 1434:3833) uses a
            different mask than desktop: a scalloped frame with concave notches
            on both sides. Exported flat (mask + crop baked in) so the shape and
            framing match the design exactly, full-bleed across the section. */}
        {/* Figma 1878:9170 starts its Mask group 60px into the section, so
            60px of white separates this photo from the book section above. */}
        <img
          src={voicesPhotoMobile}
          alt="Dr. Suhair Hamouri speaking with attendees at a conference"
          className="mt-[60px] block w-full lg:hidden"
        />

        {/* Desktop photo — the asset is 1010x832 with Figma's desktop mask (the
            concave curve at the top right) baked into its alpha, so it is placed
            at its native size, NOT stretched. The box is anchored by BOTH edges:
            its right stays at container x=1010 so it keeps overlapping the card,
            while its left reaches the viewport edge so no white gap opens up
            above 1440. At exactly 1440 the box is the asset's native 1010x832
            and object-cover is a no-op; wider, it zooms with the curve pinned
            right. */}
        <div className="hidden lg:absolute lg:top-[93px] lg:left-[calc(50%-50vw)] lg:right-[calc(100%-648px)] lg:block lg:h-[558px]">
          <img
            src={voicesPhoto}
            alt="Dr. Suhair Hamouri speaking with attendees at a conference"
            className="h-full w-full object-cover object-right"
          />
        </div>

        {/* Card — sits below the photo on mobile (Figma node 1434:3839);
            overlaps the photo's bottom-right corner on desktop */}
        {/* Mobile metrics from Figma 1878:8751 (370x337 card, 16px below the
            photo, 60px above the section end): 28px insets, 27px top/bottom,
            h2 ~23/28 on one line, intro 12px 15px below it, bullets 14px
            Acumin (13px in Inter) on a continuous 19px pitch, closing line
            after one blank 19px line, 30px pill 15px under it. */}
        <div className="relative z-10 mx-4 mt-4 mb-[60px] rounded-[4px] bg-gradient-to-b from-navy to-blue px-[28px] pt-[27px] pb-[27px] text-white sm:mx-auto sm:w-[calc(100%-64px)] sm:max-w-[700px] lg:absolute lg:top-[197px] lg:left-[37.3%] lg:mx-0 lg:mt-0 lg:mb-0 lg:min-h-[342px] lg:w-[630px] lg:max-w-none lg:px-[70px] lg:pt-[48px] lg:pb-[40px]">
          <h2 className="text-[23px] leading-[28px] font-bold lg:text-[30px] lg:leading-[1.2]">
            Voices &amp; Appearances
          </h2>
          {/* Figma tops inside the card: heading 76, sub 167, bullets 218,
              CTA 396 — i.e. 31px, 24px and (after two blank lines) 52px/20px
              of clear space. */}
          <p className="mt-[15px] text-[12px] leading-[12px] lg:mt-[15px] lg:text-[16px] lg:leading-normal">
            Explore live clips and curated reflections from:
          </p>
          {/* Figma marks each bullet with the site's 4-point sparkle glyph. */}
          {/* Figma runs these as three consecutive single lines with no gap
              (the 20x78 marker strip covers exactly 3 x 26px). At Figma's 24px
              the first bullet wraps to a second line in Inter, which alone
              pushed the card ~30px over its 523px height — so the list is held
              at 22px to keep all three on one line each. */}
          <ul className="mt-[12px] space-y-0 text-[13px] leading-[19px] font-light lg:mt-[18px] lg:text-[16px] lg:leading-normal">
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
          <p className="mt-[19px] text-[13px] leading-[19px] font-light lg:mt-[18px] lg:text-[16px] lg:leading-normal">
            When insight meets voice, transformation follows.
          </p>
          <CtaPill as={Link} to="/webinar" variant="whiteOutline" size="sm34Lg" className="mt-[15px] lg:mt-[18px]">
            Watch &amp; Listen
          </CtaPill>
        </div>
      </div>
    </section>
  );
}
