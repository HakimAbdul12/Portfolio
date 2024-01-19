"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMinimize } from "react-icons/fi";
import { TbArrowsMaximize } from "react-icons/tb"
import { IoSettingsOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSupport, BiMoneyWithdraw } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlinePropertySafety } from "react-icons/ai";
import SidebarContext from "./SidebarContext";
import { useDarkMode } from './DarkModeContext';

export default function Sidebar() {
  const [toggler, setToggler] = useState(false);
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();

  //icons and their names

  const sidebarItems = [
    {
      text: "About Me",
      icon: (
        <LuLayoutDashboard
          className={`transition-all duration-300 ${toggler ? "text-3xl" : "text-4xl"
            } text-white`}
        />
      ),
    },
    {
      text: "Interests",
      icon: (<BiSupport className="text-3xl text-white"/>),
    },
    {
      text: "Projects",
      icon: (<AiOutlinePropertySafety className="text-3xl text-white" />),
    },
    {
      text: "Contact Me",
      icon: (
        <BsFillChatDotsFill className="text-3xl text-white" />
      ),
    },
    {
      text: "Experience",
      icon: (
        <IoSettingsOutline className="text-3xl text-white" />
      ),
    },
  ];

  const toggle = () => {
    setToggler((btn) => (!btn))
  }

  return (
    <>

      <div className={`h-screen p-2 ${darkMode? "bg-slate-950":"bg-violet-600"} text-white shadow-lg shadow-slate-700 transition-all duration-300 overflow-visible z-50 space-y-4 ${toggler ? "w-[320px]" : "w-[100px]"}`}>
        <div className=" py-2 mb-2">
          <div className={`flex transition-all duration-300 ${toggler ? "justify-between" : "justify-center"}`}>
            <Image
              alt="logo"
              property="true"
              width={60}
              src="/next.svg"
              height={60}
              className={`${toggler ? "w-20" : "w-0"} transition-all`}
            />
            <div className="icon" onClick={toggle}>
              {toggler ? <FiMinimize className="text-purple-300 text-xl cursor-pointer" /> : <TbArrowsMaximize className="text-purple-300 text-2xl cursor-pointer" />}
            </div>
          </div>
        </div>
        <SidebarContext.Provider value={{ toggler }}>
          <ul className="flex h-[80vh] flex-col rounded-sm p-3 space-y-5 cont justify-center">
            {sidebarItems.map((Element) => (
              <SidebarItem key={Element.text} text={Element.text} alert={Element.alert} icon={Element.icon} />
            ))}
          </ul>
        </SidebarContext.Provider>
      </div>
    </>
  ); 
}
