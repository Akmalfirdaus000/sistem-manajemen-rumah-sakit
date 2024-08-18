// Model Invoice
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface InvoiceAttributes {
  id?: number;
  patient_id: number;
  amount: number;
  status: 'paid' | 'unpaid';
  issued_at?: Date;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: number;
  public patient_id!: number;
  public amount!: number;
  public status!: 'paid' | 'unpaid';
  public issued_at!: Date;
}

Invoice.init(
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
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('paid', 'unpaid'),
      allowNull: false,
    },
    issued_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Invoices',
    timestamps: false,
  }
);

export default Invoice;
