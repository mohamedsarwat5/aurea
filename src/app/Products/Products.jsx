import React from 'react'
import ourProducts from '../ourProducts'

export default function Products() {
    return (
        <div className='bg-light-white  py-16'>
            <h2 className='capitalize text-center mb-12 text-green font-poppins  font-semibold text-3xl md:text-4xl '>our products</h2>
            <div className='flex flex-col md:flex-row  items-center  gap-x-[60px] gap-y-8 justify-center'>
                {ourProducts.map(({ title, icon }, i) => (
                    <div key={i} className=' flex flex-col  items-center  justify-center gap-5  '>
                        <div className='bg-[#E7F1E8] rounded-full  w-40 h-40 flex items-center justify-center'>
                            <div className='w-30 h-30 '>
                                {React.cloneElement(icon, { className: "w-full h-full" })}
                            </div>
                        </div>
                        <h3 className='text-green text-2xl font-semibold'>{title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
