'use client'

import { RiMoneyCnyBoxFill } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'

// import UserMenu from '../menus/UserMenu'
import { Button } from '../ui/button'

import { useLoginStore } from '@/store/loginStore'

interface NavbarProps {
  onClickSidebarButton: () => void
}

const Navbar = ({ onClickSidebarButton }: NavbarProps) => {
  const { isLoggedIn } = useLoginStore()
  //   const isLoggedIn = true
  return (
    <div className='h-16 bg-white border-b border-slate-200 px-3 w-full'>
      <div className='relative flex justify-center items-center h-full'>
        <div className='absolute left-0 flex items-center space-x-2'>
          <RiMoneyCnyBoxFill className='text-[40px] text-blue-600' />
          <p className=' font-bold text-slate-800 text-lg'>Finanzas</p>
          {isLoggedIn && (
            <div className='pl-3'>
              <Button
                variant={'icon'}
                size={'icon'}
                onClick={onClickSidebarButton}
              >
                <RxHamburgerMenu color={'#374151'} />
              </Button>
            </div>
          )}
        </div>
        <div className=''>
          {/* {isLoggedIn && <EnterpriseMenu isTechoBol={isTechoBol} />} */}
        </div>

        <div className='absolute right-1 flex space-x-5'>
          {/* <div className='hover:shadow-md bg-slate-100 select-none w-9 h-9 border transition border-slate-300 rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-white '>
            <TbMoon className='text-slate-900 text-xl ' />
          </div> */}
          {/* {isLoggedIn && <UserMenu />} */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
