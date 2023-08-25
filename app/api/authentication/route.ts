import { NextResponse } from 'next/server'
import bcriptjs from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import jsonwebtolken from 'jsonwebtoken'

export async function POST (request: Request) {
  const body = await request.json()
  const { email, password } = body

  const user = await prisma.employee.findUnique({
    where: {
      email
    },
    select: {
      name: true,
      lastName: true,
      email: true,
      password: true,
      role: {
        select: {
          name: true
        }
      }
    }
  })

  if (!user) {
    return NextResponse.error()
  }

  const passwordHashed = await bcriptjs.compare(
    password,
    user.password as string
  )

  if (!passwordHashed) {
    return NextResponse.error()
  }

  const token = jsonwebtolken.sign(
    { email: user.email },
    process.env.JWTSECRET as string
  )

  const returnUser = { 
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    role: user.role.name,
    token
  }

  return NextResponse.json(returnUser)
}
