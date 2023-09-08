import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { columns, Payment } from './columns'
import { DataTable } from './data-table'

async function getData (): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 50,
      status: 'pending',
      email: 'a@example.com'
    },
    {
      id: '728ed52f',
      amount: 300,
      status: 'pending',
      email: 'b@example.com'
    },
    {
      id: '728ed52f',
      amount: 1,
      status: 'pending',
      email: 'c@example.com'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'd@example.com'
    },
    {
      id: '728ed52f',
      amount: 0,
      status: 'pending',
      email: 'e@example.com'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'f@example.com'
    },
    {
      id: '728ed52f',
      amount: 15,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 11,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 60,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 500,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 550,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '728ed52f',
      amount: 1060,
      status: 'pending',
      email: 'm@example.com'
    }
    // ...
  ]
}

const page = async () => {
  const data = await getData()
  return (
    <div>
      <h1>Nómina de empleados</h1>
      <div className='flex space-x-4'>
        <Input placeholder='Buscar...' />
        <Button className='w-[350px]'>Agregar nuevo empleado</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default page
