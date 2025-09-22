// src/components/Footer.jsx
import React from "react";

export function Footer() {
  return (
    <footer className="bg-white  w-[27rem] md:w-[48rem] lg:w-full h-auto">
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/src/assets/image/Teamlogo.png"
              alt="TeamILy Logo"
              className="w-40 sm:w-48 object-contain"
            />
            {/* Contact info can go here if needed */}
          </div>

          {/* Company Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-black uppercase">
              Company
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-black uppercase">
              Contact
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="hover:underline">
                  E-Mail
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Number
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Address
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Website
                </a>
              </li>
            </ul>
          </div>

          {/* Services / Help */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-black uppercase">
              Services
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="hover:underline">
                  iOS App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Android App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Website Development
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Optional: Copyright / Bottom text */}
        {/* <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TeamILy. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}
