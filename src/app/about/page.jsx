import React from 'react'
import Header from '../Header.jsx/Header'

export default function About() {
  return (
    <div className='bg-light'>
      <div className=' c flex flex-col gap-y-3  '>
        <Header  title='about us' desc="The Heart Of Auréa"></Header>
        <section className='flex-1 flex flex-col md:flex-row md:justify-between justify-center  items-center gap-y-9 '>
          <div className='order-1 flex flex-col gap-y-2'>
              <h2 className=' md:text-4xl text-[22px] text-dark-green '>Clear Skin, clear confidence</h2>
              <p className='md:w-[600px] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim dolorum aperiam id minima veniam veritatis voluptatem. Accusamus quasi possimus rerum! Aliquid illo molestias quasi voluptate, animi nostrum dignissimos quod!</p>
          </div>
          <div className='md:w-[650px] shrink-0 md:order-2'>
            <img src="/hand.png" className='rounded-xl' alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}
