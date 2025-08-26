import Link from 'next/link'
import React from 'react'
import Banner from './Banner/Banner'
import Products from './Products/Products'
import Benefits from './benefits/page'
import About from './about/page'

export default function Home() {
  return (<>
    <div className='min-h-[100dvh] bg-[#E7F1E9] w-full'>
      <div className='c size flex flex-col md:flex-row gap-4 md:gap-y-0 items-center justify-center md:justify-between w-full'>

        <div className='flex flex-col  order-1 '>
          <p className='text-gray-500 uppercase text-[15px]'>free delivery worldwide</p>

          <div className='flex flex-col '>
            <h2 className='capitalize font-galano md:text-6xl text-3xl text-green-text   '>
              feed your skin,
            </h2>
            <h2 className='capitalize font-galano md:text-6xl text-3xl text-green-text mb-2'>
              find your glow.
            </h2>
          </div>

          <p className='capitalize text-[#313410] font-semibold mb-3'>natural inner beauty</p>

          <p className='text-green '>
            Enhance Your Radiance with Clean, Science-Driven Skincare-Cruelty-Free,
          </p>
          <p className='text-green '>
            Sustainable, and Enriched with Antioxidants for Healthy, Timeless Skin
          </p>
          <div className='border border-dashed border-green mt-7 mb-5'></div>
          <Link className='button w-fit !px-6' href={'/'}>order now</Link>
        </div>


        <div className='md:w-[500px] md:order-3 '>
          <img className='block w-full' src='/hero.png' />
        </div>

      </div>
    </div>
    <Banner></Banner>
    <Benefits></Benefits>
    <Products></Products>
    <About/>
  </>)
}
