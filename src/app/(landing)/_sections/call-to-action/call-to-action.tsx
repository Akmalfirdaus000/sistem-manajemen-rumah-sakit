// components/callToAction/CallToAction.tsx
import { FC } from 'react';

const CallToAction: FC = () => {
  return (
    <section id="cta" className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Care?</h2>
        <p className="mb-8">Contact us today to schedule your appointment or learn more about our services.</p>
        <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">Get in Touch</a>
      </div>
    </section>
  );
};

export default CallToAction;
