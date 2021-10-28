import { ITour } from './tour.interface';

describe('ITour', () => {
  let mockedTour: ITour;

  beforeEach(async () => {
    mockedTour = {
      id: 1,
      guideId: 1,
      title: 'mockedTourTitle',
      description: 'mockedTourDescription',
      photo: 'mockedTourPhoto',
      cityId: 1,
      price: 1,
      isGrouped: false,
      isPublic: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedTour).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedTour).toHaveProperty('id', mockedTour.id);
    expect(mockedTour).toHaveProperty('guideId', mockedTour.guideId);
    expect(mockedTour).toHaveProperty('title', mockedTour.title);
    expect(mockedTour).toHaveProperty('description', mockedTour.description);
    expect(mockedTour).toHaveProperty('photo', mockedTour.photo);
    expect(mockedTour).toHaveProperty('cityId', mockedTour.cityId);
    expect(mockedTour).toHaveProperty('price', mockedTour.price);
    expect(mockedTour).toHaveProperty('isGrouped', mockedTour.isGrouped);
    expect(mockedTour).toHaveProperty('isPublic', mockedTour.isPublic);
    expect(mockedTour).toHaveProperty('createdAt', mockedTour.createdAt);
    expect(mockedTour).toHaveProperty('updatedAt', mockedTour.updatedAt);
  });
});
