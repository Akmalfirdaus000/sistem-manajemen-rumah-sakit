// src/app/about/TestimonialsSection.tsx
import { FC } from 'react';

const testimonials = [
  { quote: "Tim dari Sistem Manajemen Rumah Sakit memberikan layanan yang sangat baik. Perhatian mereka terhadap detail dan dedikasi sangat luar biasa. Sangat direkomendasikan!", name: "Michael Brown", image: "/images/testimonial-1.jpg" },
  { quote: "Layanan yang luar biasa dengan hasil yang hebat. Tim ini profesional dan mudah diajak bekerja sama.", name: "Emily Davis", image: "/images/testimonial-2.jpg" }
];

const TestimonialsSection: FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">Testimoni Klien</h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0">
            <p className="text-gray-700 mb-4">{`"${testimonial.quote}"`}</p>
            <div className="flex items-center">
           
              <div>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
