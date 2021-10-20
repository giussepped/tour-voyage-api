import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('Guides', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    bio: {
      type: DataType.STRING,
      allowNull: true,
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    photo: {
      type: DataType.STRING,
      allowNull: true,
    },
    status: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataType.STRING,
      allowNull: true,
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
  queryInterface.dropTable('Guides');
