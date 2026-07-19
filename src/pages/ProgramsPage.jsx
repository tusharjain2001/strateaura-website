import SiteHeader from "../components/layout/SiteHeader";
import ProgramsHero from "../components/programs/ProgramsHero";
import VeilFrameworkSection from "../components/programs/VeilFrameworkSection";
import ProgramsPreviewSection from "../components/programs/ProgramsPreviewSection";
import ProgramDetailSection from "../components/programs/ProgramDetailSection";
import SiteFooter from "../components/layout/SiteFooter";

import wellnessPhoto from "../assets/programs/wellness-photo.jpg";
import higheredPhoto from "../assets/programs/highered-photo.jpg";
import integratedMarketingPhoto from "../assets/programs/integrated-marketing-photo.jpg";
import digitalMarketingPhoto from "../assets/programs/digital-marketing-photo.jpg";
import digitalTransformationPhoto from "../assets/programs/digital-transformation-photo.jpg";
import wellnessBox from "../assets/programs/wellnesscentricyellowbox.svg";
import wellnessMaskedPhoto from "../assets/programs/wellnesscentricmaskedimagerightside.png";

const PROGRAM_DETAILS = [
  {
    id: "wellness-centric-leadership",
    theme: "gold",
    imageSide: "right",
    photo: wellnessPhoto,
    photoAlt: "StrateAura team at a Wellness-Centric Leadership workshop",
    photoPosition: "center 20%",
    maskedPhoto: wellnessMaskedPhoto,
    heading: [
      "Wellness-Centric Leadership:",
      "The Integrative Approach to",
      "Sustainable Performance",
    ],
    eyebrow: "Because burned-out leaders can't build lasting success.",
    paragraph:
      "This workshop blends leadership insight with wellness education to help leaders build resilience from the inside out. Grounded in integrative principles, you'll learn how to optimize energy, manage stress, and lead from a place of strength and sustainability.",
    bullets: [
      "Balance high performance with personal well-being",
      "Understand the science of stress, energy, and emotional clarity",
      "Build leadership presence that is calm, credible, and connected",
      "Create rituals that support you long after the workshop ends",
    ],
    boxImage: wellnessBox,
    suitedFor:
      "Entrepreneurs, managers, and executives who want to lead powerfully - without compromising their health or humanity.",
    ctaLabel: "Reserve Your Spot",
  },
  {
    id: "strategic-marketing-higher-education",
    theme: "blue",
    imageSide: "left",
    photo: higheredPhoto,
    photoAlt: "Dr. Suhair Hamouri speaking at a higher education marketing conference",
    photoPosition: "center 15%",
    heading:
      "Strategic Marketing in Higher Education: Integration, Innovation, and AI-Powered Recruitment",
    eyebrow: "Higher education deserves smarter, student-aware marketing.",
    paragraph:
      "This course equips university marketing teams with the tools to design integrated strategies that attract, engage, and convert students. From AI-powered recruitment to unified branding, it's a smart, strategic approach to education marketing in a fast-changing world.",
    bullets: [
      "Unify your marketing, admissions, and outreach efforts",
      "Use AI and analytics to personalize recruitment and lead management",
      "Build campaigns that resonate with today's digital-native students",
      "Create consistent, credible brand presence across all touchpoints",
    ],
    suitedFor:
      "This program is designed for higher education marketing teams, admission departments, and academic leadership seeking to lead in the completely dynamic world of marketing for higher education.",
    ctaLabel: "Bring This to your Campus",
  },
  {
    id: "integrated-marketing-strategy",
    theme: "gold",
    imageSide: "right",
    photo: integratedMarketingPhoto,
    photoAlt: "Dr. Suhair Hamouri presenting a certificate at the Integrated Marketing Strategy masterclass",
    photoPosition: "center 25%",
    heading: "Integrated Marketing Strategy Masterclass: From Chaos to Clarity",
    eyebrow: "Turn scattered tactics into one powerful, cohesive strategy.",
    paragraph:
      "This hands-on masterclass guides marketers and business leaders through the ALA-Nexus Framework — a step-by-step method for transforming chaotic marketing efforts into integrated, high-ROI strategies. Learn how to align objectives, optimize resources, and build strategic clarity across your brand.",
    bullets: [
      "Apply the ALA-Nexus Framework to unify your marketing",
      "Design strategies that move the business forward, not just make noise",
      "Curate and sequence tactics to achieve strategic flow",
      "Interpret data into strategic decisions that drive results",
    ],
    suitedFor:
      "You're a brand owner, marketing leader, and consultant ready to stop guessing and start leading with strategy.",
    ctaLabel: "Enroll in this Masterclass",
  },
  {
    id: "digital-marketing-purpose",
    theme: "blue",
    imageSide: "left",
    photo: digitalMarketingPhoto,
    photoAlt: "Dr. Suhair Hamouri presenting on digital marketing strategy",
    photoPosition: "center 20%",
    heading: "Digital Marketing with Purpose: Navigating AI, Data, and Strategy for Impact",
    eyebrow: "Don't just go digital — go intentional.",
    paragraph:
      "This course bridges the gap between marketing technology and strategic thinking. You'll learn how to appreciate AI, analytics, and digital platforms with clarity, purpose, and ethical precision to create marketing that moves people, and results.",
    bullets: [
      "Use AI and data-driven insights to refine targeting and messaging",
      "Map the customer journey with a strategy-first mindset",
      "Build digital campaigns that reflect your values and purpose",
      "Measure what matters - not just what's easy to track",
    ],
    suitedFor:
      "Marketers, digital teams, and business owners who want smarter, sharper, and more human-centered digital strategies.",
    ctaLabel: "Join The Next Cohort",
  },
  {
    id: "digital-transformation",
    theme: "gold",
    imageSide: "right",
    photo: digitalTransformationPhoto,
    photoAlt: "Dr. Suhair Hamouri with colleagues at a marketing conference",
    photoPosition: "center 15%",
    heading:
      "Marketing in the Age of Digital Transformation: Agility, Innovation, and Customer-Centricity",
    eyebrow: "The market is evolving – your strategy should too.",
    paragraph:
      "Designed for forward-thinking leaders, this course helps you apply agility, innovation, and customer-centric thinking to your marketing strategy. Learn how to adapt faster, think creatively, and lead with insight in an era defined by change.",
    bullets: [
      "Understand the principles of agile marketing and design thinking",
      "Innovate around real customer needs — not assumptions",
      "Lead digital transformation with clarity and intention",
      "Use emerging tech as a tool for strategy, not distraction",
    ],
    suitedFor:
      "Executives, innovation teams, and marketing heads navigating transformation in competitive environments.",
    ctaLabel: "Book Your Seat",
  },
];

// Responsive page (no fixed canvas): Figma's 1440px frame is the desktop
// reference and the layout reflows below it. Above 1440px content stays at
// its natural Figma size (each section centres a max-w-[1440px] container
// while its background bleeds full-width) — never zoom-scaled.
export default function ProgramsPage() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <ProgramsHero />
        <VeilFrameworkSection />
        <ProgramsPreviewSection />
        {PROGRAM_DETAILS.map((program) => (
          <ProgramDetailSection key={program.id} {...program} />
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
