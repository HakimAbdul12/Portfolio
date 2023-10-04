import '../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Login',
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}