import sequelize from './db';
import './models/User';  // Impor model-model yang sudah dibuat
import './models/Patient';
import './models/Doctor';
import './models/Appointment';
import './models/Invoice';
import './models/Department';
import './models/Medicine';
import './models/Inventory';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Mengubah `alter: true` untuk sinkronisasi perubahan ke tabel
    console.log('Database telah disinkronisasi');
  } catch (error) {
    console.error('Gagal melakukan sinkronisasi database:', error);
  }
};

syncDatabase();
