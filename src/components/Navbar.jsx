import React from 'react'
import { useState } from 'react';
import {  AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
 
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">


      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-default "> B-LINK. </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    

      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r h-full  border-r-gray-900 bg-[#161522] ease-in-out duration-500 md:left-[-100%] ' : 'fixed left-[-100%] '} >
      <h1 className="mt-7 px-4 w-full text-3xl font-bold text-[#00df9a] cursor-default"> B-LINK. </h1> 
        <ul className='uppercase '>
            <li className='p-4 border-b border-gray-800'>Home</li>
            <li className='p-4 border-b border-gray-800'>Company</li>
            <li className='p-4 border-b border-gray-800'>Resource</li>
            <li className='p-4 border-b border-gray-800'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
      </div>
       
   </div>
  )
}

export default Navbar