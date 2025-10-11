import React, { useState } from "react";
import FAQIMAGE from "../assets/FaqSectionImages/FAQ.png";

const FaqSection = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I get started with your service?",
      answer:
        'Getting started is quick and simple! Just <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">create an account</a>, complete the easy setup steps, and you’ll be ready to go within minutes.',
      open: false,
    },
    {
      question: "Is my data safe with you?",
      answer:
        'Absolutely! We take your privacy seriously and use advanced, industry-standard encryption to protect your information. Learn more about our <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">data security measures</a>.',
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        'We accept all major <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">credit/debit cards</a> and PayPal for your convenience. Every transaction is processed securely and without hassle.',
      open: false,
    },
    {
      question: "Can I upgrade or change my plan anytime?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your plan anytime directly from your dashboard—no hidden fees or complex steps.",
      open: false,
    },
    {
      question: "What makes your service different from others?",
      answer:
        'We combine simplicity, speed, and reliability with <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">personalized support</a> and rapid onboarding to ensure your success from day one.',
      open: false,
    },
    {
      question: "How soon can I expect results?",
      answer:
        'Most clients start seeing measurable results within just a few days. Our streamlined process ensures <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">fast and effective outcomes</a> for your project.',
      open: false,
    },
    {
      question: "Do you provide support if I need help?",
      answer:
        'Definitely! Our dedicated support team is always here for you. Reach us anytime via <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">live chat</a> or <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">email</a> for quick assistance.',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24  ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 w-full ">
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed sm:text-1xl lg:text-2xl text-gray-600">
         Everything You Need to Know About Teamily Services.
          </p>
        </div>
        <div className="flex flex-row-reverse justify-evenly  ">
          <div className=" hidden lg:block ">
            <img
              src={FAQIMAGE}
              alt="QuestionMarkIcon"
              width={400}
              className=" h-150"
            />
          </div>
          <div className="mt-8 space-y-5 md:mt-16  w-full md:w-[35rem]  ">
            {faq.map((item, index) => (
              <div
                key={index}
                className="transition-colors duration-200 bg-white border border-gray-200 cursor-pointer
                 hover:bg-blue-50 shadow-md hover:shadow-lg rounded-2"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6 "
                  onClick={() => toggleFaq(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    {item.question}{" "}
                  </span>

                  <svg
                    className={`w-6 h-6 text-[#274990] cursor-pointer ${
                      item.open ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    item.open ? "block" : "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6`}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Didn’t find the answer you’re looking for?{" "}
          <a
            href="https://forms.zohopublic.in/teamilyofficialzoho1/form/ContactUs/formperma/1P9DiLkxIiUgw_urpS6C7d8ATYzEZMINvxTIhXtN0r0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-all duration-200 hover:underline"
          >
            Contact our support team
          </a>{" "}
          — we’re happy to help!
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
