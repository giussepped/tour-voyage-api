import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert(
    'Countries',
    [
      {
        name: 'Argentina',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brasil',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'United Kingdom',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'España',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'France',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Italia',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Uruguay',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Countries', null, {});
