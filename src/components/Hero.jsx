import React from 'react'
import { ReactTyped} from "react-typed";
import Button from './Button';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH THE DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'> 
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>
                Fast, flexiable financing for
                </p>
                <ReactTyped
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-300' 
                strings={["BCB", "BTC", "SASS"]} 
                typeSpeed={120}
                backspeed={140} 
                loop 
                 />

                 
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pt-2'> Monitor your data analytics To increase revenue for BCB, BTC & SASS platforms.</p>
            <Button text="Get Started"/>
            
        </div>
    </div>
  )
}

export default Hero;