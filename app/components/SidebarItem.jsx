"use client"
import { useContext, useState, useEffect } from "react"
import SidebarContext from "./SidebarContext"

export default function SidebarItem({text, alert, icon}) {
  let [active, setActive] = useState("Dashboard");
  let [showing, setShowing] = useState(false);

  const activeness = () =>{
    setActive(()=>{
      active = text
      console.log(active)
      return active
    })
  }
  const {toggler} = useContext(SidebarContext);
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
      <li className={`${active === text ? "bg-gradient-to-tr from-violet-800 to-violet-600 ": ""}  ${toggler? "gap-3 hover:bg-violet-800 rounded":"hover:bg-violet-800 rounded-full shadow-lg hover:shadow-2xl hover:shadow-black"} rounded-full shadow-lg hover:shadow-md hover:shadow-gray-700 flex relative cursor-pointer p-3  duration-300  hover:scale-110`} onClick={activeness} onMouseEnter={show} onMouseLeave={leave}>
            {icon}
            <h1 className={` font-bold text-gray-300 transition-all duration-300 ${toggler? "text-[18px] leading-8": "flex-0 w-[0px] text-[0px]"}`}>{text}</h1>
            {alert && (<div className={`${toggler? "":" top-0"} absolute h-2 rounded w-2 right-2 bg-green-400 mt-3`}></div>)}
            <div className={`bg-white text-slate-400 font-bold absolute backdrop-blur-3xl z-50 w-fit overflow-visible rounded p-2 cursor-pointer left-16 whitespace-nowrap flex flex-row justify-start gap-0 ${showing? "visible":"invisible"}`}><p className={` w-[20px] h-[20px] bg-white -translate-x-3 rotate-45 rounded`}></p><p className="-translate-x-3">{text}</p></div>
      </li>
    </>
  )
}
