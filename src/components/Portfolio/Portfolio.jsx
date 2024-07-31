import React from 'react'
import Star from '../Star/Star'
import p1 from '../../assets/port1.png'
import p2 from '../../assets/port2.png'
import p3 from '../../assets/port3.png'
import Pop from '../Pop-up/Pop'
export default function Portfolio() {
  return (
    <div className="w-full mt-28 lg:pb-28 pb-96 md:pt-10 pt-28 mb-60 flex flex-col justify-center items-center">
      <h1 className='uppercase text-[40px] mt-4 md:mt-10 font-bold text-center'>portfolio component</h1>
      <Star color={'text-cyan-900'} star={'star2'}/>
      <div className='flex flex-wrap gap-9 container m-auto justify-center items-center'>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p1} className='w-full rounded-lg' alt="" />
          <Pop id={'1'}/>
        </div>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p2} className='w-full rounded-lg' alt="" />
          <Pop id={'2'}/>
        </div>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p3} className='w-full rounded-lg' alt="" />
          <Pop id={'3'}/>
        </div>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p1} className='w-full rounded-lg' alt="" />
          <Pop id={'1'}/>
        </div>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p2} className='w-full rounded-lg' alt="" />
          <Pop id={'2'}/>
        </div>
        <div className='md:w-1/3 xl:w-1/4 w-80 relative group rounded-lg'>
          <img src={p3} className='w-full rounded-lg' alt="" />
          <Pop id={'3'}/>
        </div>
      </div>
    </div>
  )
}
