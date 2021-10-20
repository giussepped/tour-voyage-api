import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('GuidesCities', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    guideId: {
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Guides',
        key: 'id',
      },
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
    createdAt: {
      type: DataType.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataType.DATE,
      allowNull: false,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('GuidesCities');
