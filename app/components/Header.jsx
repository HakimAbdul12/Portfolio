"use client";
import { useState } from "react";
import Link from "next/link";
//clg-console.log
export default function Header() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <header className="w-3/5 h-fit py-3 px-8 bg-violet-600 fixed z-30 backdrop-blur-sm top-8 rounded-full left-[20%]">
        <nav>
          <ul className="flex justify-around">
            {navs.map((navItem, idx) => (
              <Link key={idx} href={`${navItem.url}`} scroll={true}>
                <li
                  onClick={() => setActive(navItem.title)}
                  className={`${
                    active === navItem.title
                      ? "bg-gradient-to-tr from-violet-800 to-violet-600 text-black shadow-xl"
                      : ""
                  } py-2 px-5 rounded-full text-white hover:text-white hover:bg-violet-800 hover:shadow-xl duration-300 cursor-pointer`}
                >
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
