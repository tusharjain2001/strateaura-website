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

  // The 3 SVGs stretch (preserveAspectRatio="none"), so each needs a
  // positioned wrapper box to fill — an absolutely-inset <img> alone keeps
  // its intrinsic size and the parts pile up.
  return (
    <div className={`relative h-[80px] w-[120px] overflow-hidden ${className}`}>
      <span className="absolute inset-[0_28.74%_38.85%_28.37%]">
        <img src={footA} alt="StrateAura" className="size-full" />
      </span>
      <span className="absolute inset-[70.87%_0_11.27%_0]">
        <img src={footB} alt="" className="size-full" />
      </span>
      <span className="absolute inset-[94.52%_0.23%_0_0]">
        <img src={footC} alt="" className="size-full" />
      </span>
    </div>
  );
}
