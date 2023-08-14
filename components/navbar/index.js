"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { SidebarContext } from '@/contexts/SidebarContext'

export default function Navbar() {
    let { isCollapsed } = useContext(SidebarContext);
    return (
        <nav className='w-full h-14 flex justify-between bg-white border-b-2 border-slate-200'>
            <div className={`${isCollapsed ? 'ms-4' : 'ms-20'} mt-1 transition-all`}><Image src='/thirdeye logo.png' width={70} height={30} alt='ThirdEye Logo' className='bg-transparent' /></div>
            <div className='pe-12 flex gap-8'>
                <div className='flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell cursor-pointer" viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" /> </svg>
                </div>
                <div className='flex items-center justify-center'>
                    <button className="gap-3 bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center rounded-2xl focus:ring-2 focus:ring-red-600">
                        Logout
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-current' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" /> </g> </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
