import React from "react";
import animated from "../assets/animated.mp4"; 

export const HeroSection = () => {
  return (
    <div className="text-center mt-20">
      <video src={animated} autoPlay loop muted className="absolute top-23 left-0 w-full h-95 object-fill bg-black opacity-50" ></video>

      <div className="relative z-10 text-white">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">Empowering Freelance Finance</h1>
      <p className="text-white-500 mt-4 max-w-md mx-auto">
        We provide a secure, transparent platform ensuring freelancers receive fair, timely payments.
      </p>
      <button className="bg-blue-500 mt-6 px-6 py-3 text-lg font-medium rounded-lg hover:cursor-pointer ">Get Started</button>
      </div>
    </div>
  );
}
export default HeroSection;