import React from "react";
import Image from "next/image";
import LanguageImage from "./LanguageImage";


export const Experience = () => {
  return (
    <div
      id="experience"
      className="h-fit w-fit languages bg-white text-4xl justify-center items-center sm:p-5 md:p-5"
    >
      <h1 className={`text-5xl text-center text-black font-bold py-11`}>Proficient Languages</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div className="rounded w-52 h-52 bg-gray-400 shadow-lg shadow-black overflow-hidden">
          <Image
            alt="javascript"
            height={250}
            width={208}
            src={"/JavaScript-01.png"}
            className="object-cover"
            priority={true}
          />
        </div>

        <div className="rounded w-52 h-52 bg-gray-400 shadow-lg shadow-black overflow-hidden">
          <Image
            alt="javascript"
            height={208}
            width={208}
            src={"/HTML-5.png"}
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="rounded w-52 h-52 bg-gray-400 shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/JQuery-01.png"} alttext={"JQuery"}/>
        </div>
        <div className="rounded w-52 h-52 bg-slate-300 shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/Laravel-04.png"} alttext={"Laravel"}/>
        </div>
        <div className="rounded w-52 h-52 bg-[#563b7b] shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/Bootstrap-07.png"} alttext={"Bootstrap 5"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/CSS-3-01.png"} alttext={"CSS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/Node-JS-01.png"} alttext={"Node JS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/React-01.png"} alttext={"React"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/Nextjs-01.png"} alttext={"NextJS"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/MySQL-01.png"} alttext={"MySQL"}/>
        </div>
        <div className="rounded w-52 h-52 bg-white shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/Python-04.png"} alttext={"Python"}/>
        </div>
        <div className="rounded w-52 h-52 bg-purple-300 shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/PHP-01.png"} alttext={"Python"}/>
        </div>
        <div className="rounded w-52 h-52 bg-purple-300 shadow-lg shadow-black overflow-hidden">
          <LanguageImage from={"/pngwing.com.png"} alttext={"Python"}/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
