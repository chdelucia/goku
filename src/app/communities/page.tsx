'use client'

import { useState } from 'react'

import { useAppStore } from '../../store/store'
import { Button, Collapsible, DataTable } from '@goku/ui'
import { EditComunidadForm } from './components/EditComunidadForm'
import { AddComunidadForm } from './components/AddComunidadForm'
import { Comunidad } from '../../models/comunidad'
import { SaveChangesButton } from '../SaveChangesButton'


export default function CommunitiesPage() {
  const { comunidades, deleteComunidad } = useAppStore()
  const [editingComunidad, setEditingComunidad] = useState<Comunidad | null>(null)

  const columns = comunidades.length > 0 ? Object.keys(comunidades[0]) : []
  columns.push('Actions')

  const data = comunidades.map((comunidad:Comunidad) => ({
    ...comunidad,
    dias: Object.entries(comunidad.dias)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
      .join(', '),
    Actions: (
      <div className="flex space-x-2">
        <Button onClick={() => setEditingComunidad(comunidad)}>Edit</Button>
        <Button onClick={() => deleteComunidad(comunidad.name)}>Delete</Button>
      </div>
    )
  }))

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Communities</h1>
        <SaveChangesButton data={comunidades} filename="comunidades" />
      </div>

      <Collapsible title={editingComunidad ? "Edit Community" : "Add New Community"}>
        {editingComunidad ? (
          <EditComunidadForm 
            comunidad={editingComunidad} 
            onCancel={() => setEditingComunidad(null)} 
          />
        ) : (
          <AddComunidadForm />
        )}
      </Collapsible>

      <DataTable data={data} columns={columns} />
    </div>
  )
}

