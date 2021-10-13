import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('ToursPhotos', {
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
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
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
  queryInterface.dropTable('ToursPhotos');
