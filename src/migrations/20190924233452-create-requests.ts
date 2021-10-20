import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('Requests', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    from: {
      type: DataType.DATE,
      allowNull: false,
    },
    to: {
      type: DataType.DATE,
      allowNull: false,
    },
    cityId: {
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cities',
        key: 'id',
      },
    },
    isGrouped: {
      type: DataType.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    budget: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataType.INTEGER,
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
  queryInterface.dropTable('Requests');
