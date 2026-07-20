/**
 * Shared inner container for the mobile Home page.
 *
 * The Figma mobile frame (node 1434:405) is 402px wide with 16px side margins,
 * so content sits in a 370px column. Here that column is fluid: it fills the
 * viewport at phone widths and stops growing at 430px so the layout stays
 * phone-shaped on the tablet range (up to the lg breakpoint, where the desktop
 * canvas takes over). Section backgrounds bleed full-width outside this.
 */
export default function MobileContainer({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[430px] px-4 ${className}`}>
      {children}
    </div>
  );
}
