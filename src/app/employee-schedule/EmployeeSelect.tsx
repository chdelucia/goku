'use client'

import { useState } from 'react'
import { useAppStore } from '../../store/store'

interface EmployeeSelectProps {
  onSelect: (employeeName: string) => void
}

export function EmployeeSelect({ onSelect }: EmployeeSelectProps) {
  const { empleados } = useAppStore()
  const [selectedEmployee, setSelectedEmployee] = useState<string>('')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedEmployee(value)
    onSelect(value)
  }

  return (
    <div className="relative">
      <select
        value={selectedEmployee}
        onChange={handleSelect}
        className="w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Select an employee</option>
        {empleados.map((empleado) => (
          <option key={empleado.name} value={empleado.name}>
            {empleado.name}
          </option>
        ))}
      </select>
    </div>
  )
}
