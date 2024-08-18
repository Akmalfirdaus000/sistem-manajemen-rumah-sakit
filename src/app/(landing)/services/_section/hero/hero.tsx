// src/components/services/HeroSection.tsx
'use client'; // Menandai komponen ini sebagai Client Component

import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
      <p className="text-lg mb-6">Kami menawarkan berbagai layanan kesehatan dengan kualitas terbaik.</p>
      <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
        Hubungi Kami
      </a>
    </section>
  );
};

export default HeroSection;
