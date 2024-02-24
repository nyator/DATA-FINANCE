 import React from 'react'
 import single from '../assets/single.png'
 import triple from '../assets/triple.png'
 import laptop from '../assets/laptop.jpg'
 import Button from './Button'
 
 const Cards = () => {
   return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="img" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Per Month</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <Button text='Start Trail' className=' py-3 px-6  w-[200px] my-6 mx-auto  bg-[#00df9a] rounded-lg text-[#161522] font-medium duration-150 hover:bg-[#1a2d26]'/>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0  my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={laptop} alt="img" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Per Month</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <Button text='Start Trail' className=' py-3 px-6  w-[200px] my-6 mx-auto  bg-[#161522] rounded-lg text-[#00df9a] font-medium duration-150 hover:bg-[#1a2d26]'/>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="img" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Per Month</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <Button text='Start Trail' className=' py-3 px-6  w-[200px] my-6 mx-auto  bg-[#00df9a] rounded-lg text-[#161522] font-medium duration-150 hover:bg-[#1a2d26]'/>
                </div>
            </div>
        </div>
    </div>
   )
 }
 
 export default Cards