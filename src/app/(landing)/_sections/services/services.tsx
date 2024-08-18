// src/app/(landing)/_sections/services/ServicesSection.tsx
import { FC } from 'react';
import { FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCogs size={40} />,
    title: 'Layanan Teknologi',
    description: 'Kami menawarkan berbagai solusi teknologi untuk memaksimalkan efisiensi dan produktivitas bisnis Anda.'
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Konsultasi',
    description: 'Tim ahli kami siap memberikan konsultasi untuk membantu Anda merencanakan dan mengimplementasikan strategi yang efektif.'
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'Analisis Data',
    description: 'Analisis data yang mendalam untuk membantu Anda membuat keputusan yang lebih baik dan strategis.'
  }
];

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Layanan Kami</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
