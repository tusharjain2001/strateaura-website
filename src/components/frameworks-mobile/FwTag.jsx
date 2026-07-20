import ribbon from "../../assets/frameworks/framework-tag-ribbon.svg";

/**
 * "FRAMEWORK N" pennant at the mobile frame's size — Figma node 1296:4545:
 * a 165x25 ribbon with a 16px light-white label inset 28px from the left.
 *
 * Deliberately separate from ../frameworks/FrameworkTag so the desktop ramp
 * (30px / lg:37px) can never be changed by the mobile page.
 */
export default function FwTag({ children }) {
  return (
    <span className="relative inline-flex h-[25px] w-[165px] shrink-0 items-center">
      <img
        src={ribbon}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <span className="relative pl-[28px] text-[16px] leading-none font-light text-white">
        {children}
      </span>
    </span>
  );
}
