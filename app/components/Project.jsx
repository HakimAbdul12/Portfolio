"use client"
import { useDarkMode } from './DarkModeContext';
import ProjectCard from './ProjectCard'
import { useCollapse } from "./context/SidebarCollapeContext";

export const Project = () => {
  const {darkMode, toggleDarkMode, hardCodeFalse, hardCodeTrue } = useDarkMode();
  const { collapse, funcSetCollapse, hardCodeCollapseToFalse } = useCollapse();
  return (
    <div id='projects' className='h-screen w-full bg-white text-4xl flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap'
    style={{
      backgroundImage: darkMode
        ? 'url("/grid.jpg")'
        : 'url("/whitebg1.jpg")',
      backgroundSize: 'cover', // Adjust as needed
      // Add other background properties as needed
    }}
    onClick={hardCodeCollapseToFalse}
    >
      <ProjectCard projectName={'Concern Assembly members of Ghana (CAMAG)'} from={'/Camag.png'} path={'https://camaghana.org/'}/>
      <ProjectCard projectName={'TechOne IT Solutions (TechOne IT)'} from={'/Techone.png'} path={'https://techoneitsolutions.com/'}/>
    </div>
  )
}

export default Project