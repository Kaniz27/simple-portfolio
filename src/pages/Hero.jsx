"use client";

import Image from "next/image";
import heroImg from "../../public/unnamed.jpg";
import { FaUserCircle } from "react-icons/fa";

const Hero = () => {
  const authors = [1, 2, 3, 4];

  return (
    <section className="flex bg-[#eff2f9] flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 mx-auto w-full">
      
      {/* Left Content */}
<div className="flex-1 flex flex-col justify-center space-y-2">
  
  <p className="bg-white px-5 py-2 rounded-full text-lg flex items-center w-fit shadow">
    <span className="bg-[#38b7a6] rounded-full text-white px-2 mr-2">
      ⚡
    </span>
    Welcome to My Personal Porfolio
  </p>

  <p className="text-xl">
    Hi, I'm <br />
    <span className="text-2xl pt-2 text-[#007867] font-bold">
      Tareque Mahmud
    </span>
  </p>

  <p>CEO & Founder</p>

  <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
    Start learning from the{" "}
    <span className="text-teal-600">
      world’s best institutions digital marketing SEO
    </span>
  </h1>

  {/* Buttons */}
  <div className="flex items-center gap-6">
    <button
      onClick={() =>
        typeof window !== "undefined" &&
        (window.location.href = "/contact")
      }
      className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
    >
      Get Started
    </button>

    <div className="flex items-center gap-2 cursor-pointer">
      <span className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white text-lg">
        ▶
      </span>
      <span className="text-gray-700 font-semibold">
        Watch the video
      </span>
    </div>
  </div>

  {/* Authors */}
  <div className="flex items-center mt-4">
  {/* Avatars */}
  <div className="flex -space-x-3">
    {authors.map((_, i) => (
      <div
        key={i}
        className="relative w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden"
      >
        {/* Avatar Icon */}
        <FaUserCircle className="text-3xl text-gray-400" />

        {/* Verified Tick */}
        <span className="absolute bottom-0 right-0 w-5 h-5 bg-teal-600 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
          ✓
        </span>
      </div>
    ))}
  </div>

  {/* Reviews Text */}
  <p className="text-gray-600 text-sm ml-4">
    <strong>50+</strong> Customer Reviews
  </p>
</div>


  <p className="text-gray-900 text-xl md:text-2xl font-semibold">
    Explore <span className="text-teal-600">100+</span> Completed Project
  </p>
</div>


      {/* Right Image */}
      <div className="flex-1 relative mt-10 md:mt-0 flex justify-center">
        <div className="relative group">
          <Image
            src={heroImg}
            alt="Hero Image"
            className="rounded-4xl w-100 mt-16 transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Floating Card */}
          <div className="absolute left-10 top-1/2 transform -translate-x-1/2 -translate-y-20 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            <p className="text-teal-600 font-bold text-2xl">100+</p>
            <p className="text-gray-500 text-xs uppercase tracking-wide">
              Completed Campaigns
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
