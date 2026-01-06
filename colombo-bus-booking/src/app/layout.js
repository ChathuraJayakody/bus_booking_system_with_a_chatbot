import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colombo Bus Booking - Easy Travel Across Sri Lanka',
  description: 'Book your bus tickets easily for routes across Colombo district',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}