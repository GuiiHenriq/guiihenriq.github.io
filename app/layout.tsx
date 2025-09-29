import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Toaster } from './components/toaster'
import { Calistoga } from 'next/font/google'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Guilherme Henrique',
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const calistoga = Calistoga({
  variable: '--font-calistoga',
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSans.variable} ${calistoga.variable}`}>
      <body>
        <Toaster />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
