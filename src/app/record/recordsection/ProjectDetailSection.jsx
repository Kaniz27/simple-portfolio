"use client";

import React from "react";

const ProjectDetailSection = () => {
  return (
    <section className="max-w-6xl mx-auto container mt-30 mb-10">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/discussing-analytical-data-at-meeting-resize-p2scqpelfkvn0c3jop87s8c0qbob5chtiz5pctisfw.jpg" 
            alt="Project"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 bg-[#eff2f9] p-8 rounded-r-3xl flex flex-col justify-center">
          <h2 className="text-3xl  mb-6">Project Information</h2>
          <div className="flex flex-col gap-3 text-gray-700 text-lg">
            <div className="flex justify-between">
              <span className="font-semibold">Customer:</span>
              <span>Henry Foundation</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Country:</span>
              <span>United States</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Case Type:</span>
              <span>SEO Planning</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Date:</span>
              <span>15 April 2019</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Price:</span>
              <span>$35 USD</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>3 Weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
