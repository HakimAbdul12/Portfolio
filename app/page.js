import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
      <main className=" bg-slate-500 h-fit w-fit relative flex justify-center flex-col items-center overflow-hidden">
        {/* navigation */}
        {/* <Header/> */}
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Socials/>
        <Contact/>
      </main>
    </>
  );
}


