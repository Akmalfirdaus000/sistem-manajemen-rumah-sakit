// src/app/features/patients/page.tsx
'use client'
import React, { useEffect, useState } from 'react';

interface Patient {
  id: number;
  name: string;
  date_of_birth: string;
  address: string;
  phone: string;
  email: string;
}

const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/patients');
        const data: Patient[] = await response.json();
        setPatients(data);
      } catch (error) {
        setError('Gagal memuat data pasien.');
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Daftar Pasien</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Tanggal Lahir</th>
            <th className="py-2 px-4 border-b">Alamat</th>
            <th className="py-2 px-4 border-b">Telepon</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td className="py-2 px-4 border-b">{patient.name}</td>
              <td className="py-2 px-4 border-b">{patient.date_of_birth}</td>
              <td className="py-2 px-4 border-b">{patient.address}</td>
              <td className="py-2 px-4 border-b">{patient.phone}</td>
              <td className="py-2 px-4 border-b">{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsPage;
