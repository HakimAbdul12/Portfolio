"use client";
import React, { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

export default function Page() {
  const arrayNumbers = [
    "Hakim",
    "Halius",
    "Fausty",
    "Divina",
    "Lordina",
    "Adam",
  ];
  const [activeIndex, setActiveIndex] = useState(
    arrayNumbers.indexOf("Fausty")
  );

  const moveBack = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const moveForward = () => {
    if (activeIndex < arrayNumbers.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    const past = document.getElementById('past')
    const active = document.getElementById('active')
    const incoming = document.getElementById('incoming')
    past.classList.add("past")
    active.classList.add("active")
    incoming.classList.add("incoming")

  };

  const prev = activeIndex > 0 ? arrayNumbers[activeIndex - 1] : "";
  const active = arrayNumbers[activeIndex];
  const next =
    activeIndex < arrayNumbers.length - 1 ? arrayNumbers[activeIndex + 1] : "";

  return (
    <div>
      <div className="cursor-pointer" onClick={moveBack}>
        <BiSkipPrevious />
      </div>
      <button className='transition-all duration-150'>{prev}</button>
      <button className="text-blue-700 transition-all duration-150">{active}</button>
      <button className='transition-all duration-300'>{next}</button>
      <div className="cursor-pointer" onClick={moveForward}>
        <BiSkipNext />
      </div>

      <div className="flex justify-center items-center w-screen">
        <div className="relative">
          {/* <div className='w-[200px] h-[180px] bg-red-400 absolute -left-10 opacity-50 rounded top-2 flex justify-center items-center'>{prev}</div> */}
          <div className="w-[200px] h-[180px] bg-red-400 absolute -left-10 opacity-50 rounded top-2 flex justify-center items-center" id="incoming">
            {prev}
          </div>
          <div className="w-[200px] h-[200px] bg-violet-500 absolute z-50 rounded shadow-lg shadow-black flex justify-center items-center" id="active">
            {active}
          </div>
          <div className="w-[200px] h-[180px] left-10 bg-blue-500 absolute rounded opacity-50 top-2 flex justify-center items-center" id="past">
            {next}
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        <BiSkipPrevious size={60}/>
      </div>
      <div className="cursor-pointer" onClick={moveForward}>
        <BiSkipNext size={60}/>
      </div>
    </div>
  );
}
