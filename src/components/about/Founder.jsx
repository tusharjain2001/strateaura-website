import founder from "../../assets/about/founder.png";
import founderAura from "../../assets/about/founder-aura.svg";
import founderArc from "../../assets/about/founder-arc2.svg";

/**
 * "A Founder Who Leads From Within" — node 1638:1576, board y 3065..3659, so
 * the section is 594 tall (it was 1079). All four paragraphs now sit in the
 * single 749px column beside the portrait rather than the last one running
 * full-bleed underneath it.
 *
 * Figma sets the bio as one text node, so the blank lines between paragraphs
 * are literal empty lines on the same 19px pitch — hence the margin-free <p>s
 * and explicit spacers rather than paragraph spacing.
 */
export default function Founder() {
  return (
    <section className="relative h-[594px] w-[1440px] overflow-hidden bg-gradient-to-b from-navy to-blue">
      {/* 1638:1577 — decorative arc, flipped vertically */}
      <img
        src={founderArc}
        alt=""
        className="pointer-events-none absolute top-[148px] left-[395px] h-[380px] w-[1168px] max-w-none -scale-y-100"
      />
      {/* 1755:1056 — golden backdrop behind the portrait */}
      <img
        src={founderAura}
        alt=""
        className="pointer-events-none absolute top-[39.63px] left-[-120px] h-[514.249px] w-[658.731px] max-w-none"
      />
      {/* 1755:1055 — portrait, cropped to 142.43% height inside its box */}
      <div className="absolute top-[-128px] left-[-67.85px] h-[682.001px] w-[728.537px] overflow-hidden">
        <img
          src={founder}
          alt="Dr. Suhair Hamouri"
          className="absolute top-[-0.04%] left-0 h-[142.43%] w-full max-w-none object-cover"
        />
      </div>

      <h2 className="absolute top-[99px] left-[604px] w-[788px] text-[30px] leading-[1.2] font-bold text-white">
        A Founder Who Leads From Within
      </h2>

      <div className="absolute top-[171px] left-[604px] w-[749px] text-[15px] leading-[19px] font-light text-white [&_p]:m-0">
        <p>
          <span className="font-bold">Dr. Suhair Hamouri</span> is the founder of{" "}
          <span className="font-bold">VEIL</span> — a flagship strategic health
          framework for women in leadership and high-demand professional roles,
          built in the GCC, for the GCC.
        </p>
        <p>&nbsp;</p>
        <p>
          Her authority comes from three decades at the intersection of health,{" "}
          <span className="font-bold">pharma, academia, and leadership</span> —
          credentialed across Jordan, Australia, the United States, Singapore,
          Ireland, and the GCC. She began her career at MSD and Eli Lilly, two of
          the world’s leading pharmaceutical companies, developing her
          understanding of the female biological system and what professional
          pressure does to it.
        </p>
        <p>&nbsp;</p>
        <p>
          She holds a <span className="font-bold">PhD in Business Management</span>{" "}
          from the University of Wollongong, Australia, an{" "}
          <span className="font-bold">MBA</span> from the American University of
          Sharjah (Most Outstanding Graduate), and a{" "}
          <span className="font-bold">BSc. in Pharmacy</span> from Jordan
          University of Science and Technology. She is a certified{" "}
          <span className="font-bold">Integrative Health Coach IIN, NY.</span>
        </p>
        <p>&nbsp;</p>
        <p>
          Dr. Hamouri has taught at Canadian University Dubai, the American
          University of Sharjah, Murdoch University, and King’s Business School.
          She is currently a Non-Resident Fellow at the Mohammed Bin Rashid
          School of Government, Dubai, and a Board Member of AcceInv-Kolortrak,
          Canada. She is a Certified Online Educator{" "}
          <span className="font-bold">(COE, HBMSU UAE),</span> a Certified Digital
          Marketing Expert{" "}
          <span className="font-bold">(CDME, DMI + AMA, Dublin)</span>, and a
          keynote speaker. She is the author of{" "}
          <span className="font-bold">Clicks, Leads, and Strategy Feeds (2024),</span>{" "}
          a member of the American Marketing Association, and a graduate of the
          Dent Global Key Person of Influence Program, Dublin.
        </p>
      </div>
    </section>
  );
}
