"use client"
import { useContext, useState, useEffect } from "react"
import SidebarContext from "./SidebarContext"

export default function SidebarItem({text, alert, icon}) {
  let [active, setActive] = useState("Dashboard");

  const activeness = () =>{
    setActive(()=>{
      active = text
      console.log(active)
      return active
    })
  }
  const {toggler} = useContext(SidebarContext);
  return (
    <>
      <li className={`${active === text ? "bg-gradient-to-tr from-violet-800 to-violet-600 ": ""}  ${toggler? "gap-3 hover:bg-violet-800 rounded":"hover:bg-violet-800 rounded-full shadow-lg hover:shadow-2xl hover:shadow-black"} rounded-full shadow-lg hover:shadow-2xl hover:shadow-black flex relative cursor-pointer p-3  duration-300  hover:scale-110`} onClick={activeness}>
            {icon}
            <h1 className={` font-bold text-gray-300 transition-all duration-300 ${toggler? "text-[18px] leading-8": "flex-0 w-[0px] text-[0px]"}`}>{text}</h1>
            {alert && (<div className={`${toggler? "":" top-0"} absolute h-2 rounded w-2 right-2 bg-green-400 mt-3`}></div>)}
            {/* {!toggler && (<div className={`text-sm font-semibold bg-violet-400 text-zinc-500 w-[200px] transition-all rounded-md px-2 py-1 duration-300 absolute z-50 left-full ml-0  group-hover:invisble group-hover:translate-x-0`}>{text}</div>)} */}
      </li>
    </>
  )
}
