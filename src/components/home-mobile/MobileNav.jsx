import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "../ui/Icons";

// Order follows the Figma dropdown (node 1296:4836). Contact is not drawn there
// but is a real route, so it stays on the end rather than stranding the page.
const LINKS = [
  { label: "Home", to: "/" },
  { label: "VEIL™", to: "/veil" },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs", dropdown: true },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/**
 * Mobile Home navbar — Figma node 1434:407/408: a 65px gold bar with the
 * 59x40 logo at x=26 and a 30px hamburger at the right edge.
 *
 * The expanded panel is Figma node 1296:4836: a white sheet of 44px rows
 * (16px/10px padding around a 16px bold navy-2 label), with the current page
 * filled #fff4d6.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // "/" would prefix-match every route, so it is compared exactly.
  const isCurrent = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 w-full bg-gold">
      <nav className="mx-auto flex h-[65px] w-full max-w-[430px] items-center justify-between px-[26px]">
        <Link to="/" aria-label="StrateAura home" className="shrink-0">
          <img src={logo} alt="StrateAura" className="h-[40px] w-[59px]" />
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? (
            <CloseIcon className="size-[30px]" />
          ) : (
            <MenuIcon className="size-[30px]" />
          )}
        </button>
      </nav>

      {open && (
        <div className="bg-white">
          <ul className="mx-auto flex w-full max-w-[430px] flex-col px-[20px] py-[15px] text-[16px] leading-[1.5] font-bold text-navy-2">
            {LINKS.map((link) => {
              const current = isCurrent(link.to);
              return (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-[10px] px-[16px] py-[10px] transition-colors ${
                      current ? "bg-[#fff4d6]" : "hover:bg-[#fff4d6]/50"
                    }`}
                  >
                    <span className="min-w-0 flex-1">{link.label}</span>
                    {link.dropdown && (
                      // 12x7 to match the icon's viewBox; Figma's 12x6 box is
                      // the path bounds before the 1.6px stroke.
                      <ChevronDown className="h-[7px] w-[12px] shrink-0" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="mt-[10px] flex items-center gap-6 border-t border-navy-2/15 px-[16px] pt-[15px]">
              <button
                aria-label="Search"
                className="transition-opacity hover:opacity-70"
              >
                <SearchIcon className="size-[22px]" />
              </button>
              <a
                href="#login"
                className="rounded-[37px] border border-navy-2 px-4 py-1 transition-colors hover:bg-navy-2 hover:text-white"
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
