
import { motion } from 'framer-motion';
import { projectsData } from './portfolioData';


const ScrollReveal = ({children}) => {
    return (
        <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration: 0.8}}>    
                {children}
        </motion.div>
    )
}

const ProjectCard = ({project, openModal}) => {
    return (
        <ScrollReveal>
            <div id='projects' className='flex flex-col items-center gap-8 md:flex-row md:gap-20'>
                <img src={project.cover} alt="" className='w-4/5 cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' onClick={() => {openModal(project)}}/>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className='text-xl font-semibold cursor-pointer' onClick={() => openModal(project)}>{project.title}</div>
                        <p className='text-gray-400 line-clamp-2'>{`${project.description}...`}</p>
                        <button className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-3 rounded-md text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-[#63e]" onClick={() => openModal(project)}>Project Info</button>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='rounded-lg bg-black p-3 border border-[#63e]'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

const Projects = ({openModal}) => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} openModal={openModal}/>
            ))}
      </div>
    </div>
  )
}

export default Projects
