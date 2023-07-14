import Sidebar from '@components/dashboard/Sidebar'
import HeaderDashboard from '@components/dashboard/HeaderDashboard'
import React from 'react'
import FooterDashboard from '@components/dashboard/FooterDashboard'
import NewSidebar from '@components/dashboard/NewSidebar'

const layoutDashboardAdmin = ({children}) => {
  return (
    <div className='flex flex-row justify-start bg-white'>
      <div className='border-r'>
        <NewSidebar />   
      </div>
      {/* <Sidebar /> */}
      <div className='flex flex-col w-full'>
        <HeaderDashboard />
        <div className='flex-1 p-4 '>
          {children}
        </div>
        <FooterDashboard />
      </div>
    </div>
  )
}

export default layoutDashboardAdmin
