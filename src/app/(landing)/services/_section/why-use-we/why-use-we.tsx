// src/components/services/WhyChooseUs.tsx
'use client'; // Menandai komponen ini sebagai Client Component

import { FC } from 'react';

const benefits = [
  {
    id: 1,
    title: 'Pelayanan Terbaik',
    description: 'Kami menyediakan layanan kesehatan dengan standar tertinggi dan perhatian penuh terhadap setiap pasien. Tim medis kami terdiri dari profesional berpengalaman yang siap memberikan perawatan terbaik.',
    icon: '/icons/service-quality.svg'
  },
  {
    id: 2,
    title: 'Fasilitas Modern',
    description: 'Rumah sakit kami dilengkapi dengan teknologi medis terbaru dan fasilitas canggih untuk memastikan diagnosis dan perawatan yang akurat serta efektif.',
    icon: '/icons/modern-facility.svg'
  },
  {
    id: 3,
    title: 'Pendekatan Personalisasi',
    description: 'Kami memahami bahwa setiap pasien memiliki kebutuhan yang unik. Oleh karena itu, kami memberikan perawatan yang disesuaikan dengan kebutuhan individu untuk hasil terbaik.',
    icon: '/icons/personalized-care.svg'
  },
  {
    id: 4,
    title: 'Dukungan 24/7',
    description: 'Tim kami siap memberikan dukungan dan bantuan kapan saja. Layanan kami tersedia 24 jam sehari, 7 hari seminggu untuk memenuhi kebutuhan kesehatan Anda.',
    icon: '/icons/support.svg'
  },
  {
    id: 5,
    title: 'Kepuasan Pasien',
    description: 'Kami berkomitmen untuk memastikan setiap pasien merasa puas dengan perawatan yang diberikan. Umpan balik dari pasien kami sangat penting untuk kami dalam meningkatkan kualitas layanan.',
    icon: '/icons/patient-satisfaction.svg'
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">Mengapa Memilih Kami?</h2>
        <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl">
          Kami berkomitmen untuk memberikan layanan kesehatan terbaik dengan berbagai keunggulan yang membuat kami 
          berbeda. Berikut adalah alasan utama mengapa Anda harus memilih kami untuk kebutuhan kesehatan Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(benefit => (
            <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
              <div className="flex items-center mb-4">
                {/* <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-4" /> */}
                <h3 className="text-xl font-semibold text-blue-800 text-center">{benefit.title}</h3>
              </div>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
