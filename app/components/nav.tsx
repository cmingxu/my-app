import React from 'react'
import Link from 'next/link'

export type NavLinkProps = {
  href: string
  text: string
  icon: React.ReactNode
  child?: React.ReactNode
}

export default function Nav({ links  }: { links: NavLinkProps[] } ){

  return <nav className='w-full flex items-center justify-between bg-slate-300 min-h-[120px] px-10'>
    {
      links.map((link) => {
        return <Link href={link.href} key={link.href} className='text-2xl'>
            <span>{link.text}</span> {link.child}
        </Link>
      })
    }
  </nav>
}
