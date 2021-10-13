import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('GuidesRequests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    guideId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Guides',
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
  queryInterface.dropTable('GuidesRequests');
