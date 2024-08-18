// src/app/features/dashboard/_sections/notifications/Notifications.tsx
import React from 'react';

// Contoh data notifikasi
const notifications = [
  { id: 1, message: 'Pasien A membutuhkan perhatian segera!', type: 'alert' },
  { id: 2, message: 'Stok obat XYZ hampir habis.', type: 'warning' },
  { id: 3, message: 'Jadwal dokter untuk minggu depan telah diperbarui.', type: 'info' },
];

const Notifications: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Notifikasi Penting</h2>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className={`p-2 rounded-lg ${notification.type === 'alert' ? 'bg-red-100 text-red-800' : notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
