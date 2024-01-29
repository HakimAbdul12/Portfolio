"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { useDarkMode } from './DarkModeContext';
import { usePathname } from "next/navigation";

export default function Header() {
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
  const [active, setActive] = useState("Welcome");
  const pathname = usePathname();

useLayoutEffect(()=>{
  const matchingNavItem = navs.find((navItem) => navItem.url === pathname);
    if (matchingNavItem) {
      setActive(matchingNavItem.title);
    }
},[])

  return (
    <>
      <header className={`${darkMode? "bg-slate-950 shadow-lg shadow-black border border-gray-500": "bg-violet-600 shadow-md shadow-black"} w-[70%] h-fit py-3 px-8 fixed z-50 rounded-br-[50px] transition-all duration-300 rounded-bl-[50px] left-[15%] -translate-y-[100px] lg:translate-y-[0px]`}>
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
  { url: "/", title: "Welcome" },
  { url: "/aboutme", title: "About" },
  { url: "/experience", title: "Experience" },
  { url: "/projects", title: "Projects" },
  { url: "/contactme", title: "Contact" },
];
