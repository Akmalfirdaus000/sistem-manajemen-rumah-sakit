// Model Appointment
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface AppointmentAttributes {
  id?: number;
  patient_id: number;
  doctor_id: number;
  appointment_date: Date;
  status: 'scheduled' | 'completed' | 'canceled';
  created_at?: Date;
}

class Appointment extends Model<AppointmentAttributes> implements AppointmentAttributes {
  public id!: number;
  public patient_id!: number;
  public doctor_id!: number;
  public appointment_date!: Date;
  public status!: 'scheduled' | 'completed' | 'canceled';
  public created_at!: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    appointment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Appointments',
    timestamps: false,
  }
);

export default Appointment;
