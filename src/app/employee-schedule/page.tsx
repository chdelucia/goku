'use client'

import { useState, useEffect } from 'react'
import { useAppStore } from '../../store/store'
import { Comunidad } from '../../models/comunidad'
import { EmployeeSelect } from './EmployeeSelect'

export default function EmployeeSchedulePage() {
  const { comunidades } = useAppStore(); 
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');  
  const [schedule, setSchedule] = useState<any[]>([]);


  useEffect(() => {
    if (selectedEmployee) {
      const employeeSchedule = comunidades
        .filter((comunidad: Comunidad) => comunidad.empleado === selectedEmployee)
        .map((comunidad: Comunidad) => ({
          name: comunidad.name,
          L: comunidad.dias.L || '',
          M: comunidad.dias.M || '',
          X: comunidad.dias.X || '',
          J: comunidad.dias.J || '',
          V: comunidad.dias.V || '',
          entera: comunidad.entera,
          vestibulo: comunidad.vestibulo
        }))

      setSchedule(employeeSchedule)
    }
  }, [selectedEmployee, comunidades])

  const calculateColumnTotal = (day: string) => {
    const totalMinutes = schedule.reduce((total, comunidad) => {
      if (comunidad[day] === 'entera') {
        return total + comunidad.entera
      } else if (comunidad[day] === 'vestibulo') {
        return total + comunidad.vestibulo
      }
      return total
    }, 0)
    return (totalMinutes / 60).toFixed(2) 
  }
  
  const calculateTotalTime = () => {
    const totalMinutes = ['L', 'M', 'X', 'J', 'V'].reduce((total, day) => {
      return total + parseFloat(calculateColumnTotal(day))
    }, 0)
    return totalMinutes.toFixed(2)
  }
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Schedule</h1>
      <EmployeeSelect onSelect={setSelectedEmployee} /> {/* El select de empleados */}
      {selectedEmployee && (
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Community Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">L</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">M</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">X</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">J</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">V</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((comunidad, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{comunidad.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{comunidad.L}</td>
                    <td className="border border-gray-300 px-4 py-2">{comunidad.M}</td>
                    <td className="border border-gray-300 px-4 py-2">{comunidad.X}</td>
                    <td className="border border-gray-300 px-4 py-2">{comunidad.J}</td>
                    <td className="border border-gray-300 px-4 py-2">{comunidad.V}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100">
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold">Total (Hours)</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateColumnTotal('L')}</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateColumnTotal('M')}</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateColumnTotal('X')}</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateColumnTotal('J')}</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateColumnTotal('V')}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="border border-gray-300 px-4 py-2 text-right font-bold">Total Time:</td>
                  <td className="border border-gray-300 px-4 py-2">{calculateTotalTime()} hours</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
