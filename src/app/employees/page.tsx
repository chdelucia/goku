'use client'

import { useState } from 'react'

import { useAppStore } from '../../store/store'
import { Empleado } from '../../models/empleado'
import { Button, Collapsible, DataTable } from '@goku/ui'
import { EditEmpleadoForm } from './components/EditEmpleadoForm'
import { AddEmpleadoForm } from './components/AddEmpleadoForm'
import { SaveChangesButton } from '../SaveChangesButton'

export default function EmployeesPage() {
  const { empleados, deleteEmpleado } = useAppStore()
  const [editingEmpleado, setEditingEmpleado] = useState<Empleado | null>(null)
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  const columns = empleados.length > 0 ? Object.keys(empleados[0]) : []
  columns.push('Actions')


  const handleEditClick = (empleado: Empleado) => {
    setEditingEmpleado(empleado);
    handleToggle(true);
  }

  const handleToggle = (newState: boolean) => {
    setIsCollapsibleOpen(newState)
  }

  const data = empleados.map((empleado: Empleado) => ({
    ...empleado,
    Actions: (
      <div className="flex space-x-2">
        <Button onClick={() => handleEditClick(empleado)}>Edit</Button>
        <Button className='bg-red-500 hover:bg-red-700' onClick={() => deleteEmpleado(empleado.name)}>Delete</Button>
      </div>
    )
  }))

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <SaveChangesButton data={empleados} filename="empleados" />
      </div>
      
      <Collapsible title={editingEmpleado ? "Edit Employee" : "Add New Employee"} isOpen={isCollapsibleOpen} onToggle={handleToggle}>
        {editingEmpleado ? (
          <EditEmpleadoForm 
            empleado={editingEmpleado} 
            onCancel={() => setEditingEmpleado(null)} 
          />
        ) : (
          <AddEmpleadoForm />
        )}
      </Collapsible>

      <DataTable data={data} columns={columns} />
    </div>
  )
}

