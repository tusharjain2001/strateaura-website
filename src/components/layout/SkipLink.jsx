import { focusMain } from "../../lib/visibleMain";

/**
 * "Skip to main content" — the first focusable element on the page.
 *
 * The header, full nav and footer repeat on every route, so without this a
 * keyboard or screen-reader user tabs through the whole navigation again on
 * each page before reaching the content (WCAG 2.4.1 Bypass Blocks).
 *
 * Hidden until focused: `sr-only` keeps it out of the visual layout, and
 * `focus:not-sr-only` pulls it back into view as a normal pill the moment it
 * is tabbed to.
 *
 * The target is resolved in JS rather than with href="#main". Pages with a
 * fixed desktop canvas render two <main> elements and hide one by breakpoint,
 * so a shared id would be duplicated in the document and the browser would
 * jump to whichever came first — which on Home is the hidden mobile tree.
 */
export default function SkipLink() {
  function handleClick(event) {
    event.preventDefault();
    const main = focusMain({ preventScroll: false });
    main?.scrollIntoView({ block: "start" });
  }

  return (
    <a
      href="#main"
      onClick={handleClick}
      className="sr-only rounded-[4px] bg-navy px-4 py-2 text-[14px] font-bold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:outline-2 focus:outline-offset-2 focus:outline-gold"
    >
      Skip to main content
    </a>
  );
}
