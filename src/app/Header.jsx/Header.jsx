import React from 'react'

export default function Header({ title, desc }) {
    return (
        <div className='text-center'>
            <div className='flex items-center gap-2 justify-center'>
                <span className='w-[15px] h-[2px] bg-gray-500'></span>
                <h3 className='text-gray-500 text-[17px]'>{title} </h3>
                <span className='w-[15px] h-[2px] bg-gray-500'></span>
            </div>
            <h4 className='font-semibold md:text-4xl text-[18px] text-dark-green mt-3'>{desc}</h4>
        </div>
    )
}
