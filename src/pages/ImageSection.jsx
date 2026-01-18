import React from "react";

const ImageSection = () => {
  const images = [
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/business-concept-tablet-with-information-chart-resize-p2scqogr8qux5bh769i1quekis957jd9sc01wi35no.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/marketing-manager-making-marketing-distribution-ch-resize-p2scqu3sdr2n2z909bxt5szc33hchpznt3wys5usmc.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/discussing-analytical-data-at-meeting-resize-p2scqpelfkw7gxfu0rwobc61464if8h04gnjds1rhg.jpg",
    "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/discussing-business-graphs-small-1.jpg",
  ];

  return (
    <div className="w-full flex flex-wrap">
      {images.map((img, index) => (
        <div key={index} className="w-1/2 md:w-1/4">
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
