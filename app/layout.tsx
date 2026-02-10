import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Sora, Fraunces } from 'next/font/google'
import Sidebar from './components/Sidebar'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700']
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Strategic Consistency Drives Nonprofit Effectiveness',
    template: '%s | Stakeholder Management'
  },
  description:
    'A multi-page stakeholder management report experience based on the M5 learning summary.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${sora.variable} ${fraunces.variable}`}>
      <body>
        <div className='bg-glow' aria-hidden='true'></div>
        <div className='app-shell'>
          <Sidebar />
          <main className='content'>{children}</main>
        </div>
      </body>
    </html>
  )
}
