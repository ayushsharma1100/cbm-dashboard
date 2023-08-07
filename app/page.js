import './globals.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='bg-green-50 h-full ms-1'>
      <h1 className='text-3xl'>This is Login Page.</h1>
      <Link href="/dashboard" className='text-blue-800 border-b-2 border-blue-800'>Dashboard</Link>
    </div>
  )
}
