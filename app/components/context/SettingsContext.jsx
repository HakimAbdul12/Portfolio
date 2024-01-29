'use client'
import { createContext, useState, useContext } from "react"
const SettingsContext = createContext();

export const SettingsContextProvider = ({children}) => {
    const [settingsoOn, setOnOrOff] = useState(false);
    const [showing, setShowing] = useState(false);

    const toggleSettings = () => {
        setOnOrOff((prev)=>(!prev));
        if(settingsoOn !== showing){
          setShowing(false);
        }
      }
      const toggleSocialMedia = () =>{
        setShowing((prev)=>(!prev));
        if(settingsoOn !== showing){
          setOnOrOff(false);
        }
    }
    return(
        <SettingsContext.Provider value={{toggleSettings, toggleSocialMedia, settingsoOn, setOnOrOff, showing, setShowing}}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettingProvider = () => {
    return useContext(SettingsContext)
};