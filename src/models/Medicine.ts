// Model Medicine
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface MedicineAttributes {
  id?: number;
  name: string;
  description?: string;
  quantity: number;
  price?: number;
  created_at?: Date;
}

class Medicine extends Model<MedicineAttributes> implements MedicineAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public quantity!: number;
  public price?: number;
  public created_at!: Date;
}

Medicine.init(
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
    description: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Medicines',
    timestamps: false,
  }
);

export default Medicine;
