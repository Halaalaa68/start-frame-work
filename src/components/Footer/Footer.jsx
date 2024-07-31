import React from 'react'

export default function Footer() {
  return (
    <div className='relative'>
    <div className='absolute bottom-0 right-0 left-0'>
    <div className='bg-cyan-950 text-white pt-20 pb-20'>
        <div className='container flex flex-wrap justify-evenly items-center m-auto'>
        <div className='md:w-1/3 xl:mt-0 xl:w-1/4 w-80 mt-3 text-center'>
            <h3 className='text-[28px] font-bold'>LOCATION</h3>
            <p className='text-[16px] font-normal'>2215 John Daniel Drive<br/>Clark, MO 65243</p>
        </div>
        <div className='md:w-1/3 xl:mt-0 xl:w-1/4 w-80 mt-3 text-center'>
            <h3 className='text-[28px] font-bold p-3'>AROUND THE WEB</h3>
            <div className='flex gap-2 justify-center'>
            <p><i className="p-2 fa-brands fa-facebook border-2 border-white rounded-full"></i></p>
            <p><i className="p-2 fa-brands fa-twitter border-2 border-white rounded-full"></i></p>
            <p><i className="p-2 fa-brands fa-linkedin border-2 border-white rounded-full"></i></p>
            <p><i className="p-2 fa-solid fa-globe border-2 border-white rounded-full"></i></p>
            </div>
        </div>
        <div className='md:w-1/3 md:mt-0 xl:w-1/4 mt-3 w-80 text-center'>
            <h3 className='text-[28px] font-bold p-3'>ABOUT FREELANCER</h3>
            <p className='text-[16px] font-normal'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
    </div>
    <div className='bg-[#1a252f] p-4 m-auto text-center text-white'>
        <p>Copyright © Your Website 2021</p>
    </div>
    </div>
    
    </div>
  )
}
