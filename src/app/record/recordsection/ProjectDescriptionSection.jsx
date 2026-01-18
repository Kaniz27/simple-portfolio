"use client";

import React from "react";

const ProjectDescriptionSection = () => {
  const images = [
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/discussing-analytical-data-at-meeting-resize-1.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/olena-sergienko-dIMJWLx1YbE-resize-p2edpvq4a9owgaj0u9u00bpw2wkeob9zbrt3rbyo4g.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/business-concept-tablet-with-information-chart-resize-p2scqogot19rp0hl6efh94su96ls92y8q02sl7v82o.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/multicultural-group-of-marketing-managers-working-resize-p2sdac95ra6ojdxhdedjwo6xkbp69604fbbeykprxc.jpg",
  ];

  return (
    <section className="max-w-6xl mx-auto my-16 px-4 md:px-8 text-center">
      {/* Project Description */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Description</h2>
        <p className="text-gray-700 text-lg md:text-sm leading-relaxed mx-auto max-w-3xl">
          This project highlights our expertise in Digital Marketing and SEO strategies. 
    We designed and implemented a comprehensive plan to boost online visibility, 
    engage target audiences, and maximize ROI. Our team conducted detailed keyword 
    research, optimized on-page and off-page SEO, and created compelling content 
    tailored to customer needs.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt={`Project Image ${index + 1}`}
              className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Additional Text */}
      <div>
        <p className="text-gray-700 text-lg md:text-sm leading-relaxed mx-auto max-w-3xl">
          This project demonstrates our expertise in digital marketing and SEO strategies. Each step was carefully planned to achieve optimal results and maximize customer engagement. The images above show key moments and insights from the project.
        </p>
      </div>
    </section>
  );
};

export default ProjectDescriptionSection;
