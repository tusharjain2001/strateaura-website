import { Navigate, useParams } from "react-router-dom";
import useCanvasScale from "../hooks/useCanvasScale";
import SiteHeader from "../components/layout/SiteHeader";
import BlogFooter from "../components/blog/BlogFooter";
import { BLOG_POSTS } from "../data/blogPosts";

/**
 * Blog Page — Figma node 1755:3693 (1440x2402).
 *
 * Same fixed-canvas approach as Home/About: SiteHeader renders outside the
 * zoomed canvas at its true size, so canvas y = board y − 74 and the canvas is
 * 2328 tall.
 */
export default function BlogPage() {
  const { slug } = useParams();
  const scale = useCanvasScale();
  const post = BLOG_POSTS[slug];

  if (!post) return <Navigate to="/insights" replace />;

  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <div style={{ zoom: scale }} className="w-[1440px] overflow-x-clip">
        <main className="relative h-[2328px] w-[1440px] overflow-hidden">
          {/* 1755:3694 — cream wash, a 90°-rotated #fee8a9 → white ramp at 40%,
              1320 tall so it fades out just below the article. */}
          <div className="absolute top-0 left-0 h-[1320px] w-[1440px] bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />

          {/* 1755:3764 — the article column: 1187 wide at x127, with a 55px gap
              between the two-line title and the body. */}
          <div className="absolute top-[91px] left-[127px] w-[1187px] text-[#1f3a58]">
            <h1 className="relative top-[-2px] text-[30px] leading-[1.2] font-bold">
              {post.eyebrow}
              <br />
              {post.title}
            </h1>
            {/* One continuous 16px block on a 19.2px pitch — the board sets the
                whole article as a single text node, so the gaps between
                sections are literal blank lines and no <p> carries a margin. */}
            <div className="mt-[55px] text-[16px] leading-[19.2px] [&_p]:m-0 [&_ul]:m-0">
              {post.body}
            </div>
          </div>

          <BlogFooter />
        </main>
      </div>
    </div>
  );
}
