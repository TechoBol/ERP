import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT (
  _request: Request,
  { params }: { params: { employeeId: string } }
) {
  try {
    const { employeeId } = params

    const employee = await prisma.employee.update({
      where: {
        id: employeeId
      },
      data: {
        isVisible: false
      },
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true
      }
    })

    return NextResponse.json(employee)
  } catch (err) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
