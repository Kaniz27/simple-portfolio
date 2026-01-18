import React from "react";

const AboutMeSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/sirimg.png"
            alt="About Me"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col justify-center bg-gray-100 p-8 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Expert Digital Marketing for Business Solution.
          </h3>
          <p className="text-gray-600 mb-4">
            Mauris elementum ex vitae arcu finibus, non dictum elit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dui, tincidunt sagittis urna vitae, posuere viverra ligula. Aliquam vel fringilla nunc, non gravida mauris. Praesent ac congue ipsum.
          </p>
          <p className="text-gray-600 mb-6">
            Nam ac purus eget lorem cursus suscipit id eu odio. Nam efficitur dignissim nulla, eget tempus metus. Sed fermentum molestie risus, non bibendum ipsum dapibus non.
          </p>
          <p className="text-gray-800 font-semibold mt-4">— Tareque_Mahmud,CEO & Founder </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
