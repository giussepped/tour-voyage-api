import { IInterest } from './interest.interface';

describe('IInterest', () => {
  let mockedInterest: IInterest;

  beforeEach(async () => {
    mockedInterest = {
      id: 1,
      name: 'mockedInterestName',
      description: 'mockedInterestDescription',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedInterest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedInterest).toHaveProperty('id', mockedInterest.id);
    expect(mockedInterest).toHaveProperty('name', mockedInterest.name);
    expect(mockedInterest).toHaveProperty(
      'description',
      mockedInterest.description,
    );
    expect(mockedInterest).toHaveProperty('isActive', mockedInterest.isActive);
    expect(mockedInterest).toHaveProperty(
      'createdAt',
      mockedInterest.createdAt,
    );
    expect(mockedInterest).toHaveProperty(
      'updatedAt',
      mockedInterest.updatedAt,
    );
  });
});
