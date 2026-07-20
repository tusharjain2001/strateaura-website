import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "../ui/Icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", dropdown: true },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/**
 * Mobile Home navbar — Figma node 1434:407/408: a 65px gold bar with the
 * 59x40 logo at x=26 and a 30px hamburger at the right edge. The expanded
 * panel mirrors SiteHeader's so navigation behaves the same across pages.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80";

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
        <div className="border-t border-white/20 bg-gold">
          <ul className="mx-auto flex w-full max-w-[430px] flex-col gap-1 px-[26px] py-4 text-[17px] font-bold text-white">
            {LINKS.map((link) => (
              <li key={link.label} className="py-2">
                <Link
                  to={link.to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3" />}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-6 border-t border-white/20 pt-4 pb-2">
              <button
                aria-label="Search"
                className="text-white transition-opacity hover:opacity-80"
              >
                <SearchIcon className="size-[22px]" />
              </button>
              <a
                href="#login"
                className="rounded-[37px] border border-white px-4 py-1 transition-colors hover:bg-white hover:text-gold"
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
