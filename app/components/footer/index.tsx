import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <Link
        href="https://github.com/GuiiHenriq"
        target="_blank"
        className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400 font-semibold underline hover:text-gray-300 transition-colors"
      >
        Guilherme Henrique
      </Link>
    </footer>
  )
}
