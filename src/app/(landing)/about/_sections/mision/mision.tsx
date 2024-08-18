// src/app/about/MissionSection.tsx
import { FC } from 'react';

const MissionSection: FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">Visi & Misi Kami</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Visi */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Visi Kami</h3>
          <p className="text-lg text-gray-700">
            Menjadi perusahaan terdepan dalam penyedia solusi inovatif yang mendukung perkembangan industri dan memberikan manfaat berkelanjutan bagi masyarakat.
          </p>
        </div>
        {/* Misi */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Misi Kami</h3>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-3">
            <li>Memberikan solusi berkualitas tinggi yang melebihi harapan klien.</li>
            <li>Mendorong inovasi untuk memenuhi kebutuhan dan tantangan yang berkembang.</li>
            <li>Menjalin hubungan jangka panjang dengan klien berdasarkan kepercayaan dan integritas.</li>
            <li>Berkomitmen pada pengembangan profesional dan pertumbuhan tim kami.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
