'use client'

import BarClick from '@/components/BarClick'
import ScrollToTop from '@/components/ScrollToTop'
import SideBar from '@/components/SideBar'
import React from 'react'

export default function LayOutPage({ children }) {
  return (
    <div className='relative'>
      <SideBar />
      {children}
      <ScrollToTop />
    </div>
  )
}
