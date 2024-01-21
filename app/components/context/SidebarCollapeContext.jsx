"use client";
import { createContext, useContext, useState } from "react";
const SidebarCollapeContext = createContext();

export const SidebarCollapeContextProvider = ({ children }) => {

  const [collapse, setCollapse] = useState(false);

  const funcSetCollapse = () => {
    setCollapse((btn) => !btn);
  };
  const hardCodeCollapseToFalse = () =>{
    setCollapse(true);
  }

  return (
    <SidebarCollapeContext.Provider value={{ collapse, funcSetCollapse, hardCodeCollapseToFalse }}>
      {children}
    </SidebarCollapeContext.Provider>
  );
};

export const useCollapse = () => {
 return useContext(SidebarCollapeContext);
};
