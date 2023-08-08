"use client"
import { SidebarContext } from '@/contexts/SidebarContext'
import React, { useContext } from 'react'
import style from './index.module.css'
import AlertSidebar from './AlertSidebar';
import AlertVisual from './Alert Components/AlertVisual';
import LiveData from './LiveData';

export default function Dashboard() {
  let { isCollapsed } = useContext(SidebarContext);
  return (
    <div className={`flex gap-12 ${isCollapsed ? style.wCollapsed : style.wNotCollapsed} transition-all p-4`}>
        <div className='w-9/12 flex-column space-y-4'>
          <AlertVisual />
          <LiveData />
        </div>
        <div className='w-1/4'>
          <AlertSidebar />
        </div>
    </div>
  )
}
