"use client";
import React, { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GrFormNext,GrFormPrevious } from "react-icons/gr"

export default function Page() {
  const [active, setActive] = useState(1)
  const moveForward = () => {
    setActive((active + 1) % Elements.length);
  }
  
  const moveBackwards = () => {
    setActive((active - 1 + Elements.length) % Elements.length);
  }
  
  let Elements = [
   'first',
   'second',
   'third',
   'forth',
   'fifth'
  ];
  var incomingCard = active ===0? Elements[Elements.length -1] : Elements[active-1]
  var activeCard = Elements[active]
  var outgoingCard = active === Elements.length - 1? Elements[0] : Elements[active + 1]

  return (
    <div>
      <div className="flex justify-center items-center w-screen">
        <div className="relative">
          {/* backIcon */}
          <BiSkipPrevious className="absolute bg-gray-200 shadow-md shadow-gray-600 rounded-full p-2 text-black font-bold z-50 -left-14 top-20 cursor-pointer hover:scale-105 transition-all duration-200" size={30} onClick={moveBackwards}/>
          {/* simulated Carousel Elements */}
          <div className="w-[200px] h-[180px] bg-red-400 absolute -left-10 opacity-50 rounded top-2 flex justify-center items-center"></div>
          <div className="w-[200px] h-[200px] bg-violet-500 absolute z-50 rounded shadow-lg shadow-black flex justify-center items-center">{active}</div>
          <div className="w-[200px] h-[180px] left-10 bg-blue-500 absolute rounded opacity-50 top-2 flex justify-center items-center"></div>
          {/* forwardIcon */}
          <BiSkipNext className="absolute bg-gray-200 shadow-md shadow-gray-600 rounded-full p-2 text-black font-bold z-50 left-56 top-20 cursor-pointer hover:scale-105 transition-all duration-200" size={30} onClick={moveForward}/>
        </div>
      </div>
        {active}
    </div>
  );
}
