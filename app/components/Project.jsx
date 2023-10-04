import React from 'react'
import ProjectCard from './ProjectCard'

export const Project = () => {
  return (
    <div id='projects' className='h-screen w-full bg-violet-600 text-4xl flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap'>
      <ProjectCard projectName={'Concern Assembly members of Ghana (CAMAG)'} from={'/Camag.png'} path={'https://camaghana.org/'}/>
      <ProjectCard projectName={'TechOne IT Solutions'} from={'/Techone.png'} path={'https://techoneitsolutions.com/'}/>
    </div>
  )
}

export default Project