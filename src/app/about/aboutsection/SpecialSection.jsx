"use client";

import React from "react";

const SpecialSection = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Image */}
      <div className="flex-1">
        <img
          src="/bio.png"
          alt="Digital Marketing"
          className="w-full h-auto rounded-3xl shadow-lg object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h4 className="text-teal-600 text-lg font-semibold">What The Special</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Best Digital Marketing Expert in the World
        </h2>
        <p className="text-gray-700 text-lg">
          Provide marketing services to startups and small businesses to looking for a partner of their digital media.
        </p>

        {/* Skills / Progress Bars */}
        <div className="flex flex-col gap-4 mt-4">
          {/* Market Analysis */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700">Market Analysis</span>
              <span className="font-semibold text-gray-700">80%</span>
            </div>
            <div className="w-full bg-gray-300 h-3 rounded-full">
              <div className="bg-teal-600 h-3 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          {/* SEO Consultancy */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700">SEO Consultancy</span>
              <span className="font-semibold text-gray-700">75%</span>
            </div>
            <div className="w-full bg-gray-300 h-3 rounded-full">
              <div className="bg-teal-600 h-3 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Page Ranking */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700">Page Ranking</span>
              <span className="font-semibold text-gray-700">90%</span>
            </div>
            <div className="w-full bg-gray-300 h-3 rounded-full">
              <div className="bg-teal-600 h-3 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
