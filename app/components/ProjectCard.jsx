import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ from, projectName, path }) {
  return (
    <div
      className={`rounded-lg flex flex-row sm:flex-col md:flex-col lg:flex-col bg-white w-[300px] sm:w-[300px] h-[160px] sm:h-[350px] overflow-hidden shadow-md shadow-black hover:scale-105 transition-all duration-500`}
    >
      <div className="object-fit overflow-hidden w-[250px] sm:h-[170px] sm:w-auto md:w-auto xl:w-auto h-fill relative shadow-sm shadow-gray-300">
        <Link href={path}>
          <Image
            alt={projectName}
            src={from}
            fill
            className="hover:scale-105 duration-300 transition-all mx-auto sm:mx-0"
          />
        </Link>
      </div>
      <div className="sm:p-2 md:p-3 lg:p-3 xl:p-3 h-full sm:h-auto md:h-auto flex flex-col justify-center items-center w-1/2 sm:w-auto md:w-auto lg:w-auto xl:h-auto 2xl:w-auto">
        <h1 className="text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl text-black text-center font-normal sm:font-bold md:font-bold lg:font-bold xl:font-bold 2xl:font-bold sm:h-[85px] md:h-[85px] lg:h-[85px] xl:h-[85px] 2xl:h-[85px]">{projectName}</h1>
        <div className="flex justify-center items-center">
        <Link href={path}>
          <button className="rounded-sm sm:rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg text-white p-1 text-sm sm:p-3 md:p-3 lg:p-3 xl:p-3 2xl:p-3 md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] sm:text-[20px] bg-violet-600 hover:animate-bounce">
            Visit
          </button>
        </Link>
        </div>
      </div>
      
    </div>
  );
}
