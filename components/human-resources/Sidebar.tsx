'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserIcon, BriefcaseIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='w-[280px] h-screen border-r-slate-300 border'>
      <div className='pt-10 flex items-center justify-center'>
        <h1 className=' text-lg font-semibold'>Recursos humanos</h1>
      </div>
      <ul className='p-6'>
        <Link href={'/human-resources/payroll'}>
          <li
            className={`${
              pathname.includes('payroll')
                ? 'bg-slate-100'
                : 'hover:bg-slate-50'
            } p-4 py-3 rounded-md`}
          >
            <div className='flex items-center space-x-4'>
              <UserIcon className='w-4 h-4' />
              <p>Nómina</p>
            </div>
          </li>
        </Link>

        <Link href={'/human-resources/positions'}>
          <li
            className={`${
              pathname.includes('positions')
                ? 'bg-slate-100'
                : 'hover:bg-slate-50'
            } mt-2 p-4 py-3 rounded-md`}
          >
            <div className='flex items-center space-x-4'>
              <BriefcaseIcon className='w-4 h-4' />
              <p>Posiciones</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
