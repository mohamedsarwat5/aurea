import React from 'react'

export default function Home() {
  return (
    <div className='min-h-[100dvh] bg-[#E7F1E9] w-full   '>
      <div className='c flex flex-col-reverse md:flex-row gap-y-3 items-center justify-between w-full'>
        <div className=' '>
          <p className='text-gray-500 uppercase text-[15px]'>free delivery worldwide</p>
          <h2 className='capitalize font-galano md:text-6xl text-3xl text-green-text md:mb-3 mb-2'>
            <span className='block'>feed your skin,</span> find your glow
          </h2>
          <p className='capitalize text-[#313410] font-semibold'>natural inner beauty</p>
          <p className='text-green'> <span className='block md:mt-3 mt-2 '>Enhance Your Radiance with Clean, Science-Driven Skincare-Cruelty-Free,</span> Sustainable, and Enriched with Antioxidants for Healthy, Timeless Skin </p>
        </div>
        <div className=' md:w-[500px]'>
          <img className='  ' src='/hero.png' />
        </div>
      </div>
    </div>
  )
}
