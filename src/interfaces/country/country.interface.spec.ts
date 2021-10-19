import { ICountry } from './country.interface';

describe('ICountry', () => {
  let mockedCountry: ICountry;

  beforeEach(async () => {
    mockedCountry = {
      id: 1,
      name: 'mockedCountryName',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedCountry).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedCountry).toHaveProperty('id', mockedCountry.id);
    expect(mockedCountry).toHaveProperty('name', mockedCountry.name);
    expect(mockedCountry).toHaveProperty('isActive', mockedCountry.isActive);
    expect(mockedCountry).toHaveProperty('createdAt', mockedCountry.createdAt);
    expect(mockedCountry).toHaveProperty('updatedAt', mockedCountry.updatedAt);
  });
});
