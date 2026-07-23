import { renderLines } from "../../data/blogPosts";

const WEIGHT = { bold: "font-bold", semi: "font-semibold" };

/**
 * The article column exactly as the Blog Page board (node 1755:3764) draws it:
 * 1187 wide at x127, a two-line 30px title, then the body as ONE continuous
 * 16px text block on a 19.2px pitch. Because the board is a single text node,
 * nothing here carries a margin — the gaps between sections are blank lines.
 */
export default function BlogArticle({ post }) {
  return (
    <div className="relative ml-[127px] w-[1187px] pt-[91px] text-[#1f3a58]">
      <h1 className="relative top-[-2px] text-[30px] leading-[1.2] font-bold">
        {post.eyebrow}
        <br />
        {post.title}
      </h1>
      <div className="mt-[55px] text-[16px] leading-[19.2px] [&_p]:m-0 [&_ul]:m-0">
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
