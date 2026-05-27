import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9FF]/90 backdrop-blur-md shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-5">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F25051e3b1b434aed9b472f7f2ac405f0%2F9b536fb582b44cefae0a59f3f49128e4?format=webp&width=800&height=1200"
            alt="SKY Technology"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-brand-orange border-b-2 border-brand-orange pb-1"
                  : "text-brand-brown hover:text-brand-orange"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://scanbiz.in"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 rounded-lg bg-brand-orange text-white text-sm font-semibold tracking-wide flex items-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-md"
          >
            ScanBiz
          </a>
          <Link
            to="/contact"
            className="h-12 px-6 rounded-lg bg-brand-teal-btn text-white text-sm font-semibold tracking-wide flex items-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-brand-brown"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F9F9FF] border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold py-2 transition-colors duration-200 ${
                isActive(link.href) ? "text-brand-orange" : "text-brand-brown"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://scanbiz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-lg bg-brand-orange text-white text-sm font-semibold flex items-center justify-center transition-all duration-200 hover:opacity-90"
            >
              ScanBiz
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="h-12 px-6 rounded-lg bg-brand-teal-btn text-white text-sm font-semibold flex items-center justify-center transition-all duration-200 hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
