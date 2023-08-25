'use client'

import { useEffect, useState } from "react"

import { toast } from "@/components/ui/use-toast"

import { Employee } from "@/types"
import { getAllEmployees as getAllEmployeesService } from "@/services/finance/employee"

export const useUser = () => {
    const [employeesData, setEmployeesData] = useState<Employee[]>(Object.create(null))
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    
    const getAllEmployees = async () => {
        const response = await getAllEmployeesService()

        if (!response) {
            return
        }

        console.log(response)
        setEmployeesData(response)
        toast(
            {
                title: 'Usuarios cargados correctamente',
            }
        )
    }
  
    useEffect(() => {
        getAllEmployees()
    }, [])

    const deleteEmployee = async (id: number) => {

    }

    return { 
        getAllEmployees,
        employeesData,
        setEmployeesData,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        deleteEmployee
    }
}