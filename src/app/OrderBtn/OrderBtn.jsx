import Link from 'next/link'
import React from 'react'

export default function OrderBtn({ className }) {
    return (
        <Link href={'/order'} className={` b button w-fit ${className}`}>order now</Link>
    )
}
