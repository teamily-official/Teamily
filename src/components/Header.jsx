"use client";
import { useState, useEffect } from "react";
import logo from "../../public/Logo/TeamilyLogo.png";

const navItems = ["Home", "About", "Services", "Project"];

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
    <header className="w-full fixed top-0 left-0 z-50 ">
      <div
        className={`px-2 py-2 sm:px-4 lg:px-6 xl:px-8 bg- ${
          scrolled ? "backdrop-blur-3xl backface-visible" : ""
        } `}
      >
        <div className="h-fit flex items-center justify-between gap-2  ">
          {/* Logo */}
          <div className="w-16 md:w-18 ">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full cursor-pointer"
            />
          </div>

          {/* Desktop Nav - only this gets blur on scroll */}
          <nav
            className="hidden md:flex gap-2 xl:gap-5 text-[1.2rem] 2xl:text-[1.1vw]
             px-6 py-2 
            xl:px-10  rounded-3xl transition-all duration-300 
            bg-gradient-to-r from-[#151F5F] via-[#274990] to-[#3CAAE7] 
            backdrop-blur-3xl"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-white mx-1 xl:mx-3"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block">
            <button
              className="font-mono text-[1rem] 2xl:text-[1.1vw] px-4 md:px-6 py-2 
    xl:px-10 rounded-md text-white bg-gradient-to-r from-[#151F5F] via-[#274990] to-[#3CAAE7] whitespace-nowrap"
              onClick={() =>
                window.open(
                  "https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0",
                  "_blank"
                )
              }
            >
              Get Contact
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden text-[#151F5F] focus:outline-none cursor-pointer"
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
                <button
                  className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0",
                      "_blank"
                    )
                  }
                >
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
