import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-5'>
        <h1 className='text-center text-5xl md:text-7xl'>
            <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Get in Touch</span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
            Reach out to me via Email and I will respond as soon as I can!
        </p>
        <a href="mailto:ayaderombi@gmail.com" className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-3 rounded-md text-white font-semibold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-100 ease-in-out border-2 border-[#63e] hover:border-white cursor-pointer hover:brightness-110'>Contact Me</a>
      </div>
    </div>
  )
}

export default Contact
