import React from "react";

const AboutMeSection = () => {
  return (
    <div className="bg-[#eff2f9] p-6">
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
              Expert Digital Marketing & SEO Specialist for Business Growth
            </h3>

            {/* Paragraph 1 */}
            <p className="text-gray-600 mb-4">
              I am Tareque Mahmud, a passionate Digital Marketer and SEO Specialist with years of experience helping businesses grow online. I specialize in creating data-driven strategies for SEO, Social Media Marketing, and Content Marketing that increase website traffic and improve brand visibility.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-600 mb-4">
              Over the years, I have worked with a variety of clients, from startups to established brands, delivering measurable results through tailored digital marketing campaigns. My focus is always on achieving real ROI and driving engagement with the right audience.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-600 mb-6">
              I am constantly learning the latest trends in Digital Marketing and SEO to ensure my strategies stay ahead of the curve. Whether it's improving search engine rankings, optimizing content, or managing social media campaigns, my goal is to provide solutions that help businesses succeed online.
            </p>

            {/* Signature */}
            <p className="text-[#00786f] font-semibold mt-4">
              — Tareque Mahmud, CEO & Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
