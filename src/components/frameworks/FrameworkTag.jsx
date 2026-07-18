import ribbon from "../../assets/frameworks/framework-tag-ribbon.svg";

/**
 * The small pennant-shaped "FRAMEWORK N" label that precedes each framework's
 * heading. Shared across AlaNexusSection, FiveCsSection and
 * VeilFrameworkSection since Figma reuses the same ribbon asset for all three.
 */
export default function FrameworkTag({ children }) {
  return (
    <span className="relative inline-flex h-[30px] items-center lg:h-[37px]">
      <img
        src={ribbon}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <span className="relative px-6 text-[16px] font-light text-white lg:px-7 lg:text-[20px]">
        {children}
      </span>
    </span>
  );
}
