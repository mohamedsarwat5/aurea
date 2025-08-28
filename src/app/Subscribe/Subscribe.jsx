import React from 'react'

export default function Subscribe() {
    return (
        <div className=' size bg-light overflow-hidden flex flex-col md:flex-row items-center md:justify-between gap-y-8'>
            <div className='md:w-5/12'>
                <h2 className='md:text-4xl text-[22px] text-dark-green mb-4 font-semibold'>Subscribe to our newsletter</h2>
                <p>Subscribe to our newsletter and become part of a community that believes in radiant skin and radiant planet.</p>

                <form className="max-w-md md:mt-8 mt-4">

                    <div className="relative">

                        <input type="search" id="default-search" className="block w-full p-4  text-sm text-dark-green  rounded-lg bg-white-50 focus:ring-green outline-0 shadow-lg " placeholder="Enter your email here" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green hover:bg-green/80 cursor-pointer transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Subscribe</button>
                    </div>
                </form>


            </div>
            <div className='md:w-1/2 rounded-2xl overflow-hidden shrink-0'>
                <img src="/b2.png" alt="" />
            </div>
        </div>
    )
}
