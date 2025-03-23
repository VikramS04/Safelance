import React from "react";
import animated from "../assets/animated.mp4"; 

export const HeroSection = () => {
  return (
    <div id="section-1" className="text-center mt-30">
      <video src={animated} autoPlay loop muted className="absolute top-20 left-0 w-full h-100 object-fill bg-black opacity-50" ></video>

      <div className="relative z-10 text-white">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">Empowering Freelance Finance</h1>
      <p className="text-white-400 mt-4 max-w-md mx-auto">
        We provide a secure, transparent platform ensuring freelancers receive fair, timely payments.
      </p>
      <button className="bg-blue-500 mt-6 px-6 py-3 text-lg font-medium rounded-lg">Get Started</button>
      </div>
    </div>
  );
}
export default HeroSection;