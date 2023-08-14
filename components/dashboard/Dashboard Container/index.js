import React from 'react'
import DashoardHeader from './Dashboard Header/index'
import AlertComponent from './Top Alert Component/index'
import NavigationBar from './Navigation Bar/index'
import LiveDataContainer from './Live Data Container/index'

export default function DashboardContainer() {
  return (
    <div className='flex-column space-y-4'>
        <DashoardHeader />
        <AlertComponent />
        <NavigationBar />
        <LiveDataContainer />
    </div>
  )
}
