// src/components/navbar/Navbar.tsx
import Link from 'next/link';
import { FC } from 'react';
import { FaHome, FaUser, FaSignInAlt } from 'react-icons/fa';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Rumah Sakit
        </Link>

        {/* Menu */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="flex items-center hover:text-blue-200 transition-colors">
              <span className="icon-style">
                <FaHome />
              </span>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center hover:text-blue-200 transition-colors">
              <span className="icon-style">
                <FaUser />
              </span>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex items-center hover:text-blue-200 transition-colors">
              <span className="icon-style">
                <FaSignInAlt />
              </span>
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center hover:text-blue-200 transition-colors">
              <span className="icon-style">
                <FaSignInAlt />
              </span>
              Kontak
            </Link>
          </li>
          <li>
            <Link href="/register" className="flex items-center hover:text-blue-200 transition-colors">
              <span className="icon-style">
                <FaSignInAlt />
              </span>
              Daftar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
