import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from '@/components/ui/dropdown-menu'
  
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
  } from '@/components/ui/alert-dialog'
  import { Button } from '@/components/ui/button'
  import { BsThreeDots } from 'react-icons/bs'

const UserActions = () => {
  return (
    <AlertDialog>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='ghost' size='icon'>
          <BsThreeDots />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem>
            <span>Eliminar</span>
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          ¿Está seguro de eliminar este usuario?
        </AlertDialogTitle>
        <AlertDialogDescription>
          El usuario eliminado perderá su acceso al sistema, sin embargo
          su información pasada seguirá registrada.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction className='bg-red-500'>Eliminar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default UserActions