"use client"
import { useDarkMode } from './DarkModeContext';

export const Contact = () => {
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();

  return (
    <div id='contact' className={`bg-white h-screen w-full text-4xl flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap`}
    style={{
      backgroundImage: darkMode
        ? 'url("/grid.jpg")'
        : '',
      backgroundSize: 'cover', // Adjust as needed
      // Add other background properties as needed
    }}
    >
    {/* overlat start */}
    <div
        className={`${darkMode? "":"hidden"} absolute h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-purple-500 opacity-20 pointer-events-none`}
      ></div>
      <div
        className={`absolute h-[400%] w-[400%] pointer-events-none opacity-[0.02] bg-no-repeat z-30 bg-center noisy-overlay ${
          darkMode ? "visible" : "invisible"
        }`}
        style={{
          backgroundImage: darkMode ? 'url("/noisy.jpg")' : "",
          backgroundSize: "cover", // Adjust as needed
          // Add other background properties as needed
        }}
      ></div>
      {/* overlay end */}

        
    </div>
  )
}

export default Contact