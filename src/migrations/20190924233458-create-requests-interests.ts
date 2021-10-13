import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('RequestsInterests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    interestId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Interests',
        key: 'id',
      },
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
  queryInterface.dropTable('RequestsInterests');
