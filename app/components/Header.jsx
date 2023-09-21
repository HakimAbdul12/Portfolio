"use client";
import { useState } from "react";
import Link from "next/link";
//clg-console.log
export default function Header() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <header className="w-3/5 h-fit py-3 px-8 bg-white/70 fixed z-30 backdrop-blur-sm top-8 rounded-full border ">
        <nav>
          <ul className="flex justify-around">
            {navs.map((navItem, idx) => (
              <Link key={idx} href={`${navItem.url}`} scroll={true}>
                <li
                  onClick={() => setActive(navItem.title)}
                  className={`${
                    active === navItem.title
                      ? "bg-white text-black shadow-xl"
                      : ""
                  } py-2 px-5 rounded-full text-gray-600 hover:text-black hover:bg-blue-300 hover:shadow-xl duration-300 cursor-pointer`}
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
  { url: "#home", title: "Home" },
  { url: "#about", title: "About" },
  { url: "#experience", title: "Experience" },
  { url: "#projects", title: "Projects" },
  { url: "#socials", title: "Socials" },
  { url: "#contact", title: "Contact" },
];
