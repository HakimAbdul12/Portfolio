"use client"
import { useContext, useState, useEffect } from "react"
import SidebarContext from "./SidebarContext"
import { useDarkMode } from './DarkModeContext';
import { useToggler } from "./SidebarContext";

export default function SidebarItem({text, alert, icon}) {
  let [active, setActive] = useState("Dashboard");
  let [showing, setShowing] = useState(false);
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
  const { toggler, toggle} = useToggler();

  const activeness = () =>{
    setActive(()=>{
      active = text
      console.log(active)
      return active
    })
  }
  const show = ()=>{
    if(toggler === false){
      setShowing(true)
    }
  }
  const leave = ()=>{
    if(toggler === false){
      setShowing(false)
    }
  }
  return (
    <>
      <li className={`${toggler? "gap-3 rounded":" rounded-full"} ${darkMode? "shadow-sm hover:shadow-md shadow-black": "hover:bg-violet-700 shadow-sm hover:shadow-2xl"} rounded-full flex relative cursor-pointer p-2 sm:p-3 duration-300  hover:scale-110`} onClick={activeness} onMouseEnter={show} onMouseLeave={leave}>
            {icon}
            <h1 className={` font-bold text-gray-300 transition-all duration-300 ${toggler? "text-[18px] leading-8": "flex-0 w-[0px] text-[0px]"}`}>{text}</h1>
            <div className={`${darkMode? "bg-white text-black": "bg-violet-700 text-white"}  font-bold absolute backdrop-blur-3xl z-50 w-fit overflow-visible rounded p-2 cursor-pointer left-16 whitespace-nowrap flex flex-row justify-start gap-0 ${showing? "visible":"invisible"}`}><p className={`${darkMode? "bg-white":"bg-violet-700"} w-[20px] h-[20px] -translate-x-3 rotate-45 rounded`}></p><p className="-translate-x-3">{text}</p></div>
      </li>
    </>
  )
}
