'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavLink = {
    label: string,
    href: string
}
type Props = {
    NavLinks: NavLink[]
}

const Navigation = ({NavLinks}:Props) => {
    const pathname = usePathname();
  return (
    <>
        {NavLinks.map(link=>{
            const isActive = pathname === link.href

            return <li key={link.label}><Link 
                href={link.href} className={isActive ? 'active' : ''}>
                    {link.label}
                </Link>
            </li>
        })}
    </>
  )
}

export default Navigation