import image from '../images/image.jpg';
import sheriff from '../images/shiffy.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            {/* <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            >
                <img src={sheriff} alt="" className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]'/>
            </motion.div> */}
        
            <motion.div 
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            className="flex w-[100vw] md:max-w-[800px] flex-col items-center justify-center gap-3 text-center">
                <h1 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl'>Hello! I'm</h1>
                <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>Aderombi Sheriff</h1>
                <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl mb-4'>Frontend Developer</h3>
                <p className='md:text-base text-pretty text-sm/5 text-gray-200 text-left mx-5 text-justify'>
                I am a frontend developer with a strong focus on building modern, user-centric web applications using React, Next.js, JavaScript, and TypeScript. I combine technical expertise with an eye for design, leveraging UI frameworks such as Tailwind CSS and Styled Components to craft responsive, performant, and visually engaging interfaces. Beyond writing clean, maintainable code, I thrive on solving complex UI challenges, optimizing user flows, and bringing ideas from concept to polished product. Driven by curiosity and continuous learning, I stay ahead of emerging trends to deliver solutions that not only meet business goals but also elevate the user experience.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
