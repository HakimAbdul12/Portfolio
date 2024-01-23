"use client";
import { useDarkMode } from "./DarkModeContext";
import Image from "next/image";

const Hero = () => {
  let yearsOfExp = "";
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  yearsOfExp = currentYear - startYear;

  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();

  return (
    <>
      <div
        id="home"
        className="w-full min-h-screen text-4xl flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap"
        style={{
          backgroundImage: darkMode
            ? 'url("/grid.jpg")'
            : 'url("/whitebg1.jpg")',
          backgroundSize: "cover", // Adjust as needed
          // Add other background properties as needed
        }}
      >
        {/* overlay start */}
        <div
          className={`${
            darkMode ? "opacity-0" : "hidden opacity-0"
          } absolute h-[400%] w-[400%] bg-gradient-to-br from-gray-800 via-gray-700 to-purple-500 opacity-20 pointer-events-none`}
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

        <div className="w-full flex h-full flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row  justify-around items-center overflow-y-auto">
          <div className="basis-6/12 space-y-5 lg:space-y-16 px-5 py-12 sm:p-24 lg:p-28">
              <h1
                className={`sm:text-4xl md:text-4xl lg:text-5xl text-center lg:text-start ${
                  darkMode ? "text-white" : "text-black"
                } font-bold`}
              >
                {` I'm`}{" "}
                <span className={`text-violet-600 font-bold`}>Kingsford</span>{" "}
                <span
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } font-bold`}
                >
                  Aboagye
                </span>
              </h1>
            <p
              className={` ${
                darkMode ? "text-white" : "text-black"
              } text-center lg:text-left text-xl md:text-2xl font-normal xl:leading-relaxed tracking-wider`}
            >
              {`
            "A passionate software engineer with ${yearsOfExp} year(s) of experience in the industry. I specialize in creating elegant, efficient, and innovative software solutions that drive real results."
            `}
            </p>
            <div
              className={`flex justify-center items-center lg:justify-start`}
            >
              <button className={`bg-violet-600 text-white py-2 px-4 rounded-sm text-xl md:py-3 md:px-6 lg:px-10 md:text-2xl`}>open cv</button>
            </div>
          </div>
          <div className="relative px-5 py-12 sm:p-24 lg:p-28">
            <Image
              src={"/hakim2.png"}
              alt="Hakim"
              priority={true}
              height={400}
              width={400}
              className="object-cover drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
