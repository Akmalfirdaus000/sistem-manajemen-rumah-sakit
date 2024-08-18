import React from 'react'
import { PatientsPage, RegisterPatient } from './_sections'
import Sidebar from '@/components/sidebar/sidebar'
// import { PatientRegistration } from './_sections'

export default function Page() {
  return (
    <div className="flex flex-row">
        <Sidebar/>
    <main className="flex-1 p-6">
        <PatientsPage/>
        <RegisterPatient/>
    </main>
  </div>
  )
}
