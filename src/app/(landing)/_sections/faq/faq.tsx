// src/app/(landing)/_sections/faq/FAQSection.tsx
'use client'
import { FC, useState } from 'react';

const faqs = [
  {
    question: 'Apa itu layanan kami?',
    answer: 'Kami menyediakan berbagai solusi teknologi dan layanan profesional untuk memenuhi kebutuhan bisnis Anda, termasuk pengembangan perangkat lunak, layanan konsultasi, dan dukungan teknis.'
  },
  {
    question: 'Bagaimana cara menghubungi tim dukungan?',
    answer: 'Anda dapat menghubungi tim dukungan kami melalui formulir kontak di situs web kami, atau melalui email di support@example.com. Kami juga tersedia melalui telepon selama jam kerja.'
  },
  {
    question: 'Apakah ada biaya tersembunyi?',
    answer: 'Tidak, kami transparan mengenai semua biaya yang terkait dengan layanan kami. Semua biaya akan diinformasikan sebelumnya dan tidak ada biaya tersembunyi.'
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk mendapatkan tanggapan?',
    answer: 'Kami berusaha untuk memberikan tanggapan dalam waktu 24 jam untuk semua permintaan yang masuk. Untuk masalah mendesak, kami akan mencoba memberikan tanggapan secepat mungkin.'
  }
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Pertanyaan yang Sering Diajukan</h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left bg-white p-4 rounded-lg shadow-lg focus:outline-none">
              <h3 className="text-xl font-semibold text-blue-600">
                {faq.question}
              </h3>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white rounded-lg shadow-lg mt-2">
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
