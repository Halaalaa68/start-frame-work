import { Link } from "react-router-dom"
import { useState } from 'react'
export function Navbar(){
    let [colorChange, setColorchange] = useState(true);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(false);
            // console.log('hellooooooooooooooooooooo')
        } else {
            setColorchange(true);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
    <div className={`z-10 pt-8 pb-8 transition duration-500 fixed left-0 right-0 top-0 bg-cyan-950 ${colorChange? '' : '-translate-y-3'}`}>
        <div className={`uppercase lg:ps-16 lg:pe-16 flex flex-row justify-center flex-wrap text-white`}>
        <div className="lg:w-2/3 w-full lg:text-start text-center"><p className="title "><Link className="text-white font-bold hover:text-white" to="">START FRAMEWORK</Link></p></div>
        <div className="lg:w-1/3 w-full flex flex-row lg:justify-end justify-center items-center content gap-x-3">
        <Link to="about" className="p-2 m-0 text-white hover:text-white font-bold focus:bg-[#00bfa0] rounded-md duration-300 transition">About</Link>
        <Link to="portfolio" className="p-2 text-white hover:text-white font-bold focus:bg-[#00bfa0] rounded-md duration-300 transition">Portfolio</Link>
        <Link to="contact" className="p-2 text-white hover:text-white font-bold focus:bg-[#00bfa0] rounded-md duration-300 transition">Contact</Link>
        </div>
    </div>
    </div>
    )
}