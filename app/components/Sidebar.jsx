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
import { IoIosRemove } from "react-icons/io"
import { GoMoveToEnd } from "react-icons/go"

export default function Sidebar() {
  const [toggler, setToggler] = useState(false);
  const [Collapse, setCollapse] = useState(false);


  //icons and their names

  const sidebarItems = [
    {
      text: "Dashboard",
      icon: (
        <LuLayoutDashboard
          className={`transition-all duration-300 ${toggler ? "text-3xl" : "text-4xl"
            } text-violet-300`}
        />
      ),
      alert: true
    },
    {
      text: "Report",
      icon: (<BiSupport className="text-3xl text-violet-300"/>),
    },
    {
      text: "Property management",
      icon: (<AiOutlinePropertySafety className="text-3xl text-violet-300" />),
    },
    {
      text: " Chat",
      icon: (
        <BsFillChatDotsFill className="text-3xl text-violet-300" />
      ),
      alert: true
    },
    {
      text: "Settings",
      icon: (
        <IoSettingsOutline className="text-3xl text-violet-300" />
      ),
      alert: true
    },
  ];


  

  useEffect(() => {
    // Add a resize event listener to update the toggler state when the window is resized
    function handleResize() {
      setToggler(window.innerWidth > 900); // Adjust the screen width breakpoint as needed
    }

    // Initial check and event listener setup
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle = () => {
    setToggler((btn) => (!btn))
  }
  const collapse = () => {
    setCollapse((btn) => (!btn))
  }
  return (
    <>
      <div className={`rounded-lg w-6 h-6 absolute transition-all text-4xl z-10 font-extrabold duration-300 cursor-pointer -left-1 flex items-center justify-center ${toggler? "invisible":""}`} onClick={collapse}>
        {Collapse ? <GoMoveToEnd className="text-black bg-white font-bold rounded-full" /> : <IoIosRemove className="text-black bg-white font-bold rounded-full" />}
      </div>

      <div className={`h-screen p-2 bg-violet-600 text-white shadow-lg shadow-violet-700 transition-all duration-300 overflow-visible z-50 space-y-4 ${toggler ? "w-[320px]" : (Collapse ? "w-0 p-0 hidden" : "w-[100px]")}`}>
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
          <ul className="flex-col h-[80vh] rounded-sm p-3  border-b-2 border-violet-500 space-y-5 cont">
            {sidebarItems.map((Element) => (
              <SidebarItem key={Element.text} text={Element.text} alert={Element.alert} icon={Element.icon} />
            ))}
          </ul>
        </SidebarContext.Provider>
        <div className={`flex cursor-pointer gap-1 ${toggler ? "mt-2" : ""}`}>
          <div className={`w-fit h-max bg-violet-500 place-self-auto flex justify-center items-center transition-all duration-300 rounded-lg border-gray-800 drop-shadow-md ${toggler ? "p-3" : "p-3"}`}>
            <h1 className={`text-center  leading-7 font-bold self-center ${toggler ? "text-3xl" : "text-3xl"}`}>
              AH
            </h1>
          </div>
          <div className={`flex-col transition-all duration-900 px-1 ${toggler ? "w-fit" : "w-0 hidden"}`}>
            <h5 className={`text-lg leading-5 text-zinc-300 m-0 transition-all`}>Abdul Hakim</h5>
            <h5 className={`font-thin `}>Publiser</h5>
          </div>
        </div>
      </div>
    </>
  ); 
}
