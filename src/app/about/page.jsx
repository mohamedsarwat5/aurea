import React from 'react'
import Header from '../Header.jsx/Header'
import OrderBtn from '../OrderBtn/OrderBtn'

export default function About() {

  const data = [
    "True beauty starts with healthy, balanced skin.",
    "Auréa Face Oil is crafted with a natural, nourishing blend.",
    "It deeply hydrates, supports skin barrier health, and restores natural radiance.",
    "Our formula is free from harsh chemicals and synthetic additives.",
    "We are committed to safe, effective skincare you can trust.",
    "With Auréa, confidence begins from the very first touch."
  ]


  return (
    <div className='bg-light'>
      <div className=' c size flex flex-col gap-y-3  '>
        <Header title='about us' desc="The Heart Of Auréa"></Header>
        <section className=' flex flex-col md:flex-row md:justify-between justify-center md:gap-x-9 items-center gap-y-9 md:mt-5 '>
          <div className='order-1 flex flex-col gap-y-2 '>
            <h2 className=' md:text-4xl text-[22px] text-dark-green md:mb-4'>At Auréa, we believe that:</h2>
            {data.map((item, i) => (
              <div key={i} className='flex items-center mb-4 gap-3'>
                <i className="fa-solid fa-angle-right"></i>
                <h2>{item}</h2>
              </div>

            ))}
             <div className='border border-dashed border-green mt-2  mb-5'></div>
             <OrderBtn />
          </div>
          <div className='md:w-[650px] shrink-0 md:order-2'>
            <img src="/hand.png" className='rounded-xl shrink-0' alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}
