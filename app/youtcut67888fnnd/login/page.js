"use client"
import React from "react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { useState } from "react";


export default function Page() {
  const [sneak, setSneak] = useState('translate-x-0');
  // cont [sneakStop, setSneakStop] =useState('');

  const stalking = () => {
    setSneak('translate-x-[100px]')
  }
  const stopSneaking = () => {
    setSneak('translate-x-0')
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <div className={`h-[100vh] w-1/2 -z-10 bg-yellow-500`}>

        </div>
        

        <div className={`w-1/2 flex justify-center items-center bg-violet-800 relative`}>
          <div className={`bg-violet-800 z-50`}>
            <form className={`space-y-10`}>
              <div className="h-[60px] w-full bg-violet-500 flex items-center justify-evenly px-3 rounded-md">
                <label className={`text-xl text-neutral-800 me-2 w-[86px]`} for="name">
                  Email:{" "}
                </label>
                <input
                  id="name"
                  className={`border-0 p-2 text-neutral-800 text-lg active:border-0 border-violet-500 bg-violet-500 active:bg-violet-500`}
                />
                <div className={`float-right px-2`}>
                  <BiUser className="font-bold text-[40px] text-neutral-800" />
                </div>
              </div>

              <div className="h-[60px] w-full bg-violet-500 flex items-center px-3 rounded-md ">
                <label className={`text-xl text-neutral-800 me-2`} for="name">
                  Passowrd:{" "}
                </label>
                <input
                  id="name"
                  onClick={stalking}
                  onBlur={stopSneaking}
                  className={`border-0 p-2 text-neutral-800 text-lg active:border-0 border-violet-500 bg-violet-500 active:bg-violet-500`}
                />
                <div className={`float-right px-2`}>
                  <BiUser className="font-bold text-[40px] text-neutral-800" />
                </div>{" "}
              </div>
            </form>
          </div>

          <div className={`absolute -z-10 -left-[126px]  transition-all duration-700 ${sneak}`}>
            <Image alt="sneak" src={"/stalkG.png"} height={219} width={127} />
        </div>
        </div>
      </div>
    </>
  );
}
