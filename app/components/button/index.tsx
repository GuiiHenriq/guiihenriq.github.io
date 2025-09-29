import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-zinc-50 py-2 px-4 rounded-full text-zinc-900 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all disabled:opacity-50 text-sm font-medium',
        className
      )}
    >
      {children}
    </button>
  )
}
