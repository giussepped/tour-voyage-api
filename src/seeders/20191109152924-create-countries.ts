import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert(
    'Countries',
    [
      {
        name: 'Argentina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'United Kingdom',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'España',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'France',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Italia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Uruguay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Countries', null, {});
