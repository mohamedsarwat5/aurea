'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import logo from '../../../public/logo'

export default function Navbar() {

    const activePath = usePathname()
    const links = [
        { path: '/', name: 'Home' },
        { path: '/benefits', name: 'Benefits' },
        { path: '/about', name: 'About us' },
        { path: '/testimonials', name: 'Testimonials' },
        { path: '/subscribe', name: 'Subscribe' },
    ]
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    return (<>
        <nav className=' bg-green/5  backdrop-blur-3xl flex justify-between p-4  py-8 md:px-[105px] md:h-[60px] h-16  items-center fixed top-0 z-[999999] w-full '>

            <Link className='md:w-[100px] w-[80px] inline-block' href={'/'}>
                <img src="/logo.png" alt="" />
                {/* {React.cloneElement(logo, { className: "w-full h-full" })} */}
            </Link>
            <button onClick={handleOpen} className='order-3 md:hidden cursor-pointer'>
                <i className='fa-solid fa-bars text-[#34402f]' ></i>
            </button>
            <ul className='hidden md:flex items-center gap-6  text-green'>
                {
                    links.map(({ path, name }, i) => (
                        <Link key={i} className={`md:text-[20px] font-medium transition-all duration-200 relative a ${activePath === path ? ' active' : ''}`} href={path}>{name} </Link>
                    ))
                }
            </ul>
            <button className='md:inline-block hidden b button'>order now</button>
        </nav>

        <div onClick={handleOpen} className={`${open ? 'block' : 'hidden'} absolute inset-0  bg-black/15`}> </div>
        <div className={`${open ? ' translate-x-0' : ' translate-x-[100%]'} transition-all duration-200 bg-green/30 backdrop-blur-xl fixed z-[999999999] top-0 bottom-0 end-0 w-[250px] `}>
                <button onClick={handleOpen} className='absolute end-5 top-5'>
                    <i className='fa-solid fa-xmark text-[#34402f]'></i>
                </button>

                <ul className='flex flex-col p-5 pt-16 gap-y-4'>
                    {links.map(({path, name} , i)=>(
                        <Link onClick={handleOpen} className={`  font-medium transition-all duration-200 relative w-fit text-dark-green a ${activePath === path ? ' active' : ''} `} key={i} href={path}>{name}</Link>
                    ))}
                </ul>
        </div>
    </>)
}
