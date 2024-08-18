// components/contact/ContactForm.tsx
import { FC } from 'react';

type ContactMethod = {
  id: number;
  type: string;
  detail: string;
};

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    type: 'Email',
    detail: 'info@example.com',
  },
  {
    id: 2,
    type: 'Phone',
    detail: '+1234567890',
  },
  {
    id: 3,
    type: 'Address',
    detail: '123 Main Street, City, Country',
  },
];

const ContactForm: FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactMethods.map(method => (
                <div key={method.id} className="mb-4">
                  <h4 className="text-xl font-medium text-blue-600">{method.type}</h4>
                  <p className="text-gray-700">{method.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
