import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { ChevronDown, SearchIcon } from "../ui/Icons";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "VEIL™", to: "/veil" },
  { label: "Our Programs", to: "/programs", dropdown: true },
  { label: "Insights & Resources", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gold">
      <nav className="mx-auto flex h-[120px] w-[1440px] items-center justify-between px-[72px]">
        <Link to="/" aria-label="StrateAura home">
          <Logo variant="nav" />
        </Link>

        <div className="flex items-center gap-[60px]">
          <ul className="flex items-center gap-[60px] text-[17px] font-bold text-white">
            {LINKS.map((link) => {
              const className =
                "flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80";
              return (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to} className={className}>
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-3" />}
                    </Link>
                  ) : (
                    <a href={link.href} className={className}>
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-3" />}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-7">
            <button aria-label="Search" className="text-white transition-opacity hover:opacity-80">
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
      </nav>
    </header>
  );
}
