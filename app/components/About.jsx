import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div
      id="about"
      className="h-fit w-full lg:h-screen py-10 bg-white text-4xl flex justify-evenly gap-10 items-center flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap"
    >
      <div className="object-cover w-full h-full relative">
        <Image
          src="/manWithBg.png"
          fill
          alt="Me"
        />
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
