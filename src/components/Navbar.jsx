import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiMenu4Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import All from '../assets/All';

const Navbar = () => {
  const [menu, setmenu] = useState("translate-x-[100%]")
  const openMenu = () => {
    setmenu("translate-x-[0%]")
  }
  const closeMenu = () => {
    setmenu("translate-x-[100%]")
  }
  return (
    <>
      <header className='fixed w-screen h-20 top-0 left-0 !z-[1001] flex items-center justify-center gap-[30%] backdrop-blur-3xl'>
        <h1 className='text-[10vw] text-white sm:text-[6vw] font-[font1] lg:text-5xl'>Kishan</h1>
        <ul className='hidden items-center justify-center gap-5 sm:flex text-[1.5rem] font-[font2] font-semibold'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>Work</NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>Contact</NavLink>
          </li>
        </ul>
        <h1 className='flex text-white text-3xl font-[900] sm:hidden cursor-grab active:cursor-grabbing' onClick={openMenu}><RiMenu4Fill /></h1>
      </header>
      <div className={`${menu} fixed toggle-menu w-screen h-screen bg-[#36194d] z-[1002] flex items-center justify-center flex-col transition-all duration-700`}>
        <div className="cross-button flex items-center justify-end w-screen h-[5%] !p-[35px]">
          <h1 className='text-white text-3xl font-bold cursor-grab active:cursor-grabbing' onClick={closeMenu}><IoIosCloseCircleOutline /></h1>
        </div>
        <div className="navlinksdrop w-screen h-[85%]">
          <ul className='flex text-3xl items-start justify-center flex-col !p-[30px]'>
            <li className='flex items-center justify-center'>
              <NavLink onClick={closeMenu} to="/" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>Work</NavLink>
            </li>
            <li className='flex items-center justify-center'>
              <NavLink onClick={closeMenu} to="/About" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>About</NavLink>
            </li>
            <li className='flex items-center justify-center'>
              <NavLink onClick={closeMenu} to="/Contact" className={({ isActive }) => (isActive ? 'text-[blueviolet]' : 'text-white transition-all duration-300 hover:text-[blueviolet]')}>Contact</NavLink>
            </li>
            <img className='!ml-auto !mr-auto !mt-[20%]' src={All.Hello} alt="" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar