// src/components/sidebar/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { FaHome, FaUsers, FaBed, FaUserMd, FaBox, FaFileInvoiceDollar, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 max-h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
        Sistem Manajemen Rumah Sakit
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaHome className="mr-3 text-xl" /> Dashboard
              </button>
            </Link>
          </li>
          <li>
            <Link href="/patients" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaUsers className="mr-3 text-xl" /> Manajemen Pasien
              </button>
            </Link>
          </li>
          <li>
            <Link href="/admissions" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaBed className="mr-3 text-xl" /> Manajemen Rawat Inap
              </button>
            </Link>
          </li>
          <li>
            <Link href="/doctor-staff" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaUserMd className="mr-3 text-xl" /> Manajemen Dokter dan Staf
              </button>
            </Link>
          </li>
          <li>
            <Link href="/inventory" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaBox className="mr-3 text-xl" /> Manajemen Inventaris
              </button>
            </Link>
          </li>
          <li>
            <Link href="/billing" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaFileInvoiceDollar className="mr-3 text-xl" /> Billing dan Pembayaran
              </button>
            </Link>
          </li>
          <li>
            <Link href="/reports" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaChartLine className="mr-3 text-xl" /> Pelaporan dan Analisis
              </button>
            </Link>
          </li>
          <li>
            <Link href="/security" passHref>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 text-left">
                <FaShieldAlt className="mr-3 text-xl" /> Sistem Keamanan
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
