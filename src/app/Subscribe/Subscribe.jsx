import React from 'react'
import FormSubscribe from '../FormSubscribe/FormSubscribe'

export default function Subscribe() {
    return (
        <div className=' size bg-light overflow-hidden flex flex-col md:flex-row items-center md:justify-between gap-y-8'>
            <div className='md:w-5/12'>
                <h2 className='md:text-4xl text-[22px] text-dark-green mb-4 font-semibold'>Subscribe to our newsletter</h2>
                <p>Subscribe to our newsletter and become part of a community that believes in radiant skin and radiant planet.</p>

                <FormSubscribe/>

            </div>
            <div className='md:w-1/2 rounded-2xl overflow-hidden shrink-0'>
                <img src="/b2.png" alt="" />
            </div>
        </div>
    )
}
