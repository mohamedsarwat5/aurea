'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '../../../public/logo'

export default function Navbar() {

    const activePath = usePathname()
    const links = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
    ]


    return (
        <nav className=' bg-green/5  backdrop-blur-3xl flex justify-between p-4  py-8 md:px-[105px] h-[60px]  items-center fixed top-0 z-[999999] w-full '>

            <Link className='md:w-[100px] w-[80px] inline-block' href={'/'}>
            <img src="/logo.png" alt="" />
                {/* {React.cloneElement(logo, { className: "w-full h-full" })} */}
            </Link>

            <ul className='hidden md:flex items-center gap-6  text-green'>
                {
                    links.map(({ path, name }, i) => (
                        <Link key={i} className={`md:text-[20px] font-medium transition-all duration-200 relative a ${activePath === path ? ' active' : ''}`} href={path}>{name} </Link>
                    ))
                }
            </ul>
            <button className='md:inline-block hidden b transition-all duration-200 capitalize px-4 py-2 rounded-lg text-hero bg-green'>order now</button>
        </nav>
    )
}
