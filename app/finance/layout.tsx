'use client'
import { useState } from 'react'

import Navbar from '@/components/finance/Navbar'
import Sidebar from '@/components/finance/Sidebar'

interface FinanceLayoutProps {
  children: React.ReactNode
}

const FinanceLayout = ({ children }: FinanceLayoutProps) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar onClickSidebarButton={() => {setIsOpen(!isOpen)}}/>
      <Sidebar isOpen={isOpen}/>
      {children}
    </div>
  )
}

export default FinanceLayout
