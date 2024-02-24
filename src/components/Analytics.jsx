import React from 'react'
import laptop from '../assets/laptop.jpg'
import Button from './Button'

const Analytics = () => {
  return (
    <div className='w-full bg-white px-4 py-16'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4 ' src={laptop} alt="/" />
        <div className='flex flex-col justify-center  '>
           <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
           <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
           <p>
             Our data analytics dashboard allows you to monitor and manage your company’s data in one place. It provides real time information on key metrics, such as website traffic, user engagement
             Our data analytics dashboard allows you to manage your company’s data in one place.
           </p> 
          <div className='mx-auto md:mx-0'>
           <Button text='Get Started' className=' py-3 w-[250px] my-6  bg-[#161522] rounded-lg text-[#00df9a] font-medium duration-150 hover:bg-[#1a2d26]'/>
           </div>
           
        </div>
      </div>

    </div>
  )
}

export default Analytics