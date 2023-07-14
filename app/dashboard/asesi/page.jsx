import React from 'react'
import layoutDashboardAdmin from './layout'

export default function AsesiHome() {
  return (
    <div>
      <h1 className='text-3xl'>INI HALAMAN ASESI</h1>
      <h1 className='text-3xl'>INI HALAMAN ASESI</h1>

    </div>
  )
}

AsesiHome.getLayout = function (page) {
    return <layoutDashboardAdmin>{page}</layoutDashboardAdmin>
}
