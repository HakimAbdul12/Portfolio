"use client";
import { useCollapse } from "./context/SidebarCollapeContext";
import { useDarkMode } from "./DarkModeContext";
import { useToggler } from "./SidebarContext";
import { LuMoveHorizontal } from "react-icons/lu";

export default function SidebarCollapseButton ()  {
  const { collapse, funcSetCollapse, hardCodeCollapseToFalse } = useCollapse();
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();
    const {toggler,toggle} = useToggler();

  return (
    <>
      <div
        className={`z-50 fixed ${
          darkMode ? "bg-slate-200" : "bg-white"
        }  cursor-pointer shadow-sm shadow-black rounded-br-[20px] flex justify-center items-center ${collapse? "h-[35px] w-[35px]": toggler? "hidden":"h-[35px] w-[35px]"} lg:hidden`}
        onClick={funcSetCollapse}
      >
      <LuMoveHorizontal className={`font-bold ${collapse? "rotate-180":"rotate-0"} transition-all duration-300`} />
      </div>
    </>
  );
};
