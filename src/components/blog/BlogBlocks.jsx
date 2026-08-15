import { Link } from "react-router-dom";
import { renderLines } from "../../data/blogPosts";

/**
 * The three block types the VEIL™ manuscripts introduced — tables, callouts and
 * the closing action links. Unlike the prose, these are not traced from the
 * Blog Page board, so desktop and mobile can share one component: base classes
 * are the mobile sizes and `lg:` carries the desktop ones, which lines up with
 * BlogPage switching trees at the same `lg` breakpoint.
 */

const WEIGHT = { bold: "font-bold", semi: "font-semibold" };

/** Callout bodies only ever hold paragraphs, so this stays flat. */
function CalloutParagraphs({ blocks }) {
  return blocks.map((block, i) => (
    <p key={i} className={`mb-2 last:mb-0 ${WEIGHT[block.w] ?? ""}`}>
      {renderLines(block.lines)}
    </p>
  ));
}

export function BlogTable({ head, rows }) {
  return (
    // The desktop canvas is a fixed 1187px column, so the scroller only ever
    // engages on the mobile tree.
    <div className="my-6 overflow-x-auto lg:my-[24px]">
      <table className="w-full min-w-[560px] border-collapse text-left text-[13px] leading-snug lg:min-w-0 lg:text-[15px]">
        <thead>
          <tr className="bg-navy text-cream">
            {head.map((cell) => (
              <th
                key={cell}
                className="border border-navy px-3 py-2 font-semibold lg:px-4 lg:py-3"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="odd:bg-black/[0.03]">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`border border-black/15 px-3 py-2 align-top lg:px-4 lg:py-3 ${
                    i === 0 ? "font-semibold" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlogCallout({ value, title, source, blocks }) {
  return (
    <aside className="my-6 border-l-[3px] border-gold bg-gold/[0.06] px-4 py-4 lg:my-[24px] lg:px-6 lg:py-5">
      {value && (
        <p className="mb-1 text-[32px] leading-[1.1] font-bold text-gold lg:text-[40px]">
          {value}
        </p>
      )}
      {title && (
        <p className="mb-2 text-[16px] leading-[1.3] font-bold text-navy lg:text-[18px]">
          {title}
        </p>
      )}
      <CalloutParagraphs blocks={blocks} />
      {source && (
        <p className="mt-3 text-[12px] leading-snug text-black/50 italic lg:text-[13px]">
          {source}
        </p>
      )}
    </aside>
  );
}

export function BlogCta({ items }) {
  return (
    <div className="my-6 flex flex-col items-start gap-3 lg:my-[24px]">
      {items.map((item) => {
        const className =
          "inline-block rounded-full border border-gold px-5 py-2.5 text-[14px] leading-snug font-semibold text-gold transition-colors hover:bg-gold hover:text-cream lg:px-7 lg:py-3 lg:text-[15px]";
        return item.to ? (
          <Link key={item.label} to={item.to} className={className}>
            {item.label} →
          </Link>
        ) : (
          <a key={item.label} href={item.href} className={className}>
            {item.label} →
          </a>
        );
      })}
    </div>
  );
}
