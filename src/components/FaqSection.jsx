import { useState } from "react";
import FAQIMAGE from "../assets/FaqSectionImages/FAQ.png";

const faqData = [
  {
    question: "How do I get started with your service?",
    answer: "Getting started is quick and simple! Just reach out via our contact form, complete the easy onboarding steps, and you'll be ready to go within minutes.",
  },
  {
    question: "Is my data safe with you?",
    answer: "Absolutely. We use advanced, industry-standard encryption to protect your information at every stage of our process.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards and bank transfers. Every transaction is processed securely without hassle.",
  },
  {
    question: "Can I upgrade or change my plan anytime?",
    answer: "Yes! Upgrade, downgrade, or cancel your plan anytime directly — no hidden fees or complex steps involved.",
  },
  {
    question: "What makes your service different from others?",
    answer: "We combine speed, reliability, and personalized support with rapid onboarding to ensure your success from day one.",
  },
  {
    question: "How soon can I expect results?",
    answer: "Most clients start seeing measurable results within a few days. Our streamlined process ensures fast and effective outcomes.",
  },
  {
    question: "Do you provide support if I need help?",
    answer: "Our dedicated support team is always here for you. Reach us via our contact form or email for quick assistance.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section style={{ background: "var(--c-bg)" }} className="py-16 sm:py-24">
      <div className="px-5 mx-auto sm:px-8 lg:px-12 max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "var(--c-hover-bg)", color: "var(--c-indigo)" }}
          >
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--c-text-head)" }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg" style={{ color: "var(--c-text-body)" }}>
            Everything you need to know about Teamily services.
          </p>
        </div>

        <div className="flex flex-row-reverse items-start justify-between gap-10">
          {/* Illustration */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              src={FAQIMAGE}
              alt="FAQ Illustration"
              loading="lazy"
              width={360}
              className="rounded-3xl opacity-90"
            />
          </div>

          {/* Accordion */}
          <div className="flex-1 space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "var(--c-card)",
                  border: `1px solid ${openIndex === index ? "var(--c-indigo)" : "var(--c-border)"}`,
                  boxShadow: openIndex === index ? "var(--shadow-hover)" : "var(--shadow-card)",
                }}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-6 py-5 text-left gap-4"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: openIndex === index ? "var(--c-indigo)" : "var(--c-text-head)" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openIndex === index ? "var(--c-indigo)" : "var(--c-hover-bg)",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke={openIndex === index ? "#fff" : "var(--c-indigo)"} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{
                    color: "var(--c-text-body)",
                    display: openIndex === index ? "block" : "none",
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <p
          className="text-center text-sm mt-12"
          style={{ color: "var(--c-text-body)" }}
        >
          Didn&apos;t find your answer?{" "}
          <a
            href="https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline transition-all"
            style={{ color: "var(--c-indigo)" }}
          >
            Contact our support team
          </a>{" "}
          — we&apos;re happy to help!
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
