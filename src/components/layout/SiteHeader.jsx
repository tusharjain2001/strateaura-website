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
 * Responsive gold navbar for the fluid (non-canvas) pages. Same links and
 * styling as the legacy Navbar, plus a collapsible menu below xl.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80";

  const renderLink = (link) =>
    link.to ? (
      <Link to={link.to} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
        {link.dropdown && <ChevronDown className="w-3" />}
      </Link>
    ) : (
      <a href={link.href} className={linkClass} onClick={() => setOpen(false)}>
        {link.label}
        {link.dropdown && <ChevronDown className="w-3" />}
      </a>
    );

  return (
    <header className="sticky top-0 z-50 w-full bg-gold">
      <nav className="mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[120px] xl:px-[72px]">
        <Link to="/" aria-label="StrateAura home" className="shrink-0">
          <img
            src={logo}
            alt="StrateAura"
            className="h-[56px] w-[84px] lg:h-[80px] lg:w-[120px]"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 xl:flex 2xl:gap-[60px]">
          <ul className="flex items-center gap-8 text-[17px] font-bold text-white 2xl:gap-[60px]">
            {LINKS.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
          <div className="flex items-center gap-7">
            <button
              aria-label="Search"
              className="text-white transition-opacity hover:opacity-80"
            >
              <SearchIcon className="size-[22px]" />
            </button>
            <a
              href="#login"
              className="flex items-center justify-center rounded-[37px] border border-white px-4 py-1 text-[17px] font-bold text-white transition-colors hover:bg-white hover:text-gold"
            >
              Log In
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white xl:hidden"
        >
          {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/20 bg-gold xl:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4 text-[17px] font-bold text-white sm:px-8">
            {LINKS.map((link) => (
              <li key={link.label} className="py-2">
                {renderLink(link)}
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
