import React from "react";

const CreativeAnalyticsSection = () => {
  return (
    <div className="relative w-full h-80  lg:h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/marketing-manager-making-marketing-distribution-ch-resize-p2scqu3sdr2n2z909bxt5szc33hchpznt3wys5usmc.jpg"
        alt="Creative Analytics"
        className="absolute w-full h-[350px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-[350px] bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center px-4 md:px-8 text-white max-w-3xl">
        <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-4">
          Combining Creativity With Great Analytics
        </h2>
        <p className="text-sm md:text-lg lg:text-xl">
          Cras scelerisque tempor orci, vel convallis purus eleifend luctu quisque semper.
        </p>
      </div>
    </div>
  );
};

export default CreativeAnalyticsSection;
