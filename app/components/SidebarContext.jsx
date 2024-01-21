"use client";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [toggler, setToggler] = useState(false);
  const toggle = () => {
    setToggler((btn) => !btn);
  };
  return (
    <SidebarContext.Provider value={{ toggler, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useToggler = () => {
  return useContext(SidebarContext);
};
