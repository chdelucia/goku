'use client'

import { useEffect } from 'react'
import { useAppStore } from './store'

export function InitializeData() {
  const { fetchEmpleados, fetchComunidades } = useAppStore()

  useEffect(() => {
    fetchEmpleados()
    fetchComunidades()
  }, [fetchEmpleados, fetchComunidades])

  return null
}

