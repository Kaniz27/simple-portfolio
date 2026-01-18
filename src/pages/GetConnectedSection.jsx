import React from "react";

const GetConnectedSection = () => {
  return (
    <div className="w-full bg-[#26344e] my-10 py-10 px-4 md:px-8 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Get Connected
      </h2>
      <p className="text-lg md:text-xl text-gray-200 mb-2">
        Interested in working with me? Let's connect!
      </p>
      <p className="text-md md:text-lg text-gray-300 mb-6 max-w-2xl">
        Grow Your Business with Our Digital Marketing Agency. Don’t miss our future updates!
      </p>
      <button className="bg-[#fcd363] text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition">
        Get In Touch
      </button>
    </div>
  );
};

export default GetConnectedSection;
