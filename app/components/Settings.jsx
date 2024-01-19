"use client"
import React from 'react'
import { IoSettings } from "react-icons/io5";
import { useDarkMode } from './DarkModeContext';

export default function Settings() {
    const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
    const toggleTheme = () =>{
        toggleDarkMode();
    }
    const toggleThemeToDark = () =>{
        hardCodeTrue();
    };
    const toggleThemeToLight = () =>{
        hardCodeFalse();
    }
  return (
    <div className={'fixed p-0 z-30 top-[94%] left-[94%] flex'}>
      <IoSettings className={`text-violet-600 text-3xl lg:text-4xl cursor-pointer`}/>
      <div className={`${darkMode? "bg-slate-950":"bg-violet-600"} h-fit z-40 absolute right-[100%] rounded-md p-5 bottom-9 transition-all duration-150`}>
        <div className='flex gap-3 justify-center items-center cursor-pointer text-white font-semibold'>
            <div onClick={toggleThemeToLight}>Light</div>
            <div className='h-fit w-[3.2rem] rounded-xl m-0 bg-white shadow-inner shadow-black flex items-center py-[2px] px-[2px]' onClick={toggleTheme}>
                <div className={`${darkMode? "translate-x-[1.5rem]":""} h-[22px] w-[22px] rounded-full bg-black mt-[1px] p-0 transition-all duration-300`}></div>
            </div>
            <div onClick={toggleThemeToDark}>Dark</div>
        </div>
      </div>
    </div>
  )
}
