import Link from 'next/link'
import layoutDashboardAdmin from './layout'


import React from 'react'

export default function AdminHome() {
  return (
    <>
        <p>INI DASHBOARD ADMIN</p>
        <div className='flex flex-col'>

          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
          <Link href="/" className="text-4xl">HOME </Link>
         
          


        </div>
    </>
  )
}

AdminHome.getLayout = function (page) {
    return <layoutDashboardAdmin>{page}</layoutDashboardAdmin>
}