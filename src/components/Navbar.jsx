// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-black">
      <div className="text-white font-bold text-lg px-4 py-2 rounded-lg"> 
       <img src="/logo1.png" alt="" className="h-10 w-10 bg-contain"/>
      </div>
      <div className="hidden md:flex space-x-8 ">
        <a href="#" className="text-white text-sm font-bold ">Home</a>
        <a href="#" className="text-white text-sm font-bold ">Features</a>
        <a href="#" className="text-white text-sm font-bold ">Testimonial</a>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:border-1; "> Request Demo </button>
    </nav>
  );
};

export default Navbar;
