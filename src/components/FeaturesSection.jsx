import React from "react";

const projects = [
  {
    title: "Milestone-Based Payments",
    description: "Secure and transparent payment system tied to project milestones, ensuring fair compensation for freelancers.",
    icon: "💰",
  },
  {
    title: "Work Verification & Approval",
    description: "Efficient tools for employers to review, approve, or request revisions on freelancer deliverables.",
    icon: "✅",
  },
  {
    title: "Dispute Resolution",
    description: "Streamlined process for resolving payment or quality disputes between freelancers and employers.",
    icon: "⚖️",
  },
  {
    title: "AI-Powered Quality Checks",
    description: "Automated work verification using AI to detect plagiarism and ensure high-quality deliverables.",
    icon: "🤖",
  },
  {
    title: "Multi-Currency Payments",
    description: "Support for global transactions with multiple payment methods, including PayPal, Stripe, and cryptocurrency.",
    icon: "🌍",
  },
  {
    title: "Time Tracking & Reporting",
    description: "Built-in tools for tracking hours and generating reports for hourly-based projects.",
    icon: "⏳",
  },
];

export const FeaturesSection = () => {
  return (
    <div id="section3" className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">🚀 Our Key Features</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Empowering freelancers with innovative financial solutions and workflow tools.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-700"
          >
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-4xl">
              {project.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mt-8">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
            <div className="mt-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
