import React from 'react'
import All from '../assets/All.js'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { LuMessageCircleHeart } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import Tilty from 'react-tilty';

const About = () => {
  return (
    <section className='relative w-screen h-[100%]'>
      <div className="bricks-back fixed top-0 left-0 -z-[10] w-screen h-screen grid grid-cols-12 gap-2">
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
      </div>
      <div className="relative gap-0 w-screen h-screen top-0 left-0 !z-50 flex items-center justify-center flex-col sm:gap-2 md:gap-6 lg:flex-row lg:!gap-5">
        <Tilty>
          <div className="image !mt-[100px] md:!mt-[0px] relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-[blueviolet] drop-shadow-[0px_0px_15px_blueviolet] md:w-[230px] md:h-[230px] lg:w-[300px] lg:h-[300px] transition-all delay-500">
            <img src={All.MyPic} className='w-full h-full object-cover' alt="My Photo" />
          </div>
        </Tilty>
        <div className="content w-full flex flex-col items-center justify-center lg:w-[50%]">
          <h1 className='text-white text-4xl font-semibold'>i'm <span className='text-[blueviolet]'>Kishan </span>Patel</h1>
          <p className='text-white text-center text-xl w-[90%] lg:w-[90%]'>
            a passionate and curious student who loves
            exploring the world of technology and
            programming.Right now i focused on sharping my skills in web devlopment, and frontend design using React, Tailwind CSS,
            and JavaScript. I belive learning never stops, and every project is a new opportunity to grow, experiment, and improve.
          </p>
          <div className="social w-screen h-[100px] flex items-center justify-center gap-5">
            <a title='Linkedin' href="https://www.linkedin.com/in/patel-kishan-015769356?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI3PkgDW6RKC2lxqaV6dVBA%3D%3D" target="_blank" className='text-4xl text-[blue] transition-all duration-300 hover:scale-[1.4] cursor-grab active:scale-[0.9] active:cursor-grabbing'>
              <FaLinkedinIn />
            </a>
            <a title='Instagram' href="https://www.instagram.com/patel_kishan3101?igsh=MXRjMHVzbDQ0bmx2eg==" target="_blank" className='text-4xl text-pink-400 transition-all duration-300 hover:scale-[1.4] cursor-grab active:scale-[0.9] active:cursor-grabbing'>
              <IoLogoInstagram />
            </a>
            <NavLink title='Messege Me 💬' to="/Contact" className='text-4xl text-pink-700 transition-all duration-300 hover:scale-[1.4] cursor-grab active:scale-[0.9] active:cursor-grabbing'>
              <LuMessageCircleHeart />
            </NavLink>
            <a title='GitHub' href="https://github.com/KishanPatel58" target="_blank" className='text-4xl text-white transition-all duration-300 hover:scale-[1.4] cursor-grab active:scale-[0.9] active:cursor-grabbing'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About