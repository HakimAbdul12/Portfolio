import React from "react";
import Image from "next/image";

export default function OtherDevelopers({name, position, from }) {
  return (
    <div className={` bg-violet-100 py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-black sm:flex sm:space-x-3 min-w-mdcustom sm:min-w-smcustom hover:shadow-xl hover:shadow-black hover:scale-105`}>
      <Image
        alt={name}
        src={from}
        height={100}
        width={100}
        className={`rounded-full mx-auto object-cover`}
      />
      <div className="py-3 flex justify-center">
        <div className={`space-y-0.5`}>
          <p className={`text-lg text-black font-semibold text-center sm:text-left md:text-left`}>{name}</p>
          <p className={`text-slate-500 font-medium text-sm`}>{position}</p>
        <button className={` transition-all duration-300 bg-violet-100 px-4 py-1 text-sm font-semibold rounded-full border border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500`}>Check</button>
        </div>
      </div>
    </div>
  );
}
