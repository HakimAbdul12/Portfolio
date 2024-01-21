"use client";
import React from "react";
import Image from "next/image";
import { useDarkMode } from "./DarkModeContext";

const Hero = () => {
  let yearsOfExp = "";
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  yearsOfExp = currentYear - startYear;

  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();

  return (
    <>
      <div
        id="home"
        className="h-screen w-full bg-white text-4xl flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap"
        style={{
          backgroundImage: darkMode ? 'url("/grid.jpg")' : "",
          backgroundSize: "cover", // Adjust as needed
          // Add other background properties as needed
        }}
      >
        {/* overlay start */}
        <div
          className={`${darkMode? "opacity-0":"hidden opacity-0"} absolute h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-purple-500 opacity-20 pointer-events-none`}
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
        {/* overlay end */}

        {/* <div className="w-full flex h-screen  sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row  justify-center items-center overflow-hidden">
        <div className="h-fit basis-full space-y-20 pt-12">
          <h1 className="text-4xl text-white">
            🙋‍♂️ {`Hi, I'm`}{" "}
            <span className="italic text-yellow-500 font-semibold">Hakim</span>
          </h1>
          <p className="text-gray-300 text-2xl font-thin leading-relaxed tracking-wider">
            {`
            "A passionate software engineer with ${yearsOfExp} year(s) of experience in the industry. I specialize in creating elegant, efficient, and innovative software solutions that drive real results."
            `}
          </p>
        </div>
        <div className=" h-[fit] basis-full relative pt-12">
          <Image
            src={"/Hakim1.png"}
            height={250}
            width={200}
            alt="Hakim"
            priority={true}
            className="object-cover"
          />
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Hero;
