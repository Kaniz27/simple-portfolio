import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const BlogSection = () => {
  const blogPosts = [
    {
      img: "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/discussing-analytical-data-at-meeting-resize-1.jpg",
      title: "Digital Marketing Tips",
      
      admin: "Portia Arthur",
      date: "Jan 10, 2026",
    },
    {
      img: "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/discussing-business-graphs-small-1.jpg",
      title: "SEO Optimization Guide",
      
      admin: "Portia Arthur",
      date: "Jan 12, 2026",
    },
    {
      img: "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/2021/02/entrepreneur-talking-to-employees-small1-1.jpg",
      title: "Social Media Strategy",
      
      admin: "Portia Arthur",
      date: "Jan 15, 2026",
    },
    {
      img: "https://templatekit.kotakkuning.com/porka/wp-content/uploads/sites/2/elementor/thumbs/discussing-analytical-data-at-meeting-resize-p2scqpelfkw7gxfu0rwobc61464if8h04gnjds1rhg.jpg",
      title: "Business Growth Hacks",
     
      admin: "Portia Arthur",
      date: "Jan 18, 2026",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Our Latest Insights</h2>
        <h3 className="text-xl md:text-2xl text-gray-600">
          Tips, tricks, and updates from our digital marketing experts
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-100 rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 flex flex-col gap-3">
              <h1 className="text-xl font-bold text-gray-900">{post.title}</h1>
              <p className="text-gray-600">{post.desc}</p>
              <div className="flex items-center gap-6 text-gray-500 text-sm ">
  <span className="flex items-center gap-2">
    <FaUser />
    {post.admin}
  </span>
  <span className="flex items-center gap-2">
    <FaCalendarAlt />
    {post.date}
  </span>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
