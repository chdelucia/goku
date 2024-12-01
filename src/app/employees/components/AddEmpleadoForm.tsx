'use client'

import { useAppStore } from '../../../store/store';
import { useState } from 'react'


export function AddEmpleadoForm() {
  const [name, setName] = useState('')
  const [activo, setActivo] = useState(true)
  const [limpiezaAFondo, setLimpiezaAFondo] = useState(false)
  const [abrillantado, setAbrillantado] = useState(false)
  const addEmpleado = useAppStore((state) => state.addEmpleado)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addEmpleado({ name, activo, limpiezaAFondo, abrillantado })
    setName('')
    setActivo(true)
    setLimpiezaAFondo(false)
    setAbrillantado(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <h2 className="text-xl font-bold">Add New Employee</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
        required
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="activo"
          checked={activo}
          onChange={(checked) => setActivo(checked.target.checked as boolean)}
        />
        <label htmlFor="activo">Active</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="limpiezaAFondo"
          checked={limpiezaAFondo}
          onChange={(checked) => setLimpiezaAFondo(checked.target.checked as boolean)}
        />
        <label htmlFor="limpiezaAFondo">Deep Cleaning</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="abrillantado"
          checked={abrillantado}
          onChange={(checked) => setAbrillantado(checked.target.checked  as boolean)}
        />
        <label htmlFor="abrillantado">Polishing</label>
      </div>
      <button type="submit">Add Employee</button>
    </form>
  )
}

