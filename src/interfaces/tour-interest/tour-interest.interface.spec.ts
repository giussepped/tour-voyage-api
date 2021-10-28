import { ITourInterest } from './tour-interest.interface';

describe('ITourInterest', () => {
  let mockedTourInterest: ITourInterest;

  beforeEach(async () => {
    mockedTourInterest = {
      id: 1,
      tourId: 1,
      interestId: 1,
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedTourInterest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedTourInterest).toHaveProperty('id', mockedTourInterest.id);
    expect(mockedTourInterest).toHaveProperty(
      'tourId',
      mockedTourInterest.tourId,
    );
    expect(mockedTourInterest).toHaveProperty(
      'interestId',
      mockedTourInterest.interestId,
    );
  });
});
