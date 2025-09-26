// src/components/Footer.jsx
import React from "react";
import logo from "../../public/image/Teamlogo.png";

export function Footer() {
  return (
    <footer className="bg-white w-full md:w-[48rem] lg:w-full py-12 ">
      <div className="px-4 sm:px-6 lg:px-8 mb-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src={logo}
              alt="TeamILy Logo"
              className="w-40 sm:w-48 object-contain"
            />
            {/* Contact info can go here if needed */}
          </div>

          <div>
            <h2 className="mb-4 text-[1rem] 2xl:text-[1.2vw] font-semibold text-black uppercase">
              Company
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="mb-4 text-[1rem] 2xl:text-[1.2vw] font-semibold text-black uppercase">
              Contact
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  E-Mail
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Contact Number
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Address
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Website
                </a>
              </li>
            </ul>
          </div>

          {/* Services / Help */}
          <div>
            <h2 className="mb-4 text-[1rem] 2xl:text-[1.2vw] font-semibold text-black uppercase">
              Services
            </h2>
            <ul className="space-y-2 text-[#0080d3] font-medium">
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  iOS App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Android App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[1rem] 2xl:text-[1.2vw]">
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
