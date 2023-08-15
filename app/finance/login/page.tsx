'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const loginSchema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z
    .string()
    .nonempty({ message: 'La contraseña no puede estar vacía' })
})
const LoginPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={e => {
          e.preventDefault()
          form.handleSubmit(onSubmit)(e)
        }}
        className='space-y-5'
      >
        <div className='text-center'>
          <h1 className='text-lg font-semibold'>Iniciar sesión</h1>
        </div>

        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={'password'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder='Contraseña' type={'password'} {...field}/>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button type={'submit'}>Iniciar sesión</Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginPage
