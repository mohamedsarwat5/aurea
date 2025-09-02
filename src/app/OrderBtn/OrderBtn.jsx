import Link from 'next/link'
import React from 'react'

export default function OrderBtn({ className , onClick }) {
    return (
        <Link onClick={onClick} href={'/order'} className={` b button w-fit ${className}`}>order now</Link>
    )
}
