import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // Ganti dengan host database kamu
  database: 'db_rumah_sakit', // Ganti dengan nama database kamu
  username: 'root', // Kosongkan jika tidak ada username
  password: '', // Kosongkan jika tidak ada password
  logging: false, // Matikan logging jika tidak diperlukan
});

export default sequelize;
