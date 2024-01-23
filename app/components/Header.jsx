"use client";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from './DarkModeContext';
import { useHeaderIsUp } from "./context/NavigationContext";

export default function Header() {
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
  const [active, setActive] = useState("Home");
  const {headerShouldDropDown} = useHeaderIsUp();

  return (
    <>
      <header className={`${darkMode? "bg-slate-950 shadow-lg shadow-black border border-gray-500": "bg-violet-600 shadow-md shadow-black"} w-[70%] h-fit py-3 px-8 fixed z-50 rounded-br-[50px] rounded-bl-[50px] left-[15%] ${headerShouldDropDown ? "goDown" : "goUp"}`}>
        <nav>
          <ul className="flex justify-around">
            {navs.map((navItem, idx) => (
              <Link key={idx} href={`${navItem.url}`} scroll={true}>
                <li
                  onClick={() => setActive(navItem.title)}
                  className={`${ active === navItem.title ? darkMode? " shadow-xl scale-105": "bg-gradient-to-tr from-violet-800 to-violet-600":""} py-2 px-5 rounded-full text-white hover:text-white font-bold ${darkMode? "shadow-sm hover:shadow-md shadow-black": "hover:bg-violet-800 hover:shadow-xl"} duration-300 cursor-pointer`}>
                  {navItem.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

const navs = [
  { url: "/", title: "Home" },
  { url: "/aboutme", title: "About" },
  { url: "/experience", title: "Experience" },
  { url: "/projects", title: "Projects" },
  { url: "/contactme", title: "Contact" },
];
