import edgePortrait from "../../assets/edge-portrait-cutout.png";
import quoteMark from "../../assets/quote-mark.svg";

export default function OurEdge() {
  return (
    <section className="relative h-[735px] w-[1440px] overflow-hidden bg-navy">
      {/* Right gradient panel */}
      <div className="absolute top-[114px] left-[541px] h-[564px] w-[796px] rounded-[4px] bg-gradient-to-b from-navy to-blue" />

      {/* Founder cutout — natural silhouette, no frame; the section's
          overflow-hidden trims the bottom at the navy/white boundary. */}
      <img
        src={edgePortrait}
        alt="StrateAura faculty"
        className="pointer-events-none absolute top-[107px] left-[149px] h-[708px] w-[429px]"
      />

      <img
        src={quoteMark}
        alt=""
        className="absolute top-[104px] left-[524px] h-[64px] w-[70px]"
      />

      <h2 className="absolute top-[202px] left-[623px] text-[50px] font-bold text-white">
        Our Edge
      </h2>
      <p className="absolute top-[286px] left-[623px] w-[637px] text-[24px] leading-[32px] text-white">
        StrateAura™ brings together academic rigor, industry expertise, and
        regional relevance. With a deep understanding of both global trends and
        local business dynamics, we design programs that resonate with the cultural
        and professional aspirations of our clients in the UAE and beyond.
        <br />
        <br />
        Each course is developed and led by experienced faculty and practitioners
        with advanced degrees and years of corporate and academic experience.
      </p>
    </section>
  );
}
