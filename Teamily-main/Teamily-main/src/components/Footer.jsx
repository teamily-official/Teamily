import Companylogo from "../../public/Logo/Teamily Footer.png";
import {
  CompanyDetails,
  ContactDetails,
  // LegalDetails,
} from "../data/FooterSectionData";
import { servicesContent } from "../data/ServiceData";
export function Footer() {
  return (
    <footer className=" w-full h-[3px] bg-gradient-to-r from-[#151F5F] via-[#274990] to-[#3CAAE7] rounded-t-lg">
      <div className="flex flex-col gap-2 px-4 py-4 lg:py-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <div className="cursor-pointer hidden md:flex-2/8 md:flex   items-center h-fit w-fit">
            <img
              src={Companylogo}
              alt="Company Logo"
              width={180}
              height={200}
            />
          </div>
          <div className="flex-6/8 flex flex-col md:flex-row justify-center gap-5 items-center md:justify-between md:items-start ">
            {/* Company Section */}
            <div>
              <p className="flex justify-center font-medium text-blue-800 text-2xl text-nowrap">
                WHO, we are
              </p>
              <ul className="text-center md:text-start space-y-4 py-4 text-sm">
                {CompanyDetails.map((items, index) => (
                  <li
                    key={index}
                    className="text-lg text-center text-gray-700 transition hover:text-[#274990] cursor-pointer"
                  >
                    <a href={items.link}>{items.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <p className="flex justify-center  font-medium text-blue-800 text-2xl text-nowrap">
                WHAT, we do
              </p>
              <ul className="text-center md:text-start space-y-4 py-4 text-sm">
                {servicesContent.map((items, index) => (
                  <li
                    key={index}
                    className="text-lg text-center text-gray-700 transition hover:text-[#274990] cursor-pointer"
                  >
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <p className="flex justify-center  font-medium text-blue-800 text-2xl text-nowrap">
                Connect with US
              </p>
              <ul className="text-center md:text-start space-y-4 py-4 text-sm">
                {ContactDetails.map((items, index) => (
                  <li
                    key={index}
                    onClick={() => window.open(items.link, "_blank")}
                    className="text-lg text-center text-gray-700 transition hover:text-[#274990] cursor-pointer"
                  >
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 sm:justify-between mt-2 border-t-2 border-blue-100 pt-4 px-2 sm:mx-30">
          <div className="cursor-pointer">
            <p className="text-md text-gray-500 text-nowrap select-none">
              <span className="text-bold text-black ">&copy;</span>{" "}
              {new Date().getFullYear()}{" "}
              <span className="text-[#3CAAE7] hover:text-[#274990]">
                Teamily
              </span>
              . All rights reserved.
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
