
import React, { useState } from 'react';
import FAQIMAGE from "../assets/FaqSectionImages/FAQ.png";

const FaqSection = () => {
const [faq, setFaq] = useState([
    {
        question: 'How do I get started with your service?',
        answer: 'Getting started is easy! Simply <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">create an account</a> and follow the quick setup steps. You’ll be up and running in minutes!',
        open: false
    },
    {
        question: 'Is my data safe with us?',
        answer: 'Absolutely! We prioritize security and use industry-standard encryption. Learn more about our <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">data protection measures</a>.',
        open: false
    },
    {
        question: 'What payment methods do we accept?',
        answer: 'We accept multiple payment methods including <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">Credit/Debit cards</a> and PayPal. Payments are secure and hassle-free.',
        open: false
    },
    {
        question: 'Can I upgrade or change my plan anytime?',
        answer: 'Yes! You can upgrade, downgrade, or cancel your plan anytime directly from your dashboard. No hidden fees or complicated processes.',
        open: false
    },
    {
        question: 'What makes your service different from others?',
        answer: 'We focus on simplicity, speed, and reliability. Unlike others, we offer <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">personalized support</a> and fast onboarding to help you succeed.',
        open: false
    },
    {
        question: 'How quickly can I expect results?',
        answer: 'Most of our clients see results within the first few days. Our streamlined process ensures <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">fast and measurable outcomes</a>.',
        open: false
    },
    {
        question: 'Do you offer support if I get stuck?',
        answer: 'Yes! Our friendly support team is always ready to help. Contact us via <a href="#" class="text-blue-600 transition-all duration-200 hover:underline">chat or email</a> anytime.',
        open: false
    },
 
]);


    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24  ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 w-full ">
                <div className="max-w-3xl mx-auto text-center ">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Everything you need to know about getting started and using our service</p>
                </div>
<div className='flex flex-row-reverse  justify-evenly'>
    <img src={FAQIMAGE} alt="QuestionMarkIcon" width={400}  className=' h-150' />
                <div className="mt-8 min-w-4xl max-w-5xl space-y-5 md:mt-16  ">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-blue-50  shadow-2xl shadow-blue-200 rounded-2 ">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6 " onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-orange-500 cursor-pointer ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}> 
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>
</div>
                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </section>
    );
}

export default FaqSection;