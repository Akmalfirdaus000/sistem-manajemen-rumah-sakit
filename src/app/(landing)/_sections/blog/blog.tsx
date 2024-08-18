// components/blog/Blog.tsx
import { FC } from 'react';

const newsArticles = [
  {
    title: 'Peluncuran Produk Terbaru Kami',
    date: '20 Agustus 2024',
    description: 'Kami dengan bangga memperkenalkan produk terbaru kami yang dirancang untuk meningkatkan efisiensi dan produktivitas Anda. Temukan fitur-fitur unggulan dan manfaat dari produk baru kami.',
    link: '#'
  },
  {
    title: 'Suksesnya Acara Tahunan Kami',
    date: '10 Agustus 2024',
    description: 'Acara tahunan kami baru saja berlangsung dengan sukses. Terima kasih kepada semua peserta dan sponsor yang telah mendukung acara ini. Lihat foto dan sorotan dari acara tersebut di sini.',
    link: '#'
  },
  {
    title: 'Pembaruan Terbaru di Sistem Kami',
    date: '1 Agustus 2024',
    description: 'Kami telah meluncurkan pembaruan terbaru pada sistem kami, termasuk fitur baru dan peningkatan performa. Baca lebih lanjut tentang apa yang baru dan bagaimana ini akan mempengaruhi Anda.',
    link: '#'
  }
];


const Blog: FC = () => {
  return (
     <section id="latest-news" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Berita Terbaru</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((news, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{news.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{news.date}</p>
              <p className="text-gray-700 mb-4">{news.description}</p>
              <a href={news.link} className="text-blue-600 hover:underline">
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
