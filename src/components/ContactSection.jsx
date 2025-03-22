import React from "react";

export const ContactSection = () => {
  return (
    <div className="text-center py-20 bg-blue-600">
          <h2 className="text-4xl font-bold">Connect With Us</h2>
          <form className="mt-6 space-y-4">
            <input type="email" placeholder="Enter email" className="p-2 rounded-lg w-full" />
            <input type="text" placeholder="Your name" className="p-2 rounded-lg w-full" />
            <textarea placeholder="Your message" className="p-2 rounded-lg w-full"></textarea>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Register Now</button>
          </form>
        </div>
  );
}
export default ContactSection;