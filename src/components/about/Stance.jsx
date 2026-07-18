import badge from "../../assets/about/underline.svg";
import stance1 from "../../assets/about/stance-1.svg";
import stance2 from "../../assets/about/stance-2.svg";
import stance3 from "../../assets/about/stance-3.svg";

const COLUMNS = [
  {
    art: stance1,
    left: "left-[102px]",
    textLeft: "left-[201px]",
    top: "top-[364px]",
    body: (
      <>
        At StrateAura™, we merge{" "}
        <span className="font-bold">insight, design, and presence</span> to help
        individuals and institutions{" "}
        <span className="font-bold">
          lead in a way that's sustainable, and deeply theirs.
        </span>
      </>
    ),
  },
  {
    art: stance2,
    left: "left-[513px]",
    textLeft: "left-[610px]",
    top: "top-[364px]",
    body: (
      <>
        We don't chase trends.{" "}
        <span className="font-bold">We craft frameworks that help you think</span>{" "}
        with discernment, act with direction, and lead with a{" "}
        <span className="font-bold">presence that leaves a mark</span>.
      </>
    ),
  },
  {
    art: stance3,
    left: "left-[920px]",
    textLeft: "left-[1018px]",
    top: "top-[377px]",
    body: (
      <>
        We don't offer generic playbooks.{" "}
        <span className="font-bold">
          We guide people to see their own pattern, trust their intuition, and
          move from the inside out.
        </span>
      </>
    ),
  },
];

export default function Stance() {
  return (
    <section className="relative h-[740px] w-[1440px] overflow-hidden">
      {/* faint blue wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4c7dbe] via-white to-[#4c7dbe] opacity-10" />

      {/* badge + heading */}
      <div className="absolute top-[120px] left-1/2 flex h-[40px] w-[202px] -translate-x-1/2 items-center justify-center">
        <img src={badge} alt="" className="absolute inset-0 size-full" />
        <span className="relative text-[18px] font-light text-cream">Our Stance</span>
      </div>
      <h2 className="absolute top-[175px] left-1/2 w-[538px] -translate-x-1/2 text-center text-[50px] font-bold text-navy">
        What We Stand For
      </h2>

      {/* 3 burst columns */}
      {COLUMNS.map((col, i) => (
        <img
          key={i}
          src={col.art}
          alt=""
          className={`pointer-events-none absolute top-[313px] ${col.left} h-[247px] w-[414px]`}
        />
      ))}
      {COLUMNS.map((col, i) => (
        <p
          key={`t${i}`}
          className={`absolute ${col.top} ${col.textLeft} w-[219px] text-center text-[19px] leading-normal font-light text-white`}
        >
          {col.body}
        </p>
      ))}
    </section>
  );
}
