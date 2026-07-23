import { Link } from "react-router-dom";
import { renderLines } from "../../data/blogPosts";

const WEIGHT = { bold: "font-bold", semi: "font-semibold" };

/**
 * Mobile blog article (below lg). There is no phone board for the blog, so this
 * is an original reflow of the desktop design rather than a traced frame: the
 * same cream wash, navy type and gold accents, set in a single readable column.
 *
 * The board's blank-line spacers are dropped here — on a narrow column the
 * blocks need real margins, and section headings read better as headings than
 * as semibold body copy.
 */
export default function BlogMobile({ post }) {
  return (
    // No bottom padding: MobileSiteFooter opens with its own pt-14.
    <article className="relative overflow-hidden bg-white">
      {/* Same #fee8a9 → white wash as the desktop board, sized to the header
          of the article rather than a fixed 1320px band. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />

      <div className="relative mx-auto w-full max-w-[430px] px-4 pt-9">
        <Link
          to="/insights"
          className="inline-block text-[13px] font-bold tracking-[0.4px] text-gold uppercase transition-opacity hover:opacity-70"
        >
          ← Insights &amp; Resources
        </Link>

        <p className="mt-5 text-[14px] font-bold tracking-[0.2px] text-gold">
          {post.eyebrow}
        </p>
        <h1 className="mt-2 text-[24px] leading-[1.25] font-bold text-navy">
          {post.title}
        </h1>

        <div className="mt-7 text-[15px] leading-[1.6] text-[#1f3a58]">
          {post.blocks.map((block, i) => {
            // The board's blank lines only exist to space a single text node.
            if (block.t === "gap") return null;
            if (block.t === "h")
              return (
                <h2
                  key={i}
                  className="mt-7 mb-2 text-[17px] leading-[1.3] font-bold text-navy first:mt-0"
                >
                  {block.text}
                </h2>
              );
            if (block.t === "ul")
              return (
                <ul key={i} className="my-3 list-disc space-y-1 ps-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className={`mb-3 ${WEIGHT[block.w] ?? ""}`}>
                {renderLines(block.lines)}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
