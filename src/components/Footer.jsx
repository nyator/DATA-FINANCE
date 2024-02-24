import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare,FaGitSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-default "> B-LINK. </h1>
        <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita facere natus enim nulla sunt,
             odit error quisquam ex aliquid provident perspiciatis animi quod.</p>
             <div className='flex justify-between mb:w-[75%] my-6'>
                <FaDribbbleSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaGitSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insight</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Price</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guide</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer