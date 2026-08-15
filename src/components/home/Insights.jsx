import { Link } from "react-router-dom";
import PillButton from "../ui/PillButton";
import featurePhoto from "../../assets/blog/not-a-wellness-program.jpg";
import artOne from "../../assets/blog/gcc-missing-conversation.jpg";
import artTwo from "../../assets/blog/three-things-in-exact-order.jpg";
import artThree from "../../assets/blog/what-unveil-cannot-yet-prove.jpg";

/**
 * Insights & Resources — node 1755:4644.
 *
 * The wash (1755:4645) is a #ffbb00 → #fffefa gradient flipped vertically and
 * dropped to 20%, so it reads as near-white at the top and amber at the foot.
 * It spans 3372..4409 in the board, which is what fixes this section at 1037px;
 * every offset below is board-y minus 3372.
 *
 * Notable changes from the previous board: the lead image is 202 tall (was
 * 248), the article rows pitch every 183.06 (was 173) and the featured excerpt
 * now ends after the shortened third paragraph.
 */
// Three rows now rather than the board's four, so the 183.06 pitch is re-spaced
// to 243.98 — the rules still open at 204.23 and close on LAST_RULE, keeping the
// right column the same height as the featured piece beside it. Each row's
// 148.143-tall box stays centred in its band, i.e. 47.92 below its rule.
const ARTICLES = [
  {
    rule: 204.23,
    top: 252.15,
    textWidth: 372,
    gap: 27,
    title:
      "Why the GCC Leadership Development Market Is Missing the Most Important Conversation",
    date: "Published May 6, 2026.",
    slug: "gcc-missing-conversation",
    photo: artOne,
  },
  {
    rule: 448.21,
    top: 496.13,
    textWidth: 372,
    gap: 27,
    title: "The Three Things That Have to Change — In This Exact Order",
    date: "Published June 23, 2026.",
    slug: "three-things-in-exact-order",
    photo: artTwo,
  },
  {
    rule: 692.19,
    top: 740.11,
    textWidth: 372,
    gap: 27,
    title:
      "Why the Most Credible Thing I Can Say About UNVEIL Is What It Cannot Yet Prove",
    date: "Published July 9, 2026.",
    slug: "what-unveil-cannot-yet-prove",
    photo: artThree,
  },
];

// The closing rule under the last row; the board leaves 100px of wash below it.
const LAST_RULE = 936.17;

// Slug of the featured piece in src/data/blogPosts.jsx; the three list rows
// carry their own `slug`. Every heading here links to /insights/<slug>.
const FEATURED_SLUG = "not-a-wellness-program";

export default function Insights() {
  return (
    <section className="relative h-[1037px] w-[1440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefa] to-[#ffbb00] opacity-20" />

      {/* 1755:4646 — header row, justified across x 91..1341 */}
      <h2 className="absolute top-[105.7px] left-[91px] text-[30px] leading-[1.2] font-bold text-gold">
        Insights &amp; Resources
      </h2>
      <PillButton
        as="a"
        href="/insights"
        variant="goldOutline"
        icon="sparkle"
        size="xs"
        className="absolute top-[107.2px] right-[99px]"
      >
        Browse Insights
      </PillButton>

      {/* 1755:4683 — featured piece: 563x202 lead image, then headline, date and
          the excerpt. Figma renders the photo at 159.79% height, pulled up
          22.75%, inside the 202px window. */}
      <div className="absolute top-[202.11px] left-[91px] w-[563px]">
        {/* The cover exports are 16:9, so they fill this 563x202 window with a
            plain object-cover crop rather than the old asset's tall offset. */}
        <div className="relative h-[202px] w-[563px] overflow-hidden rounded-[4px]">
          <img
            src={featurePhoto}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        {/* 1755:4685 — 24px headline, 16px date 68px below it, body 110px below */}
        <h3 className="mt-[38px] w-[469px] text-[24px] leading-[1.2] font-bold text-gold">
          <Link to={`/insights/${FEATURED_SLUG}`} className="hover:underline">
            This Is Not a Wellness Program. Here Is How to Tell the Difference.
          </Link>
        </h3>
        <p className="mt-[9.4px] text-[16px] leading-[1.2] text-black/60">
          Published April 14, 2026
        </p>
        {/* 1755:4690 — 16px justified on a 19px pitch (Acumin's "normal" here).
            Paragraphs are separated by one blank line, i.e. one 19px line box. */}
        <div className="mt-[22.8px] space-y-[19px] text-justify text-[16px] leading-[19px] text-black/60">
          <p>
            I have heard the same response from HR directors and senior women
            leaders across the GCC, often in the same conversation. The HR
            director says: “We already have a wellness program.” The senior
            woman, in a separate conversation, says: “I have tried everything.
            Nothing actually helps.” Both are telling the truth. And the gap
            between them is exactly where VEIL was built.
          </p>
          <p>
            What most organisations call wellness and what most women in
            leadership actually need are not the same thing. Wellness programs
            address symptoms — a gym subsidy, a mindfulness app, a confidential
            line when something becomes a crisis. They respond to depletion
            after it surfaces. They are, by design, reactive.
          </p>
          <p>
            VEIL is not designed to help her manage better. It is designed to
            change the conditions she is managing...
          </p>
          <p className="text-left">
            <Link
              to={`/insights/${FEATURED_SLUG}`}
              className="font-semibold underline"
            >
              “Read the full perspective”
            </Link>
          </p>
        </div>
      </div>

      {/* 1755:4655-4682 — article list. The rules run x 716..1444, so they bleed
          4px past the canvas and are clipped by the section. Each row is a
          148.143-tall centred flex pair sitting ~18px under its rule. */}
      {ARTICLES.map((article) => (
        <div key={article.title}>
          <div
            className="absolute left-[716px] h-px w-[728px] bg-black/15"
            style={{ top: `${article.rule}px` }}
          />
          <div
            className="absolute left-[716px] flex h-[148.143px] items-center"
            style={{ top: `${article.top}px`, gap: `${article.gap}px` }}
          >
            {/* Title and date flow rather than sitting at fixed offsets: these
                headlines run to three lines where the board's ran to two, and
                a hardcoded date offset would let the title overlap it. */}
            <div
              className="shrink-0"
              style={{ width: `${article.textWidth}px` }}
            >
              <h4 className="text-[22px] leading-[1.2] font-bold text-gold">
                <Link
                  to={`/insights/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h4>
              <p className="mt-[7px] text-[16px] leading-[1.2] text-black/60">
                {article.date}
              </p>
            </div>
            <img
              src={article.photo}
              alt=""
              className="h-[140px] w-[252px] shrink-0 rounded-[4px] object-cover"
            />
          </div>
        </div>
      ))}
      <div
        className="absolute left-[716px] h-px w-[728px] bg-black/15"
        style={{ top: `${LAST_RULE}px` }}
      />
    </section>
  );
}
