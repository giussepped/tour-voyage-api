import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert(
    'Interests',
    [
      {
        name: 'Culture',
        description: 'Culture',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        description: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gastronomy',
        description: 'Gastronomy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Landscapes',
        description: 'Landscapes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nature',
        description: 'Nature',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'History',
        description: 'History',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Night',
        description: 'Night',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Walks',
        description: 'Walks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Interests', null, {});
