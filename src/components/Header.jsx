"use client";
import { useState, useEffect } from "react";
import logo from "../../public/Logo/CompanyLogo1.png";

const navItems = ["Home", "About", "Services", "Contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="h-24 flex items-center justify-between mt-2">
          {/* Logo */}
          <div className="w-21 sm:w-25">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full cursor-pointer"
            />
          </div>

          {/* Desktop Nav - only this gets blur on scroll */}
          <nav
            className={`hidden sm:flex gap-10 text-[1rem] 2xl:text-[1.2vw] max-w-4xl px-10 rounded-3xl py-2 transition-all duration-300
              ${
                scrolled
                  ? "backdrop-blur-3xl bg-white shadow-2xl  "
                  : "bg-gradient-to-r from-[#151F5F] via-[#274990] to-[#3CAAE7] backdrop-blur-3xl  "
              }`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-semibold hover:text-black mx-3
              ${scrolled ? "text-black hover:text-blue-400" : "text-white"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block">
            <button className="bg-blue-600 text-white text-[1rem] 2xl:text-[1.2vw] px-6 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap">
              Get Contact
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden text-white focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden shadow-md w-full h-screen backdrop-blur-2xl bg-white/20 absolute top-24 left-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col items-center py-4 gap-4">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="w-full text-center hover:backdrop-blur-2xl hover:bg-white/20 rounded-2xl"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-600 font-semibold text-2xl hover:text-blue-800 block my-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                </div>
              ))}
              <li>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 cursor-pointer">
                  Get Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
