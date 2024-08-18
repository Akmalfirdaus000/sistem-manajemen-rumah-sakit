// src/app/features/dashboard/_sections/statistics/Statistics.tsx
import React from 'react';

// Contoh data statistik
const statistics = [
  { label: 'Jumlah Pasien Hari Ini', value: '120' },
  { label: 'Rata-rata Waktu Pelayanan', value: '30 min' },
  { label: 'Kamar Terisi', value: '85%' },
  { label: 'Jumlah Kunjungan Dokter', value: '75' },
];

const Statistics: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Statistik dan Analisis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-md font-medium mb-2">{stat.label}</h3>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
