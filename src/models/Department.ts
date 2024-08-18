import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/db/db'; // Import konfigurasi koneksi database

interface DepartmentAttributes {
  id?: number;
  name: string;
  description?: string;
  created_at?: Date;
}

class Department extends Model<DepartmentAttributes> implements DepartmentAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public created_at!: Date;
}

Department.init(
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Departments',
    timestamps: false,
  }
);

export default Department;
