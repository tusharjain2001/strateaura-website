import { renderLines } from "../../data/blogPosts";
import { BlogTable, BlogCallout, BlogCta } from "./BlogBlocks";

const WEIGHT = { bold: "font-bold", semi: "font-semibold" };

/**
 * The article column exactly as the Blog Page board (node 1755:3764) draws it:
 * 1187 wide at x127, a 30px title, then the body as ONE continuous 16px text
 * block on a 19.2px pitch. Because the board is a single text node, no prose
 * block carries a margin — the gaps between sections are blank lines.
 *
 * The reset is scoped to DIRECT children (`[&>p]`, `[&>ul]`) so it flattens the
 * prose without reaching inside tables and callouts, which need real spacing.
 */
export default function BlogArticle({ post }) {
  return (
    <div className="relative ml-[127px] w-[1187px] pt-[91px] text-[#1f3a58]">
      <p className="text-[14px] leading-[1.2] font-semibold tracking-[0.4px] text-gold">
        {post.eyebrow}
      </p>
      <h1 className="mt-[10px] text-[30px] leading-[1.2] font-bold">
        {post.title}
      </h1>
      <p className="mt-[14px] text-[16px] leading-[1.4] text-black/60">
        {post.byline}
        <br />
        Published {post.date}
      </p>

      {/* 16:9 window so post 4's slightly taller export crops to the same box. */}
      <img
        src={post.cover}
        alt=""
        className="pointer-events-none mt-[34px] h-[668px] w-[1187px] rounded-[4px] object-cover"
      />

      <div className="mt-[42px] text-[16px] leading-[19.2px] [&>p]:m-0 [&>ul]:m-0">
        {post.blocks.map((block, i) => {
          if (block.t === "gap") return <p key={i}>&nbsp;</p>;
          if (block.t === "h")
            return (
              <p key={i} className="font-semibold">
                {block.text}
              </p>
            );
          if (block.t === "ul")
            return (
              <ul key={i} className="list-disc">
                {block.items.map((item) => (
                  <li key={item} className="ms-[24px]">
                    {item}
                  </li>
                ))}
              </ul>
            );
          if (block.t === "table")
            return <BlogTable key={i} head={block.head} rows={block.rows} />;
          if (block.t === "callout")
            return (
              <BlogCallout
                key={i}
                value={block.value}
                title={block.title}
                source={block.source}
                blocks={block.blocks}
              />
            );
          if (block.t === "cta") return <BlogCta key={i} items={block.items} />;
          return (
            <p key={i} className={WEIGHT[block.w] ?? ""}>
              {renderLines(block.lines)}
            </p>
          );
        })}
      </div>
    </div>
  );
}
