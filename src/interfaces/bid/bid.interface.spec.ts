import { IBid } from './bid.interface';

describe('IBid', () => {
  let mockedBid: IBid;

  beforeEach(async () => {
    mockedBid = {
      id: 1,
      tourId: 1,
      requestId: 1,
      description: 'mockedBidDescription',
      issued: new Date(),
      price: 1,
      status: 1,
      userScore: 1,
      guideScore: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedBid).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedBid).toHaveProperty('id', mockedBid.id);
    expect(mockedBid).toHaveProperty('tourId', mockedBid.tourId);
    expect(mockedBid).toHaveProperty('requestId', mockedBid.requestId);
    expect(mockedBid).toHaveProperty('description', mockedBid.description);
    expect(mockedBid).toHaveProperty('issued', mockedBid.issued);
    expect(mockedBid).toHaveProperty('price', mockedBid.price);
    expect(mockedBid).toHaveProperty('status', mockedBid.status);
    expect(mockedBid).toHaveProperty('userScore', mockedBid.userScore);
    expect(mockedBid).toHaveProperty('guideScore', mockedBid.guideScore);
    expect(mockedBid).toHaveProperty('createdAt', mockedBid.createdAt);
    expect(mockedBid).toHaveProperty('updatedAt', mockedBid.updatedAt);
  });
});
