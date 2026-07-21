import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sample/logo.svg";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "../ui/Icons";

// Links match the Figma navbar (node 1638:616) and the site-wide SiteHeader.
const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", dropdown: true },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

/**
 * Gold navbar for the /sample page. Faithful to the 1920px Figma (85px bar,
 * 1776px content inside 72px gutters, horizontal StrateAura lockup, 17px bold
 * links) and reflows to a hamburger menu below xl.
 */
export default function SampleNavbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80";

  const renderLink = (link) => (
    <Link to={link.to} className={linkClass} onClick={() => setOpen(false)}>
      {link.label}
      {link.dropdown && <ChevronDown className="w-3" />}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-gold">
      <nav className="mx-auto flex h-[64px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-8 lg:h-[85px] lg:px-12 xl:px-[72px]">
        <Link to="/sample" aria-label="StrateAura home" className="shrink-0">
          <img
            src={logo}
            alt="StrateAura"
            className="h-[30px] w-auto lg:h-[41px]"
          />
        </Link>

        {/* Desktop links + actions */}
        <div className="hidden items-center gap-10 xl:flex 2xl:gap-[102px]">
          <ul className="flex items-center gap-8 text-[17px] font-bold text-white 2xl:gap-[60px]">
            {LINKS.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
          <div className="flex items-center gap-[28px]">
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
          <ul className="flex flex-col gap-1 px-6 py-4 text-[17px] font-bold text-white sm:px-8">
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
