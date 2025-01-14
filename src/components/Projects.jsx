import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import { motion } from 'framer-motion';

const projectsData = [
    {
        cover: image1,
        image: [image1, image2, image3, image4, image5],
        title: "Habit Tracker",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ducimus voluptatum voluptatem saepe quos qui! Fugiat unde velit dicta.",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"],
       
        
    },
    {
        cover: image2,
        image: [image1, image2, image3, image4, image5],
        title: "Todo App",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ducimus voluptatum voluptatem saepe quos qui! Fugiat unde velit dicta.",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        cover: image3,
        image: [image1, image2, image3, image4, image5],
        title: "Social Media App",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ducimus voluptatum voluptatem saepe quos qui! Fugiat unde velit dicta.",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        cover: image4,
        image: [image1, image2, image3, image4, image5],
        title: "Weather App",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ducimus voluptatum voluptatem saepe quos qui! Fugiat unde velit dicta.",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        cover: image5,
        image: [image1, image2, image3, image4, image5],
        title: "E-commerce",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ducimus voluptatum voluptatem saepe quos qui! Fugiat unde velit dicta.",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
]

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
            <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
                <img src={project.cover} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' onClick={() => {openModal(project)}}/>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className='text-xl font-semibold cursor-pointer' onClick={() => openModal(project)}>{project.title}</div>
                        <p className='text-gray-400'>{project.description}</p>
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
