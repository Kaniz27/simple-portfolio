import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-6xl  mt-30 mx-auto my-16 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/unnamed.jpg" // replace with your image path
            alt="Portia Arthur"
            className="w-full max-w-sm lg:max-w-md h-auto object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col justify-center bg-gray-100 p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl md:text-2xl font-semibold mb-2 text-gray-700">
            Hello, I am
          </h2>
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900">
         Tareque Mahmud, 
          </h1>
          <h1 className="text-xl py-2">CEO & Founder</h1>
          <p className="text-gray-600 mb-6">
            Mauris elementum ex vitae arcu finibus, non dictum elit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaturpis dui, tincidunt sagitti.
          </p>
          <button className="self-start px-6 py-3 bg-[#26344e] text-white font-semibold rounded-2xl hover:bg-[#1f2b42] transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
