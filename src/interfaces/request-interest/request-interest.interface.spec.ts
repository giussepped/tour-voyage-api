import { IRequestInterest } from './request-interest.interface';

describe('IRequestInterest', () => {
  let mockedRequestInterest: IRequestInterest;

  beforeEach(async () => {
    mockedRequestInterest = {
      id: 1,
      requestId: 1,
      interestId: 1,
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedRequestInterest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedRequestInterest).toHaveProperty(
      'id',
      mockedRequestInterest.id,
    );
    expect(mockedRequestInterest).toHaveProperty(
      'requestId',
      mockedRequestInterest.requestId,
    );
    expect(mockedRequestInterest).toHaveProperty(
      'interestId',
      mockedRequestInterest.interestId,
    );
  });
});
