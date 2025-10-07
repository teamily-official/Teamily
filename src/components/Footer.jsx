import Companylogo from "../../public/Logo/CompanyLogo1.png";
import {
  CompanyDetails,
  ContactDetails,
  // LegalDetails,
} from "../data/FooterSectionData";
import { servicesContent } from "../data/ServiceData";
export function Footer() {
  return (
    <footer className="bg-blue-50">
      <div className="">
        <div className="flex flex-col md:flex-row items-center lg:items-start lg:justify-evenly">
          {/* Logo Section */}
          <div className="mt-10 lg:mt-20">
            <img
              src={Companylogo}
              alt="Company Logo"
              width={210}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Info Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Company Section */}
            <div>
              <p className="font-medium text-blue-800 text-2xl">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                {CompanyDetails.map((items, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 transition hover:text-blue-500 cursor-pointer"
                  >
                    <a href={items.link}>{items.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <p className="font-medium text-blue-800 text-2xl">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                {ContactDetails.map((items, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 transition hover:text-blue-500 cursor-pointer"
                  >
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <p className="font-medium text-blue-800 text-2xl">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {servicesContent.map((items, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 transition hover:text-blue-500 cursor-pointer"
                  >
                    {items.title}
                  </li>
                ))}
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
        {/* Optional: Copyright / Bottom text */}
        {/* <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TeamILy. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}
