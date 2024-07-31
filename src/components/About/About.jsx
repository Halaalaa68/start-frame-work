import React from 'react'
import Star from '../Star/Star'
export default function About() {
  return (
    <div className="bg-[#00bfa0] w-full mt-28 lg:pb-52 pb-96 md:pb-72 lg:pt-52 pt-24 mb-60 flex flex-col justify-center items-center">
      <h1 className='uppercase text-[40px] font-bold text-white'>about component</h1>
      <Star/>
      <div className='flex flex-wrap md:flex-nowrap justify-center text-white w-[75%] m-auto gap-2'>
        <p className='w-full'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='w-full'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  )
}
