import { Link } from "react-router-dom";
import MobileContainer from "./MobileContainer";
import MobilePill from "./MobilePill";
import leadPhoto from "../../assets/blog/what-unveil-cannot-yet-prove.jpg";
import artOne from "../../assets/blog/three-things-in-exact-order.jpg";
import artTwo from "../../assets/blog/gcc-missing-conversation.jpg";
import artThree from "../../assets/blog/not-a-wellness-program.jpg";

// Figma nodes 1878:4962 / 4969 / 4976 — the article rows under the lead piece.
// Each is a 1px rule, 23px of space, then a 22px gold title, its published date
// 7px below and a full-width image plate 16px under that. The board carried four
// rows at a fixed 223/225px; there are three now and the covers are 16:9, so the
// plates take their height from that ratio instead. Slugs match the desktop
// Insights section, i.e. the posts in src/data/blogPosts.jsx.
// Newest first, matching the desktop section: the lead piece is the most recent
// post and the rows count back from there.
const ARTICLES = [
  {
    title: "The Three Things That Have to Change — In This Exact Order",
    date: "Published June 23, 2026.",
    slug: "three-things-in-exact-order",
    photo: artOne,
  },
  {
    title:
      "Why the GCC Leadership Development Market Is Missing the Most Important Conversation",
    date: "Published May 6, 2026.",
    slug: "gcc-missing-conversation",
    photo: artTwo,
  },
  {
    title: "This Is Not a Wellness Program. Here Is How to Tell the Difference.",
    date: "Published April 14, 2026.",
    slug: "not-a-wellness-program",
    photo: artThree,
  },
];

const FEATURED_SLUG = "what-unveil-cannot-yet-prove";

/**
 * Insights & Resources — Figma node 1878:4998 (mobile frame, 372px column
 * inside 16px margins, 60px of section padding).
 *
 * Section head (28px gold title, then the "Browse Insights" pill) 42px above
 * the lead article: a 223px image plate, the 24px gold headline with its date,
 * and the excerpt — three bold paragraphs separated by blank lines, closing on
 * the underlined "Read the full perspective". Four rule-separated article rows
 * follow, 24px apart.
 */
export default function MobileInsights() {
  return (
    <section className="bg-white py-[60px]">
      <MobileContainer className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[42px]">
          {/* Section head — node 1878:4945 */}
          <div className="flex flex-col items-start gap-[16px]">
            <h2 className="text-[28px] leading-normal font-bold text-gold">
              Insights &amp; Resources
            </h2>
            <MobilePill as="a" href="/insights" variant="goldOutline">
              Browse Insights
            </MobilePill>
          </div>

          {/* Lead article — node 1878:4955 */}
          <div className="flex flex-col gap-[26px]">
            <Link to={`/insights/${FEATURED_SLUG}`}>
              <img
                src={leadPhoto}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </Link>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[24px] leading-normal font-bold text-gold">
                  <Link to={`/insights/${FEATURED_SLUG}`}>
                    Why the Most Credible Thing I Can Say About UNVEIL Is What
                    It Cannot Yet Prove
                  </Link>
                </h3>
                <p className="text-[16px] leading-normal text-black/60">
                  Published July 9, 2026
                </p>
              </div>
              {/* Node 1878:4961 — the blank lines between paragraphs are real
                  empty line boxes in Figma, so the rhythm is one full line. */}
              <div className="space-y-[1em] text-[16px] leading-normal font-bold text-black/60">
                <p>
                  I want to tell you something that most program founders do not
                  say in their marketing materials. UNVEIL cannot yet prove
                  everything it claims. I know what that sounds like. It sounds
                  like a qualification. A hedge. A legal disclaimer tucked into
                  the fine print of a sales pitch. It is not. It is, I believe,
                  the most important thing I can say about UNVEIL’s credibility.
                </p>
                <p>
                  The leadership development market — particularly the portion
                  of it directed at women — is full of claims that cannot be
                  substantiated. Testimonials presented as evidence.
                  Transformation stories offered as proof. A program that tells
                  you it can prove everything is telling you it does not
                  understand the difference between confidence and evidence.
                </p>
                <p>
                  The most credible position a new program can take is not to
                  claim more than the evidence supports...
                </p>
                <p className="font-semibold">
                  <Link to={`/insights/${FEATURED_SLUG}`} className="underline">
                    “Read the full perspective”
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article rows — nodes 1878:4962 … 1878:4989 */}
        {ARTICLES.map((article) => (
          <article
            key={article.title}
            className="flex flex-col gap-[16px] border-t border-black/20 pt-[23px]"
          >
            <div className="flex flex-col gap-[7px]">
              <h3 className="text-[22px] leading-normal font-bold text-gold">
                <Link to={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-[16px] leading-normal text-black/60">
                {article.date}
              </p>
            </div>
            <Link to={`/insights/${article.slug}`}>
              <img
                src={article.photo}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </Link>
          </article>
        ))}
      </MobileContainer>
    </section>
  );
}
