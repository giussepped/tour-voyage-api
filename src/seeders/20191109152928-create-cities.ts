import { Sequelize, QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert(
    'Cities',
    [
      {
        name: 'Buenos Aires',
        photo: 'buenos_aires.png',
        countryId: 1,
        location: Sequelize.fn('POINT', -34.603722, -58.381592),
        latitude: '-34.603722',
        longitude: '-58.381592',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rosario',
        photo: 'rosario.png',
        countryId: 1,
        location: Sequelize.fn('POINT', -32.950001, -60.666668),
        latitude: '-32.950001',
        longitude: '-60.666668',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cordoba',
        photo: 'cordoba.png',
        countryId: 1,
        location: Sequelize.fn('POINT', -31.416668, -64.183334),
        latitude: '-31.416668',
        longitude: '-64.183334',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rio de Janeiro',
        photo: 'rio_de_janeiro.png',
        countryId: 2,
        location: Sequelize.fn('POINT', -22.908333, -43.196388),
        latitude: '-22.908333',
        longitude: '-43.196388',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Porto Alegre',
        photo: 'porto_alegre.png',
        countryId: 2,
        location: Sequelize.fn('POINT', -30.033056, -51.23),
        latitude: '-30.033056',
        longitude: '-51.230000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brasilia',
        photo: 'brasilia.png',
        countryId: 2,
        location: Sequelize.fn('POINT', -15.793889, -47.882778),
        latitude: '-15.793889',
        longitude: '-47.882778',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'London',
        photo: 'london.png',
        countryId: 3,
        location: Sequelize.fn('POINT', 51.509865, -0.118092),
        latitude: '51.509865',
        longitude: '-0.118092',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Liverpool',
        photo: 'liverpool.png',
        countryId: 3,
        location: Sequelize.fn('POINT', 53.400002, -2.983333),
        latitude: '53.400002',
        longitude: '-2.983333',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Belfast',
        photo: 'belfast.png',
        countryId: 3,
        location: Sequelize.fn('POINT', 54.607868, -5.926437),
        latitude: '54.607868',
        longitude: '-5.926437',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Madrid',
        photo: 'madrid.png',
        countryId: 4,
        location: Sequelize.fn('POINT', 40.416775, -3.70379),
        latitude: '40.416775',
        longitude: '-3.703790',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Barcelona',
        photo: 'barcelona.png',
        countryId: 4,
        location: Sequelize.fn('POINT', 41.390205, 2.154007),
        latitude: '41.390205',
        longitude: '2.154007',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paris',
        photo: 'paris.png',
        countryId: 5,
        location: Sequelize.fn('POINT', 48.864716, 2.349014),
        latitude: '48.864716',
        longitude: '2.349014',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nice',
        photo: 'nice.png',
        countryId: 5,
        location: Sequelize.fn('POINT', 43.675819, 7.289429),
        latitude: '43.675819',
        longitude: '7.289429',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Toulouse',
        photo: 'Toulouse.png',
        countryId: 5,
        location: Sequelize.fn('POINT', 43.6045, 1.444),
        latitude: '43.604500',
        longitude: '1.444000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roma',
        photo: 'roma.png',
        countryId: 6,
        location: Sequelize.fn('POINT', 41.902782, 12.496366),
        latitude: '41.902782',
        longitude: '12.496366',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Florencia',
        photo: 'florencia.png',
        countryId: 6,
        location: Sequelize.fn('POINT', 43.769562, 11.255814),
        latitude: '43.769562',
        longitude: '11.255814',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Milano',
        photo: 'milano.png',
        countryId: 6,
        location: Sequelize.fn('POINT', 45.464664, 9.18854),
        latitude: '45.464664',
        longitude: '9.188540',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Napoli',
        photo: 'napoli.png',
        countryId: 6,
        location: Sequelize.fn('POINT', 40.833333, 14.25),
        latitude: '40.833333',
        longitude: '14.250000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Montevideo',
        photo: 'montevideo.png',
        countryId: 7,
        location: Sequelize.fn('POINT', -34.901112, -56.164532),
        latitude: '-34.901112',
        longitude: '-56.164532',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Punta del Este',
        photo: 'punta_del_este.png',
        countryId: 7,
        location: Sequelize.fn('POINT', -34.9290325, -54.9648254),
        latitude: '-34.9290325',
        longitude: '-54.9648254',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Colonia',
        photo: 'colonia.png',
        countryId: 7,
        location: Sequelize.fn('POINT', -34.1161125, -58.2724969),
        latitude: '-34.1161125',
        longitude: '-58.2724969',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('Cities', null, {});
