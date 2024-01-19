"use client"
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const storedMode = localStorage.getItem('DarkMode') === "true";
    const [darkMode, setDarkMode] = useState(storedMode);

    const toggleDarkMode = () => {

        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('DarkMode', newMode.toString());
    };
    const hardCodeTrue = () =>{
        setDarkMode(true);
        localStorage.setItem('DarkMode', 'true');
    }
    const hardCodeFalse = () =>{
        setDarkMode(false);
        localStorage.setItem('DarkMode', 'false');
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode, hardCodeTrue, hardCodeFalse}}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}