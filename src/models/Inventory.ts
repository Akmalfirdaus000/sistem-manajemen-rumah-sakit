// Model Inventory
import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface InventoryAttributes {
  id?: number;
  medicine_id: number;
  quantity: number;
  received_at?: Date;
}

class Inventory extends Model<InventoryAttributes> implements InventoryAttributes {
  public id!: number;
  public medicine_id!: number;
  public quantity!: number;
  public received_at!: Date;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    medicine_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    received_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Inventory',
    timestamps: false,
  }
);

export default Inventory;
