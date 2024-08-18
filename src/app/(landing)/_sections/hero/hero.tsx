// src/app/(landing)/_sections/hero/HeroSection.tsx
import { FC } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection: FC = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}></div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Selamat Datang di Perusahaan Kami</h1>
        <p className="text-lg mb-8">
          Kami menyediakan solusi inovatif untuk kebutuhan Anda. Temukan lebih lanjut tentang layanan kami dan bagaimana kami dapat membantu Anda.
        </p>
        <a href="#services" className="inline-block bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold">
          Jelajahi Layanan Kami
        </a>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <FaArrowDown size={30} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
