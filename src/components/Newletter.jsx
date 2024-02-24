import React from 'react'
import Button from './Button'

const Newletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Want tips & tricks to optimize your flow?</h1>
                <p>Signup to our new latter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-lg' type="email" placeholder='Enter email'/>
                    <Button text='Notify Me' className='bg-[#00df9a] text-[#161522] rounded-lg font-medium w-[200px] ml-4 my-6 px-6 py-3 '/>
                </div>
                <p className='md:text-center lg:text-start'>We care about the protection of your data. Read our <span className=' text-[#00df9a]'> Privacy Policy. </span>  </p>
            </div>

        </div>

    </div>
  )
}

export default Newletter