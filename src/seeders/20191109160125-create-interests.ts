import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert(
    'Interests',
    [
      {
        name: 'Culture',
        description: 'Culture',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        description: 'Sports',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gastronomy',
        description: 'Gastronomy',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Landscapes',
        description: 'Landscapes',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nature',
        description: 'Nature',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'History',
        description: 'History',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Night',
        description: 'Night',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Walks',
        description: 'Walks',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Interests', null, {});
