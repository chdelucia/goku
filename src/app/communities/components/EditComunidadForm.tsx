'use client'

import { useAppStore } from '../../../store/store';
import { useState } from 'react'
import { Comunidad } from '../../../models/comunidad'
import { Button } from '@goku/ui';


interface EditComunidadFormProps {
  comunidad: Comunidad
  onCancel: () => void
}

export function EditComunidadForm({ comunidad, onCancel }: EditComunidadFormProps) {
  const [name, setName] = useState(comunidad.name)
  const [image, setImage] = useState(comunidad.image)
  const [empleado, setEmpleado] = useState(comunidad.empleado)
  const [entera, setEntera] = useState(comunidad.entera)
  const [vestibulo, setVestibulo] = useState(comunidad.vestibulo)
  const [renovacionLimpieza, setRenovacionLimpieza] = useState(comunidad.renovacionLimpieza)
  const [renovacionAbrillantado, setRenovacionAbrillantado] = useState(comunidad.renovacionAbrillantado)
  const editComunidad = useAppStore((state) => state.editComunidad)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    editComunidad(comunidad.name, {
      name,
      image,
      empleado,
      dias: comunidad.dias,
      entera,
      vestibulo,
      renovacionLimpieza,
      renovacionAbrillantado
    })
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <h2 className="text-xl font-bold">Edit Community</h2>
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
      <div className="flex space-x-2">
        <button type="submit">Save Changes</button>
        <Button  onClick={onCancel} >Cancel</Button>
      </div>
    </form>
  )
}

