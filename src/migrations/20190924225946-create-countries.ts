import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('Countries', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
    },
    createdAt: {
      type: DataType.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataType.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataType.DATE,
      allowNull: true,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('Countries');
