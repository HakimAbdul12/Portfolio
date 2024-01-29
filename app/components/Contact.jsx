"use client";
import { useDarkMode } from "./DarkModeContext";
import { useCollapse } from "./context/SidebarCollapeContext";

export const Contact = () => {
  const { darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } =
    useDarkMode();
    const { collapse, funcSetCollapse, hardCodeCollapseToFalse } = useCollapse();

  return (
    <div
      id="contact"
      className={`bg-white min-h-screen w-full text-4xl flex-col flex justify-center items-center `}
      style={{
        backgroundImage: darkMode ? 'url("/grid.jpg")' : 'url("/whitebg1.jpg")',
        backgroundSize: "cover", // Adjust as needed
        // Add other background properties as needed
      }}
      onClick={hardCodeCollapseToFalse}
    >
      <form action="" className={`w-[70%]`}>
        <div
          className={`min-h-[80%] w-full ${darkMode? "bg-slate-950 border border-gray-500":"bg-violet-600"}   rounded-lg shadow-xl p-5 sm:p-10 md:p-20 lg:p-24 xl:p-24 space-y-5 sm:space-y-5 md:space-y-10`}
        >
          <div className={`flex justify-between flex-col md:flex-row`}>
            <div className="">
              <label
                htmlFor="first-name"
                className="block text-sm sm:text-lg font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-1 sm:mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[450px] rounded-md border-0 text-sm py-1 sm:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="last-name"
                className="block text-sm sm:text-lg font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-1 sm:mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[450px] rounded-md border-0 text-sm py-1 sm:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className={`flex justify-between flex-col md:flex-row`}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm sm:text-lg font-medium leading-6 text-white"
              >
                Email addrees
              </label>
              <div className="mt-1 sm:mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="block w-full md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[450px] rounded-md border-0 text-sm py-1 sm:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm sm:text-lg font-medium leading-6 text-white"
              >
                Country
              </label>
              <div className="mt-1 sm:mt-2">
                <input
                  type="country"
                  name="country"
                  id="country"
                  autoComplete="given-name"
                  className="block w-full md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[450px] rounded-md border-0 text-sm py-1 sm:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className={`flex justify-around flex-col sm:flex-row`}>
            <div className="basis-full">
              <label
                htmlFor="message"
                className="block text-sm sm:text-lg font-medium leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-1 sm:mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1 px-2 sm:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-center items-center`}>
          <button type="submit" className={`${darkMode? "bg-slate-950 border border-gray-500":"bg-violet-600"}  text-white text-lg sm:text-xl md:text-2xl px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-bl-[30px] rounded-br-[30px]`}>send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
