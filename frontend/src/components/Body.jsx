import React from "react";
import img1 from "../assets/img1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import resume from "../assets/resume.pdf";
const Body = ({ isTheme }) => {
  return (
    <main className="mt-20 mb-40">
      <div className="h-full">
        <div className="flex justify-center items-center h-full">
          <img src={img1} className="w-50  h-50 rounded-full object-cover" />
        </div>
        <div
          className={`text-center mt-4 ${
            isTheme ? "text-white " : " text-black"
          }`}
        >
          <h4 className="text-lg  font-semibold">Hi! I'm Raga Madhuri👋🏻</h4>
        </div>
        <div className="text-center mt-4">
          <h1 className="text-6xl ">Mern Stack Developer</h1>
          <h1 className="text-7xl"></h1>
        </div>

        <div className="move flex space-x-8 mt-6 justify-center">
          <a href="#contact">
            <button className="button-sm bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 border border-transparent hover:shadow-xl text-white ">
              <span className="text-white">contact me</span>
              <FaArrowRightLong className="w-5 animate-pullEffect text-white" />
            </button>
          </a>
          <a href={resume} download="resume">
            <button
              className={`move button-sm flex items-center px-4 py-2 rounded-lg border font-medium shadow-sm transition duration-300 ${
                isTheme
                  ? "text-gray-300 border-gray-500 hover:text-white hover:bg-gray-200"
                  : "text-gray-700 border-gray-300 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <span>My Resume</span>
              <MdFileDownload className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Body;
