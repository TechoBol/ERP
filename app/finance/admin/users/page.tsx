'use client'
import { useUser } from './useUser'
import { ColumnDef } from '@tanstack/react-table'
import { Employee } from '@/types'

import UserActions from '@/components/finance/AlertDialogs/UserActions'

import { DataTable } from '@/components/finance/tables/UserTable'
import { Button } from '@/components/ui/button'

const UserPage = () => {
  const user = useUser()

  const columnDefs: ColumnDef<Employee>[] = [
    {
      accessorKey: 'name',
      header: 'Nombre'
    },
    {
      accessorKey: 'lastName',
      header: 'Apellidos'
    },
    {
      accessorKey: 'email',
      header: 'Correo'
    },
    {
      accessorKey: 'role.name',
      header: 'Cargo'
    },
    {
      accessorKey: 'regionalOffice.name',
      header: 'Regional'
    },
    {
      id: 'actions',
      cell: () => {
        return <UserActions />
      }
    }
  ]

  return (
    <div className='p-16'>
      <div className='flex justify-between'>
          <h1>Usuarios</h1>
          <Button>Registrar usuario</Button>
      </div>
      <DataTable columns={columnDefs} data={user.employeesData} />
    </div>
  )
}

export default UserPage
