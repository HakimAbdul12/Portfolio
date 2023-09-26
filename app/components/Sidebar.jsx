"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import { FiMinimize } from "react-icons/fi";
import { TbArrowsMaximize } from "react-icons/tb"
import { IoSettingsOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { GoReport } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSupport, BiMoneyWithdraw } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiAutoRepair } from "react-icons/gi";
import { AiOutlinePropertySafety } from "react-icons/ai";
import SidebarContext from "./SidebarContext";

export default function Sidebar() {
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    // Add a resize event listener to update the toggler state when the window is resized
    function handleResize() {
      setToggler(window.innerWidth > 768); // Adjust the screen width breakpoint as needed
    }

    // Initial check and event listener setup
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle = () =>{
    setToggler((btn)=>(!btn))
  }
  return (

      <div className={`h-screen p-2 bg-violet-600 text-white  transition-all duration-300 overflow-x-visible overflow-hidden rounded-lg space-y-4 ${toggler? "w-[320px]":" w-[100px]"}`}>
        <div className=" py-2 mb-2">
          <div className={`flex transition-all duration-300 ${toggler?"justify-between":"justify-center"}`}>
            <Image
              alt="logo"
              property="true"
              width={60}
              src="/next.svg"
              height={60}
              className={`${toggler? "w-20": "w-0"} transition-all`}
            />
            <div className="icon" onClick={toggle}>
              {toggler? <FiMinimize  className="text-purple-300 text-xl cursor-pointer" /> : <TbArrowsMaximize className="text-purple-300 text-2xl cursor-pointer"/>}
            </div>
          </div>
        </div>
      <SidebarContext.Provider value={{toggler}}>
        <ul className="flex-col h-[80vh] rounded-sm p-3  border-b-2 border-violet-500 space-y-3  overflow-x-visible overflow-scroll cont">
          <SidebarItem
            text={"Dashboard"}
            icon={<LuLayoutDashboard className={`transition-all duration-300 ${toggler?"text-3xl":"text-4xl"} text-violet-300`} />}
          />
        
          <SidebarItem
            text={"Maintenance Requests"}
            icon={<GiAutoRepair className="text-3xl text-violet-300" />}
          />
          <SidebarItem
            text={"Financial Management"}
            icon={<BiMoneyWithdraw className="text-3xl text-violet-300" />}
          />
          <SidebarItem
            text={"Property Management"}
            icon={
              <AiOutlinePropertySafety className="text-3xl text-violet-300" />
            }
          />
          <SidebarItem
            text={"Chat"}
            icon={<BsFillChatDotsFill className="text-3xl text-violet-300"/>}
            alert
          />
          <SidebarItem
            text={"Report"}
            icon={<GoReport className="text-3xl text-violet-300" />}
          />
          <SidebarItem
            text={"Settings"}
            icon={<IoSettingsOutline className="text-3xl text-violet-300" />}
            alert
          />
          <SidebarItem
            text={"Help and Support"}
            icon={<BiSupport className="text-3xl text-violet-300" />}
          />
        </ul>
        </SidebarContext.Provider>
        <div className={`flex cursor-pointer gap-1 ${toggler?"mt-2":""}`}>
          <div className={`w-fit h-max bg-violet-500 place-self-auto flex justify-center items-center transition-all duration-300 rounded-lg border-gray-800 drop-shadow-md ${toggler?"p-3":"p-3"}`}>
            <h1 className={`text-center  leading-7 font-bold self-center ${toggler? "text-3xl":"text-3xl"}`}>
              AH
            </h1>
          </div>
          <div className={`flex-col transition-all duration-900 px-1 overflow-hidden ${toggler? "w-fit": "w-0"}`}>
            <h5 className={`text-lg leading-5 text-zinc-300 m-0 transition-all overflow-hidden`}>Abdul Hakim</h5>
            <h5 className={`font-thin overflow-hidden`}>Publiser</h5>
          </div>
        </div>
      </div>
  );
}
