import React, { useCallback } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import Carousel from './Carousel';
import { BsGithub } from 'react-icons/bs';


const Modal = ({closeModal, project}) => {


  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-gray-300 bg-opacity-70 flex items-center justify-center'>
      <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] w-[75vw] h-auto rounded-2xl p-10 overflow-y-auto'>
        <div className='flex justify-between text-white border-gray-400 border-b pb-2 mb-5'>
            <span>About Project</span>
            <button onClick={closeModal}>
              <MdOutlineCancel size={25}/>
            </button>
        </div>
        <section className='flex flex-col md:flex-row'>
          <div className='text-white p-5 flex-1 self-center'>
            <Carousel autoSlide={true} autoSlideInterval={3000} project={project}>
              {project.image.map((image, index) => (
                <img key={index} src={image} alt="" />
              ))}
            </Carousel>
          </div>
          <div className='md:border-l md:p-10 sm:p-5 flex-1 text-white'>
            <span className='text-lg font-semibold'>{project.title}</span>
            <p className='my-5'>{project.description}</p>
            <div className='flex flex-wrap gap-5 my-5'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='rounded-lg bg-black p-2 border border-[#63e]'>
                                {tech}
                            </span>
                        ))}
            </div>
            <div className='flex sm:flex-row flex-col flex-wrap gap-3'>
              <button className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-2 rounded-md text-white font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-[#63e] flex-1">
                <a href="https://moiveo-app.netlify.app/" target='_blank'>Live Preview</a>
              </button>
              <button className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-2 rounded-md text-white font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-[#63e] flex-1"> <BsGithub className='inline mr-2' size={20}/> 
                <a href="https://github.com/shiffydeen/Movie-App" target='_blank'>Source code</a>
              </button>
            </div>
            

            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Modal


{/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}