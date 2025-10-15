import React from 'react'
import { BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoSass, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { RiNextjsFill, RiNextjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

const Tech = () => {

    const variants = {
        hidden:{opacity:0, y:50},
        visible:{opacity:1, y:0}
    }

  return (
    <div id='tech' className='flex min-h-[20vh] w-full flex-col items-center justify-center gap-12 md:gap-12'>
        <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className='text-4xl font-light text-white md:text-6xl'>My Tech Stack</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5"> 
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}>
                <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>   
                <h2 className='text-base font-light text-white md:text-md text-center'>TailwindCSS</h2>
            </motion.div>  
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}>
                <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>    
                <h2 className='text-base font-light text-white md:text-md text-center'>JavaScript</h2>
            </motion.div>
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}>
                <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>  
                <h2 className='text-base font-light text-white md:text-md text-center'>React</h2>
            </motion.div>  
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}>  
                <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>  
                <h2 className='text-base font-light text-white md:text-md text-center'>TypeScript</h2>
            </motion.div>  
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}>  
                <RiNextjsLine className='cursor-pointer text-[80px] text-gray-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>  
                <h2 className='text-base font-light text-white md:text-md text-center'>NextJs</h2>
            </motion.div>  
        </div>
    </div>
  )
}

export default Tech
