import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('Bids', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tourId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Tours',
        key: 'id',
      },
    },
    requestId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Requests',
        key: 'id',
      },
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    issued: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('Bids');
