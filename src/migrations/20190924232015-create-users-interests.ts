import { QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.createTable('UsersInterests', {
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
    interestId: {
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Interests',
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
  queryInterface.dropTable('UsersInterests');
