'use client'

import { useAppStore } from '../../../store/store';
import { useState } from 'react'


export function AddComunidadForm() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [empleado, setEmpleado] = useState('')
  const [entera, setEntera] = useState(0)
  const [vestibulo, setVestibulo] = useState(0)
  const [renovacionLimpieza, setRenovacionLimpieza] = useState(0)
  const [renovacionAbrillantado, setRenovacionAbrillantado] = useState(0)
  const addComunidad = useAppStore((state) => state.addComunidad)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addComunidad({
      name,
      image,
      empleado,
      dias: {},
      entera,
      vestibulo,
      renovacionLimpieza,
      renovacionAbrillantado
    })
    setName('')
    setImage('')
    setEmpleado('')
    setEntera(0)
    setVestibulo(0)
    setRenovacionLimpieza(0)
    setRenovacionAbrillantado(0)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <h2 className="text-xl font-bold">Add New Community</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Community Name"
        required
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        value={empleado}
        onChange={(e) => setEmpleado(e.target.value)}
        placeholder="Employee Name"
        required
      />
      <input
        type="number"
        value={entera}
        onChange={(e) => setEntera(Number(e.target.value))}
        placeholder="Entera"
        required
      />
      <input
        type="number"
        value={vestibulo}
        onChange={(e) => setVestibulo(Number(e.target.value))}
        placeholder="Vestibulo"
        required
      />
      <input
        type="number"
        value={renovacionLimpieza}
        onChange={(e) => setRenovacionLimpieza(Number(e.target.value))}
        placeholder="Renovacion Limpieza"
        required
      />
      <input
        type="number"
        value={renovacionAbrillantado}
        onChange={(e) => setRenovacionAbrillantado(Number(e.target.value))}
        placeholder="Renovacion Abrillantado"
        required
      />
      <button type="submit">Add Community</button>
    </form>
  )
}

