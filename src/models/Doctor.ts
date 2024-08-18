// Model Doctor
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface DoctorAttributes {
  id?: number;
  name: string;
  specialty?: string;
  phone?: string;
  email?: string;
  created_at?: Date;
}

class Doctor extends Model<DoctorAttributes> implements DoctorAttributes {
  public id!: number;
  public name!: string;
  public specialty?: string;
  public phone?: string;
  public email?: string;
  public created_at!: Date;
}

Doctor.init(
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
    specialty: {
      type: DataTypes.STRING(100),
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
    tableName: 'Doctors',
    timestamps: false,
  }
);

export default Doctor;
