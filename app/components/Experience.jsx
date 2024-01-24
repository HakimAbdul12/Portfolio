"use client"
import React from "react";
import Image from "next/image";
import LanguageImage from "./LanguageImage";
import { useDarkMode } from "./DarkModeContext";


export const Experience = () => {
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
  useDarkMode();
  return (
    <div
      id="experience"
      className="h-screen w-full  text-4xl overflow-y-auto gap-3 py-3 lg:py-20"
      style={{
        backgroundImage: darkMode ? 'url("/grid.jpg")' : 'url("/whitebg1.jpg")',
        backgroundSize: "cover", // Adjust as needed
        // Add other background properties as needed
      }}
    >

      <div className={`text-5xl grid place-content-center text-center text-black font-bold py-11 h-fit`}>
        <TextAnimation/>
      </div>
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div className="rounded w-52 h-52 bg-gray-400 shadow-md shadow-black overflow-hidden">
          <Image
            alt="javascript"
            height={250}
            width={208}
            src={"/JavaScript-01.png"}
            className="object-cover"
            priority={true}
          />
        </div>

        <div className="rounded w-52 h-52 bg-gray-400 shadow-md shadow-black overflow-hidden">
          <Image
            alt="javascript"
            height={208}
            width={208}
            src={"/HTML-5.png"}
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="rounded w-52 h-52 bg-gray-400 shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/JQuery-01.png"} alttext={"JQuery"}/>
        </div>
        <div className="rounded w-52 h-52 bg-slate-300 shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/Laravel-04.png"} alttext={"Laravel"}/>
        </div>
        <div className="rounded w-52 h-52 bg-[#563b7b] shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/Bootstrap-07.png"} alttext={"Bootstrap 5"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/CSS-3-01.png"} alttext={"CSS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/Node-JS-01.png"} alttext={"Node JS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/React-01.png"} alttext={"React"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/Nextjs-01.png"} alttext={"NextJS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/MySQL-01.png"} alttext={"MySQL"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/Python-04.png"} alttext={"Python"}/>
        </div>
        <div className="rounded w-52 h-52 bg-purple-300 shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/PHP-01.png"} alttext={"Python"}/>
        </div>
        <div className="rounded w-52 h-52 bg-purple-300 shadow-md shadow-black overflow-hidden">
          <LanguageImage from={"/pngwing.com.png"} alttext={"Python"}/>
        </div>
      </div>
    </div>
  );
};  

 const TextAnimation = () => {
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
  useDarkMode();
  return (
    <h2 className={`text-center text-5xl font-semibold ${darkMode? "text-white":"text-gray-800"} cursor-pointer`}>
      {'Proficient languages and frameworks'.split('').map((child, idx)=>(
        <span className="niceText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
}

export default Experience;
