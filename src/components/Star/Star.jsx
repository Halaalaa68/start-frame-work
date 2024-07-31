import React from 'react'

export default function Star({color, star}) {
  return (
    <div className='flex mt-4 mb-4'>
        <span className={`${star? star: 'star1'}`}></span>
        <i className={`fa-solid fa-star text-white star self-center ${color? color : 'text-white'}`}></i>
        <span className={`${star? star: 'star1'}`}></span>
        </div>
  )
}
