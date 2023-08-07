import SidebarState from '@/contexts/SidebarContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function metadata() {
  return {
    title: "CBM",
    description: "Health Monitoring for Machines"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarState>
          {children}
        </SidebarState>
      </body>
    </html>
  )
}
