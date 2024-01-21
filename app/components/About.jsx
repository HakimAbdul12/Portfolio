"use client";
import React from "react";
import Image from "next/image";
import { useDarkMode } from "./DarkModeContext";

export const About = () => {
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();
  return (
    <div
      id="about"
      className="w-full h-screen py-10 bg-white text-4xl flex justify-evenly gap-10 items-center flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap overflow-y-auto"
      style={{
        backgroundImage: darkMode ? 'url("/grid.jpg")' : "",
        backgroundSize: "cover", // Adjust as needed
        // Add other background properties as needed
      }}
    >
      <div
        className={`${darkMode? "":"hidden"} absolute h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-purple-500 opacity-20 pointer-events-none`}
      ></div>
      <div
        className={`absolute h-[400%] w-[400%] pointer-events-none opacity-[0.02] bg-no-repeat z-30 bg-center noisy-overlay ${
          darkMode ? "visible" : "invisible"
        }`}
        style={{
          backgroundImage: darkMode ? 'url("/noisy.jpg")' : "",
          backgroundSize: "cover", // Adjust as needed
          // Add other background properties as needed
        }}
      ></div>

      <div className="object-cover w-full h-full relative">
        <Image src="/manWithBg.png" fill alt="Me" />
      </div>
      <div>
        <p className="text-lg sm:text-xl text-left text-slate-300 font-semibold">
          A passionate software engineer with a penchant for crafting elegant
          solutions to complex problems. With a keen eye for detail and a love
          for clean code, I take pride in delivering high-quality software that
          meets and exceeds client expectations.
        </p>
        <br />
        <p className="text-lg sm:text-xl text-left text-slate-300 font-semibold">
          My journey in the world of technology has equipped me with a diverse
          skill set, ranging from front-end development to back-end
          infrastructure. I am dedicated to continuous learning and staying
          up-to-date with the latest industry trends to ensure that I can adapt
          to any challenge that comes my way.
        </p>
        <br />
        <p className="text-lg sm:text-xl text-left text-slate-300 font-semibold">
          Explore my portfolio to discover some of the projects I have had the
          privilege of working on. Each one represents a unique problem-solving
          experience and a testament to my commitment to excellence in software
          engineering. Thank you for visiting, and feel free to reach out if you
          would like to collaborate or learn more about my work.
        </p>
      </div>
    </div>
  );
};

export default About;
