import SiteHeader from "../layout/SiteHeader";
import MobileAboutFooter from "../about-mobile/MobileAboutFooter";
import PmHero from "./PmHero";
import PmFeatured from "./PmFeatured";
import PmPathways from "./PmPathways";
import PmPreview from "./PmPreview";
import PmDetail from "./PmDetail";

import wellnessPhoto from "../../assets/programs/wellness-photo.png";
import higheredPhoto from "../../assets/programs/highered-photo.png";
import integratedPhoto from "../../assets/programs/integrated-marketing-photo.png";
import digitalMarketingPhoto from "../../assets/programs/digital-marketing-photo.png";
import digitalTransformationPhoto from "../../assets/programs/digital-transformation-photo.png";

/**
 * The five detail blocks. The copy matches ProgramsPage's PROGRAM_DETAILS, but
 * it is declared separately because that array carries desktop-only geometry
 * (per-line headings for the 1440px canvas, masked photo variants, image side).
 * Touching it would change the desktop page.
 *
 * `tone` is gold or navy and drives the whole block: heading colour, the
 * section wash behind it, the CTA, and the checklist card.
 */
const DETAILS = [
  {
    id: "wellness",
    tone: "gold",
    heading:
      "Wellness-Centric Leadership: The Integrative Approach to Sustainable Performance",
    eyebrow: "Because burned-out leaders can’t build lasting success.",
    paragraph:
      "This workshop blends leadership insight with wellness education to help leaders build resilience from the inside out. Grounded in integrative principles, you’ll learn how to optimize energy, manage stress, and lead from a place of strength and sustainability.",
    suitedFor:
      "Entrepreneurs, managers, and executives who want to lead powerfully - without compromising their health or humanity.",
    ctaLabel: "Reserve Your Spot",
    photo: wellnessPhoto,
    photoAlt: "StrateAura team at a Wellness-Centric Leadership workshop",
    bullets: [
      "Balance high performance with personal well-being",
      "Understand the science of stress, energy, and emotional clarity",
      "Build leadership presence that is calm, credible, and connected",
      "Create rituals that support you long after the workshop ends",
    ],
  },
  {
    id: "higher-education",
    tone: "navy",
    heading:
      "Strategic Marketing in Higher Education: Integration, Innovation, and AI-Powered Recruitment",
    eyebrow: "Higher education deserves smarter, student-aware marketing.",
    paragraph:
      "This course equips university marketing teams with the tools to design integrated strategies that attract, engage, and convert students. From AI-powered recruitment to unified branding, it’s a smart, strategic approach to education marketing in a fast-changing world.",
    suitedFor:
      "This program is designed for higher education marketing teams, admission departments, and academic leadership seeking to lead in the completely dynamic world of marketing for higher education.",
    ctaLabel: "Bring This to your Campus",
    photo: higheredPhoto,
    photoAlt:
      "Dr. Suhair Hamouri speaking at a higher education marketing conference",
    bullets: [
      "Unify your marketing, admissions, and outreach efforts",
      "Use AI and analytics to personalize recruitment and lead management",
      "Build campaigns that resonate with today’s digital-native students",
      "Create consistent, credible brand presence across all touchpoints",
    ],
  },
  {
    id: "integrated-marketing",
    tone: "gold",
    heading:
      "Integrated Marketing Strategy Masterclass: From Chaos to Clarity",
    eyebrow: "Turn scattered tactics into one powerful, cohesive strategy.",
    paragraph:
      "This hands-on masterclass guides marketers and business leaders through the ALA-Nexus Framework — a step-by-step method for transforming chaotic marketing efforts into integrated, high-ROI strategies. Learn how to align objectives, optimize resources, and build strategic clarity across your brand.",
    suitedFor:
      "You’re a brand owner, marketing leader, and consultant ready to stop guessing and start leading with strategy.",
    ctaLabel: "Enroll in this Masterclass",
    photo: integratedPhoto,
    photoAlt:
      "Dr. Suhair Hamouri presenting a certificate at the Integrated Marketing Strategy masterclass",
    bullets: [
      "Apply the ALA-Nexus Framework to unify your marketing",
      "Design strategies that move the business forward, not just make noise",
      "Curate and sequence tactics to achieve strategic flow",
      "Interpret data into strategic decisions that drive results",
    ],
  },
  {
    id: "digital-marketing",
    tone: "navy",
    heading:
      "Digital Marketing with Purpose: Navigating AI, Data, and Strategy for Impact",
    eyebrow: "Don’t just go digital — go intentional.",
    paragraph:
      "This course bridges the gap between marketing technology and strategic thinking. You’ll learn how to appreciate AI, analytics, and digital platforms with clarity, purpose, and ethical precision to create marketing that moves people, and results.",
    suitedFor:
      "Marketers, digital teams, and business owners who want smarter, sharper, and more human-centered digital strategies.",
    ctaLabel: "Join the next Cohort",
    photo: digitalMarketingPhoto,
    photoAlt: "Dr. Suhair Hamouri presenting on digital marketing strategy",
    bullets: [
      "Use AI and data-driven insights to refine targeting and messaging",
      "Map the customer journey with a strategy-first mindset",
      "Build digital campaigns that reflect your values and purpose",
      "Measure what matters - not just what’s easy to track",
    ],
  },
  {
    id: "digital-transformation",
    tone: "gold",
    heading:
      "Marketing in the Age of Digital Transformation: Agility, Innovation, and Customer-Centricity",
    eyebrow: "The market is evolving – your strategy should too.",
    paragraph:
      "Designed for forward-thinking leaders, this course helps you apply agility, innovation, and customer-centric thinking to your marketing strategy. Learn how to adapt faster, think creatively, and lead with insight in an era defined by change.",
    suitedFor:
      "Executives, innovation teams, and marketing heads navigating transformation in competitive environments.",
    ctaLabel: "Book Your Seat",
    photo: digitalTransformationPhoto,
    photoAlt: "Dr. Suhair Hamouri with colleagues at a marketing conference",
    bullets: [
      "Understand the principles of agile marketing and design thinking",
      "Innovate around real customer needs — not assumptions",
      "Lead digital transformation with clarity and intention",
      "Use emerging tech as a tool for strategy, not distraction",
    ],
  },
];

/**
 * Mobile Our Programs page — Figma node 1295:3960 (402px frame).
 *
 * Its own component tree rather than breakpoints on the desktop sections: the
 * desktop page reflows from a 1440px reference and shares its sections with
 * SiteHeader/SiteFooter, so bending it to this layout would change both.
 * ProgramsPage renders this below lg.
 *
 * The footer is the About page's (Figma draws node 1433:271 identically to
 * 1293:3754, hairlines included) rather than a fourth copy of the same markup.
 */
export default function ProgramsMobile() {
  return (
    <div className="w-full overflow-x-clip bg-white text-black">
      <SiteHeader />
      <main>
        {/* Node 1295:3965 — a cream→white wash that starts under the navbar and
            runs 950px down, backing the hero and the top of the VEIL section.
            The rect is rotated a quarter turn in Figma, so its `to-r` fill
            reads as vertical on the page (same as the About hero's Rectangle
            102). Fading to white means the bottom edge lands invisibly, which
            matters because Inter makes the copy above it taller than Figma's. */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[950px] bg-[linear-gradient(180deg,#fee8a9_0%,#ffffff_100%)] opacity-40"
          />
          <div className="relative">
            <PmHero />
            <PmFeatured />
          </div>
        </div>

        <PmPathways />
        <PmPreview />

        {DETAILS.map((program) => (
          <PmDetail key={program.id} {...program} />
        ))}
      </main>
      <MobileAboutFooter />
    </div>
  );
}
