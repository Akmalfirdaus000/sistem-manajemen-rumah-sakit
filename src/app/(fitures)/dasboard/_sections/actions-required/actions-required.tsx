// src/app/features/dashboard/_sections/actions-required/ActionsRequired.tsx
import React from 'react';

// Contoh data tindakan yang diperlukan
const actions = [
  { id: 1, task: 'Periksa stok obat yang hampir habis', urgency: 'Tinggi' },
  { id: 2, task: 'Tindak lanjut pasien dengan hasil laboratorium mendesak', urgency: 'Sedang' },
  { id: 3, task: 'Perbarui jadwal kerja dokter', urgency: 'Rendah' },
  { id: 4, task: 'Proses laporan keuangan bulan ini', urgency: 'Sedang' },
];

const ActionsRequired: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Tindakan yang Diperlukan</h2>
      <ul className="space-y-4">
        {actions.map((action) => (
          <li key={action.id} className={`p-4 rounded-lg shadow-sm ${action.urgency === 'Tinggi' ? 'bg-red-100 text-red-800' : action.urgency === 'Sedang' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
            <p className="font-medium">{action.task}</p>
            <span className={`text-sm font-semibold ${action.urgency === 'Tinggi' ? 'text-red-800' : action.urgency === 'Sedang' ? 'text-yellow-800' : 'text-green-800'}`}>{action.urgency}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionsRequired;
