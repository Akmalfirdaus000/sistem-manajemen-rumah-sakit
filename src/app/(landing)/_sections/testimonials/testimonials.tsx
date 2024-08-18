// components/testimonials/Testimonials.tsx
import { FC } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  feedback: string;
  role: string;
  photo: string; // Path to the photo
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'Excellent care and service. The staff is very professional and attentive.',
    role: 'Patient',
    photo: '/images/john-doe.jpg', // Path to the photo in public/images
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'The appointment scheduling system is very efficient and user-friendly.',
    role: 'Patient',
    photo: '/images/jane-smith.jpg', // Path to the photo in public/images
  },
  {
    id: 3,
    name: 'Dr. Sarah Lee',
    feedback: 'A reliable system for managing patient records. Highly recommended.',
    role: 'Doctor',
    photo: '/images/dr-sarah-lee.jpg', // Path to the photo in public/images
  }
];

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
              <Image
                src={testimonial.photo}
                alt={`${testimonial.name}'s photo`}
                width={96} // Adjust the width as needed
                height={96} // Adjust the height as needed
                className="rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 mb-4">
                &quot;{testimonial.feedback}&quot;
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
