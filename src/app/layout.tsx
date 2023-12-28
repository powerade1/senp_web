import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from 'src/app/components/ui/nav'
import Footer from './components/ui/footer'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SENP',
  description: 'Generated by Danything',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Nav/>
        <div className='grow center'>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
