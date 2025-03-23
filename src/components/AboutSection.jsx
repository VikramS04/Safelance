import React from "react";


export const AboutSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/Image1.png" alt="Freelancer working" className="rounded-lg" />
          </div>

          <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
            <h2 className="text-4xl font-bold">About Our Platform</h2>
            <p className="text-gray-400 mt-4">

            SAFELANCE offers a streamlined and secure platform built to simplify freelance payments. We provide a trusted escrow system for secure transactions and a clear process for both freelancers to get paid reliably upon milestone completion and for clients to ensure quality work before releasing funds. Our user-friendly interface is designed for ease of use, making your payment experience smooth and worry-free.
            
            </p>
            <button className="bg-blue-500 mt-6 px-6 py-3 text-lg font-medium rounded-lg">Learn More</button>
          </div>
        </div>
  );
}
export default AboutSection;