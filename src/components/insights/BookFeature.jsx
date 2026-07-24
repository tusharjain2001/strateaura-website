import { useState } from "react";
import CtaPill from "../ui/CtaPill";
import BookPreviewModal from "./BookPreviewModal";
import bookLeaf from "../../assets/insights/book-leaf.svg";
import bookCover from "../../assets/insights/book-cover.png";

const AMAZON_URL =
  "https://www.amazon.com/Clicks-Leads-Strategy-Feeds-Transformative/dp/1917510446";
const BOOK_TITLE = "Clicks, Leads, and Strategy Feeds";

export default function BookFeature() {
  const [previewOpen, setPreviewOpen] = useState(false);

  // Figma's wash (node 1136:5740) starts at rgba(255,249,232,0) — the cream
  // token at ZERO alpha, so the left of the band is the white page showing
  // through and only the right fades to #ecd79e. The opaque `cream` token
  // tinted the whole section.
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-r from-cream/0 to-[#ecd79e]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:min-h-[458px] lg:px-[161px] lg:py-[75px]">
        {/* Leaf mark (Figma node 1755:1224) — 559x458 sitting behind the book,
            its 0.45 opacity baked into the svg. Anchored by its right edge so it
            tracks the book on viewports between lg and 1440. Desktop only. */}
        <span className="pointer-events-none absolute inset-y-0 right-[184px] z-0 hidden w-[559px] lg:block">
          <img src={bookLeaf} alt="" className="size-full" />
        </span>
        {/* Book cover (Figma node 1816:695) — desktop only so mobile is
            untouched; drop-shadow matches the design's floating book. */}
        <img
          src={bookCover}
          alt="Clicks, Leads, and Strategy Feeds — book by Dr. Suhair Hamouri"
          className="pointer-events-none absolute top-1/2 right-[290px] z-[1] hidden h-[440px] w-auto -translate-y-1/2 drop-shadow-[-4px_2px_8px_rgba(0,0,0,0.25)] lg:block"
        />

        {/* Explicit stacking context above the (absolutely-positioned) laurel
            so the copy always reads clearly over it, matching Figma's paint
            order (the laurel sits behind the text there too). */}
        <div className="relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3.125rem)] leading-[1.2] font-bold text-gold lg:text-[30px]">
            Book Feature
          </h2>
          <p className="mt-2 text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-black/65 lg:mt-[15px] lg:text-[20px]">
            Clicks, Leads, and Strategy Feeds
          </p>
          <p className="mt-6 max-w-[616px] text-[clamp(1.125rem,1.8vw,1.5rem)] leading-normal font-light text-black/60 lg:mt-[40px] lg:max-w-[453px] lg:text-[16px]">
            Your Guide to Cutting Through the Noise and Building Marketing
            That Matters. This isn’t a textbook. It’s a field guide. Built
            for decision-makers who want more than metrics, and are ready to
            stop outsourcing strategic thinking.
          </p>
          {/* Figma stacks the two CTAs vertically, left-aligned. */}
          <div className="mt-8 flex flex-col items-start gap-6 lg:mt-[30px] lg:gap-[18px]">
            <CtaPill
              as="button"
              type="button"
              onClick={() => setPreviewOpen(true)}
              variant="goldOutline"
              size="compactLg"
            >
              Download a Preview Chapter
            </CtaPill>
            <CtaPill
              as="a"
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="goldFilled"
              size="compactLg"
            >
              Order Now
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
    {previewOpen && (
      <BookPreviewModal onClose={() => setPreviewOpen(false)} book={BOOK_TITLE} />
    )}
    </>
  );
}
