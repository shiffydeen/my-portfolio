// import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Carousel = ({project, children, 
    autoSlide=false, 
    autoSlideInterval=2000}) => {

    const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? project.image.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === project.image.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='overflow-hidden relative'> 
        <div className='flex transition-transform ease-out duration-1000' style={{transform: `translateX(-${curr * 100}%)`}}>
            {children}
        </div>
        <div className='absolute inset-0 flex items-center justify-between'>
            <button className='p-1 m-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <BiChevronLeft size={15} onClick={prev}/>
            </button>
            <button className='p-1 m-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <BiChevronRight size={15} onClick={next}/>
            </button>
        </div>
        <div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {project.image.map((slide, i) => (
                        <div className={`transition-all w-1 h-1 bg-white rounded-full ${curr === i ? 'p-1.5' : "bg-opacity-50"}`}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Carousel
