"use client";

import React from "react";

const CareerJourneySection = () => {
  const experiences = [
    {
      period: "March 2005 - 2008",
      company: "Digitak",
      role: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore."
    },
    {
      period: "June 2008 - 2015",
      company: "Forgeo",
      role: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore."
    },
    {
      period: "April 2015 - 2019",
      company: "Intery",
      role: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore."
    },
    {
      period: "May 2019 - Now",
      company: "Parko",
      role: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore."
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mb-20 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Experienced</h2>
        <h3 className="text-2xl md:text-3xl text-teal-600 mb-4">My Career Journey</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Suspendisse id laoreet ipsum. Quisque tristique mi sapien, non aliquet purus blandit ut. Maecenas bibendum ultricies ipsum, vitae volutpat augue.
        </p>
      </div>

      {/* Experience Cards in One Line */}
      <div className="flex flex-wrap justify-between gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-3xl shadow-lg hover:shadow-xl transition"
          >
            <p className="text-sm text-gray-500 font-semibold">{exp.period}</p>
            <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
            <h5 className="text-teal-600 font-semibold">{exp.role}</h5>
            <p className="text-gray-700 mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerJourneySection;
