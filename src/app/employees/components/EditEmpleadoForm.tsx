'use client'

import { useAppStore } from '../../../store/store';
import { useState } from 'react'
import { Empleado } from '../../../models/empleado'
import { Button } from '@goku/ui';


interface EditEmpleadoFormProps {
  empleado: Empleado
  onCancel: () => void
}

export function EditEmpleadoForm({ empleado, onCancel }: EditEmpleadoFormProps) {
  const [name, setName] = useState(empleado.name)
  const [activo, setActivo] = useState(empleado.activo)
  const [limpiezaAFondo, setLimpiezaAFondo] = useState(empleado.limpiezaAFondo)
  const [abrillantado, setAbrillantado] = useState(empleado.abrillantado)
  const editEmpleado = useAppStore((state) => state.editEmpleado)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editEmpleado(empleado.name, { name, activo, limpiezaAFondo, abrillantado })
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <h2 className="text-xl font-bold">Edit Employee</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
        required
      />
      <div className="flex items-center space-x-2">
        <input
          type='checkbox'
          id="activo"
          checked={activo}
          onChange={(checked) => setActivo(checked.target.checked as boolean)}
        />
        <label htmlFor="activo">Active</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type='checkbox'
          id="limpiezaAFondo"
          checked={limpiezaAFondo}
          onChange={(checked) => setLimpiezaAFondo(checked.target.checked as boolean)}
        />
        <label htmlFor="limpiezaAFondo">Deep Cleaning</label>
      </div>
      <div className="flex items-center space-x-2">
                <input
          type='checkbox'
          id="abrillantado"
          checked={abrillantado}
          onChange={(checked) => setAbrillantado(checked.target.checked as boolean)}
        />
        <label htmlFor="abrillantado">Polishing</label>
      </div>
      <div className="flex space-x-2">
        <button type="submit">Save Changes</button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  )
}

