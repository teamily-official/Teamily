import Companylogo from "../../public/Logo/Teamily Footer.png";
import { CompanyDetails, ContactDetails } from "../data/FooterSectionData";
import { servicesContent } from "../data/ServiceData";

export function Footer() {
  return (
    <footer style={{ background: "var(--c-navy)" }} className="w-full">
      {/* Top gradient accent bar */}
      <div className="h-[2px] w-full" style={{ background: "var(--grad-accent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">

          {/* Brand column */}
          <div className="flex flex-col gap-5 md:max-w-[200px]">
            <img
              src={Companylogo}
              alt="Teamily Logo"
              loading="lazy"
              width={140}
              className="opacity-90"
            />
            <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-muted)" }}>
              Professional IT &amp; software development for businesses worldwide.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {/* Who We Are */}
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--c-sky)" }}
              >
                Who We Are
              </h4>
              <ul className="space-y-3">
                {CompanyDetails.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "var(--c-text-muted)" }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Do */}
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--c-sky)" }}
              >
                What We Do
              </h4>
              <ul className="space-y-3">
                {servicesContent.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm cursor-pointer transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--c-text-muted)" }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--c-sky)" }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                {ContactDetails.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                    className="text-sm cursor-pointer transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--c-text-muted)" }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs select-none" style={{ color: "var(--c-text-muted)" }}>
            &copy; {new Date().getFullYear()}{" "}
            <span
              className="font-semibold cursor-pointer hover:text-white transition-colors"
              style={{ color: "var(--c-sky)" }}
            >
              Teamily
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#475569" }}>
            Built with ❤️ for businesses worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
