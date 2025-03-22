import React from "react";

export const FAQSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
    <h2 className="text-4xl font-bold text-center">FAQ</h2>
    <div className="mt-6 space-y-4">
      <div className="p-4 bg-gray-800 rounded-lg">How does it work?</div>
      <div className="p-4 bg-gray-800 rounded-lg">Is my data secure?</div>
      <div className="p-4 bg-gray-800 rounded-lg">Can I get support?</div>
      <div className="p-4 bg-gray-800 rounded-lg">What if I disagree?</div>
    </div>
  </div>
  );
}
export default FAQSection;
