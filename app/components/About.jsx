"use client";
import Image from "next/image";
import { useDarkMode } from "./DarkModeContext";
import { useCollapse } from "./context/SidebarCollapeContext";

export const About = () => {
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();
    const { collapse, funcSetCollapse, hardCodeCollapseToFalse } = useCollapse();
  return (
    <div
      id="about"
      className="w-full min-h-screen py-10  text-4xl flex justify-evenly  items-center flex-col lg:flex-row overflow-y-auto"
      style={{
        backgroundImage: darkMode ? 'url("/grid.jpg")' : 'url("/whitebg1.jpg")',
        backgroundSize: "cover", // Adjust as needed
        // Add other background properties as needed
      }}
      onClick={hardCodeCollapseToFalse}
    >
      <div className="object-cover basis-6/12 h-full flex justify-center">
        <Image
          src={"/hakim2.png"}
          alt="Hakim"
          priority={true}
          height={400}
          width={400}
          className="object-cover drop-shadow-2xl rounded-full shadow-xl"
        />
      </div>
      <div
        className={`${
          darkMode ? "text-white" : "text-slate-800"
        } basis-6/12 px-10`}
      >
        <p className="text-lg sm:text-xl text-left  font-semibold">
          A passionate software engineer with a penchant for crafting elegant
          solutions to complex problems. With a keen eye for detail and a love
          for clean code, I take pride in delivering high-quality software that
          meets and exceeds client expectations.
        </p>
        <br />
        <p className="text-lg sm:text-xl text-left  font-semibold">
          My journey in the world of technology has equipped me with a diverse
          skill set, ranging from front-end development to back-end
          infrastructure. I am dedicated to continuous learning and staying
          up-to-date with the latest industry trends to ensure that I can adapt
          to any challenge that comes my way.
        </p>
        <br />
        <p className="text-lg sm:text-xl text-left  font-semibold">
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
