import React from "react";
import { FaCheckCircle, FaSmile, FaAward, FaProjectDiagram } from "react-icons/fa";

const SkillsAndStatsSection = () => {
  const stats = [
    {
      icon: <FaCheckCircle size={40} className="text-teal-600 mb-2" />,
      title: "53 Case Success",
      desc: "Donec bibendum purus quis velit tempor, eleifend tempor quam."
    },
    {
      icon: <FaSmile size={40} className="text-teal-600 mb-2" />,
      title: "850 Happy Clients",
      desc: "Donec bibendum purus quis velit tempor, eleifend tempor quam."
    },
    {
      icon: <FaAward size={40} className="text-teal-600 mb-2" />,
      title: "45 Winning Awards",
      desc: "Donec bibendum purus quis velit tempor, eleifend tempor quam."
    },
    {
      icon: <FaProjectDiagram size={40} className="text-teal-600 mb-2" />,
      title: "99 Projects Completed",
      desc: "Donec bibendum purus quis velit tempor, eleifend tempor quam."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 md:px-8 flex flex-col md:flex-row gap-10">
      {/* Left Side: Skills Intro */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-6">
          What are my strongest sides and skills?
        </h3>
        <p className="text-gray-600 mb-6">
          I specialize in Digital Marketing, SEO, Social Media Marketing, and Content Strategy to help businesses grow online and reach the right audience.
        </p>
        <p className="text-gray-600 mb-6">
          I create effective digital marketing campaigns and optimize websites for better search engine performance, helping brands engage their audience and grow.
        </p>
        <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-blue-700 transition w-max">
          See My Experience
        </button>
      </div>

      {/* Right Side: Stats */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-[#eff2f9] rounded-lg hover:shadow-lg transition"
          >
            {stat.icon}
            <h4 className="text-2xl font-bold mb-2">{stat.title}</h4>
            <p className="text-gray-600">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndStatsSection;
