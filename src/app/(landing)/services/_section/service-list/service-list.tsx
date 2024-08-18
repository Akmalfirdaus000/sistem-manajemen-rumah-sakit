// src/components/services/ServicesList.tsx
'use client'; // Menandai komponen ini sebagai Client Component

import { FC } from 'react';

const services = [
  {
    id: 1,
    title: 'Konsultasi Medis',
    description: 'Konsultasi dengan dokter spesialis yang berpengalaman untuk berbagai keluhan kesehatan. Kami menyediakan analisis menyeluruh dan rekomendasi yang terpersonalisasi untuk memastikan kesehatan Anda tetap optimal.',
    icon: '/icons/consultation.svg'
  },
  {
    id: 2,
    title: 'Rawat Inap',
    description: 'Fasilitas rawat inap yang nyaman dan modern dengan perawatan 24 jam dari tim medis profesional. Kami memastikan setiap pasien mendapatkan perhatian penuh dan dukungan yang dibutuhkan selama proses pemulihan.',
    icon: '/icons/inpatient.svg'
  },
  {
    id: 3,
    title: 'Laboratorium',
    description: 'Layanan tes laboratorium lengkap dengan teknologi terbaru untuk hasil yang cepat dan akurat. Kami menawarkan berbagai tes diagnostik untuk membantu dokter dalam membuat keputusan yang tepat mengenai perawatan Anda.',
    icon: '/icons/lab.svg'
  },
  {
    id: 4,
    title: 'Rehabilitasi',
    description: 'Program rehabilitasi yang dirancang khusus untuk membantu pasien pulih dari cedera atau penyakit. Kami menawarkan terapi fisik, terapi okupasi, dan berbagai layanan rehabilitasi untuk mendukung proses pemulihan Anda.',
    icon: '/icons/rehabilitation.svg'
  },
  {
    id: 5,
    title: 'Kesehatan Mental',
    description: 'Layanan kesehatan mental yang mencakup konseling, terapi, dan dukungan psikologis. Kami membantu pasien mengatasi masalah emosional dan mental untuk mencapai kesejahteraan secara keseluruhan.',
    icon: '/icons/mental-health.svg'
  },
  // Tambah lebih banyak layanan jika diperlukan
];

const ServicesList: FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">Layanan Utama Kami</h2>
        <p className="text-lg text-center mb-12 text-gray-600">
          Kami menawarkan berbagai layanan kesehatan dengan kualitas terbaik dan perawatan yang terpersonalisasi. 
          Temukan layanan kami yang dirancang untuk memenuhi berbagai kebutuhan kesehatan Anda dengan pendekatan yang 
          berbasis pada keunggulan dan perhatian terhadap detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {/* <img src={service.icon} alt={service.title} className="w-12 h-12 mr-4" /> */}
                <h3 className="text-2xl font-semibold text-blue-800">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
