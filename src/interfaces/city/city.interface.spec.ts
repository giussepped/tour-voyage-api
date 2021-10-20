import { ICity } from './city.interface';

describe('ICity', () => {
  let mockedCity: ICity;

  beforeEach(async () => {
    mockedCity = {
      id: 1,
      name: 'mockedCityName',
      photo: 'mockedCityPhoto',
      countryId: 1,
      location: 'mockedCityLocation',
      latitude: 'mockedCityLatitude',
      longitude: 'mockedCityLongitude',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedCity).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedCity).toHaveProperty('id', mockedCity.id);
    expect(mockedCity).toHaveProperty('name', mockedCity.name);
    expect(mockedCity).toHaveProperty('photo', mockedCity.photo);
    expect(mockedCity).toHaveProperty('countryId', mockedCity.countryId);
    expect(mockedCity).toHaveProperty('location', mockedCity.location);
    expect(mockedCity).toHaveProperty('latitude', mockedCity.latitude);
    expect(mockedCity).toHaveProperty('longitude', mockedCity.longitude);
    expect(mockedCity).toHaveProperty('createdAt', mockedCity.createdAt);
    expect(mockedCity).toHaveProperty('updatedAt', mockedCity.updatedAt);
  });
});
