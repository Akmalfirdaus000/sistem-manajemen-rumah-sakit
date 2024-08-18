// src/app/features/dashboard/_sections/medical-team-performance/MedicalTeamPerformance.tsx
import React from 'react';

// Contoh data kinerja tim medis
const performanceData = [
  { id: 1, name: 'Dr. A', tasksCompleted: 120, patientSatisfaction: 95 },
  { id: 2, name: 'Dr. B', tasksCompleted: 95, patientSatisfaction: 89 },
  { id: 3, name: 'Nurse C', tasksCompleted: 150, patientSatisfaction: 92 },
  { id: 4, name: 'Nurse D', tasksCompleted: 110, patientSatisfaction: 88 },
];

const MedicalTeamPerformance: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Kinerja Tim Medis</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Tugas Selesai</th>
            <th className="py-2 px-4 border-b">Kepuasan Pasien (%)</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((member) => (
            <tr key={member.id}>
              <td className="py-2 px-4 border-b">{member.name}</td>
              <td className="py-2 px-4 border-b">{member.tasksCompleted}</td>
              <td className="py-2 px-4 border-b">{member.patientSatisfaction}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalTeamPerformance;
