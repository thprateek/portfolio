import './globals.css'
import { Oswald } from 'next/font/google'

const inter = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Prateek Balchandani',
  description: 'My Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
