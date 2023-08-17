

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p>Esto es la pagina principal de Techobol</p>
      <div className='flex space-x-5'>
        <Link href={'/finance/login'}>
          <Button className='bg-blue-500'> Ir a finanzas </Button>{' '}
        </Link>
        <Link href={'/human-resources'}>
          <Button> Ir a recursos humanos </Button>{' '}
        </Link>
        <Link href={'/coils'}>
          <Button> Ir a bobinas </Button>{' '}
        </Link>
      </div>
    </main>
  )
}
