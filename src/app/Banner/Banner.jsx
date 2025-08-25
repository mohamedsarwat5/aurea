import React from 'react'

export default function Banner() {
    return (
        <div className='bg-green py-8 md:px-[200px] md:h-[250px] flex items-center'>
            <div className='flex flex-col md:flex-row gap-y-4 items-center md:justify-between    w-full  '>
                <div className='text-light-white md:text-2xl text-[19px] text-center md:text-left'>
                    <h3 className='mb-1'>Trusted by over 10,000+ clients</h3>
                    <h3>worldwide dince 2018.</h3>
                </div>
                <div className='shpaes flex  items-center md:gap-10  gap-3  '>
                    <div className='flex  items-center gap-3'>
                        <div className='box items-center '>
                            <h2 className='text-5xl'>4.8</h2>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-yellow-500"></i>
                                ))}
                            </div>
                            <p>4,300 ratings</p>
                        </div>
                    </div>
                    <div className='box  items-center '>
                        <h2 className='text-5xl text-center'>1.7M</h2>
                            <h2 className='text-[14px]'>Worldwide products</h2>
                            <h2 className='mt-0'>sold per year.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
