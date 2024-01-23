import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Settings from "./components/Settings";
import { DarkModeProvider } from "./components/DarkModeContext";
import { NavigationContextProvider } from "./components/context/NavigationContext";
import { SidebarCollapeContextProvider } from "./components/context/SidebarCollapeContext";
import SidebarCollapseButton from "./components/SidebarCollapseButton";
import { SidebarContextProvider } from "./components/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <NavigationContextProvider>
        <SidebarCollapeContextProvider>
          <SidebarContextProvider>
        <html
          lang="en"
          className="overflow-hidden w-[100%] h-[100%]"
        >
          
          <body
            className={`${inter.className} flex relative w-full h-[100%] overflow-hidden`}
          >
            <SidebarCollapseButton/>
            <div className={`h-full overflow-visible z-40 absolute`}>
              <Sidebar />
            </div>
            <div className={`h-full w-full overflow-y-auto`}>{children}</div>
            <Header />
            <Settings />
          </body>
        </html>
        </SidebarContextProvider>
        </SidebarCollapeContextProvider>
      </NavigationContextProvider>
    </DarkModeProvider>
  );
}
