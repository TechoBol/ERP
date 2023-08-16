import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techobol',
  description: 'Techobol ERP System'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-screen w-screen'>
      <body className={inter.className}>
        {children} 
        <Toaster />
      </body>
    </html>
  )
}
