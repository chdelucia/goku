import { create } from 'zustand'
import { Empleado } from '../models/empleado'
import { Comunidad } from '../models/comunidad'

interface AppState {
  empleados: Empleado[]
  comunidades: Comunidad[]
  hasChanges: boolean
  fetchEmpleados: () => Promise<void>
  fetchComunidades: () => Promise<void>
  addEmpleado: (empleado: Empleado) => void
  addComunidad: (comunidad: Comunidad) => void
  editEmpleado: (id: string, empleado: Empleado) => void
  editComunidad: (id: string, comunidad: Comunidad) => void
  deleteEmpleado: (id: string) => void
  deleteComunidad: (id: string) => void
  setHasChanges: (value: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  empleados: [],
  comunidades: [],
  hasChanges: false,
  fetchEmpleados: async () => {
    const response = await fetch('/api/employees')
    const data = await response.json()
    set({ empleados: data, hasChanges: false })
  },
  fetchComunidades: async () => {
    const response = await fetch('/api/communities')
    const data = await response.json()
    set({ comunidades: data, hasChanges: false })
  },
  addEmpleado: (empleado) => set((state) => ({ empleados: [...state.empleados, empleado], hasChanges: true })),
  addComunidad: (comunidad) => set((state) => ({ comunidades: [...state.comunidades, comunidad], hasChanges: true })),
  editEmpleado: (id, empleado) => set((state) => ({
    empleados: state.empleados.map((e) => e.name === id ? empleado : e),
    hasChanges: true
  })),
  editComunidad: (id, comunidad) => set((state) => ({
    comunidades: state.comunidades.map((c) => c.name === id ? comunidad : c),
    hasChanges: true
  })),
  deleteEmpleado: (id) => set((state) => ({
    empleados: state.empleados.filter((e) => e.name !== id),
    hasChanges: true
  })),
  deleteComunidad: (id) => set((state) => ({
    comunidades: state.comunidades.filter((c) => c.name !== id),
    hasChanges: true
  })),
  setHasChanges: (value) => set({ hasChanges: value }),
}))

