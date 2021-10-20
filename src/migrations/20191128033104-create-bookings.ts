import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('Bookings', {
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
    tourId: {
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Tours',
        key: 'id',
      },
    },
    description: {
      type: DataType.STRING,
      allowNull: true,
    },
    issued: {
      type: DataType.DATE,
      allowNull: false,
    },
    status: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    userScore: {
      type: DataType.DOUBLE,
      defaultValue: 0,
      allowNull: false,
    },
    guideScore: {
      type: DataType.DOUBLE,
      defaultValue: 0,
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
  queryInterface.dropTable('Bookings');
