import { IBooking } from './booking.interface';

describe('IBooking', () => {
  let mockedBooking: IBooking;

  beforeEach(async () => {
    mockedBooking = {
      id: 1,
      userId: 1,
      tourId: 1,
      description: 'mockedBookingDescription',
      issued: new Date(),
      status: 1,
      userScore: 1,
      guideScore: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedBooking).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedBooking).toHaveProperty('id', mockedBooking.id);
    expect(mockedBooking).toHaveProperty('userId', mockedBooking.userId);
    expect(mockedBooking).toHaveProperty('tourId', mockedBooking.tourId);
    expect(mockedBooking).toHaveProperty('issued', mockedBooking.issued);
    expect(mockedBooking).toHaveProperty('status', mockedBooking.status);
    expect(mockedBooking).toHaveProperty('userScore', mockedBooking.userScore);
    expect(mockedBooking).toHaveProperty(
      'guideScore',
      mockedBooking.guideScore,
    );
    expect(mockedBooking).toHaveProperty('createdAt', mockedBooking.createdAt);
    expect(mockedBooking).toHaveProperty('updatedAt', mockedBooking.updatedAt);
  });
});
