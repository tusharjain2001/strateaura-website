import { Navigate, useParams } from "react-router-dom";
import useCanvasScale from "../hooks/useCanvasScale";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import BlogArticle from "../components/blog/BlogArticle";
import BlogFooter from "../components/blog/BlogFooter";
import BlogMobile from "../components/blog/BlogMobile";
import { BLOG_POSTS } from "../data/blogPosts";
import useSeo from "../lib/seo";

/**
 * Blog Page — Figma node 1755:3693 (1440x2402).
 *
 * Desktop (lg and up) is the fixed canvas: SiteHeader renders outside the zoom
 * so canvas y = board y − 74 and the canvas is 2328 tall. That canvas cannot
 * reflow, so below lg the page switches to its own tree (BlogMobile + the
 * shared responsive footer), exactly as Home and About do.
 */
/**
 * Meta description for a post: its opening prose, trimmed to a length search
 * engines will actually show. Taken from the article itself rather than
 * written separately so the two cannot drift apart.
 */
function excerpt(post, limit = 155) {
  const first = post?.blocks?.find((b) => b.t === "p" && b.lines?.length);
  const text = first?.lines.join(" ").replace(/\s+/g, " ").trim() ?? "";
  if (text.length <= limit) return text;
  // Cut on a word boundary so the snippet does not end mid-word.
  return `${text.slice(0, text.lastIndexOf(" ", limit)).replace(/[,;:—-]$/, "")}…`;
}

export default function BlogPage() {
  const { slug } = useParams();
  const scale = useCanvasScale();
  const post = BLOG_POSTS[slug];

  // Called before the redirect below because hooks cannot run conditionally.
  // An unknown slug never renders, so its metadata is never read.
  useSeo({
    title: post ? `${post.title} | StrateAura` : "Insights & Resources | StrateAura",
    description: post ? excerpt(post) : "",
    path: `/insights/${slug}`,
    // Bundled asset URLs are root-relative; og:image has to be absolute.
    image: post?.cover ? new URL(post.cover, window.location.origin).href : undefined,
    type: "article",
  });

  if (!post) return <Navigate to="/insights" replace />;

  return (
    <div className="bg-white text-black">
      {/* SiteHeader is already responsive (it collapses to a menu below xl), so
          it is shared by both trees. */}
      <SiteHeader />

      {/* Mobile */}
      <div className="lg:hidden">
        <BlogMobile post={post} />
        <SiteFooter />
      </div>

      {/* Desktop canvas — untouched by the mobile work above */}
      <div className="hidden lg:block">
        <div style={{ zoom: scale }} className="w-[1440px] overflow-x-clip">
          {/* The article is in flow and the footer follows it, so posts longer
              than the board's still land the CTA the same distance below the
              last line. For Blog #1 this reproduces the board exactly: its
              article ends at canvas 1291 and the 177px gap puts the CTA group
              at 1470, for a 2328px canvas. */}
          <main className="relative w-[1440px] overflow-hidden">
            {/* 1755:3694 — cream wash, a 90°-rotated #fee8a9 → white ramp at
                40%, 1320 tall so it fades out below the article. */}
            <div className="absolute top-0 left-0 h-[1320px] w-[1440px] bg-gradient-to-b from-[#fee8a9] to-white opacity-40" />
            <BlogArticle post={post} />
            <div className="mt-[177px]">
              <BlogFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
