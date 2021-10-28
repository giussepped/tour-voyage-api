import { IGuideRequest } from './guide-request.interface';

describe('IGuideRequest', () => {
  let mockedGuideRequest: IGuideRequest;

  beforeEach(async () => {
    mockedGuideRequest = {
      id: 1,
      guideId: 1,
      requestId: 1,
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedGuideRequest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedGuideRequest).toHaveProperty('id', mockedGuideRequest.id);
    expect(mockedGuideRequest).toHaveProperty(
      'guideId',
      mockedGuideRequest.guideId,
    );
    expect(mockedGuideRequest).toHaveProperty(
      'requestId',
      mockedGuideRequest.requestId,
    );
  });
});
