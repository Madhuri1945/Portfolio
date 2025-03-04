import React from "react";
import { motion } from "framer-motion";
import html from "../assets/Html.png";
import css from "../assets/Css.png";
import js from "../assets/Js.png";
import react from "../assets/React.png";
import express from "../assets/Ex.png";
import mongo from "../assets/Mongo.png";
import node from "../assets/Node.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";

const Skills = ({ isTheme }) => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Skill icons in a single array for better organization
  const skills = [
    [html, css, js],
    [mongo, express, react, node],
    [tailwind, java, sql],
  ];

  return (
    <div className="container p-8" id="skills">
      <h1 className="text-4xl text-center font-bold mb-8">Skills</h1>
      <motion.div
        className="flex justify-center items-center gap-8 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {skills.map((column, colIndex) => (
          <div
            key={colIndex}
            className="image-outer flex flex-col items-center gap-4"
          >
            {column.map((img, index) => (
              <motion.div
                key={index}
                className="image-layout bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-lg shadow-md shadow-pink-100"
                variants={itemVariants}
                viewport={{ amount: 0.5 }}
              >
                <div
                  className={`rounded-lg p-4 ${
                    isTheme ? "bg-[#333]" : "bg-white"
                  }`}
                >
                  <img
                    src={img}
                    className="image w-16 h-16 md:w-12 md:h-12 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
