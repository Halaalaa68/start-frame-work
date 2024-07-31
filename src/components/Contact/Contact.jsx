import React from 'react'
import Star from '../Star/Star'
export default function Contact() {
  return (
    <div className="w-full mt-28 lg:pb-28 pb-96 md:pt-10 pt-20 mb-60 flex flex-col justify-center items-center">
      <h1 className='uppercase text-[40px] font-bold text-center'>contact component</h1>
      <Star color={'text-cyan-900'} star={'star2'}/>
<form className="mx-auto mt-10 w-1/2">
<div className="grid md:grid-cols-1 md:gap-6 mb-8">
    <div className="relative z-0 w-full mb-5">
        <input type="text" name="name" id="name" placeholder='userName' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-300 peer" required />
        <label htmlFor="floating_email" className=" peer-focus:text-[16px] absolute text-transparent duration-300 transform -translate-y-6 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-[-80%]">userName:</label>
    </div>
  </div>
  <div className="grid md:grid-cols-1 md:gap-6 mb-8">
    <div className="relative z-0 w-full mb-5">
        <input type="tel" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder="userAge" required />
        <label htmlFor="floating_email" className="peer-focus:text-[16px] absolute text-transparent duration-300 transform -translate-y-6 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-[-80%]">userAge:</label>
    </div>
  </div>
  <div className="relative z-0 w-full mb-12">
      <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder="userEmail" required />
      <label htmlFor="floating_email" className="peer-focus:text-[16px] absolute text-transparent duration-300 transform -translate-y-6 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-[-80%]">userEmail:</label>
  </div>
  <div className="relative z-0 w-full mb-12">
      <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder="userPassword" required />
      <label htmlFor="floating_email" className="peer-focus:text-[16px] absolute text-transparent duration-300 transform -translate-y-6 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-[-80%]">userPassword:</label>
  </div>
  <button type="submit" className="text-white bg-[#1abc9c] rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-0 outline-none focus:outline-none focus:scale-95 duration-300 transition">Send Message</button>
</form>

    </div>
  )
}
