export const getAllEmployees = async () => { 
    const employeesDataPromise = await fetch('/api/employee') 
    
    if (!employeesDataPromise.ok) { 
        return null
    }

    return employeesDataPromise.json()
}

export const deleteEmployee = async (id: number, token: string) => {
    const employeeDataPromise = await fetch(`/api/employee/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    })

    if (!employeeDataPromise.ok) {
        return null
    }

    return employeeDataPromise.json()
}