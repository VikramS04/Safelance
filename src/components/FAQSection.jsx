import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "Safelancer ensures secure milestone-based payments, AI-powered work verification, and seamless collaboration between freelancers and employers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use end-to-end encryption and secure payment gateways to protect your personal and financial information.",
  },
  {
    question: "Can I get support?",
    answer:
      "Absolutely! Our 24/7 customer support team is available to assist you with any issues or inquiries.",
  },
  {
    question: "What if I disagree?",
    answer:
      "We have a built-in dispute resolution system to mediate conflicts fairly and ensure transparency.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="section-2" className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300 transition-opacity duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
