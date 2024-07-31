import React from 'react'
import { useState } from 'react'
import p1 from '../../assets/port1.png'
import p2 from '../../assets/port2.png'
import p3 from '../../assets/port3.png'
export default function Pop({id}) {
    const [present, setpresent] = useState('hidden')
    let pic=id
    function show()
    {
        if(present==='hidden') setpresent('block')
        else setpresent('hidden')
    }
  return (
    <>
        <div onClick={()=> show()} className='absolute top-0 left-0 right-0 bottom-0 bg-[#00bf88] rounded-lg opacity-0 group-hover:opacity-90 transition duration-500 flex justify-center items-center cursor-pointer'>
            <i class="fa-solid fa-plus text-white text-8xl"></i>
        </div>
        <div onClick={()=> show()} className={`fixed top-0 right-0 left-0 bottom-0 z-50 bg-cyan-900 bg-opacity-20 flex justify-center items-center ${present}`}>
            <img src={id=='1'? p1 : id=='2'? p2 : p3} className='md:w-1/2 w-[80%] opacity-100' alt="" />
        </div>
    </>
  )
}
