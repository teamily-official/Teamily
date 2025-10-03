// src/components/Header.jsx
import { useState } from "react";
import logo from "../../public/Logo/CompanyLogo.png";
const navItems = ["Home", "About", "Services", "Contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="w-full 2xl:h-[7vw]  bg-white shadow-md fixed top-0 left-0 z-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="h-24 2xl:top-[3vw] flex items-center justify-between mt-2">
          {/* Logo */}
          <div className="w-27">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full cursor-pointer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-10 text-[1rem] 2xl:text-[1.2vw]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Get Contact Button (desktop only) */}
          <div className="hidden sm:block">
            <button className="bg-blue-600 text-white text-[1rem] 2xl:text-[1.2vw] px-6 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap">
              Get Contact
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden text-white focus:outline-none cursor-pointer "
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
        <div className="sm:hidden bg-white shadow-md w-full absolute top-24 left-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col items-center py-4 gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800">
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
