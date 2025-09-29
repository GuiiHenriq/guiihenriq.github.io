'use client'

import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-zinc-400 text-sm hover:text-zinc-100 transition-colors',
        isActive && 'text-zinc-100 font-medium'
      )}
    >
      <span className="text-cyan-400">#</span>
      {label}
    </Link>
  )
}
