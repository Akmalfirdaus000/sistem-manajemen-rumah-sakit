// src/app/about/StorySection.tsx
import { FC } from 'react';

const timelineEvents = [
  { year: "2010", description: "Meluncurkan produk pertama kami." },
  { year: "2015", description: "Memperluas ke pasar baru." },
  { year: "2020", description: "Mencapai tonggak sejarah yang signifikan." }
];

const StorySection: FC = () => {
  return (
    <section className="mb-16 bg-blue-50 py-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Cerita Kami</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        Didirikan pada [Tahun], perusahaan kami dimulai dengan ide sederhana dan tim kecil. Selama bertahun-tahun, kami telah berkembang menjadi pemain terkemuka di industri kami, terus berkembang untuk memenuhi kebutuhan klien kami.
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-blue-300"></div>
        </div>
        <div className="relative space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex flex-col items-center ${index % 2 === 0 ? 'md:items-start md:flex-row md:space-x-6' : 'md:flex-row-reverse md:space-x-reverse md:space-x-6'}`}>
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center md:text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{event.year}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-blue-600 mt-6 md:mt-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
