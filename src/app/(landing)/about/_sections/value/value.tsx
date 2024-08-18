// src/app/about/ValuesSection.tsx
import { FC } from 'react';

const values = [
  { title: "Integritas", description: "Kami menjunjung tinggi standar integritas tertinggi dalam semua tindakan kami." },
  { title: "Inovasi", description: "Kami mendorong inovasi untuk memenuhi kebutuhan klien kami." },
  { title: "Keunggulan", description: "Kami berusaha untuk mencapai keunggulan dalam segala hal yang kami lakukan." },
  { title: "Kolaborasi", description: "Kami percaya pada kekuatan kolaborasi untuk mencapai tujuan kami." }
];

const ValuesSection: FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">Nilai Kami</h2>
      <div className="flex flex-wrap justify-center">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md m-4 w-full md:w-1/4 text-center">
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
