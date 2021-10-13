import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('Guides', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    bio: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    photo: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    token: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('Guides');
