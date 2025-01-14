import React, { useCallback } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import Carousel from './Carousel';


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
          <div className='text-white p-5 flex-1'>
            <Carousel autoSlide={true} autoSlideInterval={3000} project={project}>
              {project.image.map((image, index) => (
                <img key={index} src={image} alt=""/>
              ))}
            </Carousel>
          </div>
          <div className='md:border-l md:p-10 sm:p-5 flex-1 text-white'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Modal


{/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}