/**
 * The page's live <main> element.
 *
 * Pages that have a fixed desktop canvas (Home, About, Frameworks, Programs,
 * Blog) render two complete trees and hide one with `lg:hidden` /
 * `hidden lg:block`, so the document holds two <main> elements and only one is
 * displayed. `offsetParent` is null for anything inside a `display: none`
 * subtree, which picks out the one actually on screen. `position: fixed`
 * elements also report a null offsetParent, but no page here puts <main> in a
 * fixed container.
 */
export default function visibleMain() {
  const mains = document.querySelectorAll("main");
  for (const main of mains) {
    if (main.offsetParent !== null) return main;
  }
  return mains[0] ?? null;
}

/**
 * Moves keyboard focus to the page's main content.
 *
 * <main> is not focusable on its own, so it takes tabindex="-1" (focusable by
 * script, never by Tab). `preventScroll` leaves scrolling to the caller, which
 * has already decided where the page should sit.
 */
export function focusMain({ preventScroll = true } = {}) {
  const main = visibleMain();
  if (!main) return null;
  main.setAttribute("tabindex", "-1");
  main.focus({ preventScroll });
  return main;
}
