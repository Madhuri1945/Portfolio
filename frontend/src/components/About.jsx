import React from "react";
import img from "../assets/img.jpg";
import git from "../assets/git.png";
import insta from "../assets/instagram.webp";
import fb from "../assets/Facebook.webp";
import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
const About = ({ isTheme }) => {
  const social = [
    [git, "https://github.com/Madhuri1945"],

    [linkedin, "https://linkedin.com/in/raga-madhuri-dhulipudi-218b182a8"],
    [leetcode, "https://leetcode.com/u/madhuridhulipudi37/"],
    [gfg, "https://www.geeksforgeeks.org/user/madhuridhucygi/"],
    [
      insta,
      "https://www.instagram.com/madhuri_dhulipudi_19?igsh=MWJ1cHA0OXN3dWcweA%3D%3D",
    ],
    [fb, "#"],
  ];
  return (
    <div className="container mx-auto px-4 py-8 h-full" id="about">
      <h2 className="text-4xl text-center font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4 md:gap-6 items-center ">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="About Me"
            className="w-52 h-90 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2 sm:text-center mt-5 sm:mt-4  sm:justify-start md:text-left lg:mr-40 md:mr-10 ">
          <h4 className="font-medium text-xl md:text-md md:font-bold mb-4 md:mb-0">
            Aspiring Full Stack Developer
          </h4>
          <p
            className={` text-md leading-relaxed ${
              isTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I’m a third-year B.Tech student passionate about web development. I
            enjoy working on both front-end and back-end technologies to create
            user-friendly and efficient applications. I have a solid foundation
            in data structures and algorithms and am always eager to learn new
            technologies, solve problems, and turn ideas into impactful
            solutions.
          </p>
          <div>
            <p className="font-bold md:text-sm text-[#777]">Connect with me:</p>
            <div className="flex gap-4 mt-4 md:mt-2 justify-center md:justify-start items-center">
              {social.map((account, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-200 flex items-center justify-center"
                >
                  <a href={account[1]}>
                    <img
                      src={account[0]}
                      alt={`Social Icon ${index + 1}`}
                      className="w-7 h-7 md:w-5 md:h-5"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
