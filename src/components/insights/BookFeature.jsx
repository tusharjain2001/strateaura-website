import { useState } from "react";
import CtaPill from "../ui/CtaPill";
import BookPreviewModal from "./BookPreviewModal";
import bookLeaf from "../../assets/insights/book-leaf.svg";
import bookLeafWide from "../../assets/insights/book-leaf-wide.svg";
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
      {/* Mobile re-cut to Figma 1954:2136 (402x742): centered copy from y61,
          book 239x310 13px under it, CTAs 50px under the book, 32px to the
          section end. Two full-bleed decorations anchor to the BOTTOM edge so
          they hold their distance from the book/CTAs even if the copy wraps
          taller: the 402x324 leaf watermark (node 1954:2114, y209..533) and,
          painting over it, the 45%-alpha tan quarter-round panel (1954:2135,
          382 tall). Both sit under the z-10 content. */}
      <span className="pointer-events-none absolute inset-x-0 bottom-[209px] z-0 h-[324px] lg:hidden">
        <img src={bookLeafWide} alt="" className="size-full" />
      </span>
      <span className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[382px] w-full rounded-tr-[191px] bg-[#efdcab] opacity-45 lg:hidden" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-[61px] pb-[32px] lg:min-h-[458px] lg:px-[161px] lg:py-[75px]">
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
          {/* Mobile type from Figma 1954:2116-2120: everything CENTERED in a
              370 column — h2 28/31, title 20 13px below it, body 16px Acumin
              at a 19.6px pitch (14px in Inter to keep the 5-line wrap) 8px
              under the title. The max-w wrapper only pins the copy on
              tablet widths; at lg it dissolves so desktop is byte-identical. */}
          <div className="mx-auto w-full max-w-[370px] text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="text-[28px] leading-[31px] font-bold text-gold lg:text-[30px] lg:leading-[1.2]">
              Book Feature
            </h2>
            <p className="mt-[13px] text-[20px] font-bold text-black/65 lg:mt-[15px]">
              Clicks, Leads, and Strategy Feeds
            </p>
            <p className="mt-2 text-[14px] leading-[19.6px] font-light text-black/60 lg:mt-[40px] lg:max-w-[453px] lg:text-[16px] lg:leading-normal">
              Your Guide to Cutting Through the Noise and Building Marketing
              That Matters. This isn’t a textbook. It’s a field guide. Built
              for decision-makers who want more than metrics, and are ready to
              stop outsourcing strategic thinking.
            </p>
          </div>
          {/* Mobile book cover (1954:2134): the node is a 239x310 rect whose
              centre sits 10.5px left of the section's, carrying the 44.8-blur
              box-shadow (Figma casts it from the rect bounds — hence the wide
              smudge under the book), while the book itself renders 178x277
              inside it (cover top 21 / left 33, measured off the node export —
              do NOT size book-cover.png to the rect; the fill's padding puts
              the book well inside). The shadow is a DROP-shadow on the img so
              it follows the book's alpha like Figma's — a box-shadow on the
              background-less box paints the whole shadow rect and reads as a
              grey square around the book. */}
          <span className="pointer-events-none relative -left-[10.5px] mx-auto mt-[13px] block h-[310px] w-[239px] lg:hidden">
            <img
              src={bookCover}
              alt="Clicks, Leads, and Strategy Feeds — book by Dr. Suhair Hamouri"
              className="absolute top-[21px] left-[33px] w-[178px] max-w-none drop-shadow-[-1px_5px_44.8px_rgba(60,47,11,0.31)]"
            />
          </span>
          {/* CTAs (1954:2121): on mobile a centered column of two FIXED
              274px-wide pills 50px under the book, label centered between the
              left inset and the icon circle; at lg the width/centering
              overrides fall away and the pills hug their labels as before. */}
          <div className="mt-[50px] flex flex-col items-center gap-3 lg:mt-[30px] lg:items-start lg:gap-[18px]">
            <CtaPill
              as="button"
              type="button"
              onClick={() => setPreviewOpen(true)}
              variant="goldOutline"
              size="compact"
              className="max-lg:w-[274px] max-lg:gap-[8px] max-lg:pl-[12px] max-lg:text-[15px] max-lg:[&>span:first-of-type]:grow max-lg:[&>span:first-of-type]:text-center"
            >
              Download a Preview Chapter
            </CtaPill>
            <CtaPill
              as="a"
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="goldFilled"
              size="compact"
              className="max-lg:w-[274px] max-lg:gap-[8px] max-lg:pl-[12px] max-lg:[&>span:first-of-type]:grow max-lg:[&>span:first-of-type]:text-center"
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
