"use client";
import { createContext, useContext, useState, useLayoutEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  useLayoutEffect(() => {
    // Access localStorage here
    const storedMode =
      (typeof window !== "undefined"
        ? localStorage.getItem("DarkMode") === "true"
        : false) || false;
        setDarkMode(storedMode);
      
  }, []); // Empty dependency array ensures it runs only once when the component mounts
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== "undefined") {
      // Access localStorage here
      localStorage.setItem("DarkMode", newMode.toString());
    }
  };
  const hardCodeTrue = () => {
    if (typeof window !== "undefined") {
      setDarkMode(true);
      localStorage.setItem("DarkMode", "true");
    }
  };
  const hardCodeFalse = () => {
    if (typeof window !== "undefined") {
      setDarkMode(false);
      localStorage.setItem("DarkMode", "false");
    }
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode, hardCodeTrue, hardCodeFalse }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
