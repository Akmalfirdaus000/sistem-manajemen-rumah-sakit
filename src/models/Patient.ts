// Model Patient
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface PatientAttributes {
  id?: number;
  name: string;
  date_of_birth: Date;
  address?: string;
  phone?: string;
  email?: string;
  created_at?: Date;
}

class Patient extends Model<PatientAttributes> implements PatientAttributes {
  public id!: number;
  public name!: string;
  public date_of_birth!: Date;
  public address?: string;
  public phone?: string;
  public email?: string;
  public created_at!: Date;
}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING(100),
      validate: {
        isEmail: true,
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Patients',
    timestamps: false,
  }
);

export default Patient;
