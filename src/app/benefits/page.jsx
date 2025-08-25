import React from 'react'
import beData from '../beData'
import Header from '../Header.jsx/Header'

export default function Benefits() {
  return (
    <div className='bg-light'>

      <div className=' c flex flex-col justify-center gap-9 '>

        <Header title='Benefits' desc='Auréa – Healthy Skin, Healthier You'></Header>

        <div className='flex flex-col md:flex-row items-center gap-y-7 justify-center md:justify-between '>

          <div className='md:w-[500px] '>
            <img className='rounded-xl' src="/b1.png" alt="" />
          </div>

          <div className='flex flex-col gap-5 '>
            {beData.map(({ title, desc, icon }, i) => (<div key={i} className='flex flex-col gap-6 '>

              <div className='flex items-center gap-x-3  ' >
                <div className='md:w-20 md:h-20 w-14 h-14 bg-green p-3  rounded-lg flex items-center justify-center'>
                  {icon}
                </div>
                <div className='flex flex-col'>
                  <h2 className='font-semibold text-dark-green'>
                    {title}
                  </h2>
                  <p className='md:w-xl text-gray-600'>
                    {desc}
                  </p>
                </div>
              </div>

              <div className='   border-green border-[1px] border-dashed'></div>

            </div>))}
          </div>

        </div>

      </div>

    </div>
  )
}
