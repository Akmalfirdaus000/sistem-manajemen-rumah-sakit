// src/components/contact/Contact.tsx
'use client'; // Menandai komponen ini sebagai Client Component

import { FC } from 'react';
// import { ContactSection } from '..';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Hubungi Kami</h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl">
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami. 
          Kami siap membantu Anda dengan segala kebutuhan kesehatan Anda.
        </p>
        <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Formulir Kontak</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Email Anda"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={4}
                  placeholder="Pesan Anda"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Informasi Kontak</h3>
            <p className="text-gray-700 mb-4">
              <strong>Alamat:</strong> Jl. Contoh No. 123, Kota, Negara
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Telepon:</strong> +62 123 456 789
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@rumahsakit.com
            </p>
            <p className="text-gray-700">
              <strong>Jam Operasional:</strong> Senin - Jumat, 08:00 - 17:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
