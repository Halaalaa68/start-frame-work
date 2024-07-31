import icon from '../../assets/avataaars.svg'
import Star from '../Star/Star'
export function Home(){
    return <div className="bg-[#00bfa0] w-full mt-28 lg:pb-36 lg:pt-24 pt-36 pb-96 mb-60 flex flex-col justify-center items-center">
        <img src={icon} className='lg:w-1/6 w-1/4' alt="home icon" />
        <h1 className='text-[32px] text-white font-bold mt-1'>START FRAMEWORK</h1>
        <Star/>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
}