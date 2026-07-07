import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../public/Logo/TeamilyLogo.png";
const navItems = ["Home", "About", "Services", "Project"];
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLink = (item) => {
    const id = item.toLowerCase();
    if (isHomePage) {
      if (item === "Home") return "#";
      return `#${id}`;
    } else {
      if (item === "Home") return "/";
      return `/#${id}`;
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div
        style={{
          background: scrolled ? "rgba(13,27,42,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.35s ease",
        }}
        className="px-4 py-3 sm:px-6 lg:px-10"
      >
        <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto">

          {/* Logo */}
          <div className="w-14 md:w-16 flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Teamily Logo" className="w-full h-auto cursor-pointer" />
            </a>
          </div>

          {/* Desktop Nav pill */}
          <nav
            className="hidden md:flex items-center gap-1 xl:gap-2
              px-5 py-2 xl:px-8 rounded-full
              border border-white/15
              bg-gradient-to-r from-[#0D1B2A]/90 via-[#4F6EF7]/80 to-[#38BDF8]/75
              backdrop-blur-xl shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={getNavLink(item)}
                className="text-white/80 hover:text-white text-[0.95rem] xl:text-base
                  font-medium mx-2 xl:mx-3 transition-colors duration-200
                  hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <button
              className="btn-primary text-sm xl:text-base px-5 xl:px-7"
              onClick={() =>
                window.open(
                  "https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0",
                  "_blank"
                )
              }
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="sm:hidden p-2 rounded-lg text-white transition-colors"
            style={{ background: "rgba(79,110,247,0.15)" }}
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="sm:hidden w-full min-h-screen absolute top-[64px] left-0"
          style={{
            background: "rgba(13,27,42,0.97)",
            backdropFilter: "blur(24px)",
          }}
        >
          <ul className="flex flex-col items-center py-10 gap-2 px-6">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href={getNavLink(item)}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-white/80 hover:text-white text-xl font-medium
                    py-4 rounded-2xl transition-all duration-200"
                  style={{ background: "rgba(79,110,247,0.0)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(79,110,247,0.12)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(79,110,247,0.0)")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-6 w-full flex justify-center">
              <button
                className="btn-primary w-full max-w-xs"
                onClick={() =>
                  window.open(
                    "https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0",
                    "_blank"
                  )
                }
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
