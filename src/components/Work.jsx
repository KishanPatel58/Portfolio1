import React from 'react'
import Typed from 'typed.js'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaLongArrowAltDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Projects from './Projects';


const Work = () => {
  const [text1] = useTypewriter({
    words: ['Hi 👋','Hello 👋'],
    loop: {},
  });

  return (
    <>
      <div className='fixed -z-[30] w-screen h-screen inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125'>
        <div className="absolute z-10 w-full h-30 -top-13 left-0 bg-black blur-2xl"></div>
        {/* row1 */}
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        {/* row1 */}
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-3 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet] flex items-center justify-center">
          <h1 className='text-white text-center text-2xl md:text-5xl'>{text1},<Cursor /></h1>
        </div>
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet] flex items-center justify-center">
        </div>
        <div className="col-span-3 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]">

        </div>
        {/* row1 */}
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]">

        </div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]">

        </div>
        <div className="col-span-6 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet] flex items-center justify-center">

        </div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]">

        </div>
        {/* row1 */}
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]">

        </div>
        <div className="col-span-4 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-3 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-3 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="col-span-2 bg-[#36194D] rounded-2xl animate-pulse border-2 border-blue drop-shadow-[0px_0px_10px_blueviolet]"></div>
        <div className="relative w-screen h-20">
          <div className="h-full w-full border-2 border-red-800 absolute bottom-10 bg-black blur-xl"></div>
        </div>
      </div>
      <main className='relative w-[85%] h-screen !ml-auto !mr-auto 2xl:w-[70%]'>
        <div className=" intro w-full h-screen flex items-center justify-center flex-col font-[font2]">
          <h1 className='text-white text-5xl leading-15 text-center xl:!my-8 xl:text-6xl font-semibold'><br />
            <span className='text-3xl'>i'm<br /></span> <span className='text-[blueviolet]'>Kishan</span> Patel
          </h1>
          <p className="text-white text-2xl text-center">
            a passionate front-end developer who loves turning creative ideas into interactive digital experiences. I focus on clean design, smooth animations, and responsive layouts. that bring websites to life.
          </p>
          <div className="w-full flex items-center justify-center flex-col md:flex-row md:gap-5">
            <NavLink to="/Contact" className="cursor-grab active:cursor-grabbing w-[80%] h-[50px] text-white p-[10px] bg-[blueviolet] text-3xl !mt-5 rounded-[10px] shadow-[0px_-4px_1px_#6723a6] font-[font1] flex items-center justify-center sm:w-[70%] md:w-[50%] lg:w-[30%]">Say Hi 👋</NavLink>
            <a href="#projects" className='w-[80%] h-[50px] text-white p-[10px] bg-[blueviolet] text-3xl !mt-5 rounded-[10px] shadow-[0px_-4px_1px_#6723a6] font-[font1] flex items-center justify-center gap-5 relative group cursor-grab active:cursor-grabbing sm:w-[70%] md:w-[50%] lg:w-[30%]'>My Work <FaLongArrowAltDown className='!font-light absolute top-1/2 -translate-y-1/2 translate-x-5 transform -rotate-[90deg] transition-all duration-500 group-hover:rotate-[3deg] right-12 lg:right-8' /></a>
          </div>
        </div>
      </main>
      <Projects />
    </>
  )
}

export default Work