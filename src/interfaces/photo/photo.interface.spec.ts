import { IPhoto } from './photo.interface';

describe('IPhoto', () => {
  let mockedPhoto: IPhoto;

  beforeEach(async () => {
    mockedPhoto = {
      id: 1,
      tourId: 1,
      url: 'mockedPhotoUrl',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedPhoto).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedPhoto).toHaveProperty('id', mockedPhoto.id);
    expect(mockedPhoto).toHaveProperty('tourId', mockedPhoto.tourId);
    expect(mockedPhoto).toHaveProperty('url', mockedPhoto.url);
    expect(mockedPhoto).toHaveProperty('createdAt', mockedPhoto.createdAt);
    expect(mockedPhoto).toHaveProperty('updatedAt', mockedPhoto.updatedAt);
  });
});
