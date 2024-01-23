"use client"
import React from 'react'
import { IoSettings } from "react-icons/io5";
import { useDarkMode } from './DarkModeContext';
import { useState } from 'react';
import MyWhatAppQRcode from './MyWhatAppQRcode'
import { IoLogoFacebook,IoLogoWhatsapp } from "react-icons/io"
import { FaSquareThreads,FaSkype,FaDiscord } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5"

export default function Settings() {
    const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
    const [settingsoOn, setOnOrOff] = useState(false);
    const [showing, setShowing] = useState(false);

    const toggleTheme = () =>{
        toggleDarkMode();
    }
    const toggleThemeToDark = () =>{
        hardCodeTrue();
    };
    const toggleThemeToLight = () =>{
        hardCodeFalse();
    }
    const toggleSettings = () => {
      setOnOrOff((prev)=>(!prev));
      if(settingsoOn != showing){
        setShowing(false);
      }
    }
    const toggleSocialMedia = () =>{
      setShowing((prev)=>(!prev));
      if(settingsoOn != showing){
        setOnOrOff(false);
      }
    }
  return (
    <>
    <div className={'fixed p-0 z-30 top-[94%] left-[90%] sm:left-[92%] flex'}>
      <IoSettings className={`${settingsoOn? "rotate-180 scale-105":"rotate-0"} ${darkMode? "text-white":"text-violet-600" } text-3xl lg:text-4xl cursor-pointer transition-all duration-300`} onClick={toggleSettings}/>
      <div className={`${darkMode? "bg-slate-950":"bg-violet-600"} ${settingsoOn? "h-fit": "h-0 w-0 opacity-0"}  z-40 absolute right-[100%] mr-3 mt-4 rounded-md p-5 bottom-9 transition-all duration-300`}>
        <div className={`flex gap-3 justify-center items-center cursor-pointer text-white font-semibold ${settingsoOn? "": "h-0 w-0 opacity-0"}`}>
            <div onClick={toggleThemeToLight}>Light</div>
            <div className={`${settingsoOn? "h-fit w-[3.2rem]": "h-0 w-0"} ${darkMode? "bg-white" : "bg-blue-500"} rounded-xl m-0 shadow-inner shadow-black flex items-center py-[2px] px-[2px] transition-all duration-300`} onClick={toggleTheme}>
                <div className={`${darkMode? "translate-x-[1.5rem] bg-black":"bg-white"} ${settingsoOn? "h-[22px] w-[22px] mt-[1px]": "h-0 w-0 opacity-0"} rounded-full p-0 transition-all duration-300`}></div>
            </div>
            <div onClick={toggleThemeToDark}>Dark</div>
        </div>
      </div>
    </div>
    <div className={`fixed p-0 z-30 top-[88%] left-[90%] sm:left-[92%]`} onClick={toggleSocialMedia}>
      <div className={`relative`}>
        <IoShareSocialSharp className={`${showing? "rotate-180 shadow-none scale-105":"rotate-0"} ${darkMode? "bg-white":"bg-violet-600"} text-[30px] text-slate-950 cursor-pointer transition-all duration-300 p-2 absolute z-30 rounded-full`}/>
        <IoLogoWhatsapp className={` text-green-600 absolute transition-all cursor-pointer duration-500 z-10 ${showing? "text-[2.1rem] right-9 opacity-100 mt-0":"text-[0.25rem] opacity-0 mt-3 ml-3"}`}/>
        <FaSkype className={` text-blue-700 absolute transition-all cursor-pointer duration-500 z-10 ${showing?"text-[2.1rem] right-7 bottom-5 opacity-100 mt-0":"text-[0.25rem] opacity-0 mt-3 ml-3"}`}/>
        <IoLogoLinkedin className={` text-blue-400 absolute transition-all cursor-pointer duration-500 z-10 ${showing?"text-[2.1rem] bottom-9 opacity-100 mt-0":"text-[0.25rem] opacity-0 mt-3 ml-3"}`}/>
      </div>
    </div>
    </>
  )
}
