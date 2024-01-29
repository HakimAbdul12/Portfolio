import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Settings from "./components/Settings";
import { DarkModeProvider } from "./components/DarkModeContext";
import { SidebarCollapeContextProvider } from "./components/context/SidebarCollapeContext";
import SidebarCollapseButton from "./components/SidebarCollapseButton";
import { SidebarContextProvider } from "./components/SidebarContext";
import { SettingsContextProvider } from "./components/context/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Aboagye Kumi kinsford",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <SidebarCollapeContextProvider>
        <SettingsContextProvider>
        <SidebarContextProvider>
          <html lang="en" className="overflow-hidden w-[100%] h-[100%]">
            <body
              className={`${inter.className} flex relative w-full h-[100%] overflow-hidden`}
            >
              <SidebarCollapseButton />
              <div className={`h-full overflow-visible z-40 absolute`}>
                <Sidebar />
              </div>
              <div className={`h-full w-full overflow-y-auto overscroll-none`}>{children}</div>
              <Header />
              <Settings />
            </body>
          </html>
        </SidebarContextProvider>
        </SettingsContextProvider>
      </SidebarCollapeContextProvider>
    </DarkModeProvider>
  );
}
