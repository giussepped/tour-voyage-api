import { IGuideCity } from './guide-city.interface';

describe('IGuideCity', () => {
  let mockedGuideCity: IGuideCity;

  beforeEach(async () => {
    mockedGuideCity = {
      id: 1,
      guideId: 1,
      cityId: 1,
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedGuideCity).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedGuideCity).toHaveProperty('id', mockedGuideCity.id);
    expect(mockedGuideCity).toHaveProperty('guideId', mockedGuideCity.guideId);
    expect(mockedGuideCity).toHaveProperty('cityId', mockedGuideCity.cityId);
  });
});
