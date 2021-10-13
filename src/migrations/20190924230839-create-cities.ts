import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, DataTypes: any) =>
  queryInterface.createTable('Cities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    photo: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    countryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
    location: {
      allowNull: false,
      type: DataTypes.GEOMETRY,
    },
    latitude: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    longitude: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isActive: {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN,
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
  queryInterface.dropTable('Cities');
