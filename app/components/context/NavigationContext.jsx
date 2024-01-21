"use client"
import { createContext, useContext, useLayoutEffect, useState } from "react";
const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
    const [headerShouldDropDown, setDrop] = useState(false);

    useLayoutEffect(() => {
        function checkWindowSize() {
             // Adjust the screen width breakpoint as needed
            if(window.innerWidth >= 990){
                setDrop(true);
            }
            else{
                setDrop(false);
            }
        }
            // Initial check and event listener setup
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);

        // Clean up the event listener on unmount
        return () => {
        window.removeEventListener("resize", checkWindowSize);
        };
    },[]);
  return (
    <NavigationContext.Provider value={{headerShouldDropDown}}>
        {children}
    </NavigationContext.Provider>
  )
}

export const useHeaderIsUp = () => {
    return useContext(NavigationContext);
};
