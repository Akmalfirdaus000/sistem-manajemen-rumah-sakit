// src/app/about/TeamSection.tsx
import { FC } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "/images/john-doe.jpg"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/jane-smith.jpg"
  },
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    image: "/images/alice-johnson.jpg"
  },
  {
    name: "Bob Brown",
    role: "Designer",
    image: "/images/bob-brown.jpg"
  }
];

const TeamSection: FC = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Tim Kami</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
            <div className="relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
