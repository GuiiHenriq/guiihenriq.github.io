'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'projects',
    href: '/projects',
  },
  {
    label: 'blog',
    href: '/blog',
  },
]

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-10 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl text-zinc-100 hover:text-zinc-300 transition-colors"
        >
          GH
        </Link>

        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
