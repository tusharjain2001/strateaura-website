import navLogo from "../../assets/logo.svg";
import footA from "../../assets/foot-logo-a.svg";
import footB from "../../assets/foot-logo-b.svg";
import footC from "../../assets/foot-logo-c.svg";

export default function Logo({ variant = "nav", className = "" }) {
  // Navbar uses the single provided lockup; the footer keeps its 3-part export.
  if (variant === "nav") {
    return (
      <img
        src={navLogo}
        alt="StrateAura"
        className={`h-[80px] w-[120px] ${className}`}
      />
    );
  }

  return (
    <div className={`relative h-[80px] w-[120px] overflow-hidden ${className}`}>
      <img src={footA} alt="StrateAura" className="absolute inset-[0_28.74%_38.85%_28.37%]" />
      <img src={footB} alt="" className="absolute inset-[70.87%_0_11.27%_0]" />
      <img src={footC} alt="" className="absolute inset-[94.52%_0.23%_0_0]" />
    </div>
  );
}
