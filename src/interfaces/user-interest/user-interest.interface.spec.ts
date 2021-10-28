import { IUserInterest } from './user-interest.interface';

describe('IUserInterest', () => {
  let mockedUserInterest: IUserInterest;

  beforeEach(async () => {
    mockedUserInterest = {
      id: 1,
      userId: 1,
      interestId: 1,
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedUserInterest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedUserInterest).toHaveProperty('id', mockedUserInterest.id);
    expect(mockedUserInterest).toHaveProperty(
      'userId',
      mockedUserInterest.userId,
    );
    expect(mockedUserInterest).toHaveProperty(
      'interestId',
      mockedUserInterest.interestId,
    );
  });
});
