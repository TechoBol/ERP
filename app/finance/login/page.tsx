'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
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
import { useToast } from '@/components/ui/use-toast'

import { useLoginStore } from '@/store/loginStore'
import { logIn } from '@/services/finance/authentication'


const loginSchema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z
    .string()
    .nonempty({ message: 'La contraseña no puede estar vacía' })
})


const LoginPage = () => {
  const { setFullName, setRole, changeLogInState, setToken, isLoggedIn } = useLoginStore()
  const router = useRouter()
  const {toast} = useToast()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const employee = await logIn(data.email, data.password)

    if (!employee) { 
      console.log('aaa')
      toast({ 
        description: 'El correo electrónico o la contraseña son incorrectos',
      })
      return 
    }

    toast({ 
      title: 'Bienvenido',
    })

    setFullName(`${employee.name} ${employee.lastName}`)
    setRole(employee.role)
    setToken(employee.token)
    changeLogInState()
    router.push('/finance/deposit-order')
  }

  useEffect(() => {
      isLoggedIn ? router.push('/finance/deposit-order') : null
   }, [] )

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
