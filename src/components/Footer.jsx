import React from "react";
import Companylogo from "../../public/Logo/CompanyLogo1.png";
import {
  CompanyDetails,
  ContactDetails,
  LegalDetails,
} from "../data/FooterSectionData";
import { servicesContent } from "../data/ServiceData";
const Footer = () => {
  return (
    <footer className="bg-blue-50">
      <div className="">
        <div className="flex justify-evenly">
          <div className="mt-8" >
            <img src={Companylogo} alt="Company Logo" width={210} />
          </div>  
          <div className="mt-10 grid grid-cols-3">
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end"></div> 

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-blue-800 text-2xl">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                {CompanyDetails.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className="text-lg  transition hover:text-blue-300 cursor-pointer"
                    >
                      <a href={items.link}>{items.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-blue-800 text-2xl">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                {ContactDetails.map((items) => {
                  return (
                    <li  className="text-lg text-gray-700 transition hover:text-blue-500 cursor-pointer">
                      {items.title} 
                    </li>
                  );
                })}
              </ul>
            </div>


{/* Service Section   */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-blue-800 text-2xl ">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                {servicesContent.map((items) => {
                  return (
                    <li className="text-lg text-gray-700 transition hover:text-blue-500 cursor-pointer">
                      {items.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-blue-100 pt-8 mx-30">
          <div className="text-center">
            <p className="text-md text-gray-500">
              &copy; 2025. Teamily. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
