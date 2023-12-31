import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex`}>
        <div className={` h-full overflow-visible z-50 absolute sm:relative`}><Sidebar/></div>
        <div className={`h-screen overflow-y-scroll`}>{children}</div>
      </body>
    </html>
  )
}
