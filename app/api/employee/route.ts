import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET (_request: Request) {
  try { 
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        role: {
          select: {
            name: true
          }
        },
        regionalOffice: { 
          select: { 
            name: true
          }
        }
      }
    })
  
    return NextResponse.json(employees)
  }
  catch (err) { 
    return new NextResponse('Internal Error', { status: 500 })
  }

}
