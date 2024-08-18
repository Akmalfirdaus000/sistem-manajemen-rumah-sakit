// src/app/about/HeroSection.tsx
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        We are committed to delivering the best services and solutions to our clients. Our team consists of highly skilled professionals who are passionate about their work and dedicated to achieving excellence in every project.
      </p>
    </section>
  );
};

export default HeroSection;
