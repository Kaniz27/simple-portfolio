"use client";

import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Search Engine Optimization",
      category: "SEO",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20260104/pngtree-business-team-discussing-marketing-strategy-on-whiteboard-back-image_21014466.webp",
    },
    {
      title: "Social Media Marketing",
      category: "Marketing",
      img: "https://img.freepik.com/premium-photo/presentation-office-meeting-room-with-analyst-team-prudent_31965-518093.jpg",
    },
    {
      title: "Content Strategy",
      category: "Content",
      img: "https://www.elevify.com/_next/image?url=https://apoia-images-production.s3.amazonaws.com/84368260-0f03-44b9-824a-bdc4afaec34a.png&w=3840&q=70",
    },
    {
      title: "Business Analytics",
      category: "Analytics",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSEJG8OhJvV5WXZ3mCNg4oXrs8r0kxfiVUsDHi8Kvrv0zwTuNj",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto my-16 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl  mb-2">Projects</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Case Studies We Worked On
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-64 rounded-3xl overflow-hidden group shadow-lg"
          >
            {/* Background Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
              <span className="text-sm uppercase tracking-widest mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <button className="bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition w-fit">
                View Case Studies
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
