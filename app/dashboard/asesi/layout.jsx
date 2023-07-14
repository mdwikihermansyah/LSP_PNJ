import Sidebar from '@components/dashboard/Sidebar'
import HeaderDashboard from '@components/dashboard/HeaderDashboard'
import React from 'react'
import FooterDashboard from '@components/dashboard/FooterDashboard'
import SidebarAsesi from '@components/dashboard/SidebarAsesi'
import HeaderAsesi from '@components/dashboard/HeaderAsesi'

const layoutDashboardAdmin = ({children}) => {
  return (
    <div className='flex flex-row justify-start bg-white'>
      <div className='border-r'>
        {/* <NewSidebar />    */}
        <SidebarAsesi />
      </div>
      {/* <Sidebar /> */}
      <div className='flex flex-col w-full'>
        {/* <HeaderDashboard />  */}
        <HeaderAsesi />
        <div className='flex-1 p-4 '>
          {children}
        </div>
        <FooterDashboard />
      </div>
    </div>
  )
}

export default layoutDashboardAdmin
