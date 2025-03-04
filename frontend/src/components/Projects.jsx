import React, { useState, useEffect } from "react";
import mongo from "../assets/Mongo.png";
import html from "../assets/Html.png";
import express from "../assets/Ex.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/React.png";
import node from "../assets/Node.png";
import Js from "../assets/Js.png";
import css from "../assets/Css.png";
import todo from "../assets/To-Do.png";
import omnifood from "../assets/omnifood.png";
import weather from "../assets/weather.png";
import travel from "../assets/travel1.png";
import git from "../assets/git.png";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import linkdin from "../assets/linkdin.png";
import tanstack from "../assets/tanstack.png";

const Projects = ({ isTheme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const projectData = [
    {
      id: 1,
      imgSrc: todo,
      description:
        "A To-Do App built with HTML, CSS, and JavaScript. It features task addition, deletion, and persistence using local storage, making it a handy productivity tool.",
      tools: [html, css, Js],
      githubLink: "https://github.com/Madhuri1945/To-Do",
    },
    {
      id: 2,
      imgSrc: weather,
      description:
        "A Weather App that utilizes APIs to fetch real-time weather data. Built with HTML, CSS, and JavaScript, it displays location-specific temperature, humidity, and weather conditions.",
      tools: [html, css, Js],
      githubLink: "https://github.com/Madhuri1945/weather-app",
    },
    {
      id: 3,
      imgSrc: omnifood,
      description:
        "A responsive landing page for Omnifood, designed to showcase a food subscription service. Features include animations, navigation, and an attractive layout using modern CSS techniques.",
      tools: [html, css, Js],
      githubLink: "https://github.com/Madhuri1945/Omnifood",
    },
    {
      id: 4,
      imgSrc: travel,
      description:
        "A full-stack MERN (MongoDB, Express, React, Node.js) Travel Booking App. Includes features like user authentication, dynamic search filters, and a responsive, mobile-first design.",
      tools: [react, node, express, mongo, tailwind],
      githubLink: "https://github.com/Madhuri1945/Travel_Story",
    },
    {
      id: 5,
      imgSrc: linkdin,
      description:
        "A full-stack MERN application with features like user authentication, profile management, post feeds, and real-time updates. Built with Redux for state management, TanStack Query for data fetching, and Tailwind CSS for a responsive design.",
      tools: [react, node, express, mongo, tanstack, tailwind],
      githubLink: "https://github.com/Madhuri1945/linkedin-clone",
    },
  ];

  // Adjust slides based on screen width
  const updateSlides = () => {
    const isMdScreen = window.innerWidth >= 841;
    const groupedSlides = [];

    for (let i = 0; i < projectData.length; i += isMdScreen ? 2 : 1) {
      groupedSlides.push(projectData.slice(i, i + (isMdScreen ? 2 : 1)));
    }

    setSlides(groupedSlides);
    setCurrentSlide(0); // Reset to the first slide when screen size changes
  };

  useEffect(() => {
    updateSlides(); // Initialize slides on component mount
    window.addEventListener("resize", updateSlides); // Update on window resize

    return () => window.removeEventListener("resize", updateSlides); // Cleanup
  }, []);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  // Guard against undefined slides or currentSlide index
  if (!slides.length || !slides[currentSlide]) {
    return null; // Render nothing while slides are being initialized
  }

  return (
    <div className="py-8 px-4  relative mb-8" id="projects">
      <h2 className="text-4xl text-center font-bold mb-8">Projects</h2>
      <div className="flex items-center justify-center gap-4 ">
        {/* Previous Button */}
        <button
          className={`text-white ${
            currentSlide === 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          } rounded-full p-3`}
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slideshow Content */}
        <div className="w-[90%] sm:w-[70%] lg:w-[50%] relative flex gap-4 ">
          {slides[currentSlide].map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full flex flex-col justify-between ${
                isTheme ? "bg-[#eee]" : "bg-white"
              }`}
            >
              <img
                src={project.imgSrc}
                alt={`Project ${project.id}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 font-medium">
                  {project.description}
                </p>
              </div>
              {/* Footer Section */}
              <div className="mt-auto p-4 flex items-center justify-between">
                {/* Tools Section */}
                <div className="p-4 flex gap-2 justify-start">
                  {project.tools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool}
                      alt="Tool Logo"
                      className="w-8 h-8 object-contain"
                      title="Tool"
                    />
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="move">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border border-gray-300 rounded-full px-2 py-2 gap-1 bg-[#333] text-white hover:bg-black"
                  >
                    <img
                      src={git}
                      className="w-7 h-7 bg-white p-[2px] rounded-full md:hidden"
                    />
                    <span className="text-xs">View Code</span>
                    <FaArrowRight className="text-white animate-pullEffect" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`text-white  ${
            currentSlide === slides.length - 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          } rounded-full p-3`}
          onClick={handleNextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
