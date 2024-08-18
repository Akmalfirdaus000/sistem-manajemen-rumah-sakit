// src/components/services/ProcessAndQuality.tsx
'use client'; // Menandai komponen ini sebagai Client Component

import { FC } from 'react';

const ProcessAndQuality: FC = () => {
  return (
    <section id="process-quality" className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Proses dan Kualitas</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Proses Kami</h3>
          <p>Deskripsi langkah-langkah yang kami ambil untuk memberikan layanan terbaik.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Standar Kualitas</h3>
          <p>Deskripsi standar kualitas dan sertifikasi yang kami miliki untuk memastikan layanan berkualitas tinggi.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndQuality;
