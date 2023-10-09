"use client"
import React from 'react'
import MyWhatAppQRcode from './MyWhatAppQRcode'
import { useState } from 'react'
import { IoLogoFacebook,IoLogoWhatsapp } from "react-icons/io"
import { FaSquareThreads,FaSkype,FaDiscord } from "react-icons/fa6"
import { FaTwitter,FaTiktok } from "react-icons/fa"
import { IoShareSocialSharp } from "react-icons/io5"
import { BsTelegram } from "react-icons/bs"
import { BiLogoTelegram,BiLogoTiktok } from "react-icons/bi"

export const Contact = () => {
const [showing, setShowing] = useState(false)
const showSocialIcons = () =>{
  setShowing(true)
}
const PushBackSocialIcon = () =>{
   setShowing(false)
}

  return (
    <div id='contact' className='h-screen w-full bg-white text-4xl flex flex-wrap justify-evenly items-center'>
      <div>
        <div className={`relative justify-center items-center ${showing? "":""}`} onMouseEnter={showSocialIcons} onMouseLeave={PushBackSocialIcon}>
          <IoShareSocialSharp className={`${showing? "rotate-[360deg] text-5xl shadow-none":"rotate-0"} cursor-pointer transition-all duration-500 text-6xl  absolute z-10 -left-2 -top-4 p-3 bg-violet-600 rounded-full text-white shadow-md shadow-black`}/>
          <IoLogoFacebook className={`text-4xl text-blue-600 absolute transition-all cursor-pointer duration-500 ${showing? "-top-24 text-5xl":"top-0"}`}/>
          <IoLogoWhatsapp className={`text-4xl text-green-600 absolute transition-all cursor-pointer duration-500 ${showing? "-left-24 text-5xl":"left-0"}`}/>
          <FaSquareThreads className={`text-4xl absolute transition-all cursor-pointer duration-500 ${showing? "left-24 text-5xl":"left-0"}`}/>
          <FaSkype className={`text-4xl text-blue-700 absolute transition-all cursor-pointer duration-500 ${showing? "left-20 -top-20 text-5xl":"left-0 top-0"}`}/>
          <FaTwitter className={`text-4xl text-blue-700 absolute transition-all cursor-pointer duration-500 ${showing? "top-24 text-5xl":"top-0"}`}/>
          <BiLogoTiktok className={`text-4xl absolute transition-all cursor-pointer duration-500 ${showing? "-left-20 -top-20 text-5xl":"left-0 top-0"}`}/>
          <BiLogoTelegram className={`text-4xl text-blue-500 absolute transition-all cursor-pointer duration-500 ${showing? "-left-20 top-20 text-5xl":"left-0 top-0"}`}/>
          <FaDiscord className={`text-4xl text-violet-500 absolute transition-all cursor-pointer duration-500 ${showing? "left-20 top-20 text-5xl":"left-0 top-0"}`}/>
        </div>
      </div>
      {/* <div className='h-fit'><MyWhatAppQRcode/></div> */}
    </div>
  )
}

export default Contact